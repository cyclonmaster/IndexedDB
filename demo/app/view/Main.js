Ext.define('Demo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
        'Ext.dataview.List',
        'Demo.store.Todo',
        'Demo.view.TodoItem'
    ],
    config: {
        layout:'vbox',
        fullscreen:true,
        items: [
            {
                xtype:'titlebar',
                title:'ToDoS',
                docked:'top'
            },{
                xtype:'formpanel',
                scrollable:null,
                layout:'hbox',
                items:[
                    {
                        xtype:'textfield',
                        itemId:'todo',
                        placeHolder:'What should you do?',
                        flex:1
                    },
                    {
                        xtype:'button',
                        action:'add',
                        iconCls:'add',
                        ui:'confirm'
                    }
                ]
            },{
                xtype:'list',
                itemId:'todoList',
                store:'todo',
                useComponents: true,
                defaultType:'todoItem',
                flex:1
            }

        ]
    }
});
