Ext.define('Admin.view.cwidget.WidgetText', {
    extend: 'Ext.panel.Panel',
    xtype: 'widget-text',

    resizable: false,
    cls: 'dashboard-itemCSS',
    
    height: 170,
    tools: [
        {
            type: 'wrench',
            listeners: {
                click: {
                    element: 'el',
                    fn: function (tooltip, record, item) {
                        Ext.Msg.alert('Thông báo', 'Setting')
                    }
                }
            }
        }
    ],
    header: {
        style: 'text-align:center;',
        bind: {
            html: '<p style="margin:0px;font-size:12px;color:white">{title}</p>' +
                '<p style="margin:0px;font-size:12px;color:white">{subTitle}</p>',
        }
    },
    bind: {
        html: '<div class="widget-bottom">' +
            '<h6 style="font-size:35px;text-align:center;margin:0px;color:{color}">{content}</h6>' +
            '</div>' +
            '<p style="font-size:10px;color:#BBBBBB">{subContent}</p>',
    },
    listeners: {
        click: {
            element: 'el',
            fn: function (tooltip, record, item) {
                Ext.Msg.alert('Thông báo', 'Details')
            }
        },
        dragstart: function (evt) {

        },
        dragend: function () {
            console.log('we are ended the drag');
        }
    }
});
