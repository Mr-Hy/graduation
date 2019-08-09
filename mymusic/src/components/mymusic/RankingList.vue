<template>
  <div>
    <!-- 头部返回键 -->
    <div class="head">
      <div class="head-nav">
        <img src="../../assets/icon/leftout.png" class="head-out" @click="getindex"/>
        <span class="head-span">排行榜</span>
      </div>
    </div>
    <!-- 官方榜 -->
    <div class="item-ranking">
      <h3 class="itran">官方榜</h3>
    </div>
    <!-- 排行榜列表 -->
    <div>
      <ul>
        <li class="item-list">
          <div class="img-div">
            <img src="../../assets/image/rankinglist/biaosheng.jpg" class="item-list-img" />
          </div>
          <div class="item-list-text">
            <p>
              1.
              <span>{{List[0].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[0].artistName}}</span>
            </p>
            <p>
              2.
              <span>{{List[1].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[1].artistName}}</span>
            </p>
            <p>
              3.
              <span>{{List[2].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[2].artistName}}</span>
            </p>
          </div>
        </li>
        <li class="item-list">
          <div class="img-div">
            <img src="../../assets/image/rankinglist/hotmusic.jpg" class="item-list-img" />
          </div>
          <div class="item-list-text">
            <p>
              1.
              <span>{{List[3].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[3].artistName}}</span>
            </p>
            <p>
              2.
              <span>{{List[4].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[4].artistName}}</span>
            </p>
            <p>
              3.
              <span>{{List[5].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[5].artistName}}</span>
            </p>
          </div>
        </li>
        <li class="item-list">
          <div class="img-div">
            <img src="../../assets/image/rankinglist/xinge.jpg" class="item-list-img" />
          </div>
          <div class="item-list-text">
            <p>
              1.
              <span>{{List[6].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[6].artistName}}</span>
            </p>
            <p>
              2.
              <span>{{List[7].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[7].artistName}}</span>
            </p>
            <p>
              3.
              <span>{{List[8].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[8].artistName}}</span>
            </p>
          </div>
        </li>
        <li class="item-list">
          <div class="img-div">
            <img src="../../assets/image/rankinglist/yuanchuang.jpg" class="item-list-img" />
          </div>
          <div class="item-list-text">
            <p>
              1.
              <span>{{List[9].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[9].artistName}}</span>
            </p>
            <p>
              2.
              <span>{{List[10].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[10].artistName}}</span>
            </p>
            <p>
              3.
              <span>{{List[11].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[11].artistName}}</span>
            </p>
          </div>
        </li>
        <li class="item-list">
          <div class="img-div">
            <img src="../../assets/image/rankinglist/douyin.jpg" class="item-list-img" />
          </div>
          <div class="item-list-text">
            <p>
              1.
              <span>{{List[12].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[12].artistName}}</span>
            </p>
            <p>
              2.
              <span>{{List[13].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[13].artistName}}</span>
            </p>
            <p>
              3.
              <span>{{List[14].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[14].artistName}}</span>
            </p>
          </div>
        </li>
        <li class="item-list">
          <div class="img-div">
            <img src="../../assets/image/rankinglist/dianyin.jpg" class="item-list-img" />
          </div>
          <div class="item-list-text">
            <p>
              1.
              <span>{{List[15].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[15].artistName}}</span>
            </p>
            <p>
              2.
              <span>{{List[16].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[16].artistName}}</span>
            </p>
            <p>
              3.
              <span>{{List[17].name}}</span>
              <span style="margin:0 5px">-</span>
              <span>{{List[17].artistName}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: []
    };
  },
  methods: {
    getRankingList() {
      this.$axios
        .get("https://v1.itooi.cn/netease/mv/top")
        .then(res => {
          this.List = res.data.data;
          this.List.push(this.itemList);
          console.log(this.List);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getindex(){
      this.$router.push({path:'/'})
    }
  },
  created() {
    this.getRankingList();
  }
};
</script>
<style src="../../assets/css/RankingList.css"></style>

