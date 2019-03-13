<template lang="html">
    <div class="">
        <p>Counter is : {{stringCounter}}</p>
        <p>Counter is : {{dobuleCounter}}</p>
        <hr>
        <p>
            <input type="text" @input="test" :value="value">{{value}}
        </p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    methods : {
        test : function(event){
            this.$store.commit("update",event.target.value)
        }
    },
    computed : {
        ...mapGetters([
            'dobuleCounter' ,
            'stringCounter',
            'value'
        ])
        // flag : function(){
        //     return this.$store.getters.stringCounter;
        // }
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
