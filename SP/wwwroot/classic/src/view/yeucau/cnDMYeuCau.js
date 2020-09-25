Ext.define("Admin.view.yeucau.cnDMYeuCauModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-cndmyeucau",
    data: {
        record: null,
        fnSauKhiSave: null
    }
});

Ext.define("Admin.view.yeucau.cnDMYeuCau", {
    extend: "Ext.window.Window",
    configss: ["Admin.view.yeucau.cnDMYeuCauController", "Admin.view.yeucau.cnDMYeuCauModel"],
    controller: "yeucau-cndmyeucau",
    viewModel: {
        type: "yeucau-cndmyeucau"
    },
    width: 900,
    modal: true,
    items: [{
        xtype: "form",
        scrollable: true,
        padding: 5,
        reference: "frmYeuCau",
        layout: {
            type: "vbox",
            align: "stretch"
        },
        defaults: {
            flex: 1,
            labelAlign: "right",
            labelWidth: 100
        },
        items: [{
            xtype: 'fieldset',
            title: 'Thông tin người yêu cầu',
            layout: {
                type: "vbox",
                align: "stretch"
            },
            padding: 10,
            items: [
                {
                    xtype: 'combobox',
                    emptyText: 'admin',
                    fieldLabel: 'Người yêu cầu',
                    queryMode: 'remote',
                    addAllSelector: true,
                    triggerAction: "all",
                    forceSelection: false,
                    store: {
                        type: "sdmphannhom",
                        proxy: { url: 'api/khachhang' },
                    },
                    displayField: 'tenKH',
                    valueField: 'maKH',
                    bind: {
                        value: "{record.maKH}"
                    },
                    validator: function (val) {
                        return (val.trim().length > 0) ? true : "Nhập tên khách hàng";
                    },
                     msgTarget: 'under',
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Số điện thoại',
                    bind: {
                        value: "{record.sdt}"
                    },
                    editable:false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email',
                    vtype:'email',
                    bind: {
                        value: "{record.email}"
                    },
                    editable: false
                },



            ]
        },
            {
                xtype: 'fieldset',
                title: 'Thông tin yêu cầu',
                layout: {
                    type: "vbox",
                    align: "stretch"
                },  
                items: [
                    {
                        xtype: 'combobox',
                        fieldLabel: 'Loại yêu cầu',
                        queryMode: 'remote',
                        addAllSelector: true,
                        triggerAction: "all",
                        forceSelection: false,
                        store: {
                            type: "sdmphannhom",
                            proxy: { url: 'api/loai' },
                        },
                        bind: {
                            value: "{record.maLoai}"
                        },
                        listeners: {
                            blur: "blurMa"
                        },
                        displayField: 'tenLoai',
                        valueField: 'maLoai',
                        msgTarget: 'under',
                        validator: function (val) {
                            return (val.trim().length > 0) ? true : "Chọn tên loại";
                        }
                        
                    },
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Ngày tiếp nhận',
                        msgTarget: 'under', // location of the error message
                        invalidText: 'Định dạng đúng là m/d/Y',
                        bind: {
                            value: "{record.ngayTiepNhan}"
                        },
                        validator: function (val) {
                            return (val.trim().length > 0) ? true : "Nhập ngày tiếp nhận";
                        },
                        msgTarget: 'under',
                    }
                    ,
                    {
                        xtype: 'combobox',
                        fieldLabel: 'Mức độ',
                        addAllSelector: true,
                        triggerAction: "all",
                        store: Ext.create('Ext.data.Store', {
                            fields: ['maMucDo', 'tenMucDo'],
                            data: [
                                { "maMucDo": "1", "tenMucDo": "Muc 1" },
                                { "maMucDo": "2", "tenMucDo": "Muc 2" },
                            ]
                        }),
                        bind: {
                            value: "{record.maMucDo}"
                        },
                        queryMode: "local",
                        displayField: 'tenMucDo',
                        valueField: 'maMucDo',
                        validator: function (val) {
                            return (val.trim().length > 0) ? true : "Chọn mức độ";
                        },
                        msgTarget: 'under',
                    },
                    {
                        xtype: 'textarea',
                        fieldLabel: 'Nội dung yêu cầu (*)',
                        bind: {
                            value: "{record.noidung}"
                        },
                        validator: function (val) {
                            return (val.trim().length > 0) ? true : "Nhập nội dung";
                        },
                        msgTarget: 'under',
                    },
                    {
                        xtype: 'textfield',
                        emptyText: 'Nhập địa điểm',
                        fieldLabel: 'Địa điểm',
                        bind: {
                            value: "{record.diaDiem}"

                        },
                        validator: function (val) {
                            return (val.trim().length > 0) ? true : "Nhập địa điểm";
                        },
                        msgTarget: 'under',

                    },
                    {
                        xtype: 'combobox',
                        emptyText: 'Chọn người xử lý',
                        fieldLabel: 'Người xử lý',
                        queryMode: 'remote',
                        addAllSelector: true,
                        triggerAction: "all",
                        forceSelection: false,
                        store: {
                            type: "sdmphannhom",
                            proxy: { url: 'api/nhanvien' },
                        },
                        displayField: 'tenNV',
                        valueField: 'maNV',
                        bind: {
                            value: "{record.maNV}"
                        },
                        validator: function (val) {
                            return (val.trim().length > 0) ? true : "Chọn người xử lí";
                        },
                        msgTarget: 'under',
                    },
                    {
                        xtype: 'combobox',
                        fieldLabel: 'Trạng thái',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['maTrangThai', 'tenTrangThai'],
                            data: [
                                { "maTrangThai": "1", "tenTrangThai": "Đã xử lí" },
                                { "maTrangThai": "2", "tenTrangThai": "Chưa xử lí" },
                                { "maTrangThai": "3", "tenTrangThai": "Đang xử lí" },
                            ]
                        }),
                        bind: {
                            value: "{record.maTrangThai}"
                        },
                        queryMode: "local",
                        displayField: 'tenTrangThai',
                        valueField: 'maTrangThai',
                        validator: function (val) {
                            return (val.trim().length > 0) ? true : "Chọn trạng thái";
                        },
                        msgTarget: 'under',
                    }

                ]
            }],
        buttons: [{
            text: "Lưu và Làm mới",
            iconCls: "far fa-save",
            reference: "btSAN",
            handler: "onSaveAndNew"
        }, {
            text: "Lưu",
            iconCls: "far fa-save",
            reference: "btnSave",
            handler: "onSave"
        }, {
            text: "Hủy bỏ",
            handler: function () {
                this.up("window").close();
            },
            iconCls: "fas fa-times"
        }],
        listeners: {
            afterRender: "onAfterrender",
            close: "onClose"
        }


    }],
    
});

