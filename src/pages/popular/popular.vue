<template>
  <section class="home">
    <div class="search-container">
      <search-box placeholder="开始你的搜索之旅吧~" @click-search="goSearch"></search-box>
    </div>
    <image-slider>
      <img src="https://img.moegirl.org/common/thumb/f/fc/20568578.jpg/450px-20568578.jpg" alt="" class="image">
      <img src="https://img.moegirl.org/common/thumb/f/fc/20568578.jpg/450px-20568578.jpg" alt="" class="image">
      <img src="https://img.moegirl.org/common/thumb/f/fc/20568578.jpg/450px-20568578.jpg" alt="" class="image" >
    </image-slider>
    <picker mode="region" @change="changeRegion" :value="region" :custom-item="customItem">
      <view class="picker">
        当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
      </view>
    </picker>
    <tab-list></tab-list>
    <div>热映列表</div>
    <div class="group" :style="{justifyContent: 'space-between', padding: '20rpx'}">
        <film-card v-bind="item" className="film-card-container"
                   v-for="(item, index) in filmList" :key="index"
                   @card-click="handleCardClick"></film-card>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import wx from 'wx';

  import HGroup from '@/components/base/h-group';
  import VGroup from '@/components/base/v-group';
  import Group from '@/components/base/group';
  import SearchBox from '@/components/base/search-box';
  import ImageSlider from '@/components/base/image-slider';
  import TabList from '@/components/base/tab-list';
  import FilmCard from './views/film-card';

  import service from './service';

  import { throttle } from '@/utils/tools';
  import { authLocation } from '@/utils/wx-auth';
  import { getUserLocation } from '@/utils/wx-service';

  @Component({
    name: 'home',
    components: { HGroup, VGroup, SearchBox, ImageSlider, TabList, FilmCard, group: Group }
  })
  export default class Popular extends Vue {

    region = ['广东省', '广州市', '海珠区'];
    customItem = '全部';
    filmList = [];

    changeRegion(e) {
      this.region = e.target.value;
    }

    mounted() {
      wx.setTopBarText({
        text: 'hello, world!'
      });
    }
    onPullDownRefresh() {
      wx.showToast('下拉刷新');
    }

    @throttle
    onPageScroll() {
      console.log('页面滑动了啊');
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

    handleCardClick(item) {
      wx.navigateTo({
        url: `../film-detail/main?id=${item.id}`
      });
    }

    goSearch() {
      wx.navigateTo({
        url: '../search/main?from=popular'
      })
    }

    async mounted() {
      // 位置授权 + 地区设定
      await authLocation();
      const res = await getUserLocation();
      wx.setNavigationBarTitle({title: `热映-${res.city}`});

      // 获取热映
      this.filmList = [{ id: 222, faceUrl: '', point: 9.8, title: '假数据', tags: ['aaa', 'bbb']}];
      // this.filmList = await service.fetchPopular({ city: res.city.endsWith('市') ? res.city.slice(0, -1) : res.city });
    }
  }
</script>

<style>
  .home {

  }
  .search-container {
    padding: 10rpx;
    width: 100%;
    box-sizing: border-box;
  }
  .image {
    width: 33.33%;
  }

  .film-card-container {
    box-shadow: 0 0 4rpx #ccc;
    width: calc((100vw - 60rpx) / 2);
    height: 500rpx;
    margin-bottom: 20rpx;
  }
</style>
