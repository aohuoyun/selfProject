<template>
  <ul id="shop-footer">
    <router-link tag="li" to="" class="tab-item smallicon">
      <i class="iconfont icon-lianjie"></i>
      <h2>客服</h2>
    </router-link>
    <router-link tag="li" to="" class="tab-item smallicon">
      <i class="iconfont icon-jushoucang"></i>
      <h2>关注</h2>
    </router-link>
    <router-link tag="li" to="/shoppingcart" class="tab-item smallicon">
      <i class="iconfont icon-gouwuche"></i>
      <h2>购物车</h2>
    </router-link>
    <router-link tag="li" to="" class="tab-item addcom addcart">
      <h2>加入购物车</h2>
    </router-link>
    <router-link tag="li" to="" class="tab-item addcom lijibuy">
      <h2>立即购买</h2>
    </router-link>
  </ul>
</template>
<style scoped lang = "scss">
  #shop-footer {
    width: 100%;
    height: 1.14rem;
    position: fixed;
    bottom: 0;
    background: #f7f7fa;
    .smallicon{
      width: 16%;
    }
    .tab-item {
      text-align: center;
      float: left;
      color: #989898;
      .iconfont {
        font-size: 0.4rem;
        display: inline-block;
        line-height: 0.7rem;
        /* margin: 0.15rem 0; */
      }
      h2 {
        font-size: 0.28rem;
      }
    }
    .addcom{
      width: 26%;
      h2{
        line-height: 1.14rem;
        font-size: 0.36rem;
        color: #fff;
      }
    }
    .addcart{
      background: #ff9602;
    }
    .lijibuy{
      background: #fc5655;
    }
    /* .router-link-active {
      color: #ff5654;
    } */
  }
</style>

