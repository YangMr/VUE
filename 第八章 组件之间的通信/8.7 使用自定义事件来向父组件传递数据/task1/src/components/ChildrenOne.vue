<template lang="html">
    <div class="childred">
        <h2>我是子组件1</h2>
        <p>我的名字是 : {{myName}}</p>
        <button @click="desk">desk</button>
    </div>
</template>

<script>
export default {
    props : ["myName"],
    methods : {
        desk : function(){
            this.myName ="我想好好学习";
            this.$emit("pro",this.myName)
        }
    }
}
</script>

<style lang="css" scoped>
</style>
