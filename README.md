## 基于mpVue开发的微信小程序
 > 小程序几种开发方式对比
 ### [原生方式](https://developers.weixin.qq.com/miniprogram/dev/)
 + 优点：原生方式支持性好； 可以直接在开发者工具中编辑，并且有明确的api提示； 直接编译；
 + 缺点： 文件组织方式比较繁琐； 不支持引入npm包；组件化能力弱；不支持promise； 限制了请求并发数，最多10个请求同时进行；在开发者工具中直接开发，体验差。

 ### [wepy框架](https://github.com/Tencent/wepy)
 + 优点：腾讯官方出品；类vue风格组织文件；单文件组件；支持npm，支持es6大部分特性
 + 缺点：框架bug特别多，被开发者吐槽无数次，项目issue众多，无人去解决。

 ### [mpVue框架](https://github.com/Meituan-Dianping/mpvue)
 + 优点：直接使用原生vue上手开发小程序；美团开源出品；组件化支持好，支持npm，支持es6大部分特性；对于熟悉vue的开发者非常友好；解决issue迅速
 + 缺点：部分vue特性不支持；从vue到小程序的过程需要转换编译; 开发时编译速度比较慢。

## 该项目涉及的相关技术
[vue](https://cn.vuejs.org)
[vuex](https://vuex.vuejs.org/zh-cn/)
[vuex-class](https://www.npmjs.com/package/vuex-class)
[vue-class-component](https://www.npmjs.com/package/vue-class-component)
[mpVue](http://mpvue.com)
[flyio](https://wendux.github.io/dist/#/doc/flyio/wx)

## 开发方式

 + `npm run dev`
 + 使用开发者工具打开dist目录

## 开发记录

#### 2018-05-19
+ 初始化项目
+ 添加vue-component-class支持，添加flyio的支持
+ 在webpack中配置wx 和 flyio的alias, 一方面对flyio进行统一化处理，另一方面可以简化import wx / flyio的流程
+ 使用async/await简化异步请求过程
+ 下一步计划引入vuex试水

#### 2018-05-20
+ 添加vuex支持、添加vuex-class支持
+ 因为引入了class-component，vuex通过官方的形式无法注入，可以直接向Vue.prototype原型注入
+ 使用不同的思路，实现HGroup/VGroup/Group布局组件

#### 2018-05-22
+ 使用vue-class-component定义vue组件，无法监听到小程序的生命周期事件。通过Component.registerHooks解决问题
+ 开发search-box组件。由于小程序不支持styleObject和classObject的绑定，只有通过字符串的模式融合组件内外的样式。且为了传入的样式字符生效，父组件定义
  的css名称不能是scope模式的。基于这个原因，组件的开发需要使用全局样式，而在page中可使用scope。
