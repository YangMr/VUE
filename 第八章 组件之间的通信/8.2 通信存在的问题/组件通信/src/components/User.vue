<template lang="html">
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>Name is : {{name}}</p>
        <button>父组件给子组件传递数据</button>

        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail @wasName="name=$event" :myName="name"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>

</template>

<script>

import Detail from './Detail.vue'
import Edit from './Edit.vue'
export default {
    data : function(){
        return {
            name : "Max",
            array : ["zhangsan","li","wangwu"]
        }
    },
    methods : {
            test : function(){
                this.name = "Hello World"
            }
    },
    components : {
        "app-user-detail" : Detail,
        "app-user-edit" : Edit
    }
}
</script>

<style lang="css" scoped>
    div{
        background:lightblue;
    }
</style>
