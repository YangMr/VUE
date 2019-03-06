<template>
  <div id="app">
      <!-- 跳转的链接 -->
      <ul>
          <router-link tag="li" to="/reg"><a>注册</a></router-link>
          <router-link tag="li" to="/login"><a>登录</a></router-link>
      </ul>
      <!-- 展示相应组件的内容 -->
      <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style>
  .active, .active a{
     color : yellow;
     text-decoration : none;
 }
</style>
