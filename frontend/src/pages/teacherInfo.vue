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
              <div class="col-md-6 mb-3"> <label for="lastName">Last name 姓<br></label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" v-model="lastName">
                <div class="invalid-feedback"> Valid first name is required. </div>
              </div>
              <div class="col-md-6 mb-3"> <label for="firstName">First name 名</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" v-model="firstName">
                <div class="invalid-feedback"> Valid last name is required. </div>
              </div>
            </div>
            <div class="mb-3"> <label for="username">Username 用户名</label>
              <div class="input-group">
                <div class="input-group-prepend"> <span class="input-group-text">@</span> </div>
                <input type="text" class="form-control" id="username" placeholder="Username" required="" v-model="username">
                <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
              </div>
            </div>
            <div class="mb-3"> <label for="email">Laboratory 研究所<br></label>
              <div class="mb-3">
                <b-dropdown id="ddown-header" v-bind:text="dropdownText" class="ml-0 mr-0 w-100" toggle-class="w-100" menu-class="w-100">
                <b-dropdown-item-button style="text-align:center;" @click="clickSoft">Software Laboratory 软件所</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;" @click="clickHigh">High Performance Laboratory 高性能</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;" @click="clickMult">Multimedia Laboratory 媒体所</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;" @click="clickArti">Artificial Intelligence Laboratory 智能所</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;" @click="clickNet">Network Laboratory 网络所</b-dropdown-item-button>
            </b-dropdown>
              </div>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="mb-3"> <label for="email">Wechat/Phone 微信号/手机号<br></label>
              <input type="" class="form-control" id="email" placeholder="" v-model="wechatPhone">
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="mb-3"> <label for="email">Email 邮箱</label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" v-model="email">
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="mb-3"> <label for="address">Personal Webpage Address 个人主页地址<span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address" placeholder="" required="" v-model="perWebAddr">
              <div class="invalid-feedback"> Please enter your shipping address. </div>
            </div>
            <hr class="mb-4">
           
            
            <h4 class="mb-3">Assignment Information 科研任务介绍</h4>
            <div class="row">
                <div class="col-md-12 mb-3"> <label for="email">Research Area 实验室方向</label>
               <b-form-textarea id="textarea1"
                     v-model="researchArea"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="col-md-12 mb-3"> <label for="email">Research Results 科研成果介绍</label>
             <b-form-textarea id="textarea1"
                     v-model="researchResults"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            
         
            </div>
            
            <hr class="mb-4">
             </form>
            <button class="btn btn-secondary btn-lg btn-block" @click="save">Save information</button>
             <button class="btn btn-primary btn-lg btn-block" style="margin-top:0.5rem;" @click="launch">Launch Assignment</button>

             <b-alert variant="info" :show="showSaveAlert">Saving...正在保存...</b-alert>
             <b-alert variant="warning" :show="showFailAlert">Server Failure. 服务器故障.</b-alert>
         
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
      lab: -1, dropdownText: "Please Select 请选择",
      researchArea:window._user.name,
      researchResults:"",
      lastName:"",
      firstName:"",
      username:"",
      wechatPhone:"",
      email:"",
      perWebAddr:"",
      researchArea:"",
      researchResults:"",
      showSaveAlert: false,
      showFailAlert: false
          }
   },

     components:{
    rightpane, assignmentInfo
  },
  created:function(){
    this.getInfo();
  },
    methods: {
   handleOk () {
      this.$router.push("/")
    }, 
   
    save() {
          var that = this;
      console.log( {lastName: that.lastName, firstName: that.firstName, username:that.username,
         wechatPhone:that.wechatPhone, email:that.email, perWebAddr:that.perWebAddr,
          researchArea:that.researchArea, researchResults:that.researchResults, lab:that.lab});
      $.get(
        "/teacherInfo/save",
        {lastName: that.lastName, firstName: that.firstName, username:that.username,
         wechatPhone:that.wechatPhone, email:that.email, perWebAddr:that.perWebAddr,
          researchArea:that.researchArea, researchResults:that.researchResults, lab:that.lab},
        function(data){
          alert(data.saveSuccess);
        }
      )
    },

    getInfo() {
      var that=this;
      $.get(
        "/teacherInfo/get",
        {}).then(function(data){
          console.log("lastname:" +data.lastName)
          that.lastName = data.lastName;
          that.firstName = data.firstName;
          that.username = data.username;
          that.wechatPhone = data.wechatPhone;
          that.email = data.email;
          that.perWebAddr = data.perWebAddr;
          that.researchArea = data.researchArea;
          that.researchResults = data.researchResults;
          that.lab = data.lab;
        });
      
    },

    clickSoft() {
      this.lab = 0;
      this.dropdownText = "Software Laboratory 软件所";
    },
    clickHigh() {
      this.lab = 1;
      this.dropdownText = "High Performance Laboratory 高性能";
    },
    clickMult() {
      this.lab = 2;
      this.dropdownText = "Multimedia Laboratory 媒体所";
    },
    clickArti() {
      this.lab = 3;
      this.dropdownText = "Artificial Intelligence Laboratory 智能所";
    },
    clickNet() {
      this.lab = 4;
      this.dropdownText = "Network Laboratory 网络所";
    },

    launch() {
      $.get(
        "/teacherInfo/launch",
        {lastName: this.lastName, firstName: this.firstName, username:this.username,
         wechatPhone:this.wechatPhone, email:this.email, perWebAddr:this.perWebAddr,
          researchArea:this.researchArea, researchResults:this.researchResults, lab:this.lab},
        function(data){
          if(data.launchSuccess){
            
          }
          alert(data.launchSuccess);
        }
      )
    }

  },

  watch: {
    lab: function(val){
    if(val==-1){
      this.dropdownText = "Please Select 请选择";
    }
    else if(val==0){
      this.dropdownText = "Software Laboratory 软件所";
    }
    else if(val==1){
      this.dropdownText = "High Performance Laboratory 高性能";
    }
    else if(val==2){
      this.dropdownText = "Multimedia Laboratory 媒体所";
    }
    else if(val==3){
      this.dropdownText = "Artificial Intelligence Laboratory 智能所";
    }
    else if(val==4){
      this.dropdownText = "Network Laboratory 网络所";
    }
      }
    }

    }
</script>