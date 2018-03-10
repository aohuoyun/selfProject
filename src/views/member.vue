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
        <li class="buddha"></li>
        <li class="integral"></li>
      </ul>
    </div>
    <div class="circle"></div>
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
        }
        &.integral {
          width: 1.6rem;
          height: 1.8rem;
        }
      }
    }
  }

  .circle {
    width: 100%;
    height: .4rem;
    background: #ff5752;
    border-radius: 50% / 100% 100% 0 0;
    @include rotate(180deg);
  }
}
</style>