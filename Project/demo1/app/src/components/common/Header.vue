<template>
    <div>
      <mt-header fixed :title="getName">
        <router-link v-show="show" to="" slot="left">
          <mt-button @click="back" icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
        name: "Header",
        methods : {
          back : function () {
            this.$router.back(-1)
          }
        },
        computed : {
          ...mapGetters([
            'show',
            'getName'
          ])
          // isShow : function () {
          //   return this.$store.getters.show;
          // }
        }
    }
</script>

<style scoped>

</style>
