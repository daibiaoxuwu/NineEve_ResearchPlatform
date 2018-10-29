<template>
  <div >
   <div class="py-5" >
    <div class="container">
      <div class="row">
   
      </div>
    </div>
  </div>


  <div class="p-0">
    <div class="container">
      <div class="row">
        <div class="col-md-12" >
           <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
          <h2>项目列表</h2>
          <p class="lead" style="margin-bottom: 3rem;">Assignment List</p>
                
        </div>

               <div class="container">
      <div class="row">
        
        <rightpane style="padding-top: 1.5rem;"></rightpane>
        
        <div class="col-md-8 order-md-1">
<p class="mb-3">
  <div class="card mb-3"  v-for="item in avaList" :key="item.title"  @click="onClick(item)">
            <div class="card-header">{{item.title}}</div>
            <div class="card-body">
              <p class="form-text text-muted">
           Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
          在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。
         
</p>
            </div>
  </div>
</p>

</p>


 <b-pagination-nav base-url="#" :number-of-pages="num" v-model="currentPage" />
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>


  

   </div>

</template>

<script>
import rightpane from "../components/right.vue"; import assignmentInfo from "../components/assignmentInfo.vue"
export default {
  name: "home2",
  item: Object,
  data: function() {

    return {
      currentPage:1,
      num:1,
      avaList:[{
                title:"基于Bootstrap的前端网页设计研究",
                teacher:"国雨晴",
                introduction:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器."
            },
            {
                title:"基于Bootstrap的前端网页设计研究",
                teacher:"国雨晴",
                introduction:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器."
            }]
    };
  },
   components:{
    rightpane, assignmentInfo
  },
  created: function(){
    var that = this;
    $.get("/assignmentView/get",
        {currentPage: currentPage}).then(function(data){
          that.avaList=data.avaList;
          that.num=data.num;
          console.log(data);
         });
  },
  methods: {
     onClick(item){
      var that = this;
      $.get("/home/setAssignment",
      {title: item.title}).then(function(){
       that.$router.push("/enroll");
      })
    }
  }
};
// 逻辑部分直接修改item即可呈现.
</script>

<style lang="css">

</style>
