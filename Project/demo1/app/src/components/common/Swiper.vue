<template>
    <div>
      <div class="swiper">
        <mt-swipe :show-indicators="false">
          <mt-swipe-item v-for="item in swipers" :key="item.id">
            <img :src="item.img" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
        data : function(){
          return {
            swipers : []
          }
        },
        //实例在创建的时候获取数据
        created() {
          this.$axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(response=>{
            console.log(response);
            this.swipers = response.data.message;
          },error=>{
            console.log("错误信息:"+error.message)
          })
        }
    }
</script>

<style scoped>
  .swiper{
    height:220px;
  }
  .swiper img{
    width:100%;
    height:100%;
    display: block;
  }
</style>
