<template>
    <div>  
    
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
          <h2>报名信息</h2>
          <p class="lead">Enroll Information</p>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container">
      <div class="row">
        <rightpane></rightpane>
        
        <div class="col-md-8 order-md-1">
            <h2 class="mb-3"><b>恭喜!</b>
           <small class="form-text text-muted">
                Congratulations!
              </small>
         </h2>
          <h5 class="mb-3"><b>你已经同意了 {{selectedItem.text}} ({{selectedItem.department.split(" ")[1]}}-{{selectedItem.year.split(" ")[1]}})的报名! 请等待后续通知.</b>
           <small class="form-text text-muted">
              You have successfully accepted a student for your project. Please await further notice.
              </small>
         </h5>
           <h2 class="mb-3"><b>{{selectedItem.text}}</b>
           <small class="form-text text-muted">
                {{selectedItem.department.split(" ")[0]}} {{selectedItem.year.split(" ")[0]}} {{selectedItem.department.split(" ")[1]}} {{selectedItem.year.split(" ")[1]}} 
              </small>
         </h2>
          <p class="form-text text-muted">
           这里是一段自我介绍. Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
          在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。
          在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!
          我们推荐链接到一个你可以手动更新的指定版本号：
          你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。
Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。
请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。
</p>
        
           <p class="form-text" style="font-weight:bold;">获得奖项</p>
         <p class="form-text text-muted">
           特奖</p>
         <p class="form-text" style="font-weight:bold;">项目简介</p>
         <p class="form-text text-muted">
           Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
          在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。
          在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!
          我们推荐链接到一个你可以手动更新的指定版本号：
          你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。
Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。
请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。
</p>

 <p class="form-text" style="font-weight:bold;">详细说明</p>
         <p class="form-text text-muted">
           Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
          在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。
          在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!
          我们推荐链接到一个你可以手动更新的指定版本号：
          你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。
Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。
请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。
           Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
          在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。
          在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!
          我们推荐链接到一个你可以手动更新的指定版本号：
          你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。
Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。
请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。
</p>

        
        </div>
      </div>
    </div>
  </div>

  
     </div>
</template>


<script>
import rightpane from "../components/right.vue"
export default {

  name: "enrollSuccess",
   data() {
    return {
       selectedItem:  {
          text: "肖朝军",
          department: "CST 计算机系",
          year: "Junior 大三"
        }
    }
   },
    components:{
    rightpane
  },
    methods: {
   handleOk (){
      alert("Enroll Withdrawn!");
      // this.$router.push("/log")
    }
  }
}
</script>
