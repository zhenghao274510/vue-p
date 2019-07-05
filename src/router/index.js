import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/home/home'
import Item from './../pages/item/item'
import Share from './../pages/share/share'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
  ]
})
