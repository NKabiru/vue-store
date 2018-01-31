// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import loadingGif from './assets/loading.gif'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'


Vue.use(Vuetify);
Vue.use(VueLazyLoad, { loading: loadingGif });


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
