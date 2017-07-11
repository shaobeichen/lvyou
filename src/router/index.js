import Vue from 'vue'
import store from '../vuex/store'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

 const router = new VueRouter({
   mode: 'hash',
   routes: [
    {
      path: "/",
      name: "home",
      component: (resolve) => {
        require(["../components/index.vue"], resolve);
      },
      meta: {
        navShow: true,      // 表示此路由需要显示底部导航栏
        cname: '一级页面',
        keepAlive: true
      }
    },
    {
      path: "/index",
      name: "index",
      component: (resolve) => {
        require(["../components/index.vue"], resolve);
      },
      meta: {
        navShow: true,
        cname: '一级页面',
        keepAlive: true
      },
      // children:[{
      //   path: '/index/:id',
      //   component: (resolve) => {
      //     require(["../components/index.vue"], resolve);
      //   }
      // }]
    },
    {
      path: "/search",
      name: "search",
      component: (resolve) => {
        require(["../components/search.vue"], resolve);
      },
      meta: {
        isSearch:true,
        keepAlive: true
      }
    },
    {
      path: '/indexFourOne',
      name: 'indexFourOne',
      component: (resolve) => {
        require(["../components/indexFourOne.vue"], resolve);
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/indexFourTwo',
      name: 'indexFourTwo',
      component: (resolve) => {
        require(["../components/indexFourTwo.vue"], resolve);
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/indexFourThree',
      name: 'indexFourThree',
      component: (resolve) => {
        require(["../components/indexFourThree.vue"], resolve);
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/indexFourFour',
      name: 'indexFourFour',
      component: (resolve) => {
        require(["../components/indexFourFour.vue"], resolve);
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/feedBack',
      name: 'feedBack',
      component: (resolve) => {
        require(["../components/feedBack.vue"], resolve);
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/detailPage/:id',
      name: 'detailPage',
      component: (resolve) => {
        require(["../components/detailPage.vue"], resolve);
      },
      meta: {
        keepAlive: false
      }
    },
    {
      path: "/topic",
      name: "topic",
      component: (resolve) => {
        require(["../components/topic.vue"], resolve);
      },
      meta: {
        navShow: true,
        cname: '一级页面',
        keepAlive: true
      }
    },
    {
      path: "/goods",
      name: "goods",
      component: (resolve) => {
        require(["../components/goods.vue"], resolve);
      },
      meta: {
        navShow: true,
        cname: '一级页面',
        keepAlive: true
      }
    },
    {
      path: '/goodsDetailPage/:id',
      name: 'goodsDetailPage',
      component: (resolve) => {
        require(["../components/goodsDetailPage.vue"], resolve);
      },
      meta: {
        keepAlive: false
      }
    },
    {
      path: "/goodsCharts",
      name: "goodsCharts",
      component: (resolve) => {
        require(["../components/goodsCharts.vue"], resolve);
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/user",
      name: "user",
      component: (resolve) => {
        require(["../components/user.vue"], resolve);
      },
      meta: {
        requireAuth: true,// 添加该字段，表示进入这个路由是需要登录的
        keepAlive: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: (resolve) => {
        require(["../components/login.vue"], resolve);
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/editPage",
      name: "editPage",
      component: (resolve) => {
        require(["../components/editPage.vue"], resolve);
      },
      meta: {
        requireAuth: true,
        keepAlive: true
      }
    },
    {
      path: "/test",
      name: "test",
      component: (resolve) => {
        require(["../components/test.vue"], resolve);
      }
    }

  ]
})


/**
 * 登录钩子函数
 * to 即将要进入的目标 路由对象
 * from 当前导航正要离开的路由
 * next 一定要调用该方法来 resolve 这个钩子
 * next() 进行管道中的下一个钩子 如果全部钩子执行完了，则状态就是 confirmed （确认的）
 */
router.beforeEach((to, from, next) => {

  if(to.meta.requireAuth){ // 判断该路由是否需要登录权限
    if(store.state.sessionToken){ // 通过vuex state获取当前的token是否存在
      next();
    }else{
      next({
        path: '/login',  // 跳转到登录页面
        query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，用于登录成功后回到登录前页面
      });
    }
  }else{
    next();
  }
})



export default router;
