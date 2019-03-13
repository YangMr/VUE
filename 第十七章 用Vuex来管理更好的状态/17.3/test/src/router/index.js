import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../components/Index.vue'
import List from '../components/List.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path : "/index",
      name : "index",
      component : Index
  },
  {
    path : "/list",
    name : "list",
    component : List
  }
],
mode : "history"
})
