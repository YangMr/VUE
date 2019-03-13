<template>
    <div>
      <app-swiper></app-swiper>
      <app-infobtn></app-infobtn>
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
    }
</script>

<style scoped>

</style>
