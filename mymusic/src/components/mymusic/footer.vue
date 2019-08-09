<template>
  <div>
    <mt-tabbar v-model="selected" @click.native="addfooter">
      <mt-tab-item id="tab1" >
        <img slot="icon" src="../../assets/icon/footer/faxian.png" />
       发现
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../../assets/icon/footer/faxian.png" />
        视频
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../../assets/icon/footer/faxian.png" />
        我的
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../../assets/icon/footer/faxian.png" />
        朋友
      </mt-tab-item>
      <mt-tab-item id="tab5">
        <img slot="icon" src="../../assets/icon/footer/faxian.png" />
        账号
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: ""
    };
  },
  methods:{
    addfooter(e){
      
      e.target.style='color:red'
    }
  }
};
</script>
<style src="../../assets/css/footer.css">
</style>


