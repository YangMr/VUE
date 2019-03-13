<template lang="html">
    <div class="">
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    methods : {
        ...mapMutations([
            'increment',
            'decrement'
        ])
    }
    // methods : {
    //     increment : function(){
    //         this.$store.commit("increment")
    //     },
    //     decrement : function(){
    //         this.$store.commit("decrement")
    //     }
    // }
}
</script>

<style lang="css" scoped>
</style>
