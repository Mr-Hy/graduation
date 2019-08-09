<template>
  <div>
    <div class="head">
      <!-- 输入手机号 -->
      <div v-show="hidden">
        <div class="head-nav">
          <img src="../../assets/icon/leftout.png" class="head-out" @click="getindex" />
          <span class="head-span">手机号登录</span>
        </div>
        <div class="user-hint">
          <span>未注册手机号登录后将自动创建账号</span>
        </div>
        <div>
          <input
            type="text"
            class="user-enter"
            placeholder="+86请输入手机号"
            @focus="text"
            v-model="phone"
          />
        </div>
        <div class="user-next" @click="next">
          <span class="user-next-span">下一步</span>
        </div>
      </div>
      <!-- 输入密码 -->
      <div v-show="show">
        <div class="head-nav">
          <img src="../../assets/icon/leftout.png" class="head-out" @click="getlast" />
          <span class="head-span">手机号登录</span>
        </div>
        <div class="input-text">
          <input type="text" class="user-enter" placeholder="请输入密码" v-model="pass" />
          <a href="javascript:;" class="forget-pass">忘记密码？</a>
        </div>
        <div class="user-next" @click="loginbtn">
          <span class="user-next-span">登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hidden: true,
      show: false,
      regexp: /^\+861([38]\d|5[0-35-9]|7[3678])\d{8}$/,
      phone: "",
      pass: ""
    };
  },
  methods: {
    getindex() {
      window.history.back(-1);
    },
    getlast() {
      this.hidden = true;
      this.show = false;
    },
    next() {
      if (this.regexp.test(this.phone)) {
        this.hidden = false;
        this.show = true;
      }
    },
    text(e) {
      let int = document.getElementsByClassName("user-enter");
      int[0].value = "+86";
    },
    loginbtn() {
      sessionStorage.setItem(this.phone, this.pass);
      this.$router.push({ path: "/user" });
    }
  }
};
</script>
<style src="../../assets/css/register.css">
</style>


