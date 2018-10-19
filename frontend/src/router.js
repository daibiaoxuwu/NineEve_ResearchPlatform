import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import homepage from "./pages/home.vue";
import teacherInfo from "./pages/teacherInfo.vue";
import studentInfo from "./pages/studentInfo.vue";
import studentMain from "./pages/studentMain.vue";
import register from "./pages/register.vue";
import enroll from "./pages/enroll.vue";
import enrollForm from "./pages/enrollForm.vue";
import enrollSuccess from "./pages/enrollSuccess.vue";
import enrollStatus from "./pages/enrollStatus.vue";
import enrollAccepted from "./pages/enrollAccepted.vue";
import enrollAcceptNotice from "./pages/enrollAcceptNotice.vue";
import studentEvaluate from "./pages/studentEvaluate.vue";
import studentEvaluateSuccess from "./pages/studentEvaluateSuccess.vue";
import teacherEvaluate from "./pages/teacherEvaluate.vue";
import teacherEvaluateSuccess from "./pages/teacherEvaluateSuccess.vue";
const routes = [
    { path: '/', component: homepage },
    { path: '/teacherInfo', component: teacherInfo },
    { path: '/studentInfo', component: studentInfo },
    { path: '/studentMain', component: studentMain },
    { path: '/register', component: register},
    { path: '/enroll', component: enroll},
    { path: '/enrollForm', component: enrollForm},
    { path: '/enrollSuccess', component: enrollSuccess},
    { path: '/enrollStatus', component: enrollStatus},
    { path: '/enrollAccepted', component: enrollAccepted},
    { path: '/enrollAcceptNotice', component: enrollAcceptNotice},
    { path: '/studentEvaluate', component: studentEvaluate},
    { path: '/teacherEvaluate', component: teacherEvaluate},
    { path: '/studentEvaluateSuccess', component: studentEvaluateSuccess},
    { path: '/teacherEvaluateSuccess', component: teacherEvaluateSuccess}
  ]

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
  })

export default router;