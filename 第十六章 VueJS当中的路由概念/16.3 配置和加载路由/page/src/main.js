import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './router/router'

const routers = new VueRouter({
    routes :  router.routes,
    linkActiveClass : "active",
    mode : "history"
})

new Vue({
  el: '#app',
  router : routers,
  render: h => h(App)
})
