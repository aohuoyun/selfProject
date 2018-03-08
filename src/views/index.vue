<template>
  <div id="pageIndex">
    <div class="seach">
      <input type="text" class="seachInput" placeholder="请输入关键字搜索">
    </div>
    <!-- 轮播图位置 -->
    <div class="swiper"></div>
    <!-- 公告位置 -->
    <div class="notice"></div>
    <ul class="ulList">
      <li>
        <div>
          <i class="iconfont icon-shouye"></i>
        </div>
        <h2>全部商品</h2>
      </li>
      <li>
        <div>
          <i class="iconfont icon-shouye"></i>
        </div>
        <h2>推荐商品</h2>
      </li>
      <li>
        <div>
          <i class="iconfont icon-shouye"></i>
        </div>
        <h2>会员充值</h2>
      </li>
      <li>
        <div>
          <i class="iconfont icon-shouye"></i>
        </div>
        <h2>我的资料</h2>
      </li>
    </ul>
  </div>
</template>
<style scoped lang = "scss">
  #pageIndex{
    width: 100%;
    height: auto;
    overflow: hidden;
    .seach{
      width: 100%;
      padding: 0.2rem;
      .seachInput{
        width: 7.1rem;
        height: 0.6rem;
        padding-left: 10px;
      }
    }
    .swiper{
      width: 100%;
      height: 3.0rem;
      background: red;
    }
    .notice{
      width: 100%;
      height: 0.6rem;
      background: #fe8100;
    }
    .ulList{
      width: 100%;
      height: 1.8rem;
      background: #fff;
      margin-top:0.2rem;
      li{
        width: 25%;
        text-align: center;
        float: left;
        color: #989898;
        position: relative;
        padding-top: 0.3rem;
        div{
          width: 0.9rem;
          height: 0.9rem;
          border-radius: 50%;
          position:absolute;
          left: 50%;
          margin-left: -0.45rem;
          background: red;
        }
        .iconfont{
          line-height: 0.9rem;
          font-size: 0.7rem;
          display: inline-block;
        }
        h2{
          margin-top: 0.95rem;
          font-size: 0.30rem;
        }
      }
    }
  }
</style>

