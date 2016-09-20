Ext.define('AM.controller.Users', {
    extend:	'Ext.app.Controller',
    stores:	['Users'],
    models:	['User'],
    views: 	['user.Grid', 'user.Window', 'user.Form', 'user.Surface'],

    refs: [{
		ref: 'userGrid',
		selector: 'user-grid'
	}],
	
	/**
	 * [init description]
	 * @return {[type]} [description]
	 */
    init: function() {
    	//контекстное меню
		this.contextmenu = Ext.create('Ext.menu.Menu', {
            id: 'user-grid-ctx',
            items: [{
                text: 'Edit',
                action: 'update-user',
                iconCls: 'fam book_edit'
            }, {
                text: 'Delete',
                action: 'delete-user',
                iconCls: 'fam delete'
            }]
        });

		// события
        this.control({
			'user-grid': {
				// по нажатию правой кнопки выводим кантекстное меню
				//itemdblclick: this.addEditMovie,
				itemcontextmenu: this.listContextMenu
            },
            // Выводим форму 
            'user-grid > toolbar > button[action=add]': {
            	click: this.addEditUser
            },
			'menu[id=user-grid-ctx] > menuitem': {
                click: this.listContextMenuItem
            },            
            'user-window button[action=save]': {
                click: this.saveUser
            }
        });
    },

	/**
	 * [listContextMenu description]
	 * @param  {[type]} view   [description]
	 * @param  {[type]} record [description]
	 * @param  {[type]} item   [description]
	 * @param  {[type]} index  [description]
	 * @param  {[type]} event  [description]
	 * @return {[type]}        [description]
	 */
	listContextMenu: function(view, record, item, index, event) {
        event.stopEvent();
        view.up('panel').getSelectionModel().select(index);
        this.contextmenu.showAt(event.getXY());
        return false;
    },

    /**
     * [listContextMenuItem description]
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
    listContextMenuItem: function(item) {
        var grid = this.getUserGrid(),
			record = grid.getSelectionModel().getLastSelected();
       
        if (item.action === 'update-user') {
            this.addEditUser(grid, record);
        }
        
        if (item.action === 'delete-user') {
            this.deleteUser(grid, record);
        }      
    },

    /**
     * [addEditUser description]
     * @param {[type]} grid   [description]
     * @param {[type]} record [description]
     */
    addEditUser: function(grid, record) {
		var window = Ext.create('AM.view.user.Window'),
			form = window.down('form');
		
		if(record.data) {
			form.loadRecord(record);
        }
		
		window.show();
    },    
    /**
     * [saveUser description]
     * @param  {[type]} button [description]
     * @return {[type]}        [description]
     */
    saveUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
		if (form.getForm().isValid()) {
			if (values.id > 0){
				record.set(values);
			} else{
				record = Ext.create('AM.model.User');
				record.set(values);
				this.getUsersStore().add(record);
			}
			
			win.close();
			this.getUsersStore().sync().load();
        }
    },
	/**
	 * [deleteUser description]
	 * @param  {[type]} grid   [description]
	 * @param  {[type]} record [description]
	 * @return {[type]}        [description]
	 */
	deleteUser: function(grid, record) {
        if (record) {
            Ext.Msg.confirm('Delete', 'Вы действительно хотите удалить этого пользователя?', function(btn) {
                if (btn === 'yes') {
                    grid.getStore().remove(record);
                    grid.getStore().sync();               
                }
            });
        }
    }
});
