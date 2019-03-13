<template>
    <div>
      <mt-header :title="title">
        <router-link to="/" v-show="flag" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
</template>

<script>
    export default {
        props : ["flag",'title'],
        name: "Header"
    }
</script>

<style scoped>

</style>
