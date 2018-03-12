<template>
  <div id="shopCart">
    <h1>购物车</h1>
    <div class="cartCon">
      <div class="edit">
        <a>编辑</a>
      </div>
      <div class="shopList">
        <div class="spCard" v-for="(item,index) in goodsData" :key="index">
          <h2 class="spType">
            <i class="iconfont icon-suo"></i> {{item.type==1 ? '自营商品' : item.type==2 ? '非自营商品' : ''}}
            <i class="right iconfont icon-xiangyoujiantou"></i>
          </h2>
          <div class="shopDes" v-for="(item,index) in item.data" :key="index">
            <div class="check" :class="{active:checkData.indexOf(item.index) > -1}" @click="checkshop(item.index)">
              <i class="iconfont icon-zhengque"></i>
            </div>
            <img class="shopImg" src="../assets/img/timg.jpg" alt="">
            <p class="shopName">浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31</p>
            <p class="price">￥ 2000</p>
            <div class="numBox">
              <a class="numsub">-</a>
              <a class="num">10</a>
              <a class="numadd">+</a>
            </div>
          </div>
        </div>
      </div>
      <div class="account">
        <div class="check active">
          <i class="iconfont icon-zhengque"></i>
        </div>
        <em class="allcheck">全选</em>
        <a class="gopay">
          结算(1)
        </a>
        <div class="paytext">
          <p class="allpirce">合计:<i>2000元</i></p>
          <p class="tip">不含运费</p>
        </div>     
      </div>
    </div>
    <footers></footers>
  </div>
</template>
<script>
import footers from "@/components/footer";
export default {
  data() {
    return {
      isActive: true,
      checkData: [1, 2, 3],
      goodsData: [
        {
          type: 1,
          data: [
            {
              index: 1,
              name:
                "浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列",
              picUrl: "../assets/img/timg.jpg"
            },
            {
              index: 2,
              name:
                "浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列",
              picUrl: "../assets/img/timg.jpg"
            }
          ]
        },
        {
          type: 2,
          data: [
            {
              index: 3,
              name:
                "浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列",
              picUrl: "../assets/img/timg.jpg"
            }
          ]
        }
      ]
    };
  },
  created() {
    // let arr = ["a", "s", "d", "f"];
    // console.log(arr.indexOf('a'))
  },
  methods: {
    checkshop: function(id) {
      if (this.checkData.indexOf(id) > -1) {
        this.checkData.splice(this.checkData.indexOf(id), 1);
      } else {
        this.checkData.push(id);
      }
    }
  },
  components: {
    footers
  }
};
</script>
<style scoped lang = "scss">
@import "~@/assets/css/_reset.scss";
#shopCart {
  h1 {
    position: fixed;
    width: 100%;
    height: 1rem;
    background: #ffffff;
    padding: 0 0.25rem;
    line-height: 1rem;
    font-size: 0.34rem;
    text-align: left;
    color: #343434;
  }
  .cartCon {
    padding-top: 1rem;

    .edit {
      height: 0.8rem;
      width: 100%;
      a {
        height: 0.8rem;
        width: 1rem;
        text-align: center;
        line-height: 0.8rem;
        float: right;
        font-size: 0.28rem;
        color: #343434;
      }
    }
    .shopList {
      padding-bottom: 1.1rem;
      .spType {
        background: #ffffff;
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0 0.25rem;
        text-align: left;
        font-size: 0.28rem;
        i {
          font-size: 0.28rem;
          &.right {
            float: right;
          }
        }
      }
      .shopDes {
        position: relative;
        background: #ffffff;
        width: 100%;
        height: 2.15rem;
        padding: 0.25rem;
        .check {
          float: left;
          width: 0.4rem;
          height: 0.4rem;
          margin-top: 0.6rem;
          line-height: 0.4rem;
          background: #ffffff;
          border: 1px solid #f1f1f2;
          border-radius: 0.2rem;
          i {
            font-size: 0.28rem;
          }
          &.active {
            background: #fe5155;
            i {
              color: #ffffff;
              font-weight: bold;
            }
          }
        }
        .shopImg {
          float: left;
          width: 1.6rem;
          height: 1.6rem;
          margin-left: 0.2rem;
        }
        .shopName {
          float: right;
          width: 4.6rem;
          text-align: left;
          @include text-overflow-ellipsis(2);
        }
        .price {
          position: absolute;
          font-size: 0.32rem;
          color: #e4575a;
          top: 1.44rem;
          left: 2.6rem;
        }
        .numBox {
          position: absolute;
          width: 1.5rem;
          height: 0.45rem;
          border: 1px solid #d8d8d8;
          bottom: 0.25rem;
          right: 0.25rem;
          box-sizing: content-box;
          a {
            float: left;
            width: 0.5rem;
            line-height: 0.45rem;
            height: 0.45rem;
            border-right: 1px solid #d8d8d8;
            font-size: 0.28rem;
            &:last-child {
              border-right: none;
            }
            &.numadd,
            &.numsub {
              line-height: 0.4rem;
              font-size: 0.24rem;
              color: #969696;
            }
          }
        }
      }
    }
    .account {
      position: fixed;
      width: 100%;
      height: 1rem;
      background: #ffffff;
      border-bottom: 1px solid #d8d8d8;
      bottom: 1.14rem;
      box-shadow: 0 -0.01rem 0.2rem #ccc;
      padding-left: 0.25rem;
      .check {
        float: left;
        width: 0.4rem;
        height: 0.4rem;
        margin-top: 0.3rem;
        line-height: 0.4rem;
        background: #ffffff;
        border: 1px solid #f1f1f2;
        border-radius: 0.2rem;
        i {
          font-size: 0.28rem;
        }
        &.active {
          background: #fe5155;
          i {
            color: #ffffff;
            font-weight: bold;
          }
        }
      }
      .allcheck {
        float: left;
        margin: 0.29rem 0 0 0.1rem;
        font-size: 0.32rem;
      }
      .gopay {
        width: 2rem;
        height: 1rem;
        float: right;
        background: #ff5752;
        color: #ffffff;
        line-height: 1rem;
        font-size: 0.32rem;
        text-align: center;
        letter-spacing: 0.02rem;
      }
      .paytext {
        float: right;
        margin-right: 0.1rem;
      }
      .allpirce {
        line-height: 0.5rem;
        text-align: right;
        font-size: 0.28rem;
        i {
          color: #ff5752;
          font-weight: bold;
          margin: 0 0.02rem;
        }
      }
      .tip {
        line-height: 0.5rem;
        text-align: right;
        font-size: 0.26rem;
      }
    }
  }
}
</style>