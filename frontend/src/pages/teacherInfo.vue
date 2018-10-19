<template>
    <div>  
    
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
          <h2>导师信息填写</h2>
          <p class="lead">tutor's information form</p>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container">
      <div class="row">
        <rightpane></rightpane>
        
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3"><b>Basic Information 基本信息</b></h4>
          <form class="needs-validation" novalidate="">
            <div class="row">
              <div class="col-md-6 mb-3"> <label for="firstName">Last name 姓<br></label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                <div class="invalid-feedback"> Valid first name is required. </div>
              </div>
              <div class="col-md-6 mb-3"> <label for="lastName">First name 名</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                <div class="invalid-feedback"> Valid last name is required. </div>
              </div>
            </div>
            <div class="mb-3"> <label for="username">Username 用户名</label>
              <div class="input-group">
                <div class="input-group-prepend"> <span class="input-group-text">@</span> </div>
                <input type="text" class="form-control" id="username" placeholder="Username" required="">
                <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
              </div>
            </div>
            <div class="mb-3"> <label for="email">Tutor's ID 教师号<br></label>
              <input type="" class="form-control" id="email">
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="mb-3"> <label for="email">Laboratory 研究所<br></label>
              <div class="mb-3">
                <b-dropdown id="ddown-header" text="Please Select" class="ml-0 mr-0 w-100" toggle-class="w-100" menu-class="w-100">
                <b-dropdown-item-button style="text-align:center;">Software Laboratory 软件所</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;">High Performance Laboratory 高性能</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;">Multimedia Laboratory 媒体所</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;">Artificial Intelligence Laboratory 智能所</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;">Network Laboratory 网络所</b-dropdown-item-button>
            </b-dropdown>
              </div>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="mb-3"> <label for="email">Wechat/Phone 微信号/手机号<br></label>
              <input type="" class="form-control" id="email" placeholder="">
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="mb-3"> <label for="email">Email 邮箱</label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="mb-3"> <label for="address">Personal Webpage Address 个人主页地址<span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address" placeholder="" required="">
              <div class="invalid-feedback"> Please enter your shipping address. </div>
            </div>
            <hr class="mb-4">
           
            
            <h4 class="mb-3">Assignment Information 科研任务介绍</h4>
            <div class="row">
                <div class="col-md-12 mb-3"> <label for="email">Research Area 实验室方向</label>
               <b-form-textarea id="textarea1"
                     v-model="text1"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="col-md-12 mb-3"> <label for="email">Research Results 科研成果介绍</label>
             <b-form-textarea id="textarea1"
                     v-model="text2"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            
         
            </div>
            <hr class="mb-4">
            <button class="btn btn-secondary btn-lg btn-block" type="submit">Save information</button>
             <button class="btn btn-primary btn-lg btn-block" type="submit" style="margin-top:0.5rem;">Launch Assignment</button>
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
  name: "teacherInfo",
   data() {
    return {
      text1:window._user.name,
      text2:""    }
   },
     components:{
    rightpane, assignmentInfo
  },
    methods: {
   handleOk (){
      this.$router.push("/")
    }
  }
}
</script>