<template lang="html">
    <div>
        <div class="swiper">
            <mt-swipe :show-indicators="false">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.swiper{
    height:220px;
    background:red;
}
</style>
