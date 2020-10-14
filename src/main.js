import Vue from 'vue'

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "vue-toastification";
import VModal from "vue-js-modal";
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueMoment from 'vue-moment';
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false
Vue.use(VModal)
Vue.use(Toast);
Vue.use(VueAxios, axios);
Vue.use(VueMoment);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
