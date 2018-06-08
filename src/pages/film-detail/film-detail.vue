<template>
  <section class="film-detail">

    <!--顶部海报部分-->
    <section class="film-banner h-group">
      <!--高斯模糊背景-->
      <div class="film-banner-bg"></div>

      <div class="film-poster v-group">
        <img class="film-poster-img" src="http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg" alt="">
        <span class="film-poster-collect" @click="collect">
          <i class="iconfont icon-detail-collect" :class="{' icon-collect': isCollected}"></i>
          {{isCollected ? '已收藏' : '收藏'}}
        </span>
      </div>

      <div class="film-basic v-group" style="align-items: flex-start">
        <div v-for="(item, index) in basicInfo" :key="index">
          <span class="film-poster-label">{{item.label}}:</span>
          <span>啊啊啊啊</span>
        </div>
      </div>

    </section>

    <!--人数统计部分-->
    <section class="h-group film-flow">

      <div class="v-group film-flow-item">
        <span>1000</span>
        <span>看过</span>
      </div>

      <div class="v-group film-flow-item">
        <span>1000</span>
        <span>想看</span>
      </div>

      <div class="v-group film-flow-item">
        <span>1000</span>
        <span>评分人数</span>
      </div>

    </section>

    <!--影片简介部分-->
    <section class="film-desc">
      <qoute-text>影片简介</qoute-text>
      <p class="desc-content">“鸿瑞林市场的朋友们，我们是来自韩森寨派出所的，有没有人落西安户口？鸿瑞林市场的朋友们，有没有人落西安户口?”
        6月7日下午，微博网友发布的一则陕西省西安市公安局新城分局韩森寨派出所民警开着巡逻车用大喇叭沿街招揽落户的微博，
        在网上引发广泛热议。据北京时间记者注意到，该视频发布短短三个小时，播放量已40万次，转发量超过1500次，评论400多条。
        网友大多认为， 西安市此举是因为“房子卖不动了”，给派出所定新增落户人数考核指标，民警为完成考核任务，不得不出此下策。</p>
    </section>
  </section>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import QouteText from '@/components/base/qoute-text';
  import localStorage, { COLLECT_KEY } from '@/utils/local-storage';

  const basic_info = [{
    label: '电影名字',
    key: 'title'
  }, {
    label: '导演',
    key: 'director'
  }, {
    label: '演员',
    key: 'actor'
  }, {
    label: '评分',
    key: 'rate'
  }, {
    label: '上映时间',
    key: 'startTime'
  }];

  @Component({
    name: 'film-detail',
    components: { QouteText }
  })
  export default class FilmDetail extends Vue {

    basicInfo = basic_info;
    query = {};
    isCollected = false;

    getCollectStatus() {
      // 收藏的电影数据结构为：{ COLLECT_KEY: [{id, title}, {id, title}] }
      const collectedList = localStorage.getItemSync(COLLECT_KEY) || [];
      return collectedList.some(item => item && (item.id === this.$mp.query.id));
    }

    mounted() {
      this.query = this.$mp.query;
      this.isCollected = this.getCollectStatus();
      localStorage.clearItemSync();
    }

    collect() {
      const id = this.query.id;
      if (this.isCollected) return; // 禁止重复收藏

      const oldData = localStorage.getItemSync(COLLECT_KEY) || [];
      const newData = [...oldData, { id }];
      localStorage.setItemSync(COLLECT_KEY, newData);
      this.isCollected = true;
    }
  }
</script>

<style scoped src="./style.css">
</style>
