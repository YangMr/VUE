<template lang="html">
    <div class="">
        <app-header></app-header>
        <app-swiper></app-swiper>
        <mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="../assets/logo.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="../assets/logo.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="../assets/logo.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="../assets/logo.png">
    我的
  </mt-tab-item>
</mt-tabbar>
    </div>
</template>

<script>
import Header from './index/Header.vue'
import Swiper from './index/Swiper.vue'
export default {
    components : {
        appHeader : Header,
        appSwiper : Swiper
    },
    data : function(){
        return {
            selected : "外卖"
        }
    }
}
</script>

<style lang="css" scoped>
</style>
