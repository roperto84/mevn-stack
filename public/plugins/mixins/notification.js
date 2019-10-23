import Vue from 'vue';

const Notification = {
    install(Vue, options) {
        Vue.mixin({
            methods: {
                notify(type, title, text) {
                    this.$notify({
                        group: 'alerts',
                        type: type,
                        title: title, 
                        text: text
                    })
                }
            },
        })
    }
}

Vue.use(Notification);