<template>
  <!-- 轮播图 -->
  <div>
    <!-- 头部搜索框 -->
    <div class="header">
      <div class="head-icon" v-show="factors">
        <img src="../../assets/icon/head/maike.png" slot="icon" class="head-img" />
      </div>
      <div class="header-search">
        <input type="text" class="head-input" v-model="searchInput" @click="search" />
      </div>
      <!-- 音频显示 -->
      <div class="audio" v-show="factors">
        <ul class="audiolist" :class="stop==false?'':'audiostop'" @click="audiolist">
          <li class="audio-list-01"></li>
          <li class="audio-list-02"></li>
          <li class="audio-list-03"></li>
          <li class="audio-list-04"></li>
        </ul>
      </div>
      <!-- 隐藏的取消按钮 -->
      <div class="cancel" v-show="hotbots" @click="cancle">
        <p>取消</p>
      </div>
      <div v-show="hotbots" class="right-user">
        <img slot="icon" src="../../assets/icon/head/user.png" class="head-img" />
      </div>
    </div>
    <!-- 搜索界面 -->
    <div v-show="hotbots">
      <div class="HotBot">
        <p class="hotbot-txt">热搜榜</p>
      </div>
      <div class="hot-text" v-for="(item,index) of hotbot" :key="index">
        <p class="h-01">{{index+1}}</p>
        <div class="hot-0">
          <div class="text-right">
            <p class="right-p1">{{item.name}}</p>
            <p class="right-p2">{{item.playCount}}</p>
          </div>
          <p class="right-p3">{{item.description}}</p>
        </div>
      </div>
    </div>
    <div v-show="factors">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../../assets/image/lunbo01.jpg" class="sliding" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/image/lunbo02.jpg" class="sliding" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/image/lunbo03.jpg" class="sliding" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/image/lunbo04.jpg" class="sliding" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/image/lunbo05.jpg" class="sliding" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/image/lunbo06.jpg" class="sliding" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/image/lunbo07.jpg" class="sliding" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/image/lunbo08.jpg" class="sliding" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/image/lunbo09.jpg" alt class="sliding" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- 每日推荐导航栏 -->
      <div class="nav-button">
        <div>
          <mt-button size="small" type="danger" class="mint-button-text01">
            <img src="../../assets/icon/date.png" class="nav-btn-img" />
          </mt-button>
          <p>每日推荐</p>
        </div>
        <div>
          <mt-button size="small" type="danger" class="mint-button-text02">
            <img src="../../assets/icon/qingdan.png" class="nav-btn-img" />
          </mt-button>
          <p>歌单</p>
        </div>
        <div>
          <mt-button size="small" type="danger" class="mint-button-text03" @click="getranking">
            <img src="../../assets/icon/paihang.png" class="nav-btn-img" />
          </mt-button>
          <p>排行榜</p>
        </div>
        <div>
          <mt-button size="small" type="danger" class="mint-button-text04">
            <img src="../../assets/icon/diantai.png" class="nav-btn-img" />
          </mt-button>
          <p>电台</p>
        </div>
        <div>
          <mt-button size="small" type="danger" class="mint-button-text05">
            <img src="../../assets/icon/zhibo.png" class="nav-btn-img" />
          </mt-button>
          <p>直播</p>
        </div>
      </div>
      <!-- 分割线 -->
      <div class="hr"></div>
      <!-- 主体 -->
      <div>
        <div class="tit">
          <h3 style="font:12px">推荐歌单</h3>
          <div class="tit-btn">歌单广场</div>
        </div>
      </div>
      <!-- 热门歌单 -->
      <div>
        <div class="Hot-list">
          <div class="hot-item" v-for="(item,index) of img_url" :key="index">
            <img :src="item.coverImgUrl" class="hot-item-img"  />
            <p class="hot-item-txt">{{item.description}}</p>
          </div>
        </div>
      </div>
      <!-- 新歌、新碟 -->
      <div>
        <div class="newmusic">
          <div>
            <span :class="show1" @click="show" data-id="d1">新碟</span>
            <!-- <span class="new-txt-01-none">新碟</span> -->
            <span class="new-txt-02">|</span>
            <span :class="show2" @click="show" data-id="d2">新歌</span>
            <!-- <span class="new-txt-03-none" v-show="false">新碟</span> -->
          </div>
          <div class="tit-btn">更多新碟</div>
        </div>
        <!-- 新碟 -->
        <div class="newCd" v-show="newCD">
          <div class="cd" v-for="(el,index) of new_cd_img" :key="index">
            <img :src="el.coverImgUrl" class="newcd-img" />
            <p class="newcd-txt-01">{{el.description}}</p>
            <p class="newcd-txt-02">{{el.name}}</p>
          </div>
        </div>
        <!-- 新歌 -->
        <div class="newmusic" v-show="newMuise">
          <div class="cd" v-for="(el,index) of new_music_img" :key="index">
            <img :src="el.coverImgUrl" class="newcd-img" />
            <p class="newcd-txt-01">{{el.description}}</p>
            <p class="newcd-txt-02">{{el.name}}</p>
          </div>
        </div>
      </div>
      <!-- 无限视频 -->
      <div>
        <div class="video-list">
          <video
            src="https://v1.itooi.cn/netease/mvUrl?id=10879643&quality=1080"
            id="videoPlay"
            class="video"
            controls
          ></video>
          <div class="vd-text">
            <span>网易云音乐&Touch音乐共同打造的全新原创音乐节目Life·Live，本期迎来银临的单独演绎。世界上最远的距离是你看不到我，我愿追随你的轨迹，也允许你将我忘记，周五蓝色主题歌《月球》首播，愿所有真心不被辜负，愿所有破碎都被治愈。</span>
          </div>
        </div>
        <video
          src="https://v1.itooi.cn/netease/mvUrl?id=10880291&quality=1080"
          id="videoPlay"
          class="video"
          controls
        ></video>
        <div class="vd-text">
          <span>在物欲横流的现实世界，随波逐流的意识形态愈演愈烈。姑娘们被差不多的愿望所牵引，像孔雀⼀样渴望展示漂亮的⽪囊，追逐差不多的浮华，迷失于差不多的诱惑。\n“差不多姑娘”该如何打破“差不多”的枷锁？面临无形之手的操控，她们⼜将何去何从？\n同样活在现代都市的邓紫棋，⽤⾳乐为每位差不多姑娘说出⼼声，以她的⼒量⿎励姑娘们重新找到⾃⼰。\n坚持⽤⾳乐表达观点，是邓紫棋的创作初⼼。她在“差不多姑娘”中注入了对现实敏锐的洞察，和其对女性群体的观照。因为曾⼏何时，她也陷入过“差不多”困境，对镜⼦⾥的⾃⼰失望，⽽后终于挣脱泥淖，接受没有武装的模样。邓紫棋把⾃⼰的感同⾝受写进⾳乐⾥，警醒那些被欲望绑架的“差不多姑娘”，告诉她们“⼈⽣真的不该这样过”。歌曲中不加修饰的歌词不断敲打⼈⼼，每⼀句都似在叩问，意图击碎代表虚荣假象的泡沫。\n每个女⽣都是独特的宇宙，拥有⾃⼰的光芒万丈。</span>
        </div>
        <video
          src="https://v1.itooi.cn/netease/mvUrl?id=10877614&quality=1080"
          id="videoPlay"
          class="video"
          controls
        ></video>
        <div class="vd-text">
          <span>从年少时相知，到历经误解困难后的相互扶持，安生和七月 两个女生的十年全在《被劫持的思念》MV里了。看完《被劫持的思念》MV不禁感叹，安生和 七月即使经历世俗的艰难考验依旧能保持纯粹关系，真实难能可贵。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      img_url: [],
      new_cd_img: [],
      new_music_img: [],
      show1: { newxtNone: true, newTxtMonitors: false },
      show2: { newTxtNone: false, newTxtMonitors: true },
      newCD: true,
      newMuise: false,
      searchInput: "那个女孩",
      hotbots: false,
      factors: true,
      hotbot: [],
      stop: false
    };
  },

  created() {
    this.getApi();
    this.hotsreach();
  },
  methods: {
    audiolist() {
      if (this.stop == false) {
        this.stop = true;
      } else {
        this.stop = false;
      }
    },
    // 音频动画开关
    cancle() {
      if (this.hotbots == true) {
        this.factors = true;
        this.hotbots = false;
      }
    },
    hotsreach() {
      this.$axios.get("https://v1.itooi.cn/netease/songList/hot").then(res => {
        this.hotbot = res.data.data;
        console.log(res.data.data);
      });
    },
    search() {
      if (this.factors == true) {
        this.factors = false;
        this.hotbots = true;
      }
    },
    getApi() {
      this.$axios
        .get("https://v1.itooi.cn/netease/songList/hot", {
          params: {}
        })
        .then(res => {
          var $S = parseInt(Math.random() * 23);
          var $newCd = parseInt(Math.random() * 26);
          var $newMuisic = parseInt(Math.random() * 26);
          this.img_url = res.data.data.slice($S, $S + 6);
          this.new_cd_img = res.data.data.slice($newCd, $newCd + 3);
          this.new_music_img = res.data.data.slice($newMuisic, $newMuisic + 3);
          // console.log(this.img_url);
        })
        .catch(err => {
          err => {
            console.log(err);
          };
        });
    },
    show(e) {
      var id = e.target.dataset.id;
      if (id == "d1") {
        this.show2.newTxtNone = false;
        this.show2.newTxtMonitors = true;
        this.show1.newTxtNone = true;
        this.show1.newTxtMonitors = false;
        this.newCD = true;
        this.newMuise = false;
      } else {
        this.show1.newTxtNone = false;
        this.show1.newTxtMonitors = true;
        this.show2.newTxtNone = true;
        this.show2.newTxtMonitors = false;
        this.newCD = false;
        this.newMuise = true;
      }
    },
    getranking() {
      this.$router.push({ path: "/ranking" });
    }
  }
};
</script>
<style src="../../assets/css/index.css"></style>
