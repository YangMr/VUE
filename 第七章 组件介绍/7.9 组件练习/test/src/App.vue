<template>
  <div class="container">
     <app-header></app-header>
     <hr>
    <div class="row">
              <Servers></Servers>
              <ServerDetails></ServerDetails>
    </div>
    <hr>
    <app-footer></app-footer>

  </div>
</template>

<script>

import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import Servers from './components/server/Servers.vue'
import ServerDetails from './components/server/ServerDetails.vue'
export default {
    components : {
        "app-header" : Header,
        "app-footer" : Footer,
        Servers,
        ServerDetails
    }
}
</script>

<style>

</style>
