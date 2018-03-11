<template>
  <div id="app">
    <div class="contentdata">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style scoped lang = "scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .contentdata{
    margin-bottom: 1.34rem;
  }
}
</style>
