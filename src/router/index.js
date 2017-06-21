import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
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
      meta: { navShow: true, cname: '一级页面' },
      children: [
        {
          path: "/login",
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
