<template lang="html">
    <div class="parent">
        <h1>我是父组件</h1>
        <p>My Name Is : {{name}}</p>
        <button @click="change">change</button>
        <hr>
        <ChildrenOne @pro="cir($event)"  :myName="name"></ChildrenOne>
        <hr>
        <ChildrenTwo></ChildrenTwo>
    </div>
</template>

<script>
import ChildrenOne from './ChildrenOne.vue'
import ChildrenTwo from './ChildrenTwo.vue'
export default {
    data : function(){
            return {
                name : "Hello"
            }
    },
    methods : {
            change : function(){
                this.name = "World"
            },
            cir : function(data){
                this.name = data
            }
    },
    components : {
        ChildrenOne,
        ChildrenTwo
    }
}
</script>

<style lang="css" scoped>
</style>
