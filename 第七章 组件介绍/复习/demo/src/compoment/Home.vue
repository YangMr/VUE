<template lang="html">
    <ul>
        <li @click="test" v-for="item in array">{{item}}</li>
    </ul>
</template>

<script>
export default {
    data : function(){
        return {
            array : ["第一题","第二题","第三题"]
        }
    },
    methods : {
        test : function(){
            alert("test")
        }
    }
}
</script>

<style lang="css">

    html,div,body,ul,li{margin:0;padding:0;}
    ul li{
        height:30px;
        line-height: 30px;
        border-bottom:1px dashed #ccc;
    }

</style>
