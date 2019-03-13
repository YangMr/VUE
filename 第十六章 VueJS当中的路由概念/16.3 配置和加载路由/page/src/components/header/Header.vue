<template lang="html">
    <div class="header">
        <div class="header-top">
            <ul class="welcome">
                <li><router-link to="/welcome">主页</router-link></li>
            </ul>
            <ul class="list">
                <li><router-link to="/signup/123">注册</router-link></li>
                <li><router-link v-bind:to="{name : 'sign'}">登入</router-link></li>
                <li><router-link to="/dashboard">仪表盘</router-link></li>
            </ul>
            <div class="" style="clear:both">

            </div>
            <button @click="native">跳转</button>
            <p>接受url后面的参数: {{id}}</p>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data :function(){
        return {
            id : this.$route.params.id
        }
    },
    watch : {
            '$route'(to,form){
                this.id = to.params.id
            }
    },
    methods:{
        native : function(){
            this.$router.push({path : "/test"})
        }
    }
}
</script>

<style lang="css" scoped>
    html,body,div,ul,li,a{margin:0; padding:0;}
    ul{list-style-type:none;}
    .header-top{
        border-bottom:1px solid purple;
        overflow:hidden;
    }
    .header .welcome{
        float:left;
        height:60px;
        line-height:60px;
    }
    .header .list{
        float:right;
        height:60px;
        line-height:60px;
    }
    .header .list li{
        float:left;
    }
</style>
