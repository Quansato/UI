Ext.define("Admin.view.cwidget.dsDMWidgetModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-widget",

    stores: {
        store: { type: "sdmwidget1" }
    }
});


Ext.define("Admin.view.cwidget.CustomDashboard", {
    extend: "Ext.panel.Panel",
    alias: "widget.customdashboard",
    // configss: ["Ek.view.configs.dsDMYeuCauController", "Ek.view.configs.dsDMYeuCauModel"],
    controller: "configs-dsdmwidget",
    ui: "light",
    layout: 'responsivecolumn',
    tools: [{
        xtype: 'button',
        ui: 'blue',
        style: {
            borderRadius: '3px',
            marginRight: '2px'
        },
        listeners: {
            click: 'onSavePosition'
        },
        iconCls: 'x-fa fa-save'
    }, {
        xtype: 'button',
        ui: 'soft-red',
        style: {
            borderRadius: '3px',
        },
        listeners: {
            click: 'onChangeEv'
        },
        iconCls: 'x-fa fa-cog'
    }],
    defaults: {
        style: 'border-radius:10px;border: .5px solid #BBBBBB;cursor:pointer',
    },
    items: [{
        xtype: 'widget-text',
        userCls: 'big-25 small-50 shadow',
        itemId: 'p0',
        cls: 'drag',
        viewModel: {
            type: 'configs-widget',
            data: {
                title: 'OVERDUE SCHEDULED MAINTENANCE',
                subTitle: 'All Assets & All Groups',
                content: '250',
                subContent: 'Offline in 6 hour',
                color: 'green'
            },
        },

    }, {
        xtype: 'widget-text',
        userCls: 'big-25 small-50 shadow',
        itemId: 'p1',
        viewModel: {
            type: 'configs-widget',
            data: {
                title: 'OVERDUE SCHEDULED MAINTENANCE',
                subTitle: 'All Assets & All Groups',
                content: '32%',
                subContent: 'Offline in 6 hour',
                color: 'blue'
            },
        },
    }, {
        xtype: 'widget-text',
        userCls: 'big-25 small-50 shadow',
        itemId: 'p2',
        viewModel: {
            type: 'configs-widget',
            data: {
                title: 'OVERDUE SCHEDULED MAINTENANCE',
                subTitle: 'All Assets & All Groups',
                content: '50%',
                subContent: 'Offline in 6 hour',
                color: ''
            },
        },
    }, {
        xtype: 'widget-text',
        userCls: 'big-25 small-50 shadow',
        itemId: 'p3',
        viewModel: {
            type: 'configs-widget',
            data: {
                title: 'OVERDUE SCHEDULED MAINTENANCE',
                subTitle: 'All Assets & All Groups',
                content: 366,
                subContent: 'Offline in 6 hour',
                color: 'green'
            },
        },
    }, {
        xtype: 'widget-chart',
        userCls: 'big-50 small-100',
        itemId: 'p4',
        height: 360,
        viewModel: {
            type: 'configs-widget',
            data: {
                title: 'OPEN WORK ORDERS',
                subTitle: 'All Assets & All Groups',
                content: 55,
                maxContent: 100,
                subContent: 'Offline in 6 hour',
                width: 230,
                height: 230,
                color: 'black'
            },
        },

    }, {
        xtype: 'widget-chart',
        userCls: 'big-25 small-50',
        itemId: 'p5',
        viewModel: {
            type: 'configs-widget',
            data: {
                title: 'OPEN WORK ORDERS',
                subTitle: 'All Assets & All Groups',
                content: 6,
                maxContent: 10,
                subContent: 'Offline in 6 hour',
                width: 100,
                height: 100,
                color: 'red'
            },
        },
    }, {
        xtype: 'widget-chart',
        userCls: 'big-25 small-50',
        itemId: 'p6',
        viewModel: {
            type: 'configs-widget',
            data: {
                title: 'OPEN WORK ORDERS',
                subTitle: 'All Assets & All Groups',
                content: 6,
                maxContent: 10,
                subContent: 'Offline in 6 hour',
                width: 100,
                height: 100,
                color: 'black'
            },
        },
    }, {
        xtype: 'widget-chart',
        userCls: 'big-25 small-50',
        itemId: 'p7',
        viewModel: {
            type: 'configs-widget',
            data: {
                title: 'OPEN WORK ORDERS',
                subTitle: 'All Assets & All Groups',
                content: 1,
                maxContent: 20,
                subContent: 'Offline in 6 hour',
                width: 100,
                height: 100,
                color: 'black'
            },
        },
    }, {
        xtype: 'widget-chart',
        userCls: 'big-25 small-50',
        itemId: 'p8',
        viewModel: {
            type: 'configs-widget',
            data: {
                title: 'OPEN WORK ORDERS',
                subTitle: 'All Assets & All Groups',
                content: 6,
                maxContent: 10,
                subContent: 'Offline in 6 hour',
                width: 100,
                height: 100,
                color: 'black'
            },
        },
    }],

    
});

