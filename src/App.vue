<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="divcss">123456</div>
    <mt-button type="primary">primary</mt-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang = "scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .divcss{
    width: 3rem;
    height: 3rem;
    background: blue;
  }
}
</style>
