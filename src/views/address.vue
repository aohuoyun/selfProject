<template>
    <!-- 商品列表 -->
    <div id="address">
        <h1><i class="iconfont icon-xiangzuojiantou"></i>添加收货地址</h1>
        <ul class="addessInput">
            <li>
                <div class="panel">
                    <span>收件人</span>
                    <input type="text" placeholder="收件人">
                </div>
            </li>
            <li>
                <div class="panel">
                    <span>联系电话</span>
                    <input type="number" placeholder="联系电话">
                </div>
            </li>
            <li>
                <div class="panel">
                    <span>所在地区</span>
                    <div >请选择所在地区</div>
                </div>
            </li>
            <li>
                <div class="panel">
                    <span>详细地址</span>
                    <input type="text" placeholder="街道，楼牌号等">
                </div>
            </li>
        </ul>
        <a href="javascript:;" class="saveAdd">保存地址</a>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#address {
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
    i {
        font-size: .34rem;
        margin-right: .2rem;
    }
  }
  .addessInput {
    padding-top: 1.2rem;
    li {
      padding: 0 0.25rem;
      height: 0.9rem;
      background: #ffffff;
      .panel {
        width: 100%;
        height: 0.9rem;
        border-bottom: 1px solid #d8d8d8;
        span {
            height: .9rem;
            width: 1.3rem;
            float: left;
            line-height: .9rem;
            font-size: .28rem;
            text-align: left;
        }
        input {
            float: right;
            height: .9rem;
            width: 5.5rem;
            background: none;
        }
        div {
            float: right;
            height: .9rem;
            width: 5.5rem;
            text-align: left;
            line-height: .9rem;
        }
      }
      &:last-child {
        .panel {
          border-bottom: none;
        }
      }
    }
  }
  .saveAdd {
      display: block;
      margin: .2rem auto 0;
      width: 7.2rem;
      height: .8rem;
      background: #ff5654;
      color: #ffffff;
      line-height: .8rem;
      font-size: .3rem;
      border-radius: .1rem;
      letter-spacing: .02rem;
  }
}
</style>


