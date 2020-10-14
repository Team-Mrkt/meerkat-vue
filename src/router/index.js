import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '../views/Homepage.vue'
import QuickReport from '../views/QuickReport.vue'
import About from '../views/About.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Feed from '../views/Feed.vue'
import PostDetails from '../views/PostDetails.vue'
import Search from '../views/Search.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
    meta: {
      guest: true
    }
  },
  {
    path: '/QuickReport',
    name: 'QuickReport',
    component: QuickReport,
    meta: {
      guest: true
    }
  },
  {
    path: '/About',
    name: 'About',
    component: About,
    meta: {
      guest: true
    }
  },
  {
    path: '/Sign-Up',
    name: 'SignUp',
    component: SignUp,
    meta: {
      guest: true
    }
  },
  {
    path: '/Sign-In',
    name: 'SignIn',
    component: SignIn,
    meta: {
      guest: true
    }
  },
  {
    path: '/Feed',
    name: 'Feed',
    component: Feed,
    meta: {
      authorize: true
    }
  },
  {
    path: '/Feeds/:id',
    name: 'PostDetails',
    component: PostDetails,
    meta: {
      authorize: true
    }
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search,
    meta: {
      authorize: true
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta: {
      authorize: true
    }
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


router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.authorize)) {
    // Authorized Pages will be handled here
    if (!localStorage.getItem('userDetails')) {
      next({ name: 'Homepage', params: { nextUrl: to.fullPath } })
    } else {
      next()
    }
  } else if (to.matched.some(rec => rec.meta.guest)) {
    if (!localStorage.getItem('userDetails')) {
      // if (!from.name) {
      //   if (!to.params.nextUrl) {
      //     console.log('none at all')
      //     next()
      //   } else {
      //     console.log('e dey')
      //     next({ params: { nextUrl: from.params.nextUrl }})
      //   }
      // } else if (from.name) {
      //   if (!from.params.nextUrl) {
      //     console.log('none')
      //     next()
      //   } else {
      //     console.log('e dey')
      //     next({ name: to.name, params: { nextUrl: from.params.nextUrl }})
      //   }
      // } else {
      //   next()
      // }
      next()
    } else {
      next({ name: 'Feed'})
    }
  } else {
    next();
  }
})

export default router
