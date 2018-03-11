<template>
<!-- 商品列表 -->
  <div class="all-shoping heightauto">
    <div class="shop-title heightauto">
      <search :bgcolor = bgcolor></search> 
      <ul class="shop-classify">
        <li :class="{'active': index == 1}" @click = "activeClick(1)">综合</li>
        <li :class="{'active': index == 2}" @click = "activeClick(2)">销量</li>
        <li :class="{'active': index == 3}" @click = "activeClick(3)">价格</li>
        <li :class="{'active': index == 4}" @click = "activeClick(4)">筛选</li>
      </ul>
      <div class="select-type heightauto" v-show = "showHades">
        <div class="type-title">请选择分类</div>
        <ul class="heightauto">
          <li>
            <p>彩电</p>
            <p>潮流3C</p>
            <p>生活家电</p>
            <p>冰洗空调</p>
            <p>厨房卫浴</p>
            <p>智能电器</p>
          </li>
          <li>
            <p>美的</p>
            <p>格力</p>
            <p>斯波尔</p>
            <p>美的</p>
          </li>
          <li>
            <span>微波炉</span>
            <span>热水器</span>
            <span>取暖器</span>
          </li>
        </ul>
        <p class="group-button">
          <span class="fn-left" @click = "cannel">取消筛选</span>
          <span class="fn-right submit" @click = "submit">确认</span>
        </p>
     </div>
    </div>
    <!-- 商品列表 -->
    <shopcontent :isIndex = "false" class="content"></shopcontent>
    <div class="hades" v-show = "showHades"></div>
    
  </div>
</template>
<script>
import Search from '@/components/search/search'
import shopcontent from '@/components/shop-content'
export default {
  data(){
    return{
      bgcolor:"#e7e7e7",
      index:1,
      showHades:false,
    }
  },
  components:{
    "search": Search,
    "shopcontent": shopcontent,
  },
  methods:{
    activeClick(val){
      if(val == 4){
        this.index = 0;
        this.showHades = true;
      }else{
        this.showHades = false;
        this.index = val;
      }
    },
    cannel(){
      this.showHades = false;
    },
    submit(){
      this.showHades = false;
    }
  }
};
</script>
<style scoped lang = "scss">
  .all-shoping{
    .shop-title{
      background: #fff;
      position: fixed;
      top:0;
      z-index:2;
      .shop-classify{
        width: 100%;
        height: 0.7rem;
        padding-top: 0.15rem; 
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        li{
          float: left;
          width: 25%;
          height: 0.4rem;
          line-height: 0.4rem;
          text-align: center;
          border-right: 1px solid #e7e7e7;
          &:last-child{
            border:0;
          }
        }
        .active{
          color: #ff5654;
        }
      }
      .select-type{
        .type-title{
          width: 100%;
          height: 0.8rem;
          line-height: 0.8rem;
          text-align: center;
          border-bottom: 1px solid #eee;
        }
        ul{
          border-bottom: 1px solid #eee;
          li{
            border-right: 1px solid #eee;
            width: 30%;
            height: 5rem;
            /* height: auto;
            overflow: hidden; */
            float: left;
            padding-bottom: 0.6rem;
            p{
              height: 0.6rem;
              line-height: 0.6rem;
              font-size: 0.24rem;
            }
            span{
              display: block;
              float: left;
              width: 50%;
              line-height: 0.6rem;
              text-align: center;
            }
            &:last-child{
              padding-top: 0.4rem;
              width: 40%;
              border-right: 0;
            }
          }
        }
        .group-button{
          line-height: 0.8rem;
          padding-left: 0.3rem;
          span{
            width: 1rem;
            text-align: center;
            font-size: 0.24rem;
          }
          .submit{
            color: #ff5654;
          }
        }
      }
    }
    .content{
      margin-top: 1.7rem;
    }
    .hades{
      background: #000;
      opacity: 0.5;
      position: fixed;
      top:0;
      bottom: 1.14rem;
      left: 0;
      right: 0;
      z-index:1;
    }
  }
</style>



