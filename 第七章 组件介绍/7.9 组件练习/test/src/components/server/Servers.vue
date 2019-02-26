<template lang="html">
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
    li{
        color : blue;
    }
</style>
