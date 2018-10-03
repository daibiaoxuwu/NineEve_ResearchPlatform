import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import homepage from "./pages/home.vue";
import teacherInfo from "./pages/teacherInfo.vue";
import register from "./pages/register.vue";
import enroll from "./pages/enroll.vue";
import enrollSuccess from "./pages/enrollSuccess.vue";
const routes = [
    { path: '/', component: homepage },
    { path: '/teacherInfo', component: teacherInfo },
    { path: '/register', component: register},
    { path: '/enroll', component: enroll},
    { path: '/enrollSuccess', component: enrollSuccess}
  ]

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
  })

export default router;