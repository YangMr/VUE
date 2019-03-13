<template lang="html">
    <div class="">
        <div class="swiper">
            <mt-swipe :showIndicators="false" :auto="4000">
              <mt-swipe-item v-for="item in 5">{{item}}</mt-swipe-item>
            </mt-swipe>
        </div>
        <ul>
            <router-link :to="{ name: 'detail'}" tag="li"><a>详情页</a></router-link>
            <router-link :to="{ name: 'list' }" tag="li"><a>列表页</a></router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name : "Home"
}
</script>

<style lang="css" scoped>
    .swiper{
        height:220px;
        background:red;
    }
</style>
