<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$router.push('/home');
  }
}
</script>

<style>
@import url('./../static/css/base');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  height: 100%;
  width: 100%;

}
</style>
