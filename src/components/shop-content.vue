<template>
  <div class="shop-content">
    <!-- 商品列表 -->
    <div class="shoping" v-for="item in 4" :key="item">
      <img class="imgContent" src="../assets/img/1.jpg" alt="">
      <h3>美的系列</h3>
      <div class="price">
        <span class="fn-left">￥ 2000</span>
        <button class="buy fn-right" v-if = "isIndex">购买</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      isIndex:{
        default:true,
      }
    },
  }
</script>
<style scoped lang = "scss">
  .shop-content{
    width: 100%;
    height: auto;
    overflow: hidden;
    .shoping {
      width: 3.45rem;
      height: 5.4rem;
      margin: 0.2rem 0 0 0.2rem;
      background: #fff;
      float: left;
      position: relative;
      .imgContent {
        width: 100%;
        height: 3.5rem;
        margin-bottom: 0.2rem;
      }
      h3 {
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        color: #000;
        font-size: 0.3rem;
        padding: 0 0.2rem;
      }
      .price {
        position: absolute;
        bottom: 0.2rem;
        color: #fe4a48;
        width: 100%;
        font-size: 0.3rem;
        padding: 0 0.2rem;
        height: 0.5rem;
        line-height: 0.5rem;
        .buy {
          width: 0.77rem;
          border: 1px solid #fe4a48;
          color: #fe4a48;
          background: #fff;
        }
      }
    }
  }
</style>

