<template>
    <div>
      <h1>我的学生信息页面</h1>
    </div>
</template>

<script>
    export default {
        name: "Mystudent",
        mounted() {
          // console.log(this.$route.name)
          this.$store.commit('changeShow');
          this.$store.commit("changeName",'我的学生')
        }
    }
</script>

<style scoped>

</style>
