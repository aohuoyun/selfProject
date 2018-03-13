<template>
    <!-- 商品列表 -->
    <div id="address">
        <headeres title="添加收货地址"></headeres>
        <!-- <h1><i class="iconfont icon-xiangzuojiantou"></i>添加收货地址</h1> -->
        <ul class="addessInput">
            <li>
                <div class="panel">
                    <span>收件人</span>
                    <input type="text" v-model="recipients" placeholder="收件人">
                </div>
            </li>
            <li>
                <div class="panel">
                    <span>联系电话</span>
                    <input type="tel" v-model="phone" maxlength="11" placeholder="联系电话">
                </div>
            </li>
            <li>
                <div class="panel">
                    <span>所在地区</span>
                    <div @click="showseladds()">{{sureAddress==""?"请选择所在地区":sureAddress}}</div>
                </div>
            </li>
            <li>
                <div class="panel">
                    <span>详细地址</span>
                    <input type="text" v-model="detailaddress"  placeholder="街道，楼牌号等">
                </div>
            </li>
        </ul>
        <a href="javascript:;" class="saveAdd">保存地址</a>
        <mt-popup v-model="popupVisible" position="bottom">
            <div class="op">
                <a class="close" @click="closeadds()">取消</a>
                <a class="submit" @click="sureadds()">确定</a>
            </div>
            <div class="seladds">
                <mt-picker :slots="myAddressSlots" @change="onValuesChange"></mt-picker>
            </div>
        </mt-popup>
    </div>
</template>
<script>
import headeres from "@/components/header";
import myaddress from "@/assets/json/address3.json";
export default {
  data() {
    return {
      popupVisible: false,
      recipients:"",
      phone:"",
      detailaddress:"",
      sureAddress: "",
      checkAddress: "",
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ]
    };
  },
  methods: {
    onValuesChange: function(picker, values) {
      if (myaddress[values[0]]) {
        picker.setSlotValues(1, Object.keys(myaddress[values[0]]));
        picker.setSlotValues(2, myaddress[values[0]][values[1]]);
        this.checkAddress = values[0] + values[1] + values[2];
      }
    },
    showseladds: function() {
      this.popupVisible = true;
    },
    sureadds: function() {
      this.sureAddress = this.checkAddress;
      this.popupVisible = false;
    },
    closeadds: function() {
      this.popupVisible = false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.myAddressSlots[0].defaultIndex = 0;
    });
  },

  components: {
    headeres
  }
};
</script>
<style lang="scss" scoped>
#address {
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
          height: 0.9rem;
          width: 1.3rem;
          float: left;
          line-height: 0.9rem;
          font-size: 0.28rem;
          text-align: left;
        }
        input {
          float: right;
          height: 0.9rem;
          width: 5.5rem;
          background: none;
        }
        div {
          float: right;
          height: 0.9rem;
          width: 5.5rem;
          text-align: left;
          line-height: 0.9rem;
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
    margin: 0.2rem auto 0;
    width: 7.2rem;
    height: 0.8rem;
    background: #ff5654;
    color: #ffffff;
    line-height: 0.8rem;
    font-size: 0.3rem;
    border-radius: 0.1rem;
    letter-spacing: 0.02rem;
  }
  .op {
    width: 100%;
    height: 0.8rem;
    border-bottom: 1px solid #d8d8d8;
    a {
      font-size: 0.3rem;
      letter-spacing: 0.02rem;
      &.close {
        float: left;
        height: 0.8rem;
        line-height: 0.8rem;
        margin-left: 0.2rem;
      }
      &.submit {
        float: right;
        height: 0.8rem;
        line-height: 0.8rem;
        margin-right: 0.2rem;
        color: #3afd93;
      }
    }
  }
  .seladds {
    width: 7.5rem;
  }
}
</style>


