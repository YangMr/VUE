<template>
    <div>
      <mt-tabbar fixed v-model="selected">
        <mt-tab-item id="home">
          <img slot="icon" src="../../assets/logo.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="search">
          <img slot="icon" src="../../assets/logo.png">
          搜索
        </mt-tab-item>
        <mt-tab-item id="deloyment">
          <img slot="icon" src="../../assets/logo.png">
          就业
        </mt-tab-item>
        <mt-tab-item id="my">
          <img slot="icon" src="../../assets/logo.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Tabbar",
        data : function(){
          return {
             selected : "home"
          }
        },
        watch : {
          selected : function (newV,oldV) {
            this.$router.push({name : this.selected});
            switch (this.selected) {
              case 'home' :
                this.$store.commit('changeName',"首页");
                break;
              case 'search' :
                this.$store.commit('changeName',"搜索");
                break;
              case  'deloyment' :
                this.$store.commit('changeName',"就业");
                break;
              case 'my' :
                this.$store.commit('changeName',"我的");
                break;
            }
          }
        }
    }
</script>

<style scoped>

</style>
