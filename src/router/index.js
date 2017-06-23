import Vue from 'vue'
import store from '../store/store'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: (resolve) => {
        require(["../components/index.vue"], resolve);
      },
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: "/index",
      name: "index",
      component: (resolve) => {
        require(["../components/index.vue"], resolve);
      },
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: "/topic",
      name: "topic",
      component: (resolve) => {
        require(["../components/topic.vue"], resolve);
      },
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: "/goods",
      name: "goods",
      component: (resolve) => {
        require(["../components/goods.vue"], resolve);
      },
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: "/user",
      name: "user",
      component: (resolve) => {
        require(["../components/user.vue"], resolve);
      },
      meta: { navShow: false, cname: '二级页面' },
      children: [
        {
          path: "/user/login",
          name: "login",
          component: (resolve) => {
            require(["../components/login.vue"], resolve);
          },
          meta: { navShow: false, cname: '子页面' }
        }
      ]
    }

  ]
})

//
// //每次进入新组件后的钩子函数
// router.afterEach(function (to) {
//     //判断是否登录
//     if(store.state.isLogined){
//       //判断登录状态是否存在
//     }else {
//       //不存在就跳转到登录页面
//       router.push('/user/login')
//     }
//     //每次组件滚动条回到顶部
//     //window.scrollTo(0,0)
// });
//
