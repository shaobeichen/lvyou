import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(VueResource)
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      //是否登录状态
      isLogined : false,
      // 用户名和密码
      userName: "",
      passWord: "",









    },
    mutations: {

    },
    actions: {

    }
})
