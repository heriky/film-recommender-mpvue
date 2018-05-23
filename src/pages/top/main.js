/**
 * Created by hankang on 2018/5/23
 */
import Vue from 'vue';
import App from './top';

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: '口碑'
  }
}
