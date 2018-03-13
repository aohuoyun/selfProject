import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import allshoping from '@/views/allshoping'
import shoppingcart from '@/views/shoppingcart'
import member from '@/views/member'
import shopdetail from '@/views/shopdetail'
import address from '@/views/address'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/allshoping',
      name: 'allshoping',
      component: allshoping
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: shoppingcart
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/shopdetail',
      name: 'shopdetail',
      component: shopdetail
    }, 
    {
      path: '/address',
      name: 'address',
      component: address
    }
  ]
})
