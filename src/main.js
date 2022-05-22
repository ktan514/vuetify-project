import Vue from 'vue'
import router from './router/router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins/vue-quill-editor'

Vue.config.productionTip = false

new Vue({
	vuetify: vuetify,
	router: router,
	render: (h) => h(App),
}).$mount('#app')