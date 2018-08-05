// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/style/index.css'
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'; 
import FastClick from 'fastclick'
FastClick.attach(document.body);
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading:'./common/image/default.png'
})
import store from './store/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