Ext.define("Admin.view.configs.cnDMChuyenTT", {
    extend: "Ext.window.Window",
    configss: ["Admin.view.configs.cnDMYeuCauController", "Admin.view.configs.cnDMYeuCauModel"],
    controller: "configs-cndmyeucau",
    viewModel: {
        type: "configs-cndmyeucau"
    },
    width: 700,
    modal: true,
    items: [{
        xtype: "form",
        padding: 5,
        reference: "frmChuyenTT",
        layout: {
            type: "vbox",
            align: "stretch"
        },
        defaults: {
            flex: 1,
            labelAlign: "right",
            labelWidth: 100
        },
        items: [
            {
                xtype: 'fieldset',
                title: 'Thông tin người yêu cầu',
                cls: 'infor',
                height: 'auto',
                layout: {
                    type: "vbox",
                    align: "stretch"
                }, 
                width: 650,
                items: [
                    {
                        xtype: 'textfield',
                        cls: 'custom-input',
                        fieldLabel: 'Mã yêu cầu',
                        editable:false,
                        bind: {
                            value: '{record.maYeuCau}'
                        }
                    },
                    {
                        xtype: 'textfield',
                        cls: 'custom-input',
                        fieldLabel: 'Nội dung',
                        bind: {
                            value: '{record.noidung}'
                        }
                    },
                    {
                        xtype: 'textfield',
                        cls: 'custom-input',
                        fieldLabel: 'Trạng thái',
                        bind: {
                            value: '{record.tenTrangThai}'
                        }
                    }


                ]
            }, {
                items: [
                    {
                        width: 670,
                        xtype: 'combobox',
                        fieldLabel: 'Trạng thái mới :',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['maTrangThai', 'tenTrangThai'],
                            data: [
                                { "maTrangThai": "1", "tenTrangThai": "Đã xử lí" },
                                { "maTrangThai": "2", "tenTrangThai": "Chưa xử lí" },
                                { "maTrangThai": "3", "tenTrangThai": "Đang xử lí" },
                            ]
                        }),
                        bind: {
                            value: "{record.maTrangThai}"
                        },
                        queryMode: "local",
                        displayField: 'tenTrangThai',
                        valueField: 'maTrangThai',

                    },
                    {
                        width: 670,
                        xtype: 'textarea',
                        fieldLabel: 'Mô tả :',
                        bind: {
                            value: "{record.moTa}"
                        },
                    }
                ]
            }
        ],///items
        buttons: [
            // buttonAlign: 'end',
            {
                text: 'Lưu thông tin',
                iconCls: 'fas fa-save',
                handler: 'onSaveTT'
            }, {
                text: 'Đóng',
                iconCls: 'fas fa-times',
                cls: 'btn-danger',
                handler: function () { Ext.Msg.alert('Đóng', 'Đã đóng'); }
            }]
    }],
        listeners: {
            afterRender: "onAfterrender",
            close: "onClose"
        }
});


