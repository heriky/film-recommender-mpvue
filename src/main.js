import Vue from 'vue';
import App from './App';
import store from '@/store';

import './utils/class-component-hooks';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.prototype.$store = store;

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      // 测试页面
      'pages/logs/main',
      'pages/index/main',

      // 项目页面
      '^pages/popular/main',
      'pages/top/main',
      'pages/my/main'
    ],
    window: {
      backgroundColor: '#ccc',
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ff5243',
      navigationBarTitleText: 'app中配置的首页啊',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      position: 0,
      selectedColor: '#ff5243',
      backgroundColor: 'transparent',
      borderStyle: 'black',
      list: [{
        pagePath: "pages/popular/main",
        text: "热映",
        iconPath: 'static/images/popular.png',
        selectedIconPath: 'static/images/popular_selected.png'
      }, {
        pagePath: "pages/top/main",
        text: "口碑",
        iconPath: 'static/images/top.png',
        selectedIconPath: 'static/images/top_selected.png'
      }, {
        pagePath: "pages/my/main",
        text: "我的",
        iconPath: 'static/images/my.png',
        selectedIconPath: 'static/images/my_selected.png'
      }]
    },
    "networkTimeout": {
      "request": 10000,
      "downloadFile": 10000
    },
    "debug": true
  }
}
