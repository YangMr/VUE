<template>
    <div>
      <ul>
        <router-link :to="{name : 'hierarchy',params : {}}" tag="li"><a>上下层级</a></router-link>
        <router-link :to="{name : 'mystudent',params : {}}" tag="li"><a>我的学生</a></router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Infobtn"
    }
</script>

<style scoped>
  ul{
    padding:15px 10px;
    list-style: none;
  }
  ul li{
    padding:25px 20px;
    border:1px solid #ccc;
    float: left;
    margin:0 10px;
  }
  ul li a{
    text-decoration: none;
    font-size:20px;
  }
</style>
