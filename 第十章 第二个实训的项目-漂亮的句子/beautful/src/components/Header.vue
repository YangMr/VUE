<template lang="html">
    <div class="row">
        <h1>Quotes Added</h1>
        <div class="progress">
            <div class="progress-bar" role="progressbar"
                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                 :style="{width : currentQuote/maxQuotes * 100 + '%' }">
                {{currentQuote}}/{{maxQuotes}}
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props : ["maxQuotes","currentQuote"]
}
</script>

<style lang="css" scoped>
</style>
