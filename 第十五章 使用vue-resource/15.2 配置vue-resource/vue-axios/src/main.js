import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

axios.defaults.baseURL = "https://elm.cangdu.org/v1"

new Vue({
  el: '#app',
  render: h => h(App)
})
