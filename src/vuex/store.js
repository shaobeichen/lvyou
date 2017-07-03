import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const SET_LOGINED = 'SET_LOGINED';
export const DRAWER_USERNAME = 'DRAWER_USERNAME';

// 对于vuex的用法，其实理解了流程就行
// vuex -> actions -> 提交（commit）mutations ->state -> view -> dispatch 触发 actions ->...
// actions 其实是mutations的升级版，它实现了mutations只能同步改变状态不能异步改变
// actions 就是可以异步操作mutation的提交
const state = {
  //loading动画
  tranform: true,
  //是否登录状态
  isLogined : false,
  // 用户名和密码
  userName: '',
  passWord: '',
  //模拟登录的cookie
  sise_cookie : '',
  //侧滑栏用户名
  drawerUsername:'登录 | 注册'
}

const mutations = {
  // 改变登录状态为真
  [SET_LOGINED](state,payload){
    state.isLogined = payload.status;
  },

  [DRAWER_USERNAME](state,payload){
    state.drawerUsername = payload.drawerUsername;
  },
  //更改用户名和密码
  setUserFn(state,payload){
    state.userName = payload.user;
  },
  setPassFn(state,payload){
    state.passWord = payload.pass;
  },
  //更改模拟登录的cookie
  setSiseCookieFn(state,payload){
    state.sise_cookie = payload.sise_cookie;
  },
}

// actions中的函数接受一个与store实例有相同属性和方法的context对像
// 因此可以调用context中包含的state,getters以及mutations中定义的方法
// userLogin(context){
//   context.commit(types.LOGIN);
// }
// 使用es6的函数参数结构简化代码，可以直接将context.commit => commit使用
// 在.vue文件中通过store.dispatch('userLogin') 即可触发状态改变了
// 这里的data是因为提交mutations时需要获取从/api/login传回的user对象
const actions = {
  setLogined({ commit }, data) {
    commit(
      SET_LOGINED,
      {
        status:true
      });
  },
  loginUsername({ commit }, data) {
    commit(
      DRAWER_USERNAME,
      {
        drawerUsername:data
      });
  },

}



export default new Vuex.Store({
  state,
  mutations,
  actions
})
