Ext.define("Admin.view.congviec.dsDMCongViecModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmcongviec",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmcongviec-trangthai" }
    }
});

Ext.define("Admin.view.quanli.dsDMLCongViecModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmloaicv",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmcongviec-loaicv" }
    }
});

Ext.define("Admin.view.quanli.dsDMNhomCongViecModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmnhomcv",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmcongviec-nhomcv" }
    }
});

Ext.define("Admin.view.quanli.dsDMDetailCongViecModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmdetailcv",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmcongviec-detailcv" }
    }
});

Ext.define("Admin.view.quanli.dsdmCongViec", {
    extend: "Ext.container.Container",
    alias: "widget.dsdmcongviec",
   // configss: ["Ek.view.configs.dsDMYeuCauController", "Ek.view.configs.dsDMYeuCauModel"],
    controller: "quanli-dsdmcongviec",
    layout: {
        type: 'hbox',
    },
    requires: [
        'Ext.layout.container.Accordion',
        'Ext.grid.*'
    ],
    bodyPadding: 5,
    ui: "light",
    items: [
        {
            xtype: 'panel',
            layout: 'accordion',
            viewModel: {
                type: 'tree-list'
            },
            //flex: 2,
            width:300,
            height: '100%',
            padding:'0 5 2 5',
            ui: 'light',
            defaults: {
                bodyPadding: 10
            },
            dockedItems: [{
                xtype: 'toolbar',
                padding: '5 0 0 5',
                items: [{
                    xtype: 'textfield',
                    width: '100%',
                    emptyText:'Tìm theo:Mã, tên, nội dung, địa chỉ công việc'
                }]
            }]
            ,
            items: [{
                title: {
                    text: 'Trạng thái',
                    cls:'blue'
                },
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                height: 400,
                iconCls: 'x-fa fa-flag blue',
                items: [{
                    xtype: 'grid',
                    viewModel: {
                        type: "configs-dsdmcongviec"
                    },
                    
                    bind: {
                        selection: "{rSelected}",
                        store: "{store}"
                    },
                    columnLines: true,
                    selType: 'checkboxmodel',
                    columns: [{
                        flex: 1,
                        dataIndex: 'tenTT',
                    }]

                }]
                ,
                bodyPadding: 0
            }, {
                title: {
                    text: 'Đơn vị thực hiện',
                    cls: 'blue'
                },
                height:280,
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                iconCls: 'x-fa fa-th blue',
                items: [{
                    xtype: 'treelist',
                    reference: 'treelist',
                    bind: '{navItems}'
                }]
            }, {
                title: {
                    text: 'Người thực hiện',
                    cls: 'blue'
                },
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                iconCls: 'x-fa fa-user blue',
                html: 'Empty'   
            }, {
                title: {
                    text: 'Loại công việc',
                    cls: 'blue'
                },
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                iconCls: 'x-fa fa-list blue',
                items: [{
                    xtype: 'grid',
                    viewModel: {
                        type: "configs-dsdmloaicv"
                    },

                    bind: {
                        selection: "{rSelected}",
                        store: "{store}"
                    },
                    columnLines: true,
                    selType: 'checkboxmodel',
                    columns: [{
                        flex: 1,
                        dataIndex: 'tenCV',
                    }]

                }]
            }, {
                title: {
                    text: 'Nhóm công việc/Dự án',
                    cls: 'blue'
                },
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                iconCls: 'x-fa fa-th-large blue',
                    items: [{
                        xtype: 'grid',
                        viewModel: {
                            type: "configs-dsdmnhomcv"
                        },

                        bind: {
                            selection: "{rSelected}",
                            store: "{store}"
                        },
                        columnLines: true,
                        columns: [{
                            flex: 1,
                            dataIndex: 'maNhom',
                        },{
                            flex: 5,
                            dataIndex: 'tenNhom',
                        }]

                    }]
            },
            {
                title: {
                    text: 'Người giao',
                    cls: 'blue'
                },
                style: {
                    border: '1px solid #c2c2c2 !important'
                },
                iconCls: 'x-fa fa-user blue',
                html: 'Empty'
            }, 
            ],
        },
        {
            xtype: 'gridpanel',
            height: '100%',
            session: true,
            viewModel: {
                type: "configs-dsdmdetailcv"
            },
            bind: {
                selection: "{rSelected}",
                store: "{store}"
            },
            padding:'1 0 0 0',
            //bodyPadding:10,
            flex: 6,
            width:'100%',
            ui:'light',
            selType: 'checkboxmodel',
            columns: [{
                flex: 1,
                xtype: 'templatecolumn',
                tpl: '<ul style="margin: 0;padding: 0;">' +
                        '<li style="display: flex;justify-content: space-between;max-height: 38px;">' +
                            '<div style=" max- width: 75 % ;font-size:13px ">' +
                            '<span style="font-weight:bold;color:purple">{title}</span>' +
                            ' giao cho {nguoithucHien} bởi {nguoiGiao} ' +
                            '<br><span style="font-style: italic;">{noiDung}</span></div>' +
                            '<div style="max- width: 25 %;margin-right:10px ">' +
                                '<ul>' +
                                    '<li style="padding-bottom:1px">' +
                                     '<div style="background-color:purple;color: #FFF !important;line-height: 18px;padding: 3px 2px;font-size: 90%;border-radius: 3px;max-width: 105px;text-align: center;">Tiến độ: {tienDo}</div> '
                                 + '</li>' +
                                     '<li>' +
                                        '<span style="background-color: #8d9ea7;color: #FFF !important;line-height: 18px;padding: 4px 6px;font-size: 90%;border-radius: 3px;float: left;min-width: 105px;text-align: center;">Đã phân công</span> <i class="x-fa fa-comment-o fa-2" style="font-size:25px;padding-left:5px  "></i> <i class="x-fa fa-bell-o fa-2" style="font-size:25px"></i>' +
                                     '</li>' +
                                '</ul>' +
                            '</div>' +
                        '</li>' +
                        '<li>' +
                            '<div style="font-size:11px">' +
                            'Từ <span style="background-color:#95a5a6;color: white;border-radius:2px;padding:1px">' +
                        '{[Ext.Date.format(values.ngaybatDau, "d/m/Y H:i")]}</span> đến <span style="background-color:#95a5a6;color: white;border-radius:2px;padding:1px">{[Ext.Date.format(values.ngayketThuc, "d/m/Y H:i")]}</span>' +
                            '</div>' +
                        '</li>' +
                    '</ul>',
                format: 'd/m/Y',
                submitFormat: 'd/m/Y',
            }],   
            viewConfig: {
                emptyText: "Không có dữ liệu"
            },
            dockedItems: [{
                xtype: "toolbar",
                border: false,
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                dock:'top',
                items: [{
                    xtype: 'fieldcontainer',
                    height: 'auto',
                    layout: {
                        type: 'hbox',
                        align:'stretch',
                    },
                    columns: 2,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            msgTarget: 'side',
                            reference: 'formdate',
                            flex:4,
                            layout: {
                                type: 'hbox',
                                align:'stretch',
                            },
                            items: [{
                                xtype: 'button',
                                text: 'Tải lại',
                                ui:'soft-cyan',
                                iconCls:'x-fa fa-refresh'
                            }, {
                                xtype:'button',
                                text: 'Tất cả công việc',
                                ui: 'soft-cyan',
                                iconCls: 'x-fa fa-puzzle-piece',
                                menu: [{
                                    text: 'Tất cả'
                                }, {
                                    text: 'Tôi giao'
                                }, {
                                    text: 'Tôi phải làm'
                                }, {
                                    text: 'Tôi liên quan'

                                }]
                            },
                            {
                                xtype: 'button',
                                text: 'Ngày cập nhật',
                                ui: 'soft-cyan',
                                iconCls: 'x-fa fa-long-arrow-down',
                                menu: [{
                                    text: 'Ngày cập nhật'
                                }, {
                                    text: 'Ngày cập nhật'
                                }, {
                                    text: 'Ngày tạo'
                                }, {
                                    text: 'Ngày tạo'

                                }, {
                                    text: 'Ngày hoàn thành'

                                },{
                                    text: 'Ngày hoàn thành'

                                }]
                            }]
                        },
                        {
                            xtype: 'fieldcontainer',
                            combineErrors: true,
                            msgTarget: 'side',
                            layout: {
                                type: 'hbox',
                                align:'stretch'
                            },
                            flex: 2,
                            items: [{
                                xtype: 'component',
                                margin: '0 5 0 0',
                                html: '<div id="reportrange" style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 200px;height:30px">' +
                                    '<i class="fa fa-calendar"></i>&nbsp;' +
                                    '<span></span>' +
                                    '</div>',
                                listeners: {
                                    afterRender: 'onJQ'
                                }
                            },
                            {
                                xtype: 'button',
                                margin: '0 5 0 0',
                                ui:'blue',
                                iconCls: "x-fa fa-list",
                            },
                            {
                                xtype: 'button',
                                margin: '0 5 0 0',
                                ui: 'blue',
                                iconCls: "x-fa fa-calendar",
                            },
                            {
                                xtype: 'button',
                                ui: 'blue',
                                iconCls: "x-fa fa-columns",
                            }]
                        },
                        
        
                        ]
                }]
            }, {
                xtype: "toolbar",
                dock: "bottom",
                items: [{
                    xtype: "button",
                    iconCls: "fa fa-plus",
                    ui: "blue",
                    style: {
                        borderRadius: '3px',
                    },
                    text: "Thêm",
                    tooltip: "Thêm mới",
                    handler: "onAdd"

                    },{
                    xtype: "button",
                    iconCls: "x-fa fa-eye",
                    ui: "blue",
                    reference: "btnDelete",
                    bind: { disabled: "{!rSelected}" },
                    style: {
                        borderRadius: '3px',
                    },
                    text: "Xem",
                    tooltip: "deletetooltip",
                    handler: "onDelete"
                   
                }, {
                    xtype: "button",
                    iconCls: 'x-fa fa-puzzle-piece',
                    reference: "btnTool",
                    ui: "blue",
                    text: "Tiện ích",
                    tooltip: "Tiện ích",
                    arrowAlign: 'right',
                    style: {
                        borderRadius: '3px',
                    },
                    menu: [
                        { text: 'Thêm vật tư vào kho', iconCls: 'fa fa-plus-square line', handler: 'onAdd2' },
                        { text: 'Quản lí tồn kho', iconCls: 'fa fa-cog line', handler: 'onAdd' },
                        { text: 'Quản lí định mức', iconCls: 'fa fa-recycle line', handler: 'onQuanli' },
                    ],
                },
                "->", {
                    xtype: "pagingtoolbar",
                    displayInfo: true,
                    bind: {
                        store: '{store}'
                    },
                    style: "padding: 0px !important",
                    lastText:"ExtLastText",
                    prevText:"ExtPrevText",
                    firstText:"ExtFirstText",
                    nextText:"ExtNextText",
                    refreshText:"ExtRefreshText",
                    beforePageText:"Trang",
                    afterPageText:"của {0}",
                    displayMsg:"{0} - {1} của {2}" ,
                    emptyMsg:"ExtEmptyMsg",
                    
                }]
            }],


        },
        
    ],////item 
    
});

