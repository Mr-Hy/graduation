<template>
  <div class="abb">
    <div class="body">
      <button class="lg-phone" @click="enter">手机号登陆</button>
      <button class="experience" @click="experience">立即体验</button>
      <div>
        <div class="radio">
          <img
            v-bind:src="con==0?require('../../assets/icon/user/yuanquan.png'):require('../../assets/icon/user/gou.png')"
            class="radio-circle"
            @click="confirm"
          />
          <span class="radio-p1">同意</span>
          <span class="radio-p2">《服务条款》</span>
          <span class="radio-p1">和</span>
          <span class="radio-p2">《隐私政策》</span>
        </div>
        <div class="login-icon">
          <img slot="icon" src="../../assets/icon/user/weixin.png" alt />

          <img slot="icon" src="../../assets/icon/user/QQ.png" alt />

          <img slot="icon" src="../../assets/icon/user/weibo.png" alt />

          <img slot="icon" src="../../assets/icon/user/music.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Toast } from "mint-ui";
export default {
  data() {
    return {
      con: 0
    };
  },
  methods: {
    confirm() {
      if (this.con == 1) {
        this.con = 0;
      } else {
        this.con = 1;
      }
    },
    enter() {
      if (this.con == 0) {
        Toast({
          message: "请选择同意",
          position: "center",
          duration: 800
        });
      } else {
        this.$router.push({ path: "/register" });
      }
    },
    experience() {
      if (this.con == 0) {
        Toast({
          message: "请选择同意",
          position: "center",
          duration: 800
        });
      } else {
        this.$router.push({ path: "/user" });
      }
    }
  }
};
</script>
<style src="../../assets/css/login.css">
</style>

