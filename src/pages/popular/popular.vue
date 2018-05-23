<template>
  <section class="home">
    <div class="search-container">
      <search-box placeholder="开始你的搜索之旅吧~" @search-change="handleSearchComplete"></search-box>
    </div>
    <div>幻灯片</div>
    <div>热映列表</div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';

  import HGroup from '@/components/base/h-group';
  import VGroup from '@/components/base/v-group';
  import SearchBox from '@/components/base/search-box';

  @Component({
    name: 'home',
    components: { HGroup, VGroup, SearchBox }
  })
  export default class Popular extends Vue {
    onPullDownRefresh() {
      wx.showToast('下拉刷新');
    }

    handleClick() {
      wx.showToast({
        title: '点击成功',
        icon: null
      });
    }

    handleSearchComplete(data) {
      console.log('外部触发了，值是:' + data);
    }
  }
</script>

<style scoped>
  .home {

  }
  .search-container {
    padding: 10rpx;
  }
</style>
