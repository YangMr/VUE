<template lang="html">
    <div class="a">
        <h1>我是欢迎界面</h1>
        <div class="">
            <li><router-link to="/signup">注册</router-link></li>
            <li><router-link to="/signin">登入</router-link></li>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
    .a{
        clear:both;
    }
</style>
