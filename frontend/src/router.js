import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import homepage from "./pages/home.vue";
import teacherInfo from "./pages/teacherInfo.vue";
import studentInfo from "./pages/studentInfo.vue";
import assignmentForm from "./pages/assignmentForm.vue";
import main from "./pages/main.vue";
import assignmentView from "./pages/assignmentView.vue";
import register from "./pages/register.vue";
import enroll from "./pages/enroll.vue";
import enrollForm from "./pages/enrollForm.vue";
import enrollSuccess from "./pages/enrollSuccess.vue";
import enrollRefused from "./pages/enrollRefused.vue";
import enrollStatus from "./pages/enrollStatus.vue";
import enrollAccepted from "./pages/enrollAccepted.vue";
import enrollAcceptNotice from "./pages/enrollAcceptNotice.vue";
import enrollRejectNotice from "./pages/enrollRejectNotice.vue";
import studentEvaluate from "./pages/studentEvaluate.vue";
import studentEvaluateSuccess from "./pages/studentEvaluateSuccess.vue";
import teacherEvaluate from "./pages/teacherEvaluate.vue";
import teacherEvaluateSuccess from "./pages/teacherEvaluateSuccess.vue";
import teacherView from "./pages/teacherView.vue";
import studentView from "./pages/studentView.vue";
const routes = [
    { path: '/', component: homepage },
    { path: '/teacherInfo', component: teacherInfo },
    { path: '/studentInfo', component: studentInfo },
    { path: '/assignmentForm', component: assignmentForm },
    { path: '/main', component: main },
    { path: '/assignmentView', component: assignmentView },
    { path: '/register', component: register},
    { path: '/enroll', component: enroll},
    { path: '/enrollForm', component: enrollForm},
    { path: '/enrollSuccess', component: enrollSuccess},
    { path: '/enrollRefused', component: enrollRefused},
    { path: '/enrollStatus', component: enrollStatus},
    { path: '/enrollAccepted', component: enrollAccepted},
    { path: '/enrollAcceptNotice', component: enrollAcceptNotice},
    { path: '/enrollRejectNotice', component: enrollRejectNotice},
    { path: '/studentEvaluate', component: studentEvaluate},
    { path: '/teacherEvaluate', component: teacherEvaluate},
    { path: '/studentEvaluateSuccess', component: studentEvaluateSuccess},
    { path: '/teacherEvaluateSuccess', component: teacherEvaluateSuccess},
    { path: '/teacherView', component: teacherView},
    { path: '/studentView', component: studentView},
  ]

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
  })

export default router;