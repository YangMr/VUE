<template>
    <div>
        <p>ServerStatus : {{status}}</p>
        <hr>
        <button @click="changeStatus">change</button>
    </div>
</template>

<script>
    export default {
        data : function(){
            return {
                status : "circle"
            }
        },
        methods : {
            changeStatus(){
                this.status = "Normal"
            }
        }
    }
</script>

<style>

</style>
