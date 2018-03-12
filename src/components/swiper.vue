<template>
  <div class="swiper">
    <mt-swipe :auto="5000">
      <mt-swipe-item v-for="item in recommend" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default{
    props:['recommend'],
    data(){
      return{

      }
    }
  }
</script>
<style scoped lang = "scss">
  .swiper {
    width: 100%;
    height: 3rem;
    .mint-swipe-item {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

