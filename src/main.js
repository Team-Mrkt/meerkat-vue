import Vue from 'vue'

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import App from './App.vue'
import router from './router'
import store from './store'
import VModal from "vue-js-modal";

Vue.config.productionTip = false
Vue.use(VModal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
