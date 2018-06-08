/**
 * Created by hankang on 2018/6/8
 */

import Vue from 'vue';
import App from './search';

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: '搜索'
  }
}
