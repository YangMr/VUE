<template lang="html">
    <form>
        <label for="">Added Quote:</label>
        <div>
            <textarea v-model="lang" name="name" rows="8" cols="80"></textarea>
        </div>
        <div>
            <button @click.prevent="AddedQuote">添加</button>
        </div>
    </form>
</template>

<script>
export default {
    data : function(){
        return {
            lang : ""
        }
    },
    methods : {
        AddedQuote : function(){
            this.$emit("add",this.lang);
            this.lang = "";
        }
    }
}
</script>

<style lang="css" scoped>
</style>
