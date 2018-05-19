/**
 * Created by hankang on 2018/5/19
 */
// import wx from 'wx';

const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()

// 在这处理一些http请求的通用事件，包括header参数的添加、loading状态的控制
// fly.config.baseURL="https://wendux.github.io/"

// fly.interceptors.request.use()
// fly.interceptors.response.use()

export default fly
