<template>
    <div>
      <app-swiper></app-swiper>
      <app-infobtn></app-infobtn>
      <div style="height:800px">我想好好许欸小</div>
    </div>
</template>

<script>
  import Swiper from '../common/Swiper'
  import Infobtn from '../common/Infobtn'
    export default {
      name: "Home",
      components : {
        appSwiper :Swiper,
        appInfobtn :Infobtn
      },
      mounted() {
        this.$store.commit('backShow');
        this.$store.commit("changeName",'首页')
      }
    }
</script>

<style scoped>

</style>
