<template lang="html">
    <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Server Status : {{status}}</h1>
                </header>
            </div>
   </div>
</template>

<script>
export default {
    data : function(){
        return {
            status : "circle"
        }
    }
}
</script>

<style lang="css" scoped>
</style>
