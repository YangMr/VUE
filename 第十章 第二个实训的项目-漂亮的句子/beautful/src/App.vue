<template>
   <div class="container">
       <app-header :maxQuotes="maxQuotes" :currentQuote="quotes.length"></app-header>
       <app-new-quote @add="getData($event)"></app-new-quote>
       <app-quote-grid @deleted="del($event)" :quotes="quotes"></app-quote-grid>
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
          maxQuotes : 10,  //条数的最大值
          quotes : [
              "This is the first message"
          ]
      }
  },
  components : {
      appQuoteGrid : QuoteGrid,
      appNewQuote : NewQuote,
      appHeader : Header
  },
  methods : {
      getData : function(data){
          if(this.quotes.length >= this.maxQuotes){
              return alert("请删除一条在进行添加")
          }
          this.quotes.push(data);
      },
      del : function(data){
          this.quotes.splice(data,1);
      }
  }
}
</script>

<style>

</style>
