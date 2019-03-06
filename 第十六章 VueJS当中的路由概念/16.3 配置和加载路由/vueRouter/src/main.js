import Vue from 'vue'
import App from './App.vue'
//引入路由模块
import VueRouter from 'vue-router'

//使用路由插件
Vue.use(VueRouter);

//导入路由配置
import router from './router/router'

// console.log(router)
//创建 router 实例，然后传 `routes` 配置
const routers = new VueRouter({
    routes : router.routes,
    linkActiveClass: 'active',
    mode: 'history'
})

//挂载路由
new Vue({
  el: '#app',
  router : routers,
  render: h => h(App)
})
