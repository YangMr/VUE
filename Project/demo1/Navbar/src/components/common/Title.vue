<template lang="html">
    <div>
        <mt-header class="title" fixed :title="title">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

<script>
export default {
    name : "Title",
    props : ["title"]
}
</script>

<style lang="css" scoped>
    .title{
        background:#333;
        color:#fff;
    }
</style>
