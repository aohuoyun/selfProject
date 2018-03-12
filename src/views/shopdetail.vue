<template>
  <div class="shopDetail heightauto">
    <!-- 轮播图位置 -->
    <swiper :recommend = "recommend"></swiper>
    <h2>美的牌变频空调</h2>
    <h5>L4.274.234</h5>
    <h3>
      <span class="newPrice">￥ 1190</span>
      <span class="oldPrice">￥1300</span>
    </h3>
    <h4>
      <span>快递:包邮</span>
      <span class="shellNum">销量0件</span>
    </h4>
    <div class="selectNum">
      <span>请选择 数量</span>
      <i class="iconfont icon-xiangyoujiantou fn-right"></i>
    </div>
    <div class="selectNum">商品详情</div>
    <detailfooter></detailfooter>
  </div>
</template>
<script>
import footers from '@/components/footer'
import swiper from '@/components/swiper'
import detailfooter from '@/components/shop-detail-footer'
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
  components:{
    swiper,
    detailfooter
  },
  created() {
    // console.log(this.recommend);
  }
};
</script>
<style scoped lang = "scss">
  .shopDetail{
    
    h2,h3,h4,h5,.selectNum{
      width: 100%;
      text-align: left;
      padding-left: 0.2rem;
      background: #fff;
    }
    h2{
      height: 0.9rem;
      color: #333;
      line-height: 0.9rem;
      font-size: 0.36rem;
    }
    h5{
      height: 0.6rem;
      line-height: 0.6rem;
      color: #ff3e69;
      font-size: 0.28rem;
    }
    h5{
      height: 0.6rem;
      line-height: 0.6rem;
      color: #ff3e69;
      font-size: 0.28rem;
    }
    h3{
      padding-top: 0.2rem;
      .newPrice{
        color: #fa5860;
        font-weight: bold;
        font-size: 0.36rem;
      }
      .oldPrice{
        padding-left: 0.1rem;
        color: #aaa;
        font-size: 0.30rem;
        text-decoration: line-through;
      }
    }
    h4{
      font-size: 0.3rem;
      color: #aaa;
      height: 0.6rem;
      line-height: 0.6rem;
      .shellNum{
        padding-left: 0.4rem;
      }
    }
    .selectNum{
      height: 1.2rem;
      line-height: 1.2rem;
      color: #000;
      font-size: 0.28rem;
      margin-top:0.2rem;
      .icon-xiangyoujiantou{
        margin-right: 0.2rem;
      }
    }
  }
</style>

