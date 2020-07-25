import Vue from "vue";
import Vuex from "vuex";
import Posts from './modules/posts'
import Profile from './modules/profile'
import Auth from './modules/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Posts,
    Profile,
    Auth
  }
});
