<template>
  <div class="confirmOrder heightauto">
    <headeres title = "确认订单"></headeres>
    <div class="addAdress">
      <i class="iconfont icon-shouhuodizhi"></i>
      <h2>添加收货地址</h2>
      <i class="iconfont icon-xiangyoujiantou fn-right"></i>
    </div>
    <div class="orderShopList heightauto">
      <h2>
        <i class="iconfont icon-suo"></i> 所选商品
      </h2>
      <div class="list" v-for = "(item,index) in 5" :key="index">
        <img src="../assets/img/timg.jpg" class="fn-left" alt="">
        <p class="fn-left">浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列</p>
        <div class="fn-right rightlay">
          <p>￥ 1190</p>
          <changenum :Num = "1"></changenum>
        </div>
      </div>
    </div>
    <div class="word">
      <h3 class="fn-left">卖家留言</h3>
      <textarea type="text" class="inputWord" placeholder="50字内（选填）" ></textarea>
    </div>
    <div class="allprice heightauto">
      <p class="onep"><span class="fn-left">商品小计</span><span class="fn-right">￥ 1190</span></p>
      <p><span class="fn-left">运费</span><span class="fn-right">￥ 0</span></p>
    </div>
    <div class="footer">
      <p class="fn-left moneys">需付:  <i class="al">￥1190</i></p>
      <p class="fn-right pay">确认支付</p>
    </div>
  </div>
</template>
<script>
  import headeres from "@/components/header";
  import changenum from "@/components/change-num"
  export default{
    components:{
      headeres,
      changenum
    }
  }
</script>
<style lang = "scss">
  .confirmOrder{
    .addAdress{
      width: 100%;
      height: 1.5rem;
      background: #fff;
      margin-top:1.2rem;
      line-height: 1.5rem;
      text-align: center;
      font-size: .3rem;
      padding-right: .2rem;
      .icon-shouhuodizhi{
        color: #fc5654;
        margin-right: .1rem;
        font-size: .36rem;
      }
      h2{
        display: inline-block;
      }
    }
    .orderShopList{
      margin-top: .2rem;
      padding: .2rem;
      background: #fff;
      h2{
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: left;
        padding-left: .2rem;
        color: #000;
        font-size: .3rem;
        border-bottom: 1px solid #eee;
        margin-bottom: .2rem;
      }
    }
    .list{
      width: 100%;
      height: 2rem;
      background: #fff;
      img{
        width: 1.8rem;
        height: 1.8rem;
      }
      p{
        width: 3.6rem;
        text-align: left;
        padding: 0 .2rem 0 .2rem;
        font-size: .28rem;
      }
      .rightlay{
        width: 1.7rem;
        height: 1.8rem;
        position: relative;
        p{
          width: 100%;
          text-align: right;
          font-size: .3rem;
          padding-top: .4rem;
          color: #000;
        }
        .numBox{
          bottom: .4rem;
        }
      }
    }
    .word{
      margin-top: .2rem;
      background: #fff;
      padding: .2rem;
      h3{
        width: 1.5rem;
        height: 1rem;
        text-align: left;
        color: #ccc;
        border:0;
        font-size: .3rem;
        line-height: 1rem;
      }
      .inputWord{
        width: 5.5rem;
        border: 0;
        position: relative;
        top:.3rem;
        padding-left: .1rem;
      }
    }
    .allprice{
      margin-top: .2rem;
      background: #fff;
      p{
        font-size: .3rem;
        line-height: 1rem;
        height: 1rem;
        width: 100%;
        padding: 0 .2rem;
      }
      .onep{
        border-bottom:1px solid #eee;
      }
    }
    .footer{
      position:fixed;
      bottom: 0;
      z-index:1;
      height: 1.14rem;
      line-height: 1.14rem;
      font-size: .36rem;
      width: 100%;
      background: #fff;
      .moneys{
        width: 60%;
        font-size: .36rem;
        line-height: 1.14rem;
        text-align: right;
        padding-right: .2rem;
        .al{
          color: #fc5654;
        }
      }
      .pay{
        width: 40%;
        font-size: .36rem;
        line-height: 1.14rem;
        color: #fff;
        background: #fc5654;
      }
    }
  }
</style>
