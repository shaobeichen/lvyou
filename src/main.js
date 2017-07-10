import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './App'
import router from './router/index'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

Vue.use(MuseUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueLazyload)


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://m.simpletour.com/images/defalut-img@588250.png',
  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
});

//FALSE为发展模式，TRUE为生产模式
Vue.config.productionTip = false
//解决接收json格式问题,post请求时
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
//http拦截器，添加headers
Vue.http.interceptors.push(function(request, next) {
  request.headers.set('X-LC-Id', 'GDylhkFzcK2qQ76viJMH88Tk-gzGzoHsz');
  request.headers.set('X-LC-Key', '0H797TpfJsn2wNJXnC7Sdr8G');
  request.headers.set('X-LC-Session', 'qmdj8pdidnmyzp0c7yqil91oc');
  next();
});

new Vue({
  el: '#app',
  router,
  store,
  ...App      //render: h => h(App)

})
