import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '../components/Home.vue'
import My from '../components/My.vue'
import Search from '../components/Search.vue'
import Employment from '../components/Employment.vue'
import List from '../components/home/List.vue'
import Detail from '../components/home/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          redirect : "/home"
      },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/employment',
      name: 'employment',
      component: Employment
    },
    {
      path: '/my',
      name: 'my',
      component: My
  },
  {
      path : "/list",
      name : "list",
      component : List
  },
  {
      path : "/detail",
      name : "detail",
      component : Detail
  }

 ],
 mode : "history"
})
