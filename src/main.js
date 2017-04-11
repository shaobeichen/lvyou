import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import router from './router/index'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(MuseUI)
Vue.use(VueAwesomeSwiper)
Vue.use(vueResource)

//FALSE为发展模式，TRUE为生产模式
Vue.config.productionTip = false
//解决接收json格式问题,post请求时
Vue.http.options.emulateJSON = true

new Vue({
  el: '#app',
  router,
  ...App      //render: h => h(App)

})
