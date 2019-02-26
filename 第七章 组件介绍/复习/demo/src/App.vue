<template>
  <div id="app">
      <list></list>
      <hr>
      <Home></Home>
  </div>
</template>

<script>
import Home from './compoment/Home.vue'
export default {
    //组件的局部注册
    components : {
         // "Home" : Home
         Home
    }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

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
