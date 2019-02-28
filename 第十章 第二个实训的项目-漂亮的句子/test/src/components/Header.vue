<template lang="html">
    <div class="component">
        <h2>进度条:</h2>
        <div class="max">
            <div class="con" :style="{width:quotes/max * 100 + '%'}">
                {{quotes}} / {{max}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ["max","quotes"]
}
</script>

<style lang="css" scoped>
    .max{
        width:1100px;
        margin:20px auto;
        height:30px;
        line-height:30px;
        font-weight:bold;
        border-radius:5px;
        overflow:hidden;
        border:1px solid #ccc;
    }
    .con{
        width:60%;
        height:100%;
        background:purple;
        color:#fff;
        transition : 1s;
    }
</style>
