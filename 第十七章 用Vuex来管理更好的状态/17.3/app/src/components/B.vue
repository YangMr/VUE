<template lang="html">
    <div class="">
        <p>Counter is : {{ dobuleCounter }}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed : {
        ...mapGetters([
            'dobuleCounter'
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
