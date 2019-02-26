<template lang="html">
    <div class="component">
          <h3>You may view the User Details here</h3>
          <p>Many Details</p>
          <button @click="change">change</button>
          <p>子组件的名称为 : {{ myName}}</p>
        <button @click="ct">传递给父组件</button>
     </div>
</template>

<script>
export default {
    props :{
        myName : String
    },
    methods : {
        change : function(){
            this.myName = "Rose";
        },
        ct : function(){
            this.$emit("wasName",this.myName)
        },
        switchName : function(){
            return this.myName.split("").reverse().join("");
        }
    }
}
</script>

<style lang="css" scoped>
    div{
        background:  lightcoral;
    }
</style>
