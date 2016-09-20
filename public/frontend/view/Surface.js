Ext.define('AM.view.Surface', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.Surface',
	
    initComponent: function() {
        Ext.apply(this, {
            id: 'surface',
            layout: 'border',
            border: false,
            bodyPadding: 10,
           
            items: [{
                id: 'title',
                xtype: 'box',
                region: 'north',
                height: 40,
                html: '<h3>Laravel - ExtJS тестовое задание  Дмитрия Кривошеина</h3>'
            },
          
            {
				xtype: 'user-surface',
				region: 'center'
			}],
			
			
        });

        this.callParent(arguments);

    }
});