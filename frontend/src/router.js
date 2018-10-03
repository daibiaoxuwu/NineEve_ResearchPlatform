import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import homepage from "./pages/home.vue";
import teacherInfo from "./pages/teacherInfo.vue";
import register from "./pages/register.vue";
const routes = [
    { path: '/', component: homepage },
    { path: '/teacherInfo', component: teacherInfo },
    { path: '/register', component: register}
  ]

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
  })

export default router;