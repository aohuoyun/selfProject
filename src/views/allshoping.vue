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
            <p v-for = "(item,index) in oneType" :key = "index" :class="{'type-active':typeOneActive == item.index}" @click = "selectType(item.index,1)">{{item.title}}</p>
          </li>
          <li>
            <p v-for = "(item,index) in secondType" :key = "index" :class="{'type-active':typeSecondActive == item.index}" @click = "selectType(item.index,2)">{{item.title}}</p>
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
    <footers></footers>
  </div>
</template>
<script>
import Search from '@/components/search/search'
import shopcontent from '@/components/shop-content'
import footers from '@/components/footer'
export default {
  data(){
    return{
      bgcolor:"#e7e7e7",
      index:1,
      showHades:false,
      typeOneActive:0,
      typeSecondActive:0,
      oneType:[{
        index:1,
        title:"彩电",
      },{
        index:2,
        title:"潮流3C",
      },{
        index:3,
        title:"生活家电",
      },{
        index:4,
        title:"冰洗空调",
      },{
        index:5,
        title:"厨房卫浴",
      },{
        index:6,
        title:"智能电器",
      }],
      secondType:[{
        index:1,
        title:"美的"
      },{
        index:2,
        title:"格力"
      },{
        index:3,
        title:"苏泊尔"
      }],
    }
  },
  components:{
    "search": Search,
    "shopcontent": shopcontent,
    footers
  },
  methods:{
    activeClick(val){
       this.typeOneActive = this.typeSecondActive = 0;
      if(val == 4){
        this.index = 0;
        this.showHades = this.showHades ? false : true;
      }else{
        this.showHades = false;
        this.index = val;
      }
    },
    selectType(val,num){
      if(num == 1){
        this.typeOneActive = val;
      }else{
        this.typeSecondActive = val;
      }
      
    },
    cannel(){
      this.typeOneActive = this.typeSecondActive = 0;
      this.showHades = false;
    },
    submit(){
      this.typeOneActive = this.typeSecondActive = 0;
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
            height: 6rem;
            /* height: auto;
            overflow: hidden; */
            float: left;
            padding-bottom: 0.6rem;
            p{
              height: 0.8rem;
              line-height: 0.8rem;
              font-size: 0.24rem;
            }
            .type-active{
              color: #ff5654;
              background: #eee;
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
          span{
            width: 30%;
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
      bottom: 0;
      left: 0;
      right: 0;
      z-index:1;
    }
  }
</style>