Ext.define("Admin.view.widget.dsDMWidgetController", {
    extend: "Ext.app.ViewController",
    alias: "controller.configs-dsdmwidget",
    storeInfo: null,
    refs: null,
    init: function () {
        var me = this;
        me.callParent(arguments);
    },
    onAfterrender: function () {
        var me = this;
        me.afterRender();
        /* me.refs = me.getReferences();
         me.storeInfo = me.getViewModel().storeInfo;*/
        //me.onSearch();
    },

    specialkey: function (field, e) {
        var me = this;
        if (e.getKey() == e.ENTER) {
            me.onSearch();
        }
    },

    onSearch: function () {
        var me = this;
        var store = me.storeInfo.store;
        console.log(this.getView().getReferences('formdate').startdate.getSubmitValue())
        var url = 'api/yeucau';
        store.proxy.api.read = url;
        store.load({
            params: {
                /* skipCount: 0,
                 maxResultCount: store.pageSize,*/
            },
            scope: this,
            callback: function (records, operation, success) {
                if (records == null) {
                    store.removeAll();
                }
            }
        });
    },

    onAdd: function () {
        var me = this;
        var record = Ext.create("Ek.model.mDMYeuCau", { maYeuCau: 0 });
        Ext.create("Ek.view.configs.cnDMYeuCau", {
            title: 'Thêm mới',
            viewModel: {
                data: {
                    record: record,
                    fnSauKhiSave: function () {
                        me.onSearch();
                    }

                }
            }
        }).show();
    },

    onJknob: function () {
        $(function () {
            $(".dial").knob();
        });
    },

    onUpdate: function () {
        var me = this;
        var record = me.getViewModel().get("rSelected");
        Ext.create("Ek.view.configs.cnDMYeuCau", {
            title: "Cập nhật",
            viewModel: {
                data: {
                    record: record,
                    fnSauKhiSave: function () {
                        me.onSearch();
                    }
                }
            }
        }).show();
    },
    onTrans: function () {
        var me = this;
        var record = me.getViewModel().get("rSelected");
        Ext.create("Ek.view.configs.cnDMChuyenTT", {
            title: "Chuyển trạng thái",
            viewModel: {
                data: {
                    record: record,
                    fnSauKhiSave: function () {
                        me.onSearch();
                    }
                }
            }
        }).show();
    },
    onCheckState: function () {
        var me = this;
        var view = me.getView();
        var form = view.getReferences('state').state;
        console.log(this.reference);
        form.filter.setValue('Chưa')
    },

    onChangeEv: function (metadata) {
        var p;
        for (let i = 0; i < 9; i++) {
            p = this.getView().getComponent('p' + [i]);
            p.initResizable(true);
            p.initDraggable(true);
        };
    },

    onSavePosition: function () {
        var p;
        var arrP = [];
        for (let i = 0; i < 9; i++) {
            p = this.getView().getComponent('p' + [i]);
            arrP.push('p' + [i] + ': ' + p.getPosition() + '   Width:' + p.getWidth() + ' Height:' + p.getHeight()+'||');
        };
        Ext.Msg.alert('Save', arrP);

    },

    onSetData: function (metadata) {
        var me = this;
        var view = me.getView();
        console.log(metadata);
    },

    onDelete: function () {
        var me = this;
        var record = this.getViewModel().get("rSelected");
        Ext.MessageBox.confirm(
            'Xác nhận xóa', 'Bạn có muốn xóa?', function (btn) {
                if (btn == 'yes') {
                    me.fnDELETEAjax();
                    me.onSearch();
                }
            })


    },

    fnDELETEAjax: function (url, fnSauKhiSave) {
        var record = this.getViewModel().get("rSelected");
        var fnSauKhiSave = this.getViewModel().get("fnSauKhiSave");

        $.ajax({
            type: 'DELETE',
            dataType: 'json',
            async: false,
            url: 'api/yeucau/' + record.get('maYeuCau'),
            success: function (responseData) {
                Ext.Msg.alert('Thông báo', 'Xóa thành công ');
                if (fnSauKhiSave) fnSauKhiSave(responseData);
            },
            complete: function () {
                console.log("Delete successfully");
                if (fnSauKhiSave) fnSauKhiSave();
                Ext.Msg.alert('Thông báo', 'Xóa thành công !');
            },
            error: function (exx) {
                console.log(exx);
            }
        });
    },

   
});
