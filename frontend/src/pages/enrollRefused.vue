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
            <h2 class="mb-3"><b>啊...</b>
           <small class="form-text text-muted">
                Well...
              </small>
         </h2>
          <h5 class="mb-3"><b>你已经拒绝了学生的的报名...</b>
           <small class="form-text text-muted">
              You have successfully accepted a student for your project. Please await further notice.
              </small>
         </h5>
           <h2 class="mb-3"><b>{{selectedItem.text}}</b>
           <small class="form-text text-muted">
                {{selectedItem.department.split(" ")[0]}} {{selectedItem.year.split(" ")[0]}} {{selectedItem.department.split(" ")[1]}} {{selectedItem.year.split(" ")[1]}} 
              </small>
         </h2>
        <studentInfo></studentInfo>
       <router-link to="/main">         
  <b-btn class="btn btn-primary btn-lg btn-block"  style="margin-top:0.5rem;">Home 返回主页</b-btn>
   </router-link>

        
        </div>
      </div>
    </div>
  </div>

  
     </div>
</template>


<script>
import rightpane from "../components/right.vue"; import assignmentInfo from "../components/assignmentInfo.vue"
import studentInfo from "../components/studentInfo.vue";
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
    rightpane, assignmentInfo, studentInfo
  },
    methods: {
   handleOk (){
      alert("Enroll Withdrawn!");
      // this.$router.push("/log")
    }
  }
}
</script>
