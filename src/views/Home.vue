<template>
  <div>
    这里是home
    <el-button type="primary" @click="logOut">buttonCont</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logOut() {
      window.sessionStorage.clear()
      this.$router.push('/Login')
    }
  }
}

</script>

<style scoped>

</style>
