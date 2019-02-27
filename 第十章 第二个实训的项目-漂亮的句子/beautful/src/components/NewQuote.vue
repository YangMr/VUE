<template lang="html">
    <form>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <label for="">Quote:</label>
            <textarea rows="3" v-model="con"  class="form-control"></textarea>
        </div>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <button class="btn btn-primary" @click.prevent="quoteAdded">Add Quote</button>
        </div>
    </form>
</template>

<script>
export default {
    data : function(){
        return {
            con : ""
        }
    },
    methods : {
        quoteAdded : function(){
            this.$emit("add",this.con);
            this.con = "";
        }
    }
}
</script>

<style lang="css" scoped>
</style>
