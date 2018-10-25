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
          <h5 class="mb-3"><b>你已经被项目录取!</b>
           <small class="form-text text-muted">
              You have been accepted to the project. Your project has been launched.
              </small>
              <b>你们的项目已经启动, 请尽快联系导师.</b>
           <small class="form-text text-muted">
             Please contact your tutor as soon as possible.
              </small>
         </h5>
      <assignmentInfo></assignmentInfo>
  <router-link to="/"><b-btn class="btn btn-primary btn-lg btn-block">Home 返回主页</b-btn></router-link>

  <!-- <b-btn v-b-modal.modal1 class="btn btn-danger btn-lg btn-block" style="marginTop:0.5rem;">Terminate Assignment 结束项目</b-btn>
  <!-- Modal Component -->
  <!-- <b-modal id="modal1" title="Bootstrap-Vue"  @ok="handleOk"> -->
    <!-- <p class="my-4">是否结束项目?</p> -->
  <!-- </b-modal> --> -->
        
        
        </div>
      </div>
    </div>
  </div>

  
     </div>
</template>


<script>
import rightpane from "../components/right.vue"; import assignmentInfo from "../components/assignmentInfo.vue"

export default {

  name: "enrollSuccess",
   data() {
    return {
    }
   },
    components:{
    rightpane,assignmentInfo

  },
    methods: {
   handleOk (){
      alert("Terminated!");
      this.$router.push("/studentEvaluate")
    }
  }
}
</script>
