<template>
  <div id="shopCart">
    <h1>购物车</h1>
    <div class="cartCon">
      <div class="edit">
        <a @click="edit()">{{isEdit?"编辑":"完成"}}</a>
      </div>
      <div class="shopList">
        <h2 class="spType">
          <i class="iconfont icon-suo"></i> 选择商品
        </h2>
        <div class="shopDes" v-for="(item,index) in data" :key="index">
          <div class="check" :class="{active:(checkData.indexOf(item.id) > -1 && isEdit) || (editcheckData.indexOf(item.id) > -1 && !isEdit)}" @click="checkshop(item.id)">
            <i class="iconfont icon-zhengque"></i>
          </div>
          <img class="shopImg" src="../assets/img/timg.jpg" alt="">
          <p class="shopName">{{item.name}}</p>
          <p class="price">￥ {{item.price}}</p>
          <changenum :Num = "item.num" @changeNum = "getShopNum" :index = "index"></changenum>
        </div>
      </div>
      <div class="account">
        <div class="check" :class="{active:(checkData.length == data.length && isEdit) || (editcheckData.length == data.length && !isEdit)}" @click="allcheck()">
          <i class="iconfont icon-zhengque"></i>
        </div>
        <em class="allcheck">全选</em>
        <a class="gopay" :class="{no:checkData.length==0}" v-show="isEdit">
          结算({{checkData.length}})
        </a>
        <div class="paytext" v-show="isEdit">
          <p class="allprice">合计:
            <i>{{allPrice}}元</i>
          </p>
          <p class="tip">不含运费 </p>
        </div>
        <a class="delete" :class="{no:editcheckData.length==0}" v-show="!isEdit">删除</a>
        <a class="toLike" :class="{no:editcheckData.length==0}" v-show="!isEdit">移到关注</a>
      </div>
    </div>
    <footers></footers>
  </div>
</template>
<script>
import footers from "@/components/footer";
import changenum from "@/components/change-num"
export default {
  data() {
    return {
      isEdit: true,
      checkData: [],//选择用于结算的数据
      editcheckData: [],//选择用于编辑
      allPrice: 0,
      data: [
        {
          id: 1,
          name:
            "浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列",
          price: "2000",
          picUrl: "../assets/img/timg.jpg",
          num:1
        },
        {
          id: 2,
          name: "浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31",
          price: "3000",
          picUrl: "../assets/img/timg.jpg",
          num:2
        },
        {
          id: 3,
          name:
            "浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列",
          price: "4000",
          picUrl: "../assets/img/timg.jpg",
          num:3
        },
        {
          id: 5,
          name:
            "浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列",
          price: "10000",
          picUrl: "../assets/img/timg.jpg",
          num:4
        },
        {
          id: 9,
          name:
            "浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列L4.12.232.31浪琴优雅系列",
          price: "9000",
          picUrl: "../assets/img/timg.jpg",
          num:5
        }
      ]
    };
  },
  created() {
  },
  methods: {
    getShopNum(val){
      let index = val.index;
      //更改对应商品的数量
      this.data[index].num = val.buyNum;
      this.calculateprice();
    },
    //选择商品
    checkshop: function(id) {
      if (this.isEdit) {
        if (this.checkData.indexOf(id) > -1) {
          this.checkData.splice(this.checkData.indexOf(id), 1);
        } else {
          this.checkData.push(id);
        }
        this.calculateprice();
      } else {
        if (this.editcheckData.indexOf(id) > -1) {
          this.editcheckData.splice(this.editcheckData.indexOf(id), 1);
        } else {
          this.editcheckData.push(id);
        }
      }
    },
    //全选
    allcheck: function() {
      if (this.isEdit) {
        if(this.checkData.length != this.data.length){
          this.checkData = [];
          for(let i = 0; i<this.data.length;i++){
            this.checkData.push(this.data[i].id);
          }
          // 计算总价格
          this.calculateprice();
        }else{
          this.checkData = [];
          this.allPrice = 0;
        }
        
      }else{
        if(this.editcheckData.length != this.data.length){
          this.editcheckData = [];
          for(let i = 0; i<this.data.length;i++){
            this.editcheckData.push(this.data[i].id);
          }
        }else{
          this.editcheckData = [];
        }
      }
    },
    //计算总价
    calculateprice: function() {
      this.allPrice = 0;
      if(this.checkData.length > 0){
        for(let i = 0; i<this.checkData.length; i++){
          for(let x = 0; x<this.data.length; x++){
            if(this.checkData[i] == this.data[x].id){
              this.allPrice += this.data[x].price*this.data[x].num; 
            }
          }
        }
      }
    },
    edit: function() {
      this.isEdit = !this.isEdit;
    }
  },
  components: {
    footers,
    changenum
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
        &.no {
          background: #969696;
        }
      }
      .paytext {
        float: right;
        margin-right: 0.1rem;
      }
      .allprice {
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
        font-size: 0.24rem;
        color: #949494;
      }
      .delete {
        width: 2rem;
        height: 1rem;
        float: right;
        background: #ff5752;
        color: #ffffff;
        line-height: 1rem;
        font-size: 0.32rem;
        text-align: center;
        letter-spacing: 0.02rem;
        &.no {
          background: #969696;
        }
      }
      .toLike {
        width: 2rem;
        height: 1rem;
        float: right;
        background: #ff9602;
        color: #ffffff;
        line-height: 1rem;
        font-size: 0.32rem;
        text-align: center;
        letter-spacing: 0.02rem;
        &.no {
          background: #969696;
        }
      }
    }
  }
}
</style>