/**
 * Created by hankang on 2018/5/20
 */
import Vue from 'vue'
import Vuex from 'vuex'
import wx from 'wx'

import { USER_INFO } from './mutation-types'
import modules from './modules'

Vue.use(Vuex)

const globalState = {
  userInfo: {}
}

const globalMutations = {
  [USER_INFO] (state, data) {
    state.userInfo = data
  }
}

const globalGetters = {}

const globalActions = {
  // 登陆并获取用户信息
  fetchUserInfo ({ state, commit, rootState }, data) {
    wx.login({
      success: () => {
        wx.getUserInfo({
          success: (res) => {
            commit(USER_INFO, res.userInfo)
          }
        })
      }
    })
  }
}

// 组合并实例化
const store = new Vuex.Store({
  state: globalState,
  mutations: globalMutations,
  getters: globalGetters,
  actions: globalActions,
  modules
})

export default store
