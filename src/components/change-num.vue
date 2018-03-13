<template>
  <div class="numBox">
    <a class="numsub">-</a>
    <a class="num">1000</a>
    <a class="numadd">+</a>
  </div>
</template>
<style scoped lang = "scss">
  .numBox {
    position: absolute;
    width:auto;
    height: 0.45rem;
    border: 1px solid #d8d8d8;
    bottom: 0.25rem;
    right: 0.25rem;
    box-sizing: content-box;
    a {
      float: left;
      width:auto;
      padding:0 0.15rem;
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
</style>

