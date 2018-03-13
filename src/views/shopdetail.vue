<template>
  <div class="shopDetail heightauto">
    <headeres title = "商品详情"></headeres>
    <!-- 轮播图位置 -->
    <swiper :recommend = "recommend" class="swwiper"></swiper>
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
    <div class="selectNum" @click = "showHades = true">
      <span>请选择 数量</span>
      <i class="iconfont icon-xiangyoujiantou fn-right"></i>
    </div>
    <div class="selectNum">商品详情</div>
    <!-- 商品详情位置 -->
    <div class="shop-content"></div>
    <div class="hades" v-show = "showHades"></div>
    <div class="selectNumdetail" v-show = "showHades">
      <img src="https://fz.fp.ps.netease.com/file/5a9d13d87f9d2a4e86850025o8qhihZr" alt="" class="shoplogo">
      <div class="shopPrice">
        <span class="newPrice fn-left">￥ 1190</span>
        <i class="iconfont icon-cuowu fn-right" @click = "cannel"></i>
      </div>
      <div class="buyNum">
        <span class="fn-left">数量</span>
        <changenum :Num = "num" @changeNum = "getshopNum"></changenum>
      </div>
      <button class="submit" @click = "cannel">确定</button>
    </div>
    
    <detailfooter @addcart = "showHades = true" v-show = "!showHades"></detailfooter>
  </div>
</template>
<script>
import headeres from "@/components/header"
import footers from '@/components/footer'
import swiper from '@/components/swiper'
import detailfooter from '@/components/shop-detail-footer'
import changenum from "@/components/change-num"
export default {
  data() {
    return {
      showHades:false,
      num:1,
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
    headeres,
    swiper,
    detailfooter,
    changenum
  },
  created() {
    // console.log(this.recommend);
  },
  methods:{
    cannel(){
      this.showHades = false;
    },
    //获取商品数量
    getshopNum(val){
      console.log(val);
    },
  }
};
</script>
<style scoped lang = "scss">
  .shopDetail{
    .swwiper{
      margin-top: 1rem;
    }
    h2,h3,h4,h5,.selectNum{
      width: 100%;
      text-align: left;
      padding-left: 0.2rem;
      background: #fff;
    }
    .newPrice{
      color: #fa5860;
      font-weight: bold;
      font-size: 0.36rem;
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
    .selectNumdetail{
      width: 100%;
      background: #fff;
      height: 9.8rem;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 2;
      .shoplogo{
        width: 1.75rem;
        height: 1.75rem;
        position: absolute;
        left: 0.2rem;
        top:-0.5rem;
      }
      .shopPrice{
        height: 1.45rem;
        border-bottom: 1px solid #eee;
        padding: 0.2rem 0.2rem 0 2.15rem;
      }
      .buyNum{
        position: relative;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        padding-left: 0.2rem;
        color: #aaa;
        span{
          font-size: 0.34rem;
        }
      }
      .submit{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        background: #fc5655;
        color: #fff;
        border:0;
        font-size: 0.3rem;
        text-align: center;
      }
    }
    .hades{
      background: #000;
      opacity: 0.5;
      position: fixed;
      top:0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index:1;
    }
  }
</style>

