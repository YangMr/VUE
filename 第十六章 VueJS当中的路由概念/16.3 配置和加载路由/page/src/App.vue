<template>
  <div id="app">
      <app-header></app-header>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
export default {
   components : {
       appHeader : Header
   }
}
</script>

<style>

.active{
    color:red;
    text-decoration:none;
}


</style>
