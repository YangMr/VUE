// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import Axios from 'axios'
Vue.prototype.$axios = Axios;
//引入qs模块
import qs from 'qs';
//将qs模块挂载到vue的原型上,在全局就可以进行使用
Vue.prototype.$qs = qs;
//设置请求的头信息
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
import {store} from './store/store'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
