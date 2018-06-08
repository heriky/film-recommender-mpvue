/**
 * Created by hankang on 2018/6/6
 */
import App from './film-detail';
import Vue from 'vue';

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: '影片详情页'
  }
}
