
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
             <button v-bind:class="visible" @click= "enroll" style="margin-top:0.5rem;">Enroll Now</button>
        
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
      visible:"invisible"
    }
   },
   components: {
     rightpane,
     assignmentInfo
  },created:function(){
    var that=this;
     $.get('/enroll/isTeacher',{}).then(function(data){
     if(data.isTeacher){
          that.visible="invisible";
        }else{
          that.visible="btn btn-primary btn-lg btn-block";
        }
     })
  },
   methods:{
    enroll(){
      console.log("enroll")
      var that = this;
      $.get('/enroll/route',{}).then(function(data){
        that.$router.push(data);
      });
    }
  }
}
</script>