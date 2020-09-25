Ext.define('Admin.store.congviec.sDMTrangThai', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmcongviec-trangthai',
    model: "Admin.model.congviec.mDMTrangThai",
    
    data: { items: [
        { 
            maTT:1,
            tenTT:'Tất cả',
        },{ 
            maTT:2,
            tenTT:'Chưa phân công',
        },{ 
            maTT:3,
            tenTT:'Đã phân công',
        },{ 
            maTT:4,
            tenTT:'Đã nhận việc',
        },{
            maTT: 5,
            tenTT: 'Đang thực hiện',
        },{
            maTT: 6,
            tenTT: 'Hoàn thành',
        },{
            maTT: 7,
            tenTT: 'Hoàn thành quá hạn',
        },{
            maTT: 8,
            tenTT: 'Hoàn thành đúng hạn',
        },{
            maTT: 9,
            tenTT: 'Chưa hoàn thành',
        },{
            maTT: 10,
            tenTT: 'Tạm dừng',
        },{
            maTT: 11,
            tenTT: 'Hủy',
        }
            
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

//Loaicongviec

Ext.define('Admin.store.congviec.sDMLoaiCongViec', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmcongviec-loaicv',
    model: "Admin.model.congviec.mDMLoaiCongViec",

    data: {
        items: [
            {
                maCV: 1,
                tenCV: 'Tất cả',
            }, {
                maCV: 2,
                tenCV: 'Công việc lặp lại',
            }, {
                maCV: 3,
                tenCV: 'Bảo trì',
            }, {
                maCV: 4,
                tenCV: 'ddd',
            }, {
                maCV: 5,
                tenCV: 'Kiểm tra',
            }, {
                maCV: 6,
                tenCV: 'Phòng ngừa',
            }, {
                maCV: 7,
                tenCV: 'Sửa chữa',
            },

        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

Ext.define('Admin.store.congviec.sDMNhomCongViec', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmcongviec-nhomcv',
    model: "Admin.model.congviec.mDMNhomCongViec",

    data: {
        items: [
            {
                maNhom: 1,
                tenNhom: 'Tất cả',
            }, {
                maNhom: 2,
                tenNhom: 'Dự án cải tạo ADB',
            }, {
                maNhom: 3,
                tenNhom: 'Dự án cải tạo',
            }, {
                maNhom: 4,
                tenNhom: 'Dự án phát triển',
            }, 

        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

Ext.define('Admin.store.congviec.sDMDetailCongViec', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmcongviec-detailcv',
    model: "Admin.model.congviec.mDMDetailCongViec",

    data: {
        items: [
            {
                maCVdetail: 1,
                title:'CV-ThemMoi',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen B',
                noiDung: 'test',
                tienDo:'10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc:'09/09/2020'
            }, {
                maCVdetail: 2,
                title: 'CV-0009',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen C',
                noiDung: 'Yêu cầu bảo trì',
                tienDo: '10%',

                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 3,
                title: 'CV-KT23478',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen D',
                noiDung: 'Thử sản phẩm',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 4,
                title: 'CV-4149',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen E',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 5,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 6,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 7,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 8,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 9,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 10,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            }, {
                maCVdetail: 11,
                title: 'CV-00429',
                nguoithucHien: 'Nguyen Quan',
                nguoiGiao: 'Nguyen A',
                noiDung: 'test',
                tienDo: '10%',
                ngaybatDau: '08/08/2020',
                ngayketThuc: '09/09/2020'
            },

        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});