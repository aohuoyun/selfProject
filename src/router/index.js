import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: function (resolve) {
        require(['@/views/index'], resolve)
      }
    },
    {
      path: '/allshoping',
      name: 'allshoping',
      component: function (resolve) {
        require(['@/views/allshoping'], resolve)
      }
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: function (resolve) {
        require(['@/views/shoppingcart'], resolve)
      }
    },
    {
      path: '/member',
      name: 'member',
      component: function (resolve) {
        require(['@/views/member'], resolve)
      }
    },
    {
      path: '/shopdetail',
      name: 'shopdetail',
      component: function (resolve) {
        require(['@/views/shopdetail'], resolve)
      }
    }, 
    {
      path: '/address',
      name: 'address',
      component: function (resolve) {
        require(['@/views/address'], resolve)
      }
    },
    {
      path: '/confirmOrder',
      name: 'address',
      component: function (resolve) {
        require(['@/views/confirm-order.vue'], resolve)
      }
    }
  ]
})
