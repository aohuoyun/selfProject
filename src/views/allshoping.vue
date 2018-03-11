<template>
<!-- 商品列表 -->
  <div class="all-shoping">
    <div class="shop-title">
      <search :bgcolor = bgcolor></search> 
      <ul class="shop-classify">
        <li :class="{'active': index == 1}" @click = "activeClick(1)">综合</li>
        <li :class="{'active': index == 2}" @click = "activeClick(2)">销量</li>
        <li :class="{'active': index == 3}" @click = "activeClick(3)">价格</li>
        <li :class="{'active': index == 4}" @click = "activeClick(4)">筛选</li>
      </ul>
    </div>
    <!-- 商品列表 -->
    <shopcontent :isIndex = "false"></shopcontent>
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
    }
  },
  components:{
    "search": Search,
    "shopcontent": shopcontent,
  },
  methods:{
    activeClick(val){
      this.index = val;
    }
  }
};
</script>
<style scoped lang = "scss">
  .all-shoping{
    width: 100%;
    height: auto;
    overflow: hidden;
    .shop-title{
      width: 100%;
      height: auto;
      overflow: hidden;
      background: #fff;
      margin-bottom: 0.2rem;
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
    }
  }
</style>



