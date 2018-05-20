<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <color-text active-color="red">没什么，我只是想测试一下自定义组件的支持成都啊</color-text>
    <map id="map" longitude="113.324520" latitude="23.099994"></map>
    <h-group className="red">
      <span>文字1</span>
      <span>文字2</span>
    </h-group>
    <div style="height: 100px">
      <v-group verticalAlign="space-between">
        <span>文字4</span>
        <span>文字3</span>
      </v-group>
    </div>
  </div>
</template>

<script>
import card from '@/components/base/card'
import HGroup from '@/components/base/h-group';
import VGroup from '@/components/base/v-group';

import ColorText from './views/color-text'
import wx from 'wx'
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action } from 'vuex-class'

@Component({
  name: 'index',
  components: { card, ColorText, HGroup, VGroup }
})
export default class Index extends Vue {
  @State('userInfo') userInfo
  @State(state => state.nickname) nickname
  @Action('fetchUserInfo') fetchUserInfo

  motto = 'Hello World'

  created () {
    this.fetchUserInfo()
    console.log(getApp());
  }

  bindViewTap () {
    const url = '../logs/main'
    wx.navigateTo({ url })
  }

  clickHandle (msg, ev) {
    console.log('clickHandle:', msg, ev)
  }

  onGotUserInfo (info) {
    console.log(info)
  }
}
</script>

<style>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

  .red {
    color: red;
  }
</style>
