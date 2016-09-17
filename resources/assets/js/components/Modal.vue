<template id="modal-template">
    <div class="modal-mask" v-show="isModalOpen"  transition="modal">
        <div @click.stop="" v-show="isModalOpen" class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">
                        default header
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        default body


                        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>

                        <comment-list>

                        </comment-list>



                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        default footer
                        <button class="modal-default-button"
                                @click="closeModal">
                            OK
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


    /**
     * A collection of loading spinners with Vue.js
     */


    var PulseLoader = require('vue-spinner/dist/vue-spinner.min').PulseLoader;
    export default {

        props: ['id', 'title', 'body'] ,

        created: function() {
            this.closeModal();
        },

        computed: {

            isModalOpen: function() {


                return this.$root[this.id + 'IsOpen'];
            }
        },

        methods: {
            closeModal: function() {
                this.$root.$set('show', false);
                this.$root.$set(this.id + 'IsOpen', false);
            }

        },

        components:{
            'comment-list':  require('./CommentList.vue'),
            'PulseLoader': PulseLoader
        }



    }
</script>

