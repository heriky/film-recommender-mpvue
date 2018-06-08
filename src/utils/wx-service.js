/**
 * Created by hankang on 2018/6/4
 */

/*微信提供的基础服务*/

import wx from 'wx';
import { bmap } from './vendors';
import { BAIDU_MAP_AK } from '../constants';
import store from '@/store';
import { SAVE_CURRENT_LOC } from '@/store/mutation-types';

const BMap = new bmap.BMapWX({
  ak: BAIDU_MAP_AK
});


/**
 * 获取用户位置
 */
export function getUserLocation() {
  return new Promise((resolve, reject) => {
    const currentLocInfo = store.state.loc;
    if (currentLocInfo.city) {
      return resolve(currentLocInfo);
    }
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        const { latitude, longitude } = res;
        const locationStr = [latitude, longitude].join(',');
        BMap.regeocoding({
          location: locationStr,
          fail(err) {
            reject(err)
          },
          success(res) {
            store.commit(SAVE_CURRENT_LOC, res);
            resolve(store.state.loc);
          },
        });
      }
    });
  });
}
