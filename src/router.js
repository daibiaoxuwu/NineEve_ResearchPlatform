import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import homepage from "./pages/home.vue";
import login from "./pages/login.vue";

const routes = [
    { path: '/', component: homepage },
    { path: '/login', component: login }
  ]

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
  })

export default router;