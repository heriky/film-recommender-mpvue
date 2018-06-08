<template>
  <section class="search-page">
    <div class="h-group search-input-wrapper">
      <i class="iconfont icon-search search-icon"></i>
      <input type="text" class="search-input" placeholder="搜索电影名、演员或者导演"
             confirm-type="search" @confirm="handleSearch($event)"/>
    </div>

    <div class="search-tip-group">
      <quote-text>热门搜索</quote-text>
      <div class="group label-group">
        <span class="tag">aaa</span>
        <span class="tag">bbb</span>
        <span class="tag">ccc</span>
        <span class="tag">dddd</span>
        <span class="tag">eee</span>
      </div>
    </div>

    <div class="search-tip-group">
      <quote-text>热门标签</quote-text>
      <div class="group label-group">
        <span class="tag">吃饭</span>
        <span class="tag">睡觉</span>
        <span class="tag">打豆豆</span>
        <span class="tag">看鬼畜</span>
        <span class="tag">穿女装</span>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import wx from 'wx';

  import QuoteText from '@/components/base/qoute-text';

  @Component({
    name: 'search-page',
    components: { QuoteText }
  })
  export default class SearchPage extends Vue{

    handleSearch(e) {
      console.log('当前搜索的关键字：' + e.target.value);
    }
  }
</script>

<style scoped>
  .search-page {
    background-color: #fff;
    min-height: 100vh;
    padding-top: 30rpx;
  }

  .search-input-wrapper {
    box-sizing: border-box;
    width: calc(100% - 80rpx);
    margin: 0 40rpx;
    border: 1px solid red;
    border-radius: 50rpx;
    line-height: 1.5;
  }
  .search-input {
    width: 100rpx;
    flex: 1;
  }
  .search-icon {
    padding: 10rpx;
  }
  .tag {
    font-size: 12px;
    padding: 2px 4px;
    border: 1px solid #ddd;
    background: #eee;
    border-radius: 10rpx;
    margin-right: 20rpx;
  }

  .label-group {
    justify-content: flex-start;
    margin-top: 20rpx;
  }
  .search-tip-group{
    margin: 40rpx;
  }
</style>
