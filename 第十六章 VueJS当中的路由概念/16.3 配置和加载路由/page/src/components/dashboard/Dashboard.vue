<template lang="html">
    <div class="">
        <h1>我是仪表盘</h1>

        <hr>
        <router-link to="/dashboard/page1">page1</router-link>
        <router-link to="/dashboard/page2">page2</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
