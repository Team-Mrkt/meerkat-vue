import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '../views/Homepage.vue'
import QuickReport from '../views/QuickReport.vue'
import About from '../views/About.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/QuickReport',
    name: 'QuickReport',
    component: QuickReport
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
