<template>
    <div>  
    
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
          <h2>学生评价</h2>
          <p class="lead">Student Evaluation</p>
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
            
            <h4 class="mb-3">Reasons 理由</h4>
            <div class="row">
                <div class="col-md-12 mb-3"> <label for="email">What you've learned 收获</label>
               <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="col-md-12 mb-3"> <label for="email">What you've not learned 尚未习得</label>
             <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            
         
            </div>
            <hr class="mb-4">
            <button class="btn btn-secondary btn-lg btn-block" type="submit">Save information 保存信息</button>
         
              
  <b-btn v-b-modal.modal2 class="btn btn-primary btn-lg btn-block"  style="margin-top:0.5rem;">Submit Evaluation 提交评价</b-btn>
  <!-- 上面貌似不能加type="submit"属性, 否则无法弹框. -->
  <!-- Modal Component -->
  <b-modal id="modal2" title="Bootstrap-Vue"  @ok="handleOk">
    <p class="my-4">Are you sure to submit Evaluation?</br>是否提交评价?</p>
  </b-modal>
           
          </form>
        </div>
      </div>
    </div>
  </div>
  
  
     </div>
</template>


<script>
import rightpane from "../components/right.vue"
export default {
  name: "enrollForm",
   data() {
    return {
    }
   },
     components:{
    rightpane
  },
    methods: {
   handleOk (){
      this.$router.push("/studentEvaluateSuccess")
    }
  }
}
</script>