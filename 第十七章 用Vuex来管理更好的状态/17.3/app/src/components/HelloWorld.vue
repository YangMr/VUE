<template>
  <div class="hello">
      <h1>Vuex状态管理</h1>
      <hr>
      <B></B>
      <AnotherB></AnotherB>
      <A></A>
      <hr>
      <AnotherA></AnotherA>
  </div>
</template>

<script>
import A from './A.vue'
import B from './B.vue'
import AnotherB from './AnotherB.vue'
import AnotherA from './AnotherA.vue'

export default {
    components : {
        A,
        B,
        AnotherB,
        AnotherA
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
