<template>
  <div id="shopCart">
    <h1>购物车</h1>
    <div class="edit">
      <a>编辑</a>
    </div>
    <div class="shopList">
      <div class="spCard" v-for="item in 4" :key="item">
        <h2 class="spType">
          <i class="iconfont icon-suo"></i> 自营商品
          <i class="right iconfont icon-xiangyoujiantou"></i>
        </h2>
        <div class="shopDes" v-for="item in 3" :key="item">
          <div class="check" :class="{active: isActive }" @click="checkshop()">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    checkshop: function(item) {
      this.isActive = !this.isActive;
    }
  }
};
</script>
<style scoped lang = "scss">
@import '~@/assets/css/_reset.scss';
#shopCart {
  h1 {
    width: 100%;
    height: 1rem;
    background: #ffffff;
    padding: 0 .25rem;
    line-height: 1rem;
    font-size: .34rem;
    text-align: left;
    color: #343434;
  }
  .edit {
    height: .8rem;
    width: 100%;
    a {
      height: .8rem;
      width: 1rem;
      text-align: center;
      line-height: .8rem;
      float: right;
      font-size: .28rem;
      color: #343434;
    }
  }
  .shopList {
    .spType {
      background: #ffffff;
      height: .8rem;
      line-height: .8rem;
      padding: 0 .25rem;
      text-align: left;
      font-size: .28rem;
      i {
        font-size: .28rem;
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
      padding: .25rem;
      .check {
        float: left;
        width: .4rem;
        height: .4rem;
        margin-top: .6rem;
        line-height: .4rem;
        background: #ffffff;
        border: 1px solid #f1f1f2;
        border-radius: .2rem;
        i {
          font-size: .28rem;
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
        margin-left: .2rem;
      }
      .shopName {
        float: right;
        width: 4.6rem;
        text-align: left;
        @include text-overflow-ellipsis(2);
      }
      .price {
        position: absolute;
        font-size: .32rem;
        color: #e4575a;
        top: 1.44rem;
        left: 2.6rem;
      }
      .numBox {
        position: absolute;
        width: 1.5rem;
        height: .45rem;
        border: 1px solid #d8d8d8;
        bottom: .25rem;
        right: .25rem;
        box-sizing: content-box;
        a {
          float: left;
          width: .5rem;
          line-height: .45rem;
          height: .45rem;
          border-right: 1px solid #d8d8d8;
          font-size: .28rem;
          &:last-child{
            border-right: none;
          } 
          &.numadd,&.numsub {
            line-height: .4rem;
            font-size: .24rem;
            color: #969696;
          }
        }
      }
    }
  }
}
</style>