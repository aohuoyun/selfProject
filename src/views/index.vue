<template>
  <div id="pageIndex" class="heightauto">
    <search></search>
    <!-- 轮播图位置 -->
    <div class="swiper">
      <mt-swipe :auto="5000">
        <mt-swipe-item v-for="item in recommend" :key="item.id">
          <img :src="item.img" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 公告位置 -->
    <div class="notice"></div>
    <!-- 导航位置 -->
    <!-- <ul class="ulList">
      <li>
        <div>
          <i class="iconfont icon-fenlei"></i>
        </div>
        <h2>全部商品</h2>
      </li>
      <li>
        <div class="bgcolor1">
          <i class="iconfont icon-liwu"></i>
        </div>
        <h2>推荐商品</h2>
      </li>
      <li>
        <div class="bgcolor2">
          <i class="iconfont icon-lingcunwei"></i>
        </div>
        <h2>会员充值</h2>
      </li>
      <li>
        <div>
          <i class="iconfont icon-wodejuhuasuan"></i>
        </div>
        <h2>我的资料</h2>
      </li>
    </ul> -->
    <section class="shopList heightauto" v-for="item in 5" :key="item">
      <img src="https://fz.fp.ps.netease.com/file/5a9d13d87f9d2a4e86850025o8qhihZr" alt="">
      <div class="titles">
        <i class="iconfont icon-gouwuche"></i>
        <h3>冰箱</h3>
      </div>
      <!-- 商品列表 -->
      <shopcontent></shopcontent>
    </section>
    <footers></footers>
  </div>
</template>
<script>
import Search from '@/components/search/search'
import shopcontent from '@/components/shop-content'
import footers from '@/components/footer'
export default {
  data() {
    return {
      recommend: [
        {
          id: 0,
          url: "",
          img:
          "https://fz.fp.ps.netease.com/file/5a9d13d87f9d2a4e86850025o8qhihZr"
        },
        {
          id: 1,
          url: "",
          img:
          "https://fz.fp.ps.netease.com/file/5aa0f21320e3dbddc99647b7iQioi6dc"
        },
        {
          id: 2,
          url: "",
          img:
          "https://fz.fp.ps.netease.com/file/5a9d13d87f9d2a4e86850025o8qhihZr"
        }
      ]
    };
  },
  created() {
    // console.log(this.recommend);
  },
  components: {
    Search,
    shopcontent,
    footers
  }
};
</script>
<style scoped lang = "scss">
#pageIndex {

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
  .notice {
    width: 100%;
    height: 0.6rem;
    background: #fe8100;
  }
  .ulList {
    width: 100%;
    height: 1.8rem;
    background: #fff;
    margin-top: 0.2rem;
    li {
      width: 25%;
      text-align: center;
      float: left;
      color: #989898;
      position: relative;
      padding-top: 0.3rem;
      div {
        width: 0.9rem;
        height: 0.9rem;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -0.45rem;
        background: #fd455e;
        &.bgcolor1 {
          background: #00e7ba;
        }
        &.bgcolor2 {
          background: #ead165;
        }
      }
      .iconfont {
        line-height: 0.9rem;
        font-size: 0.7rem;
        color: #fff;
        display: inline-block;
      }
      h2 {
        margin-top: 0.95rem;
        font-size: 0.3rem;
      }
    }
  }
  .shopList {
    margin-top: 0.2rem;
    img {
      width: 100%;
      height: 4.4rem;
    }
    .titles {
      text-align: center;
      height: 0.8rem;
      line-height: 0.8rem;
      background: #fff;
      color: #ff5654;
      i {
        font-size: 0.4rem;
      }
      h3 {
        font-size: 0.28rem;
        display: inline;
      }
    }
  }
}
</style>
