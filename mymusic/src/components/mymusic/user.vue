<template>
  <div class="bodys">
    <div class="OffHead-login" v-show="deng">
      <p>登录网易云音乐</p>
      <p>手机电脑多端同步，尽享海量高品质音乐</p>
      <p class="login-text" @click="enter">立即登录</p>
    </div>
    <div class="portrait" v-show="experience">
      <div class="head-portrait">
        <img src="../../assets/image/timg.jpg" alt />
        <p>{{uname}}</p>
      </div>
    </div>
    <div class="bakcground">
      <div class="advertising">
        <div class="adve-01">
          <p class="adve-p1">开通黑胶VIP</p>
          <p class="adve-p2">新客仅需5元</p>
        </div>
        <div class="adve-02">
          <p class="adve-p3">免费领福利</p>
        </div>
      </div>
    </div>
    <ul class="list-nav">
      <li>
        <img src="../../assets/icon/users/msg.png" />
        <p>消息</p>
      </li>
      <li>
        <img src="../../assets/icon/users/shopping.png" />
        <p>商场</p>
      </li>
      <li>
        <img src="../../assets/icon/users/tickets.png" />
        <p>演出</p>
      </li>
      <li>
        <img src="../../assets/icon/users/derma.png" />
        <p>个性皮肤</p>
      </li>
    </ul>
    <div class="item-list-01">
      <mt-cell is-link>
        <img src="../../assets/icon/users/lingsheng.png" /> 口袋铃声
      </mt-cell>
      <mt-cell is-link>
        <img src="../../assets/icon/users/dingdan.png" /> 我的订单
      </mt-cell>
    </div>
    <div class="item-list-02">
      <mt-cell is-link>
        <img src="../../assets/icon/users/lingsheng.png" />设置
      </mt-cell>
      <div>
        <div class="on-off">
          <div class="on-off-left">
            <img src="../../assets/icon/users/lingsheng.png" />
            <span>夜间模式</span>
          </div>
          <mt-switch></mt-switch>
        </div>
      </div>
      <mt-cell is-link>
        <img src="../../assets/icon/users/lingsheng.png" />定时关闭
      </mt-cell>
      <mt-cell is-link>
        <img src="../../assets/icon/users/lingsheng.png" />音乐闹钟
      </mt-cell>
      <div class="item-list-03">
        <mt-cell is-link>
          <img src="../../assets/icon/users/lingsheng.png" />在线听歌免流量
        </mt-cell>
        <mt-cell is-link>
          <img src="../../assets/icon/users/lingsheng.png" />优惠券
        </mt-cell>
      </div>
      <div class="item-list-04">
        <mt-cell is-link>
          <img src="../../assets/icon/users/lingsheng.png" />加入网易音乐人
        </mt-cell>
        <mt-cell is-link>
          <img src="../../assets/icon/users/lingsheng.png" />我要直播
        </mt-cell>
        <mt-cell is-link>
          <img src="../../assets/icon/users/lingsheng.png" />分享网易云音乐
        </mt-cell>
        <mt-cell is-link>
          <img src="../../assets/icon/users/lingsheng.png" />关于
        </mt-cell>
      </div>
    </div>
    <div>
      <div class="outlogin" @click="outlog" v-show="experience">
        <span>退出登录</span>
      </div>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      deng: true,
      experience:true,
      uname: ""
    };
  },
  created() {
    this.uname = sessionStorage.key(0);
    if (sessionStorage.length >= 1) {
      this.deng = false;
      this.experience = true
    } else {
      this.deng = true;
      this.experience = false
    }
  },
  methods: {
    enter() {
      this.$router.push({ path: "/login" });
    },
    outlog() {
      sessionStorage.clear();
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style src="../../assets/css/user.css"></style>


