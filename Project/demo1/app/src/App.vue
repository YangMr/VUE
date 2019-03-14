<template>
  <div id="app">
    <app-header></app-header>

    <router-view/>
    <app-tabbar></app-tabbar>
  </div>
</template>

<script>
import Tabbar from './components/common/Tabbar'
import Header from './components/common/Header'

export default {
  name: 'App',
  components : {
    appTabbar :Tabbar,
    appHeader :Header
  },
  data : function () {
    return {

    }
  }
}
</script>

<style>
  *{margin:0; padding:0;}
  body{
    padding:40px 0;
  }
</style>
