import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

//配置跟url地址
axios.defaults.baseURL = "";

//创建拦截器
axios.interceptors.request.use()

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
