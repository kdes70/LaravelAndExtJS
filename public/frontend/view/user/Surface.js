Ext.define('AM.view.user.Surface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.user-surface',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'user-surface',
            layout: 'border',
            border: false,
            bodyPadding: 0,
            
            items: [{
				xtype: 'user-grid',
				region: 'center'
			}]
        });

        this.callParent(arguments);
    }
});