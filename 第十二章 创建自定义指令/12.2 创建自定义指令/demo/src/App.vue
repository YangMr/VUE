<template>
  <div id="app">
      <input type="text" v-focus name="" value="">
      <hr>
     <button v-bg.delay  v-aa:click="fn1">fn1</button>
     <button v-aa:mouseout="fn2">fn2</button>
  </div>
</template>

<script>
import demo2 from './demo2.vue'
export default {
    components : {
            aInput : demo2
    },
    directives : {
        focus : {
            bind(el,binding,vnode){
                el.focus();
            }
        },
        bg : {
            bind(el,binding,vnode){
                var delay = 0;
                if(binding.modifiers['delay']){
                    delay = 3000;
                }
                setTimeout(()=>{
                    el.style.background = "red";
                },delay)

            }
        }
    },

    methods : {
        fn1 : function(){
            alert("hello")
        },
        fn2 : function(){
            alert("word")
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
