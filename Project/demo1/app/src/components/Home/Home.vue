<template>
    <div>
      <app-swiper></app-swiper>
      <app-infobtn></app-infobtn>
      <button @click="post">获取后台提供的数据</button>
    </div>
</template>

<script>
  import Swiper from '../common/Swiper'
  import Infobtn from '../common/Infobtn'
  let data = {id : "1"};

    export default {
      name: "Home",
      methods : {
        post : function () {
          this.$axios({
            method : "post",
            url : "http://234j08j718.iok.la/proxy_manage/app/getStudentById3",
            data : this.$qs.stringify(data),
          }).then(response=>{
            console.log(response)
          },error=>{
            console.log(`错误信息:${error.message}`)
          })
          // this.$axios.post("http://234j08j718.iok.la/proxy_manage/app/getStudentById3",{id : "1"}).then(response=>{
          //   console.log(response)
          // },error=>{
          //   console.log(`错误信息:${error.message}`)
          // })
        }
      },
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
  button{
    display: block;
    width: 160px;
    margin:20px auto;
    height:55px;
  }
</style>
