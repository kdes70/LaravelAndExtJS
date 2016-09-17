
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

//Vue.component('example', require('./components/Example.vue'));

// Register the constructor with id: my-component
Vue.component('modal', require('./components/Modal.vue'));

Vue.config.debug = true;

new Vue({
    el: '#app',

    data: {
        modalData: {},
        show: false
    },

    methods: {

        showModal: function(id, data) {

            this.$set(id + 'IsOpen', true);
            this.$set('show', true);
            this.modalData = data;
            this.loading = true;

            if(this.show){
               this.getComments(data);
            }
        },

        getComments: function (data) {

            var self = this;

            setTimeout(function () {
                // GET /someUrl
                self.$http.get('/comments/'+data.id).then(function (Response ) {
                    console.log(Response);
                    self.loading = false;
                }, function (error) {
                    console.log(error);
                });
            },2000);

        }
    },
  

});

