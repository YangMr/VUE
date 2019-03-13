<template lang="html">
    <div class="">
        <p>当前点击的次数为: {{stringCounter}} 次</p>
        <p>Counter is : {{dobuleCounter}}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed : {
        ...mapGetters([
            'dobuleCounter',
            'stringCounter'
        ])
    }
    // computed : {
    //     counter : function(){
    //         return this.$store.getters.dobuleCounter;
    //     }
    // }
}
</script>

<style lang="css" scoped>
</style>
