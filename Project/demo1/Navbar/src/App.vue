<template>
  <div id="app">
    <Title :title="title"></Title>

    <div class="box" style="height:800px;">

    </div>

    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/logo.png">
        搜索
      </mt-tab-item>
      <mt-tab-item id="employment">
        <img slot="icon" src="./assets/logo.png">
        就业
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="./assets/logo.png">
        我的
      </mt-tab-item>
  </mt-tabbar>
  <router-view/>
  </div>
</template>

<script>
import Title from './components/common/Title.vue'
export default {
    components : {
        Title
    },
    data : function(){
        return {
            selected : "home",
            title : "首页"
        }
    },
    watch : {
        selected : function(newValue,oldValue){

            this.$router.push({name : this.selected})
            switch(newValue){
                case "search" :
                    this.title = "搜索";
                    break;
                case "employment" :
                    this.title = "就业";
                    break;
                case "my" :
                    this.title = "我的";
                    break;
                case "home" :
                    this.title = "首页";
                    break;
            }
        }
    }
}
</script>

<style>
    html,body,div{margin:0;padding:0;}

</style>
