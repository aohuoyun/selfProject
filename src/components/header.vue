<template>
  <div class="hederdata">
    <i class="iconfont icon-xiangzuojiantou fn-left" @click = "goback"></i>
    {{title}}
  </div>
</template>
<script>
  export default{
    props:['title'],
    data(){
      return{
        
      }
    },
    methods:{
      goback(){
        history.back(-1);
      }
    },
  }
</script>
<style scoped lang = "scss">
  .hederdata{
    position: fixed;
    width: 100%;
    height: 1rem;
    background: #ffffff;
    padding: 0 0.25rem;
    line-height: 1rem;
    font-size: 0.34rem;
    text-align: center;
    color: #343434;
    z-index:10;
  }
</style>

