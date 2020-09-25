Ext.define('Admin.store.yeucau.sDMYeuCau', {
    extend: 'Ext.data.Store',

    alias: 'store.sdmyeucau',
    model: "Admin.model.yeucau.mDMYeuCau",
    
    data: { items: [
        { 
        maYeuCau: 1,
        maLoai: 1,
        maTrangThai:1,
        maMucDo:1,
        maNV:1,
        maKH:1,
        tenTrangThai:'Đang xử lí',
        tenMucDo:'Muc 1',
        tenKH:'Nguyen A',
        sdt:'113123123',
        email:'naksdasd',
        tenNV:'Nguyen asd',
        ngayTiepNhan:'08/07/2020',
        noidung:'dasd',
        diaDiem:'Ha noi',
        moTa:'khong'
        },
        
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
