
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
      
         
         <assignmentInfo></assignmentInfo>
             <!-- <router-link to="/enrollSuccess" > <button class="btn btn-secondary btn-lg btn-block" type="submit">Mark as Interested</button></router-link> -->
             <button v-bind:class="visible" @click= "enroll" style="margin-top:0.5rem;">{{buttonword}}</button>
        
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
      visible:"invisible",
      isTeacher:false,
      buttonword:"报名 Enroll Now"
    }
   },
   components: {
     rightpane,
     assignmentInfo
  },created:function(){
    var that=this;
     $.get('/enroll/isTeacher',{}).then(function(data){
       that.isTeacher=data.isTeacher;
    if(data.assignment.status=="Launched 已启动" && that.isTeacher==false){
      that.buttonword="结题 End Assignment";
      that.visible="btn btn-primary btn-lg btn-block"
     } else if(data.assignment.status=="Evaluated 学生已评价" && that.isTeacher==true){
      that.buttonword="评价学生 Evaluate";
      that.visible="btn btn-primary btn-lg btn-block"
     } else if(data.assignment.status=="Ended 已结题"){
      that.visible="invisible"
     } else {
        that.buttonword="报名 Enroll Now";
     if(data.isTeacher){
          that.visible="invisible";
        }else{
            that.visible="btn btn-primary btn-lg btn-block";
          $.get('/enrollForm/Check',{}).then(function(result){
            if(result==true){
              that.buttonword="You've enrolled. 已经报名.";
            }
          })
        }

     }
     })
  },
   methods:{
    enroll(){
      console.log("enroll")
      if(this.buttonword=="结题 End Assignment"){
          this.$router.push('/studentEvaluate');
      } else if(this.buttonword=="评价学生 Evaluate"){
          this.$router.push('/teacherEvaluate');
      } else if(this.buttonword=="报名 Enroll Now"){
      var that = this;
      $.get('/enroll/route',{}).then(function(data){
        that.$router.push(data);
      });
      }
    }
  }
}
</script>