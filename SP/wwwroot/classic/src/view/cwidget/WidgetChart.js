Ext.define('Admin.view.cwidget.WidgetChart      ', {
    extend: 'Ext.panel.Panel',
    xtype: 'widget-chart',

    cls: 'admin-widget shadow',
    resizable: false,
    height: 170,
    tools: [
        {
            type: 'wrench',
            listeners: {
                click:{
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
        html: '<div  class="widget-bottom">' +
            '<input type="text" value={content} class="dial" data-width={width} data-height={height} data-max={maxContent} data-fgColor={color} readOnly="true" >' +
            '</div>',
    },
    listeners: {
        afterRender: 'onJknob',
        click: {
            element: 'el',
            fn: function (tooltip, record, item) {
                Ext.Msg.alert('Thông báo', 'Details');
            }
        }
    }
});
