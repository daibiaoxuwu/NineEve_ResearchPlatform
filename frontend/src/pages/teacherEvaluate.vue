<template>
    <div>  
    
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
          <h2>教师评价</h2>
          <p class="lead">Teacher Evaluation</p>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container">
      <div class="row">
        <rightpane></rightpane>
        
        <div class="col-md-8 order-md-1">


           
          <h4 class="mb-3">Satisfication 满意度</h4>
           <div>
  <b-button-toolbar key-nav  aria-label="Toolbar with button groups">

    <b-button-group class="col-md-12 mb-3">
      <b-btn class="col-md-12 mb-3 btn btn-outline-primary btn-lg btn-block" style="marginTop:0.5rem;">1</b-btn>
      <b-btn class="col-md-12 mb-3 btn btn-outline-primary btn-lg btn-block" style="marginTop:0.5rem;">2</b-btn>
      <b-btn class="col-md-12 mb-3 btn btn-outline-primary btn-lg btn-block" style="marginTop:0.5rem;">3</b-btn>
      <b-btn class="col-md-12 mb-3 btn btn-outline-primary btn-lg btn-block" style="marginTop:0.5rem;">4</b-btn>
      <b-btn class="col-md-12 mb-3 btn btn-outline-primary btn-lg btn-block" style="marginTop:0.5rem;"  >5</b-btn>
    </b-button-group>
   
  </b-button-toolbar>
</div>
          
          <form class="needs-validation" novalidate="">
          
           
            
            <h4 class="mb-3">Other Information 详细信息</h4>
            <div class="row">
                <div class="col-md-12 mb-3"> <label for="email">Job introduction 项目完成介绍</label>
               <b-form-textarea id="textarea1"
                     v-model="intro"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="col-md-12 mb-3"> <label for="email">Reasons for Evaluation 评价原因</label>
             <b-form-textarea id="textarea1"
                     v-model="reason"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            
         
            </div>
            <hr class="mb-4">
            <button class="btn btn-secondary btn-lg btn-block" type="submit">Save information 保存信息</button>
         
              
  <b-btn v-b-modal.modal2 class="btn btn-primary btn-lg btn-block"  style="margin-top:0.5rem;">Submit Enrollment 提交报名</b-btn>
  <!-- 上面貌似不能加type="submit"属性, 否则无法弹框. -->
  <!-- Modal Component -->
  <b-modal id="modal2" title="Bootstrap-Vue"  @ok="handleOk">
    <p class="my-4">Are you sure to submit evaluation?</br>是否提交评价?</p>
  </b-modal>
           
          </form>
        </div>
      </div>
    </div>
  </div>
  
  
     </div>
</template>


<script>
import rightpane from "../components/right.vue"; import assignmentInfo from "../components/assignmentInfo.vue"
export default {
  name: "enrollForm",
   data() {
    return {
      satis:5,
      intro:"",
      reason:""
    }
   },
     components:{
    rightpane, assignmentInfo
  },
    methods: {
   handleOk (){
     var that = this;
     $.get("/teacherEvaluate/save", {satis: that.satis, intro: that.intro, reason:that.reason}).then(function(data){
       if(data.saveSuccess==true){
          that.$router.push("/teacherEvaluateSuccess");
       }
     })
    }
  }
}
</script>