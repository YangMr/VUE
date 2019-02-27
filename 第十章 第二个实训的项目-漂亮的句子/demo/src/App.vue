<template>
  <div class="container">
      <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
     <app-new-quote @quoteAdded="newQuote($event)"></app-new-quote>
     <app-quote-grid @quoteDeleted="deleteQuote($event)" :quotes="quotes"></app-quote-grid>
     <div class="row">
         <div class="col-sm-12 text-center">
             <div class="alert alert-info">
                Info : Click on a Quote to delete it!
             </div>
         </div>
     </div>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import Header from './components/Header.vue'
export default {
    data : function(){
        return {
            maxQuotes : 10,
            quotes : [
                "Just a Quote to see something"
            ]
        }
    },
    components : {
        appQuoteGrid : QuoteGrid,
        appNewQuote : NewQuote,
        appHeader : Header
    },
    methods : {
        newQuote : function(data){
            if(this.quotes.length >= this.maxQuotes){
                return alert("请先删除一条")
            }
            this.quotes.push(data)
        },
        deleteQuote : function(index){
            this.quotes.splice(index,1);
        }
    }
}
</script>

<style>

</style>
