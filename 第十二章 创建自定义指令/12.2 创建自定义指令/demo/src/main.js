import Vue from 'vue'
import App from './App.vue'

Vue.directive("aa",{
    bind(el,binding,vnode){
        let type = binding.arg;
        let fn = binding.value;
       //
       el.addEventListener(type,fn)
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
