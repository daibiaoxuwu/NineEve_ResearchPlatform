<template>
    <div>  
    
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
          <h2>项目信息</h2>
          <p class="lead">Assignment Information</p>
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
          <h5 class="mb-3"><b>你已经成功报名了 "基于Bootstrap-Vue的网页设计研究"! 请等待后续通知.</b>
           <small class="form-text text-muted">
              You have successfully enrolled for the project. Please await further notice.
              </small>
         </h5>
           <p class="form-text" style="font-weight:bold;">指导教师</p>
         <p class="form-text text-muted">
           国雨晴</p>
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
<p class="form-text" style="font-weight:bold;">关键词</p>
<div>

    <b-badge href="#" variant="light" style="font-size:15px; font-weight:200">关键词 1</b-badge>
        <b-badge href="#" variant="light" style="font-size:15px; font-weight:200">关键词 2</b-badge>
            <b-badge href="#" variant="light" style="font-size:15px; font-weight:200">关键词 3</b-badge>

</div>
<div class="row">
        <div class="col-md-12">
          <div class="btn-group col-md-12" >
            <a href="#" class="btn btn-outline-primary btn-lg btn-block" style="marginTop:0.5rem;">关键词 1</a>
            <a href="#" class="btn btn-outline-primary btn-lg btn-block" style="marginTop:0.5rem;">关键词 2</a>
            <a href="#" class="btn btn-outline-primary btn-lg btn-block" style="marginTop:0.5rem;">关键词 3</a>
          </div>
        </div>
      </div>
                  <!-- <hr class="mb-4"> -->
 <p class="form-text" style="font-weight:bold;"></br>能力要求</p>
         <p class="form-text text-muted">
           Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
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
 <p class="form-text" style="font-weight:bold;">可报名人数</p>
         <p class="form-text text-muted">
          3
</p>
 <p class="form-text" style="font-weight:bold;">截止时间</p>
         <p class="form-text text-muted">
         2018-10-3
</p>

  <b-btn v-b-modal.modal1 class="btn btn-danger btn-lg btn-block">Retract Enrollment 撤销报名</b-btn>

  <!-- Modal Component -->
  <b-modal id="modal1" title="Bootstrap-Vue"  @ok="handleOk">
    <p class="my-4">是否撤销报名?</p>
  </b-modal>
        
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
