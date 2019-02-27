<template lang="html">
    <div class="component">
        <slot name="s1"></slot>
        <hr>
        <slot name="s2"></slot>
        <hr>
        <slot name="s3"></slot>
    </div>
</template>


<script>
export default {
}
</script>

<style lang="css" scoped>
h1{
    color :yellow;
}
p {
    font-size:40px;
}


</style>