Ext.define("Admin.view.yeucau.cnDMYeuCauController", {
    extend: "Ext.app.ViewController",
    alias: "controller.yeucau-cndmyeucau",
    refs: null,
    storeInfo: null,

    init: function () {
        var me = this;
        me.callParent(arguments);
    },

    onAfterrender: function () {
        var me = this;
        me.refs = me.getReferences();
        me.storeInfo = me.getViewModel().storeInfo;
    },
    onLoai: function () {
        
    },
    blurMa: function () {
        var me = this;
        var record = me.getViewModel().get("record");
    },

    onSave: function () {
        this.fnSave();
    },

    onSaveAndNew: function () {
        var me = this;
        me.fnSave();
        var newRecord = Ext.create("Admin.model.mDMYeuCau", { maYeuCau: 0 });
        me.getViewModel().set("record", newRecord);
    },

    fnSave: function () {
        var me = this;
        var view = me.getView();
        var fnSauKhiSave = me.getViewModel().get("fnSauKhiSave");
        var record = me.getViewModel().get("record");
        var form = view.getReferences('frmYeuCau').frmYeuCau;
        view.setLoading(false);
        if (form.isValid()) {
            if (record.data.maYeuCau != 0) {
                this.fnPUTAjax();
                console.log('Update successfully');
                view.setLoading(false);
            } else {
                me.fnPOSTAjax();
                console.log('Add successfully');
                view.setLoading(false);
            }
        } else {
            Ext.MessageBox.show({
                title: "Lỗi",
                msg: "Vui lòng điền đầy đủ thông tin",
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.WARNING
            });
        }
    },

    onSaveTT: function () {
        var fnSauKhiSave = this.getViewModel().get("fnSauKhiSave");
        var record = this.getViewModel().get("record");
        $.ajax({
            type: 'PUT',
            context: this,
            async: true,
            url: 'api/yeucau/' + record.get('maYeuCau') + '/'+ record.get('maTrangThai') +'/'+ record.get('moTa'),
            data: JSON.stringify(record.data),
            contentType: "application/json; charset=utf-8",
            dataType: 'jsonp',
            success: function (responseData) {
                // record.set('maLoai', responseData.maLoai);
                if (fnSauKhiSave) fnSauKhiSave(responseData);
            },
            complete: function (responseData) {
                if (fnSauKhiSave) fnSauKhiSave();
                console.log("Update TT");
            },
            error: function (exx) {
                console.log(exx);
                //abp.notify.warn(exx);
            }
        });
    },

    onClose: function () {
        var record = this.getViewModel().get("record");
        if (record) record.reject();
    },

    fnPUTAjax: function (url, data, fnSauKhiSave) {
        var fnSauKhiSave = this.getViewModel().get("fnSauKhiSave");
        var record = this.getViewModel().get("record");
        $.ajax({
            type: 'PUT',
            context: this,
            async: true,
            url: 'api/yeucau',
            data: JSON.stringify(record.data),
            contentType: "application/json; charset=utf-8",
            dataType: 'jsonp',
            success: function (responseData) {
                if (fnSauKhiSave) fnSauKhiSave(responseData);
            },
            complete: function (responseData) {
                Ext.Msg.alert('Thông báo', 'Sửa thành công ');
                if (fnSauKhiSave) fnSauKhiSave();
            },
            error: function (exx) {
                console.log(exx);
            }
        });
    },

    fnPOSTAjax: function (url, data, fnSauKhiSave) {
        var fnSauKhiSave = this.getViewModel().get("fnSauKhiSave");
        var record = this.getViewModel().get("record");
        $.ajax({
            type: 'POST',
            context: this,
            async: true,
            url: 'api/yeucau',
            data: JSON.stringify(record.data),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
               // record.set('maLoai', responseData.maLoai);
                Ext.Msg.alert('Thông báo', 'Thêm thành công ');
                if (fnSauKhiSave) fnSauKhiSave(responseData);
            },
            complete: function (responseData) {
                
                if (fnSauKhiSave) fnSauKhiSave();
            },
            error: function (exx) {
                console.log(exx);
            }
        });
    }

});