Ext.define("Admin.view.congviec.dsDMQuanLiController", {
    extend: "Ext.app.ViewController",
    alias: "controller.quanli-dsdmcongviec",
    storeInfo: null,
    refs: null,
    init: function () {
        var me = this;
        me.callParent(arguments);
    },
    onAfterrender: function () {
       /* var me = this;
        me.refs = me.getReferences();
        me.storeInfo = me.getViewModel().storeInfo;
        me.onSearch();*/
    },

    specialkey: function (field, e) {
        var me = this;
        if (e.getKey() == e.ENTER) {
            me.onSearch();
        }
    },

    onSearch: function () {
       /* var me = this;
        var store = me.storeInfo.store;
        var url = 'api/yeucau' ;
        store.proxy.api.read = url;
        store.load({
            params: {
               *//* skipCount: 0,
                maxResultCount: store.pageSize,*//*
            },
            scope: this,
            callback: function (records, operation, success) {
                if (records == null) {
                    store.removeAll();
                }
            }
        });*/
    },
    onJQ: function () {
        $(function () {

            var start = moment().subtract(29, "days");
            var end = moment();

            function cb(start, end) {
                $("#reportrange span").html(start.format("DD/MM/YYYY") + " - " + end.format("DD/MM/YYYY"));
            }

            $("#reportrange").daterangepicker({
                startDate: start,
                endDate: end,
                ranges: {
                    "Hôm nay": [moment(), moment()],
                    "Hôm qua": [moment().subtract(1, "days"), moment().subtract(1, "days")],
                    "7 ngày trước": [moment().subtract(6, "days"), moment()],
                    "30 ngày trước": [moment().subtract(29, "days"), moment()],
                    "Tháng này": [moment().startOf("month"), moment().endOf("month")],
                    "Tháng trước": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
                }
            }, cb);

            cb(start, end);

        });
    },
    onAdd2:function(){
        var me = this;
        var record = Ext.create("Admin.model.yeucau.mDMYeuCau", { maYeuCau: 0 });
        Ext.create("Admin.view.quanli.cnDMThemVatTu", {
            title: 'Quản lí tồn kho',
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
    onQuanli:function(){
        var me = this;
        var record = Ext.create("Admin.model.yeucau.mDMYeuCau", { maYeuCau: 0 });
        Ext.create("Admin.view.quanli.cnDMDinhMuc", {
            title: 'Quản lí định mức cho vật tư trong kho',
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
    onAdd: function () {
        var me = this;
        var record = Ext.create("Admin.model.congviec.mDMCongViec", { maCv: 0 });
        Ext.create("Admin.view.congviec.cnDMCongViec", {
            title: 'Thông tin chi tiết công việc',
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


    onUpdate: function () {
        var me = this;
        var record = me.getViewModel().get("rSelected");
        Ext.create("Ek.view.configs.cnDMYeuCau", {
            title:"Cập nhật",
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
        Ext.create("Ek.view.quanli.cnDMChuyenTT", {
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
    }
    ,

    onDelete: function () {
        var me = this;
        var record = this.getViewModel().get("rSelected");
        Ext.MessageBox.confirm(
            'Xác nhận xóa', 'Bạn có muốn xóa?',function (btn) {
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
