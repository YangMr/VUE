import Vue from 'vue'
import App from './App.vue'

import Home from './compoment/Home.vue'

Vue.component("list",Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
