// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
import App from './App'
import router from './router'
//导入vuex
import store from './store/index'
// 引入jq
import $ from 'jquery'
Vue.prototype.$ = $
import '../test/unit/rem'
import Mint from 'mint-ui'
Vue.use(Mint)
//引入mint-ui的样式
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//引入字体图标
import './assets/iconfont/css/font-awesome.css'
// import vueTouch from 'kim-vue-touch'
// Vue.use(vueTouch)// import vueTouch from 'kim-vue-touch'
// Vue.use(vueTouch)
//引入al字体图标
import './assets/aliFonts/iconfont.css'
// import Swiper from "swiper" 
// import 'swiper/dist/css/swiper.min.css';
// Vue.use(Swiper);
Vue.config.productionTip = false
//引入公共样式
import '../static/css/base.css'
/* eslint-disable no-new */
import mui from './assets/js/mui'
import './assets/css/mui.css'
Vue.prototype.mui = mui
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
