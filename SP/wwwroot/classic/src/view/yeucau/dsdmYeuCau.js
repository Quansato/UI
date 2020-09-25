Ext.define("Admin.view.yeucau.dsDMYeuCauModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmyeucau",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmyeucau" }
    }
});


Ext.define("Admin.view.yeucau.dsdmYeuCau", {
    extend: "Ext.grid.Panel",
    alias: "widget.dsdmyeucau",
   // configss: ["Ek.view.configs.dsDMYeuCauController", "Ek.view.configs.dsDMYeuCauModel"],
    //controller: "configs-dsdmyeucau",
    viewModel: {
        type: "configs-dsdmyeucau"
    },
    layout: "fit",
    bind: {
        selection: "{rSelected}",
        store: "{store}"
    },
    // plugins: {
    //     gridfilters: true
    // },
    ui: "light",
    session: true,
    columns: [{
        xtype: 'rownumberer',
        text: '#',
        width: 40,
        align: 'center',
        sortable: false
    }, {
            
        xtype: 'gridcolumn',
        renderer: function (value) {
            return "<i class='x-fa fa-calendar-alt'></i>";
        },
        width: 25,
        listeners: {
            click:'onAdd'
        },
        // dataIndex: 'profile_pic',
    }, {
        xtype: 'gridcolumn',
        cls: 'content-column',
        renderer: function (value) {
            return "<i class='x-fa fa-wrench'></i>";
        },
        width: 25,
        listeners: {
            click: 'onUpdate'
        },
    }, {
        xtype: 'gridcolumn',
        cls: 'content-column',
        renderer: function (value) {
            return "<img src='https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg' width=50 height=50/>";
        },
        width: 60,
    },
    {
    xtype: 'gridcolumn',
    cls: 'content-column',
    dataIndex: 'ngayTiepNhan',
    text: 'Ngày yêu cầu',
    format: 'd/m/Y',
    flex: 1
    },
    {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'noidung',
        text: 'Nội dung',
        flex: 2
    },
    {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'tenKH',
        text: 'Người Yêu cầu',
        flex: 2
    },
    {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'tenLoai',
        text: 'Loại yêu cầu',
        flex: 1
    },
    {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'tenTrangThai',
        reference:'state',
        text: 'Trạng thái',
        filter: {
            type: 'string',
            
        },
        renderer: function (value, metaData, opData) {
            if (value === "Đã xử lí") {
                metaData.style = "background-color:#EAA8A8;color:white;border-radius:10px";
            } else if (value === "Chưa xử lí") {
                metaData.style = "background-color:#daef2c;color:white;border-radius:10px";
            } else {
                metaData.style = "background-color:green;color:white;border-radius:10px";
            }
            return value;
        },
        flex: 1
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
            xtype: 'fieldset',
            title: 'Tìm kiếm yêu cầu',
            height: 'auto',
            minHeight: 170,
            cls: 'searchbox',
            layout: {
                type: 'column',
                // align:'stretch',
            },
            columns: 3,
            items: [
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Ngày tiếp nhận',
                    combineErrors: true,
                    msgTarget: 'side',
                    reference:'formdate',
                    layout: 'hbox',
                    defaults: {
                        flex: 1,
                        hideLabel: true
                    },
                    items: [{
                        xtype: 'datefield',
                        name: 'startDate',
                        reference: 'startdate',
                        fieldLabel: 'Start',
                        format:'d/m/Y'
                    }, {
                        xtype: 'datefield',
                        name: 'endDate',
                        fieldLabel: 'End',
                        padding: '0 0 0 10',
                        //maxValue: sdate,
                        //minValue: sdate,
                        listeners: {
                            'change': function (me) {
                                var sdate = this.up('fieldcontainer').getRefItems()[0].getSubmitValue();
                                var edate = me.getSubmitValue();
                                if (edate < sdate) {
                                    // this.setValue('')
                                    Ext.toast('Ngày kết thúc phải lớn hơn ngày bắt đầu!!Vui lòng nhập lại', 'Lỗi nhập')
                                }

                            }
                        }
                    }]
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Loại yêu cầu',
                    
                    bind: {
                        value: "{record.maLoai}"
                    },
                    msgTarget: 'side',
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Chọn tên loại";
                    }
                },
                {
                    xtype: 'combobox',
                    emptyText: 'admin',
                    fieldLabel: 'Người yêu cầu',
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Nhập tên khách hàng";
                    },
                    style: {
                        paddingRight: "20px"
                    },
                    msgTarget: 'side',
                }
                ,
                {
                    xtype: 'combobox',
                    fieldLabel: 'Trạng thái',
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Chọn trạng thái";
                    },
                    msgTarget:'side'
                },
                {
                    xtype: 'textfield',
                    emptyText: 'Nhập từ khóa tìm kiếm',
                    reference: 'loai',
                    fieldLabel: 'Từ khóa',
                    style: {
                        marginTop: "5px",
                    },
                    width: 320,
                    cls: 'key-search'
                },
                
                {
                    iconCls: "fas fa-sync-alt",
                    xtype: 'button',
                    text: 'Tìm mới',
                    style: {
                        borderTop: "solid 1px #d0d0d0 !important",
                            
                        marginTop:"5px"
                    },
                    cls: 'btn-s-new btn-orange',
                    
                },
                {
                    xtype: 'button',
                    text: 'Tìm ',
                    style: {
                        borderTop: "solid 1px #d0d0d0 !important",
                        marginLeft: "10px",
                        marginTop: "5px"
                    },
                    cls: 'btn-search',
                    handler:'onSearch'
                }

                ]
        }]
    }, {
        xtype: "toolbar",
        dock: "bottom",
        items: [{
            xtype: "button",
            text: "Thêm",
            iconCls: "fa fa-plus",
            reference: "btnAdd",
            style: {
                borderRadius:'5px',
            },
            tooltip: "addtooltip",
            handler: "onAdd"
        }, {
            xtype: "button",
            iconCls: "fas fa-pencil-alt",
            reference: "btnUpdate",
            bind: { disabled: "{!rSelected}" },
            style: {
                borderRadius:'5px',
            },
            text: "Sửa",
            tooltip: "edittooltip",
            handler: "onUpdate"
        }, {
            xtype: "button",
            iconCls: "fa fa-minus",
            reference: "btnDelete",
            bind: { disabled: "{!rSelected}" },
            style: {
                borderRadius:'5px',
            },
            text: "Xóa",
            tooltip: "deletetooltip",
            handler: "onDelete"
        },
        {
        xtype: "button",
        iconCls: "fas fa-retweet",
        reference: "btnRetweet",
        bind: { disabled: "{!rSelected}" },
        style: {
            borderRadius:'5px',
        },
        text: "Chuyển đổi",
        tooltip: "transfertooltip",
        handler: "onTrans"
        }, {
            xtype: "button",
            style: {
                backgroundColor: '#EAA8A8',
                marginLeft: "70px",
                marginBottom: "20px"
            },
            reference:'daxuli',
            width: 20,
            height: 20,
            listeners:{
                click: function () {
                    var view = this.up('gridpanel');
                    var form = view.getReferences('state').state;
                    form.filter.setValue('Đã xử lí')
                }
            }
        },
    {
        xtype: "button",
        style: {
            backgroundColor: '#daef2c',
            marginBottom: "15px"
        },
        reference: 'chuaxuli',
        listeners: {
            click: function () {
                var view = this.up('gridpanel');
                var form = view.getReferences('state').state;
                form.filter.setValue('Chưa xử lí')
            }
        },
        width: 20,
        height: 20,
    },
    {
        xtype: "button",
        style: {
            backgroundColor: 'green',
            marginBottom: "15px"
        },
        reference: 'dangxuli',
        width: 20,
        height: 20,
        listeners: {
            click: function () {
                var view = this.up('gridpanel');
                var form = view.getReferences('state').state;
                form.filter.setValue('Đang xử lí')
            }
        }
    },
            "->", {
            xtype: "pagingtoolbar",
            dock:'bottom right',
            displayInfo: true,
            pageSize: 5,
            beforePageText: "Trang",
            //afterPageText: "của {}",
            displayMsg:"{0} - {1} của {2}" ,
            bind: {
                store: "{store}"
            },
            
        }]
    }], 
   /* listeners: {
        afterRender: "onAfterrender"
    }*/
});

Ext.define("Ek.view.configs.dsDMYeuCauController", {
    extend: "Ext.app.ViewController",
    alias: "controller.configs-dsdmyeucau",
    storeInfo: null,
    refs: null,
    init: function () {
        var me = this;
        me.callParent(arguments);
    },
    onAfterrender: function () {
        var me = this;
        me.refs = me.getReferences();
        me.storeInfo = me.getViewModel().storeInfo;
        me.onSearch();
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
        var url = 'api/yeucau' ;
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
