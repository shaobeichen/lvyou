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
      }
    },
    {
      path: "/index",
      name: "index",
      component: (resolve) => {
        require(["../components/index.vue"], resolve);
      }
    },
    {
      path: "/topic",
      name: "topic",
      component: (resolve) => {
        require(["../components/topic.vue"], resolve);
      }
    },
    {
      path: "/goods",
      name: "goods",
      component: (resolve) => {
        require(["../components/goods.vue"], resolve);
      }
    },
    {
      path: "/user",
      name: "user",
      component: (resolve) => {
        require(["../components/user.vue"], resolve);
      }
    },

  ]
})
