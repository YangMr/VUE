<template>
    <div class="container">
        <!-- 头部进度条 -->
        <app-header :max="maxQuote" :quotes="quotes.length"></app-header>
        <!-- 添加留言 -->
        <app-new-quote @add="get($event)"></app-new-quote>
        <!-- 展示留言 -->
        <app-quote @dQu="delQuotes($event)" :quotes="quotes"></app-quote>
        <!-- 底部信息 -->
        <div class="info">
            info : 点击可以进行删除
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue'
import NewQuote from './components/NewQuote.vue'
import Header from './components/Header.vue'
export default {
  components : {
      appQuote : Quote,
      appNewQuote : NewQuote,
      appHeader : Header
  },
  data : function(){
      return {
          maxQuote : 10,
          quotes : [
              "This is a pig"
          ]
      }
  },
  methods : {
      get : function(data){
          if(this.quotes.length >=this.maxQuote){
              return alert("请先删除一条")
          }
          this.quotes.push(data)
      },
      delQuotes : function(count){
          this.quotes.splice(count,1);
      }
  }
}
</script>

<style>
    .grid{
        padding:30px 50px;
        border:1px solid #ccc;
        box-shadow:2px 3px 3px #333;
        float:left;
        margin:20px;
        font-size:25px;
        font-family:"黑体";
    }
    .info{
        clear:both;
        width:80%;
        height:40px;
        border:1px solid purple;
        text-align:center;
        line-height:40px;
        margin:0 auto;
        font-size:16px;
        background:red;
        color:#fff;

    }
</style>
