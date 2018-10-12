import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/css/custom-landing.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import router from "./router"
Vue.use(BootstrapVue);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
