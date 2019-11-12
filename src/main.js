import Vue from 'vue'
import VueLocalStorage from 'vue-ls'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { ValidationProvider } from 'vee-validate';
 
// Register it globally
// main.js or any entry file.
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false

Vue.use(VueLocalStorage)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
