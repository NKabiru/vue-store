// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './foundation'
import 'foundation-sites/scss/foundation.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import { apiKey } from "./api/config"
import { baseUrl } from "./api"
let m = require('mithril')

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  m,
  store,
  template: '<App/>',
  mounted(){
    $(this.$el).foundation();
  },
  components: { App }
})
