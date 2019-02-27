<template lang="html">
    <div class="row">
        <app-quote @click.native="deleteQuote(index)" v-for="(item,index) in quotes">{{item}}</app-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue'
export default {
    props : ["quotes"],
    components : {
        appQuote : Quote
    },
    methods : {
        deleteQuote : function(index){
            this.$emit('deleted',index)
        }
    }
}
</script>

<style lang="css" scoped>
</style>
