/**
 * Created by hankang on 2018/5/23
 */
import Vue from 'vue';
import App from './popular'

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: '热映'
  }
};
