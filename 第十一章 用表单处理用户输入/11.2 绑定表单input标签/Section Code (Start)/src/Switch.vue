<template lang="html">
  <div>
      <div id="on" @click="isOn = true" :class="{active:isOn}">
          On
      </div>
      <div id="off" @click="isOn =false" :class="{active : !isOn}">
          Off
      </div>
  </div>
</template>

<script>
export default {
    data : function(){
        return {
            isOn : true
        }
    },
    props : ["value"]
}
</script>

<style lang="css" scoped>
    #on,#off{
        width:40px;
        height:20px;
        background:lightgray;
        padding:2px;
        display:inline-block;
        margin:10px -2px;
        box-sizing:content-box;
        cursor:pointer;
        text-align:center;
    }
    #on:hover,#on.active{
        background:lightgreen;
    }
    #off:hover,#off.active{
        background:lightcoral;
    }
</style>
