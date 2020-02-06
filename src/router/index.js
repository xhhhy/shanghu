import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/Home.vue')
    }
  },
  {
    path: '/changepass',
    name: 'changepass',
    component: function () {
      return import('../views/changepass.vue')
    }
  },
  {
    path: '/index',
    name: 'index',
    component: function () {
      return import('../views/index/index.vue')
    }
  },
  {
    path: '/usdtmessage',
    name: 'usdtmessage',
    component: function () {
      return import('../views/usdt/usdtmessage.vue')
    }
  },
  {
    path: '/user',
    name: 'user',
    component: function () {
      return import('../views/user/user.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/user/about.vue')
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: function () {
      return import('../views/user/admin.vue')
    }
  },
  {
    path: '/mycont',
    name: 'mycont',
    component: function () {
      return import('../views/user/mycont.vue')
    }
  },
  {
    path: '/userpin',
    name: 'userpin',
    component: function () {
      return import('../views/user/userpin.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
