<template lang="html">
    <div class="">
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods : {
        ...mapActions([
            'increment',
            'decrement'
        ])
    }

    // methods : {
    //     increment : function(){
    //         this.$store.commit("increment");
    //     },
    //     decrement : function(){
    //         this.$store.commit("decrement")
    //     }
    // }
}
</script>

<style lang="css" scoped>
</style>
