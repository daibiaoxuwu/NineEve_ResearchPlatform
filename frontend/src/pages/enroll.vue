
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
          <h4 class="mb-3"><b>基于Bootstrap-Vue的网页设计研究</b>
           <small class="form-text text-muted">
                Web Page Design Using Bootstrap-Vue
                 <small class="form-text text-muted">
                {{info.status}}
              </small>
              </small>
         </h4>
         
         <assignmentInfo></assignmentInfo>
             <!-- <router-link to="/enrollSuccess" > <button class="btn btn-secondary btn-lg btn-block" type="submit">Mark as Interested</button></router-link> -->
             <router-link to="/enrollForm" > <button class="btn btn-primary btn-lg btn-block" type="submit" style="margin-top:0.5rem;">Enroll Now</button> </router-link>
        
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
    }
   },
   components: {
     rightpane,
     assignmentInfo
  }
}
</script>