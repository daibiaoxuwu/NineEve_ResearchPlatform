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
            <button class="btn btn-secondary btn-lg btn-block" @click="save">Save information 保存信息</button>
             <button class="btn btn-primary btn-lg btn-block" style="margin-top:0.5rem;" @click="launch">Submit Information 提交信息</button>

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
          if (that.lastName == null) that.lastName = "";
          if (that.firstName == null) that.firstName = "";
          if (that.username == null) that.username = "";
          if (that.wechatPhone == null) that.wechatPhone = "";
          if (that.email == null) that.email = "";
          if (that.perWebAddr == null) that.perWebAddr = "";
          if (that.researchArea == null) that.researchArea = "";
          if (that.researchResults == null) that.researchResults = "";
          if (that.lab == null) that.lab = -1;
      console.log( {lastName: that.lastName, firstName: that.firstName, username:that.username,
         wechatPhone:that.wechatPhone, email:that.email, perWebAddr:that.perWebAddr,
          researchArea:that.researchArea, researchResults:that.researchResults, lab:that.lab});

      if (that.lastName.length>20 || that.firstName.length>20 || that.username.length>200
        || that.wechatPhone.length>200 || that.email.length>200 || that.perWebAddr.length>200
        || that.researchArea.length>2000 || that.researchResults.length>2000) {
          alert("Your input is beyond limitation.\n 您的输入超出字符长度限制.");
          return;
        }

        var hasQuotationMarks1 = (new RegExp("\"")).test(that.lastName)
        || (new RegExp("\'")).test(that.lastName);
        var hasQuotationMarks2 = (new RegExp("\"")).test(that.firstName)
        || (new RegExp("\'")).test(that.firstName);
        var hasQuotationMarks3 = (new RegExp("\"")).test(that.username)
        || (new RegExp("\'")).test(that.username);
        var hasQuotationMarks4 = (new RegExp("\"")).test(that.wechatPhone)
        || (new RegExp("\'")).test(that.wechatPhone);
        var hasQuotationMarks5 = (new RegExp("\"")).test(that.email)
        || (new RegExp("\'")).test(that.email);
        var hasQuotationMarks6 = (new RegExp("\"")).test(that.perWebAddr)
        || (new RegExp("\'")).test(that.perWebAddr);
        var hasQuotationMarks7 = (new RegExp("\"")).test(that.researchArea)
        || (new RegExp("\'")).test(that.researchArea);
        var hasQuotationMarks8 = (new RegExp("\"")).test(that.researchResults)
        || (new RegExp("\'")).test(that.researchResults);
        if (hasQuotationMarks1 || hasQuotationMarks2 || hasQuotationMarks3
        || hasQuotationMarks4 || hasQuotationMarks5 || hasQuotationMarks6
        || hasQuotationMarks7 || hasQuotationMarks8) {
           alert("Please don't put quotation marks in your inputs.\n 请不要输入引号.");
           return;
         }

         var isEmail = (new RegExp("@")).test(that.email);
         var isInUniv = (new RegExp("edu\.cn$")).test(that.email);
         if (!isEmail || !isInUniv) {
           alert("Please input your univetsity email.\n 请输入您的大学邮箱.");
           return;
         }

        $.get(
          "/teacherInfo/save",
          {lastName: that.lastName, firstName: that.firstName, username:that.username,
           wechatPhone:that.wechatPhone, email:that.email, perWebAddr:that.perWebAddr,
            researchArea:that.researchArea, researchResults:that.researchResults, lab:that.lab},
          function(data){
            alert(data.saveSuccess);
          }
        );
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
      var that=this;

      if (that.lastName == null) that.lastName = "";
      if (that.firstName == null) that.firstName = "";
      if (that.username == null) that.username = "";
      if (that.wechatPhone == null) that.wechatPhone = "";
      if (that.email == null) that.email = "";
      if (that.perWebAddr == null) that.perWebAddr = "";
      if (that.researchArea == null) that.researchArea = "";
      if (that.researchResults == null) that.researchResults = "";
      if (that.lab == null) that.lab = -1;
      if (that.lastName == "" || that.firstName == "" || that.username == ""
       || that.wechatPhone == "" || that.email == "" || that.researchArea == ""
       || that.researchResults == "" || that.lab == -1) {
        alert("Please complete all the forms.\n 请将所有表单填写完毕.");
        return;
      }

  if (that.lastName.length>20 || that.firstName.length>20 || that.username.length>200
    || that.wechatPhone.length>200 || that.email.length>200 || that.perWebAddr.length>200
    || that.researchArea.length>2000 || that.researchResults.length>2000) {
      alert("Your input is beyond limitation.\n 您的输入超出字符长度限制.");
      return;
    }

    var hasQuotationMarks1 = (new RegExp("\"")).test(that.lastName)
    || (new RegExp("\'")).test(that.lastName);
    var hasQuotationMarks2 = (new RegExp("\"")).test(that.firstName)
    || (new RegExp("\'")).test(that.firstName);
    var hasQuotationMarks3 = (new RegExp("\"")).test(that.username)
    || (new RegExp("\'")).test(that.username);
    var hasQuotationMarks4 = (new RegExp("\"")).test(that.wechatPhone)
    || (new RegExp("\'")).test(that.wechatPhone);
    var hasQuotationMarks5 = (new RegExp("\"")).test(that.email)
    || (new RegExp("\'")).test(that.email);
    var hasQuotationMarks6 = (new RegExp("\"")).test(that.perWebAddr)
    || (new RegExp("\'")).test(that.perWebAddr);
    var hasQuotationMarks7 = (new RegExp("\"")).test(that.researchArea)
    || (new RegExp("\'")).test(that.researchArea);
    var hasQuotationMarks8 = (new RegExp("\"")).test(that.researchResults)
    || (new RegExp("\'")).test(that.researchResults);
    if (hasQuotationMarks1 || hasQuotationMarks2 || hasQuotationMarks3
    || hasQuotationMarks4 || hasQuotationMarks5 || hasQuotationMarks6
    || hasQuotationMarks7 || hasQuotationMarks8) {
       alert("Please don't put quotation marks in your inputs.\n 请不要输入引号.");
       return;
     }

     var isEmail = (new RegExp("@")).test(that.email);
     var isInUniv = (new RegExp("edu\.cn$")).test(that.email);
     if (!isEmail || !isInUniv) {
       alert("Please input your univetsity email.\n 请输入您的大学邮箱.");
       return;
     }

      $.get(
        "/teacherInfo/launch",
        {lastName: that.lastName, firstName: that.firstName, username:that.username,
         wechatPhone:that.wechatPhone, email:that.email, perWebAddr:that.perWebAddr,
          researchArea:that.researchArea, researchResults:that.researchResults, lab:that.lab},
        function(data){
          if(data.launchSuccess){
            that.$router.push('/main');
          }
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
