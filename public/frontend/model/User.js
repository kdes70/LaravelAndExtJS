Ext.define('AM.model.User', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'login',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'last_name',
        type: 'string'
    }, {
        name: 'created_at',
        type: 'string'
    }, {
        name: 'id_status',
        type: 'int'
    }, {
        name: 'comment',
        type: 'string'
    }],

    idProperty: 'id',

  
}); 