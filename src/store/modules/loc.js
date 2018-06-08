/**
 * Created by hankang on 2018/6/4
 */

import { SAVE_CURRENT_LOC } from '../mutation-types';

export default {
  state: { latitude: '', longitude: '', province: '', city: '', address: '' },
  mutations: {
    [SAVE_CURRENT_LOC](state, data) {
      state.address = data.originalData.result.formatted_address;
      state.latitude = data.wxMarkerData["0"].latitude;
      state.longitude = data.wxMarkerData["0"].longitude;
      state.city = data.originalData.result.addressComponent.city;
      state.province = data.originalData.result.addressComponent.province;
    }
  }
}
