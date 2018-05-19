# film-recommender-mpvue

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 开发记录

#### 2018-05-19
+ 初始化项目
+ 添加vue-component-class支持，添加flyio的支持
+ 在webpack中配置wx 和 flyio的alias, 一方面对flyio进行统一化处理，另一方面可以简化import wx / flyio的流程
+ 使用async/await简化异步请求过程
+ 下一步计划引入vuex试水
