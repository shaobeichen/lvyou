<p align="center"><img src="https://github.com/zhou1178539345/lvyou/blob/master/READMEIMG/icon.png?raw=true"  width="200" height="200"></p>

# Lvyou

![npm](https://img.shields.io/badge/npm-3.8.9-green.svg)                                     ![npm](https://img.shields.io/badge/vue-2.2.1-green.svg)              ![npm](https://img.shields.io/badge/vue--resource-1.2.1-green.svg)            ![npm](https://img.shields.io/badge/vue--router-2.2.0-green.svg)      ![npm](https://img.shields.io/badge/vuex-2.2.1-green.svg)

> Vue.js 初步进阶案例，适合vue入门者进阶

> 路由懒加载，进入页面前登录判断，返回导航判断，RestAPI接口使用，组件封装，Vuex状态封装，keep-alive页面缓存等

> 旅游APP，为喜欢旅游的人专业提供旅游攻略，致力提升旅游体验。

> 目前功能不全，后期会慢慢完善，诸多问题，还望各位见谅。


### 项目技术架构
- vue
- vue-router
- vuex
- vue-resource
- vue-cli
- less
- webpack
- muse-ui
- vue-awesome-swiper
- vue-lazyload
- leancloud

### 安装部署
1.下载
```
git clone https://github.com/zhou1178539345/lvyou.git
```
2.进入项目
```
cd lvyou
```
3.安装依赖
```
npm install
```
4.运行
```
npm run dev
```
5.打包
```
npm run build
```
### 线上预览
 [线上预览地址](https://zhou1178539345.github.io/lvyou)
登录测试账号：leachzhou 123456
友情提示：建议在开发者模式适配下浏览网站

### 功能
- 首页
- 发现详情页
- 双列详情页
- 话题页
- 话题发布页
- 干货页
- 排行榜页
- 干货详情页
- 搜索页
- 侧滑栏
- 登录注册页
- 用户页
- 反馈信息页
- 咨询客服
- 注销
- 图片懒加载
- banner切换

友情告知：后台数据采用leancloud RestAPI，因本人能力有限，一些请求未能请求成功，如果有人能够解决问题，欢迎随时[pull request](https://github.com/zhou1178539345/lvyou/pulls)。

### 目录结构
```
├─ build                                   // webpack配置文件
├─ config                                  // 项目设置
├─ docs                                    // 项目部署文件
├─ src
│  ├─ assets                               // 静态文件
│  │  ├─ css                               // 公共css
│  │  └─ image                             // 图片文件
│  ├─ components                           // 页面
│  │  ├─ public                            // 公共组件
│  │  │  ├─ addButton.vue                  // 话题页发布评论按钮组件
│  │  │  ├─ backBar.vue                    // 返回顶部栏组件
│  │  │  ├─ list.vue                       // 列表组件
│  │  │  ├─ publicFooter.vue               // 底部导航栏
│  │  │  ├─ publicHeader.vue               // 头部导航栏
│  │  │  ├─ publicTitle.vue                // 公共标题栏
│  │  │  ├─ spinner.vue                    // 加载组件
│  │  │  ├─ swiper.vue                     // 首页banner组件
│  │  │  └─ topicBanner.vue                // 话题banner组件
│  │  ├─ detailPage.vue                    // 首页详情页
│  │  ├─ editPage.vue                      // 发布评论页
│  │  ├─ feedBack.vue                      // 反馈页
│  │  ├─ goods.vue                         // 干货页
│  │  ├─ goodsCharts.vue                   // 排行榜页
│  │  ├─ goodsDetailPage.vue               // 干货详情页
│  │  ├─ index.vue                         // 首页
│  │  ├─ indexFourFour.vue                 // 首页双列详情页4
│  │  ├─ indexFourOne.vue                  // 首页双列详情页1
│  │  ├─ indexFourThree.vue                // 首页双列详情页3
│  │  ├─ indexFourTwo.vue                  // 首页双列详情页2
│  │  ├─ login.vue                         // 登录页
│  │  ├─ search.vue                        // 搜索页
│  │  ├─ test.vue                          // 测试页（备用）
│  │  ├─ topic.vue                         // 话题页
│  │  └─ user.vue                          // 用户页
│  ├─ router
│  │  └─ index.js                          //路由配置
│  ├─ vuex
│  │  └─ store.js                          // vuex配置
│  ├─ App.vue                              // 页面入口文件
│  └─ main.js                              // 程序入口文件
├─ static                                  // 静态文件
├─ .babelrc                                // ES6语法编译配置
├─ .editorconfig                           // 代码编写规格配置
├─ .gitignore                              // git 忽略项
├─ .postcssrc.js
├─ LICENSE                                 // 许可证
├─ README.md                               // README
├─ index.html                              // html模板
└─ package.json                            // 配置依赖
```

### 运行效果
![这里写图片描述](http://img.blog.csdn.net/20170712082912304)

![这里写图片描述](http://img.blog.csdn.net/20170712083008201)

![这里写图片描述](http://img.blog.csdn.net/20170712083045252)

### APP
[软件下载地址](http://ot2v0dd6x.bkt.clouddn.com/H51CF16CE_0712104129.apk)
软件使用HBuilder进行应用打包，另外制作了启动页和appIcon

![这里写图片描述](http://img.blog.csdn.net/20170712110116741)

### 鸣谢
- Vue
- Muse-UI
- leancloud
- vue-awesome-swiper
- vue-lazyload
- HBuilder

### END
这是本人深入vue系统所制作的一个webapp，由于接口使用的是leancloud，很多功能没有实现，后期想用node.js自己写RestAPI，再完善组件和界面。欢迎大家STAR！
