<template>
  <ul id="footer">
    <router-link tag="li" to="/index" class="tab-item">
      <i class="iconfont icon-shouye"></i>
      <h2>首页</h2>
    </router-link>
    <router-link tag="li" to="/allshoping" class="tab-item">
      <i class="iconfont icon-fenlei"></i>
      <h2>全部商品</h2>
    </router-link>
    <router-link tag="li" to="/shoppingcart" class="tab-item">
      <i class="iconfont icon-gouwuche"></i>
      <h2>购物车</h2>
    </router-link>
    <router-link tag="li" to="/member" class="tab-item">
      <i class="iconfont icon-wode"></i>
      <h2>会员中心</h2>
    </router-link>
  </ul>
</template>
<style scoped lang = "scss">
  #footer {
    width: 100%;
    height: 1.14rem;
    position: fixed;
    bottom: 0;
    background: #f7f7fa;
    .tab-item {
      width: 25%;
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
    .router-link-active {
      color: #ff5654;
    }
  }
</style>

