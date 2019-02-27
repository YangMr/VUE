<template lang="html">
    <div class="component">
        <p>Yellow</p>

        <button @click="counter++">增加</button>
        <h1>{{counter}}</h1>
    </div>
</template>

<script>
export default {
    data : function(){
        return {
            counter : 0
        }
    }
}
</script>

<style lang="css" scoped>
</style>
