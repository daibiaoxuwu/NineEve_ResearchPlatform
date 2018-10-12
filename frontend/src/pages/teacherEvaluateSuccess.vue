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
          <h5 class="mb-3"><b>你已经成功为学生 肖朝军 结题并完成评价! 项目已正式结束.</b>
           <small class="form-text text-muted">
              You have successfully terminated the project and evaluated your student.
              </small>
         </h5>
           <assignmentInfo></assignmentInfo> 

  <router-link to="/"><b-btn class="btn btn-primary btn-lg btn-block">Home 返回主页</b-btn></router-link>

        
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
    rightpane, assignmentInfo
  },
    methods: {
   handleOk (){
      alert("Enroll Withdrawn!");
      // this.$router.push("/log")
    }
  }
}
</script>
