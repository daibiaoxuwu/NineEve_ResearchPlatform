<template>
    <div>  
    
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
          <h2>学生信息填写</h2>
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
            <div class="mb-3"> <label for="email">Grade 年级<br></label>
              <div class="mb-3">
                <b-dropdown id="ddown-header" text="Please Select" class="ml-0 mr-0 w-100" toggle-class="w-100" menu-class="w-100">
                <b-dropdown-item-button style="text-align:center;">Freshman 大一</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;">Sophomore 大二</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;">Junior 大三</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;">Senior 大四</b-dropdown-item-button>
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
          
           <div class="row">
                <div class="col-md-12 mb-3"> <label for="email">Brief Intorduction 个人简介</label>
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
            <h4 class="mb-3">Interersted Tabs 感兴趣的标签</h4>
            

   <div class="row">
                <div class="col-md-12 mb-3"> <label for="email">Laboratories 实验室</label>
                   <div class="mb-3">
<b-badge href="#" variant="light" style="font-size:15px; font-weight:200; background-color: var(--primary); color: #ffffff">关键词 1</b-badge>
<b-badge href="#" variant="primary" style="font-size:15px; font-weight:200">关键词 1</b-badge>
<b-badge href="#" variant="primary" style="font-size:15px; font-weight:200; background-color: #f3f3f3; color: #212529">关键词 1</b-badge>
<b-badge href="#" variant="light" style="font-size:15px; font-weight:200">关键词 1</b-badge>
</div>
            </div>
            </div>

               <div class="row">
                <div class="col-md-12 mb-3"> <label for="email">Keywords 关键词</label>
                   <div class="mb-3">
<b-badge href="#" variant="light" style="font-size:15px; font-weight:200">关键词 1</b-badge>
<b-badge href="#" variant="light" style="font-size:15px; font-weight:200">关键词 1</b-badge>
<b-badge href="#" variant="light" style="font-size:15px; font-weight:200">关键词 1</b-badge>
<b-badge href="#" variant="light" style="font-size:15px; font-weight:200">关键词 1</b-badge>
<b-badge href="#" variant="light" style="font-size:15px; font-weight:200">关键词 1</b-badge>
<b-badge href="#" variant="light" style="font-size:15px; font-weight:200">关键词 1</b-badge>
<b-badge href="#" variant="light" style="font-size:15px; font-weight:200">关键词 1</b-badge>
</div>
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
    }
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