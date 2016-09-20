Ext.define('AM.view.user.Form', {
	extend: 'Ext.form.Panel',
    alias : 'widget.user-form',
    border : false,
	bodyPadding : 10,

   initComponent: function() {
	   Ext.apply(this, {
			fieldDefaults: {
				anchor: '90%',
				labelAlign: 'left',
				allowBlank: false,
				combineErrors: true,
				msgTarget: 'side'
			},
	
			items: [{
				xtype: 'textfield',
				name : 'id',
				fieldLabel: 'id',
				hidden:true,
				allowBlank: true
			},{
				xtype: 'textfield',
				name : 'login',
				fieldLabel: 'Логин'
			},{
				xtype: 'textfield',
				name : 'name',
				fieldLabel: 'Имя'
			},{
				xtype: 'textfield',
				name : 'last_name',
				fieldLabel: 'Фамилия'
			},{
				xtype: 'checkbox',
				name : 'id_status',
				fieldLabel: 'Статус',
				inputValue: '1',
                
			},{
				xtype : 'htmleditor',
				name : 'comment',
				height : 250,
				fieldLabel : 'Коментарий',
				enableColors : true,
				enableAlignments : true,
				enableLists : true,
				enableSourceEdit : false,
				enableFontSize : true,
				enableFont : false
			}]
	    });
	

        this.callParent(arguments);
    }
});
