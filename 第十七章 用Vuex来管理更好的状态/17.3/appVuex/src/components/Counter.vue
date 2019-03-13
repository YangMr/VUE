<template lang="html">
    <div class="">
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    methods: {
        ...mapMutations([
            'increment',
            'decrement'
        ])
    }
    // methods : {
    //     increment : function(){
    //          this.$store.getters.dobuleCounter;
    //     },
    //     decrement : function(){
    //          this.$store.getters.dobuleCounter;
    //     }
    // }
}
</script>

<style lang="css" scoped>
</style>
