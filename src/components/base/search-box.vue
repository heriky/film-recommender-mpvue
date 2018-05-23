<template>
  <h-group :className="`search-box ${className}`" horizontalAlign="flex-start">
    <img class="search-icon" :src="searchIcon" alt="">
    <input type="text" class="search-input" :placeholder="placeholder" @input="handleInput($event)">
  </h-group>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import searchIcon from './search.svg';

  import HGroup from './h-group';

  const eType = {
    searchChange: 'search-change'
  };

  @Component({
    name: 'search-box',
    components: { HGroup },
    props: {
      className: String,
      placeholder: String
    }
  })
  export default class SearchBox extends Vue {

    searchIcon = searchIcon;

    handleInput(e) {
      const value = e.target.value;
      this.$emit(eType.searchChange, value);
    }
  }
</script>

<style>

  .search-box {
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    height: 60rpx;
    border-radius: 8rpx;
  }
  .search-icon {
    padding: 5rpx 10rpx;
    width: 48rpx;
    height: 48rpx;
  }
  .search-input {
    flex: 1;
    border: 0;
    outline: none;
    text-align: center;
    line-height: 32rpx;
    font-size: 32rpx;
  }

</style>
