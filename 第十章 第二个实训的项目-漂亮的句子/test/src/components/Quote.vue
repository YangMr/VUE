<template lang="html">
  <div class="component">
      <app-quote-grid @click.native="del(index)" v-for='(item,index) in quotes'>
         <div class="grid">
            {{item}}/{{index}}
         </div>
      </app-quote-grid>
  </div>
</template>

<script>

import QuoteGrid from './QuoteGrid.vue'

export default {
    props : ["quotes"],
    components : {
        appQuoteGrid : QuoteGrid
    },
    methods : {
        del : function(num){
            this.$emit("dQu",num);
        }
    }
}
</script>

<style lang="css" scoped>
</style>
