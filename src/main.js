import Vue from 'vue'
import router from './public/router/router'
import App from './public/App.vue'
import vuetify from './public/plugins/plugin-vuetify'
import './public/plugins/plugin-vue-quill-editor'

Vue.config.productionTip = false

new Vue({
	vuetify: vuetify,
	router: router,
	render: (h) => h(App),
}).$mount('#app')