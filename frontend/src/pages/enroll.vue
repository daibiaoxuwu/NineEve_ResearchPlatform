
<template>

    <div>  
    <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
          <h2>项目信息</h2>
          <p class="lead">Assignment information</p>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container">
      <div class="row">
  <rightpane></rightpane>
        
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3"><b>基于Bootstrap-Vue的网页设计研究</b>
           <small class="form-text text-muted">
                Web Page Design Using Bootstrap-Vue
              </small>
         </h4>
         
         <assignmentInfo v-bind:info="info"></assignmentInfo>
             <router-link to="/enrollSuccess" > <button class="btn btn-secondary btn-lg btn-block" type="submit">Mark as Interested</button></router-link>
             <router-link to="/enrollForm" > <button class="btn btn-primary btn-lg btn-block" type="submit" style="margin-top:0.5rem;">Enroll Now</button> </router-link>
        
        </div>
      </div>
    </div>
  </div>
  
  
     </div>
</template>


<script>

import rightpane from '../components/right.vue'
import assignmentInfo from '../components/assignmentInfo.vue'

export default {
  
  name: "enroll",
   data() {
    return {
      info:{
        teacher:"国雨晴",
        introduction:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。\
          在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。\
          在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!\
          我们推荐链接到一个你可以手动更新的指定版本号：\
          你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。\
Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。\
请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。",
     keywords:["关键词 1","关键词 2","关键词 4"],
     abilities:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。",
      detailed:"Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。\
          在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。\
          在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!\
          我们推荐链接到一个你可以手动更新的指定版本号：\
          你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。\
Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。\
请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。\
Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。\
          在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。\
          在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!\
          我们推荐链接到一个你可以手动更新的指定版本号：\
          你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。\
Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。\
请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。\
Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。\
          在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。\
          在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!\
          我们推荐链接到一个你可以手动更新的指定版本号：\
          你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。\
Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。\
请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。",
    number:3,
    deadline:"2018-10-21"


      
      }
    }
   },
   components: {
     rightpane,
     assignmentInfo
   },
   
    methods: {
   handleOk (){
      this.$router.push("/enrollForm")
    }
  }
}
</script>