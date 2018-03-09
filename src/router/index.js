import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import classify from '@/views/classify'
import shoppingcart from '@/views/shoppingcart'
import member from '@/views/member'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
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
    }
  ]
})
