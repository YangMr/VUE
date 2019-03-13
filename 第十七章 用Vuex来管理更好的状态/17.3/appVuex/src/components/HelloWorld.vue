<template>
  <div class="hello">
      <h1>Vuex状态管理</h1>
      <hr>
      <app-result></app-result>
      <app-another-result></app-another-result>
      <app-counter></app-counter>

  </div>
</template>

<script>
import Counter from './Counter.vue'
import Result from './Result.vue'
import AnotherResult from './AnotherResult.vue'
export default {
    components : {
        appCounter : Counter,
        appResult : Result,
        appAnotherResult : AnotherResult
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
