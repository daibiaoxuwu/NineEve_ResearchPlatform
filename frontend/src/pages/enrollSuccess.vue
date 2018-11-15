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
            <div class="col-md-4 order-md-2"> <rightpane></rightpane> </div>
        
        <div class="col-md-8 order-md-1">
            <h2 class="mb-3"><b>恭喜!</b>
           <small class="form-text text-muted">
                Congratulations!
              </small>
         </h2>
          <h5 class="mb-3"><b>您已经成功提交报名！请等待后续通知。</b>
           <small class="form-text text-muted">
              You have successfully enrolled for the project. Please await further notice.
              </small>
         </h5>
       <assignmentInfo></assignmentInfo> 
  <!-- <router-link to="/studentEvaluate"> -->
  <!-- <b-btn v-b-modal.modal1 class="btn btn-primary btn-lg btn-block">End Assignment 结题</b-btn> -->
  <!-- </router-link> -->
  <!-- Modal Component -->
  <!-- <b-modal id="modal1" title="Bootstrap-Vue"  @ok="handleOk"> -->
    <!-- <p class="my-4">是否结题?</p> -->
  <!-- </b-modal> -->

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
