
/**
 * View Grid Users
 */




Ext.define('AM.view.user.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.user-grid',
	id: 'userGrid',
	title : 'Пользователи',
	store: 'Users',
	stateful: true,
	collapsible: true,
	multiSelect: true,
	
	 viewConfig: {
            autoFill: true,      
            getRowClass: function (record, rowIndex, rowParams, store) {
                return record.get('id_status') ? 'user-active' : 'user-disabled';
            }
        },

	initComponent: function() {
		Ext.apply(this, {

		// кнопка добавления 
			dockedItems: [{
				xtype: 'toolbar',
				items: [{
					icon: '/resources/img/icon/add.png',
					itemId: 'add',
					text: 'Add User',
					action: 'add'
				}]
			},
				{
					xtype: 'pagingtoolbar',
					displayInfo: true,
					dock: 'top',
					store: 'Users'


				},
			],




			columns: [
			 {
                header:'',
                renderer: function (v, m, r) {
                    var id = Ext.id();

                    Ext.defer(function () {
                    		// кнопка 
                        Ext.widget('button', {

                            renderTo: id,
                            text: '+', //+ r.get('id'),
                            width: 50,
                            // По нажатию выводим окно с коментариями
                            handler: function () {
					            Ext.widget('window', {
					                title: 'Test window',
					                autoShow: true,
					                width: 300,
					                height: 150,
					                bodyStyle: { 'background-color': '#FFFFFF', 'padding': '10px' },
					                // делаем запрос к коментариям
					                autoLoad: { url: 'start/get_comm/'+r.get('id') },
					                
					            });
					        },
                        });
                    }, 50);
                    return Ext.String.format('<div id="{0}"></div>', id);
                }
            },{
				header: 'ID',
				hidden:true,
				dataIndex: 'id',
				flex:0
			},{
				header: 'login',
				flex:1,
				dataIndex: 'login'
			},{
				header: 'Name',
				flex:1,
				dataIndex: 'name'
			},{
				header: 'Last Name',
				flex:1,
				dataIndex: 'last_name'
			},{
				header: 'Date Reg',
				flex:0,
				renderer : Ext.util.Format.dateRenderer('d/m/Y (H:i)'),
				dataIndex: 'created_at',
				width: 150,
			},{
				header: 'Status',
                dataIndex: 'id_status',
                align: 'center',
                width: 50,
                renderer: function (value, meta, record) {
                    var url = value == true ?
                        '/img/icon/online.png' :
                        '/img/icon/busy.png';
                    meta.tdCls = 'td-img';
 
                    return '<img src="'+url+'">';
                }
			}],
			listeners: {
				selectionchange: function(selModel, selections) {
					var notSelections = selections.length === 0;

					var win;

					if (!win) {
						win = Ext.create('widget.window', {
							title: 'Layout Window',
							closable: true,
							closeAction: 'hide',
							width: 600,
							minWidth: 350,
							height: 350,
							layout: {
								type: 'border',
								padding: 5
							},
							items: [{
								region: 'west',
								title: 'Navigation',
								width: 200,
								split: true,
								collapsible: true,
								floatable: false
							}, {
								region: 'center',
								xtype: 'tabpanel',
								items: [{
									title: 'Bogus Tab',
									html: 'Hello world 1'
								}, {
									title: 'Another Tab',
									html: 'Hello world 2'
								}, {
									title: 'Closable Tab',
									html: 'Hello world 3',
									closable: true
								}]
							}]
						});
					}
					// button.dom.disabled = true;
					// if (win.isVisible()) {
					// 	win.hide(this, function() {
					// 		button.dom.disabled = false;
					// 	});
					// } else {
					// 	win.show(this, function() {
					// 		button.dom.disabled = false;
					// 	});
					// }
				//});
					//win.down('#planedit').setDisabled(notSelections);
					//win.down('#plandelete').setDisabled(notSelections);
				}
			}

		});


		
		this.callParent(arguments);
	},
	// override initEvents
	initEvents: function() {
		// call the superclass's initEvents implementation
		this.callParent();

		// now add application specific events
		// notice we use the selectionmodel's rowselect event rather
		// than a click event from the grid to provide key navigation
		// as well as mouse navigation


		this.on('selectionchange', this.onRowSelect, this);
	},
	// add a method called onRowSelect
	// This matches the method signature as defined by the 'rowselect'
	// event defined in Ext.selection.RowModel
	onRowSelect: function(sm, rs) {
		// getComponent will retrieve itemId's or id's. Note that itemId's
		// are scoped locally to this instance of a component to avoid
		// conflicts with the ComponentManager
		if (rs.length) {
			console.log(rs);
			console.log(sm);
			console.log(sm.getId());
		}
	}
});
