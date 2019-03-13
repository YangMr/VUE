<template lang="html">
    <div class="">



    </div>
</template>

<script>
export default {
    data : function(){
        return {
            selected : "home"
        }
    },
    watch : {
        selected : function(newValue,oldValue){
            console.log(newValue,oldValue)
            this.$router.push({name : newValue})
        }
    }
}
</script>

<style lang="css" scoped>
</style>
