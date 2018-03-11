<template>
  <div id="memberCenter">
    <div class="header">
      <h2>会员中心</h2>
      <ul class="userinfo">
        <li class="riches">
          <h3>余额</h3>
          <p>0.00</p>
          <a href="javascript:;">充值</a>
        </li>
        <li class="buddha">
          <div class="txBox">
            <img src="../assets/img/timg.jpg" alt="">
          </div>
          <p class="uname">用户名</p>
          <p class="ulevel">普通会员</p>
        </li>
        <li class="integral">
          <h3>积分</h3>
          <p>0.00</p>
        </li>
      </ul>
    </div>
    <div class="circle"></div>
    <div class="myIndent">
      <i class="iconfont icon-wodedingdan"></i>
      <span class="indent">我的订单</span>
      <i class="iconfont icon-xiangyoujiantou"></i>
      <span class="allindent">查看全部订单</span>
    </div>
    <ul class="goods">
      <li class="tab-item">
        <i class="iconfont icon-daifukuan"></i>
        <h2>待付款</h2>
      </li>
      <li class="tab-item">
        <i class="iconfont icon-daifahuo"></i>
        <h2>待发货</h2>
      </li>
      <li class="tab-item">
        <i class="iconfont icon-daishouhuo"></i>
        <h2>待收货</h2>
      </li>
      <li class="tab-item">
        <i class="iconfont icon-tuihuanhuo"></i>
        <h2>退换货</h2>
      </li>
    </ul>
    <div class="sel">
      <ul>
         <router-link tag="li"  to="/shoppingcart">
          <a>
            <i class="left iconfont icon-gouwuche"></i>
            <span>我的购物车</span>
            <i class="right iconfont icon-xiangyoujiantou"></i>
          </a>
        </router-link>
        <li>
          <a>
            <i class="left iconfont icon-yiguanzhu"></i>
            <span>我的关注</span>
            <i class="right iconfont icon-xiangyoujiantou"></i>
          </a>
        </li>
        <li>
          <a>
            <i class="left iconfont icon-yduizuji"></i>
            <span>我的足迹</span>
            <i class="right iconfont icon-xiangyoujiantou"></i>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a>
            <i class="left iconfont icon-shouhuodizhi"></i>
            <span>收货地址管理</span>
            <i class="right iconfont icon-xiangyoujiantou"></i>
          </a>
        </li>
        <li>
          <a>
            <i class="left iconfont icon-wodejuhuasuan"></i>
            <span>会员资料设置</span>
            <i class="right iconfont icon-xiangyoujiantou"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang = "scss">
@import '~@/assets/css/_reset.scss';
#memberCenter {
  width: 100%;
  height: auto;
  overflow: hidden;
  .header {
    width: 100%;
    height: 3.75rem;
    background: #ff5752;
    padding-top: .3rem;
    overflow: auto;
    h2 {
      width: 6.8rem;
      margin: 0 auto;
      text-align: left;
      font-size: .34rem;
      color: #ffffff;
    }
    .userinfo {
      width: 6.8rem;
      height: 1.8rem;
      margin: .8rem auto 0;
      li {
        float: left;
        &.riches {
          width: 1.6rem;
          height: 1.8rem;
          h3 {
            font-size: .28rem;
            text-align: center;
            color: #ffffff;
            line-height: .4rem;
            margin-top: .3rem;
          }
          p {
            font-size: .26rem;
            text-align: center;
            color: #fef634;
            line-height: .3rem;
          }
          a {
            display: block;
            font-size: .26rem;
            width: 1.04rem;
            height: .4rem;
            text-align: center;
            line-height: .4rem;
            border: 1px solid #ffffff;
            color: #ffffff;
            border-radius: .2rem;
            margin: .1rem auto 0;
          }
        }
        &.buddha {
          width: 6.8rem-(1.8*2rem);
          height: 1.8rem;
          .txBox {
            width: 1.02rem;
            height: 1.02rem;
            border: 1px solid #ffffff;
            border-radius: .51rem;
            margin: 0 auto;
            img {
              width: 100%;
              height: 100%;
              border-radius: 1.02rem
            }
          }
          .uname {
            font-size: .26rem;
            color: #ffffff;
            line-height: .3rem;
            margin-top: .1rem;
          }
          .ulevel {
            font-size: .26rem;
            color: #ffffff;
            line-height: .3rem;
            margin-top: .1rem;
          }
        }
        &.integral {
          width: 1.6rem;
          height: 1.8rem;
          h3 {
            font-size: .28rem;
            text-align: center;
            color: #ffffff;
            line-height: .4rem;
            margin-top: .3rem;
          }
          p {
            font-size: .26rem;
            text-align: center;
            color: #fef634;
            line-height: .3rem;
          }
        }
      }
    }
  }
  .circle {
    width: 100%;
    height: .34rem;
    background: #ffffff url('../assets/img/yuan.png') no-repeat;
    background-size: 100% 100%;
  }
  .myIndent {
    width: 100%;
    height: .78rem;
    background: #ffffff;
    border-bottom: 1px solid #eeeeee;
    padding: 0 .25rem;
    .icon-wodedingdan {
      float: left;
      margin-top: .2rem;
      color: #343434;
    }
    .indent {
      float: left;
      height: .78rem;
      line-height: .78rem;
      margin-left: .12rem;
      font-size: .28rem;
    }
    .icon-xiangyoujiantou {
      float: right;
      margin-top: .2rem;
      color: #949494;
    }
    .allindent {
      float: right;
      height: .78rem;
      line-height: .78rem;
      margin-right: .12rem;
      font-size: .26rem;
      color: #949494;
    }
  }
  .goods {
    width: 100%;
    height: 1.64rem;
    background: #ffffff;
    .tab-item {
      width: 25%;
      text-align: center;
      float: left;
      color: #989898;
      .iconfont {
        font-size: 0.6rem;
        display: inline-block;
        line-height: 0.7rem;
        margin-top: .24rem;
      }
      h2 {
        line-height: .36rem;
        font-size: 0.28rem;
        color: #343434;
      }
    }
  }
  .sel {
    ul {
      width: 100%;
      margin-top: .2rem;
      li {
        width: 100%;
        height: .8rem;
        background: #ffffff;
        padding: 0 .25rem;
        >a {
          display: block;
          width: 100%;
          height: 100%;
          border-bottom: 1px solid #eeeeee;
          i {
            float: left;
            height: .8rem;
            line-height: .8rem;
            font-size: .34rem;
            color: #6c6c6c;
            &.right {
              float: right;
            }
          }
          span {
            float: left;
            font-size: .28rm;
            color: #000000;
            height: .8rem;
            line-height: .8rem;
            margin-left: .1rem;
          }
        }
        &:last-child {
          >a {
            border-bottom: none;
          }
        }
      }
    }
  }
}
</style>