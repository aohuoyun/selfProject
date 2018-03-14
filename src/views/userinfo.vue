<template>
    <div id="userInfo">
        <headeres title="会员资料">11</headeres>
        <ul class="uesrInput">
            <li>
                <div class="panel">
                    <span>姓名</span>
                    <i>*</i>
                    <input type="text" v-model="uname" placeholder="请输入您姓名">
                </div>
            </li>
            <li>
                <div class="panel">
                    <span>手机号</span>
                    <i>*</i>
                    <input type="tel" v-model="uphone" placeholder="请输入您手机号">
                </div>
            </li>
            <li>
                <div class="panel">
                    <span>微信号</span>
                    <i></i>
                    <input type="tel" v-model="uwchat" placeholder="请输入您微信号">
                </div>
            </li>
            <li>
                <div class="panel">
                    <span>出生日期</span>
                    <div @click="openPicker" v-model="birthday">{{birthday==""?"选择出生日期":birthday}}</div>
                </div>
            </li>
            <li>
                <div class="panel">
                    <span>所在城市</span>
                    <div @click="showseladds()">{{sureAddress==""?"选择所在城市":sureAddress}}</div>
                </div>
            </li>
        </ul>
        <a href="javascript:;" class="saveInfo">确认修改</a>
        <mt-datetime-picker ref="picker" @confirm="handleConfirm" type="date" v-model="pickerValue" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" :startDate="new Date('1910-01-01')" :endDate="new Date()"></mt-datetime-picker>
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
import myaddress from "@/assets/json/address2.json";
export default {
  data() {
    return {
      popupVisible: false,
      pickerValue: "",
      uname: "",
      checkAddress: "",
      sureAddress: "",
      uphone: "",
      uwchat: "",
      birthday: "",
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
        }
      ]
    };
  },
  methods: {
    openPicker: function() {
      console.log(this.$refs.picker);

      this.$refs.picker.open();
    },
    handleConfirm: function(value) {
      let time =
        value.getFullYear() +
        "-" +
        (value.getMonth() + 1) +
        "-" +
        value.getDate();
      this.birthday = time;
    },
    onValuesChange: function(picker, values) {
      if (myaddress[values[0]]) {
        picker.setSlotValues(1, myaddress[values[0]]);
        this.checkAddress = values[0] + values[1];
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
#userInfo {
  .uesrInput {
    padding-top: 1.2rem;
    li {
      padding: 0 0.25rem;
      height: 0.9rem;
      background: #ffffff;
      .panel {
        width: 100%;
        height: 0.9rem;
        border-bottom: 1px solid #d8d8d8;
        i {
          float: left;
          height: 0.9rem;
          width: 0.2rem;
          line-height: 1rem;
          margin-right: 0.1rem;
          font-size: 0.28rem;
          color: #f1201c;
        }
        span {
          height: 0.9rem;
          width: 1.2rem;
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
  .saveInfo {
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
      font-size: 0.32rem;
      letter-spacing: 0.02rem;
      &.close {
        float: left;
        height: 0.8rem;
        line-height: 0.8rem;
        margin-left: 1.5rem;
        color: #26a2ff;
      }
      &.submit {
        float: right;
        height: 0.8rem;
        line-height: 0.8rem;
        margin-right: 1.5rem;
        color: #26a2ff;
      }
    }
  }
  .seladds {
    width: 7.5rem;
  }
}
</style>

