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
<p class="mb-3" v-for="item in assignmentList" @click="onClick(item)">
  <div class="card">
            <div class="card-header">{{item.title}} 指导教师: {{item.teacher}}</div>
            <div class="card-body">
              <p class="form-text text-muted">
          {{item.introduction}}
</p>

 <b-pagination-nav base-url="#" :number-of-pages="10" v-model="currentPage" />
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
  name: "home",
  data() {
    return {
      assignmentList:[]
    };
  },
   components:{
    rightpane, assignmentInfo
  },
  created: function(){
    var that = this;
    $.get("/assignmentView/get",
        {}).then(function(data){
          that.assignmentList=data;
         });
  },
  methods: {
    onClick (item){
      this.$router.push({
          path:'/enroll',
          params: {
            title: item.title
          }
        });
    }


  }
};
// 逻辑部分直接修改item即可呈现.
</script>

<style lang="css">

</style>
