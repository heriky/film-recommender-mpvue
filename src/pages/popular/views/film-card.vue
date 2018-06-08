<template>
  <div class="film-card" :class="className" @click="handleClick">
    <div class="img-container">
      <img :src="faceUrl" alt="" class="img">
      <span class="point">{{point}}分</span>
    </div>
    <div class="footer">
      <div class="title">{{title}}</div>
      <span class="tag" v-for="(item, index) in tags" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
  /**
   * { faceUrl: '', point: 4.4, title: '百度人', tags: ['悬疑', '动作', '爱情'] }
   */
  export default {
    name: "film-card",
    props: {
      id: Number,
      faceUrl: String,
      point: Number,
      title: String,
      tags: Array,
      className: String,
    },
    methods: {
      handleClick() {
        this.$emit('card-click', { id: this.id })
      }
    }
  }
</script>

<style scoped>
  .film-card {
    background: #fff;
  }
  .img-container {
    width: 100%;
    height: 70%;
    position: relative;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  .title {
    color: #333;
    margin-bottom: 8rpx;
  }
  .footer {
    padding: 10px;
    line-height: 1.5;
  }
  .tag {
    font-size: 12px;
    padding: 2px 4px;
    border: 1px solid #ddd;
    background: #eee;
    border-radius: 10rpx;
    margin-right: 4rpx;
  }
  .point {
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50rpx;
    background: rgba(0, 0, 0, .5);
    text-align: center;
  }
</style>
