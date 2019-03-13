import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from '../components/Home/Home'
import My from '../components/My/My'
import Search from '../components/Search/Search'
import Deloyment from '../components/Deloyment/Deloyment'
import Hierarchy from '../components/Hierarchy/Hierarchy'
import Mystudent from '../components/Mystudent/Mystudent'
export default new Router({
  routes: [
    {
      path : "",
      redirect : "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path : '/search',
      name : 'search',
      component: Search
    },
    {
      path : '/my',
      name : 'my',
      component: My
    },
    {
      path : '/deloyment',
      name : 'deloyment',
      component: Deloyment
    },
    {
      path : '/hierarchy',
      name : 'hierarchy',
      component : Hierarchy
    },
    {
      path : '/mystudent',
      name : 'mystudent',
      component : Mystudent
    }
  ],
  mode : 'history'
})
