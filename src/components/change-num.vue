<template>
  <div class="numBox">
    <a class="numsub" @click = "lesNum">-</a>
    <a class="num">{{buyNum}}</a>
    <a class="numadd" @click = "addNum">+</a>
  </div>
</template>
<script>
  export default{
    props:['Num','index'],
    data(){
      return{
        buyNum: 0,
      }
    },
    created(){
      this.buyNum = this.Num;
    },
    methods:{
      lesNum(){
        if(this.buyNum > 1){
          this.buyNum = this.buyNum - 1;
          this.changeNumCom();
        }
      },
      addNum(){
        this.buyNum = this.buyNum + 1;
        this.changeNumCom();
      },
      changeNumCom(){
        if(this.index >=0){
          this.$emit('changeNum',{'buyNum':this.buyNum,'index':this.index});
        }else{
          this.$emit('changeNum',this.buyNum);
        }
      }
    }
  }
</script>
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

