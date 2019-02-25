<template>
  <div id="app">
     <my-cmp></my-cmp>
        <hr>
     <my-cmp></my-cmp>
<hr>
     <my-cmp></my-cmp>
<hr>
     <my-cmp></my-cmp>
  </div>
</template>

<script>
    export default {
        data : function(){
            return {
                status : "circle"
            }
        },
        template : `<p>ServerStatus : {{status}}</p>`
    }
</script>

<style>

</style>
