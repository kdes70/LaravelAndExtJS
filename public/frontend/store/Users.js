Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',

    /**
     * [proxy description]
     * @type {Object}
     */
    proxy: {
        type: 'ajax',
        api: {
            create: 'start/create',
            read: 'nts/api/v1/read',
            update: 'start/update',
            destroy: 'start/destroy',
        },
        reader: {
            type: 'json',
            root: 'items',
            totalProperty: 'total',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'items'
        }
    },
    
    autoLoad: true,
	remoteSort: true,
    pageSize: 25,
    sorters: [{
		property: 'id',
		direction: 'desc'
    }]
});