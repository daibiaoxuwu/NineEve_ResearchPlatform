<template>
  <div>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
            <h2>学生信息填写</h2>
            <p class="lead">student's information form</p>
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
                  <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" v-model="lastName">
                  <div class="invalid-feedback"> Valid first name is required. </div>
                </div>
                <div class="col-md-6 mb-3"> <label for="lastName">First name 名</label>
                  <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" v-model="firstName">
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
              <div class="mb-3"> <label for="email">Grade 年级<br></label>
                <div class="mb-3">
                  <b-dropdown id="ddown-header" v-bind:text="grade" class="ml-0 mr-0 w-100" toggle-class="w-100" menu-class="w-100">
                    <b-dropdown-item-button style="text-align:center;" @click="clickFresh">Freshman 大一</b-dropdown-item-button>
                    <b-dropdown-item-button style="text-align:center;" @click="clickSoph">Sophomore 大二</b-dropdown-item-button>
                    <b-dropdown-item-button style="text-align:center;" @click="clickJuni">Junior 大三</b-dropdown-item-button>
                    <b-dropdown-item-button style="text-align:center;" @click="clickSeni">Senior 大四</b-dropdown-item-button>
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

              <div class="row">
                <div class="col-md-12 mb-3"> <label for="email">Brief Introduction 个人简介</label>
                  <b-form-textarea id="textarea1" v-model="breIntr" placeholder="Enter something" :rows="3" :max-rows="6">
                  </b-form-textarea>
                  <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                </div>
              </div>
              <hr class="mb-4">
              <h4 class="mb-3">Interersted Tabs 感兴趣的标签</h4>

              <div class="row">
                <div class="col-md-12 mb-3"> <label for="email">Laboratories 实验室</label>
                  <div class="mb-3">
                    <b-button v-for="item in selectedLab" variant="outline-primary" style="font-size:15px; font-weight:200; padding: 0 0.4em; margin:0.5rem 0.5rem;" :pressed.sync="item.state" :key="item.name">{{item.name}}</b-button>
                    <!-- <b-badge variant="light" style="font-size:15px; font-weight:200; background-color: var(--primary); color: #ffffff">关键词 1</b-badge> -->
                    <!-- <b-badge variant="primary" style="font-size:15px; font-weight:200">关键词 1</b-badge> -->
                    <!-- <b-badge variant="primary" style="font-size:15px; font-weight:200; background-color: #f3f3f3; color: #212529">关键词 1</b-badge> -->
                    <!-- <b-badge variant="light" style="font-size:15px; font-weight:200">关键词 1</b-badge> -->
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 mb-3"> <label for="email">Keywords 关键词</label>

                  <div class="mb-1">
                    <b-button v-for="item in selectedKey" variant="outline-primary" style="font-size:15px; font-weight:200; padding: 0 0.4em; margin:0.5rem 0.5rem;" :pressed.sync="item.state" :key="item.name">{{item.name}}</b-button>
                  </div>
                  <div class="input-group">
                    <b-dropdown text="Please Select" class="ml-0 mr-0 w-100" toggle-class="w-100" menu-class="w-100" variant="link" no-caret>
                      <template slot="button-content">
                        <input class="form-control" placeholder="搜索关键词" type='text' />
                      </template>
                      <b-dropdown-item v-for="item in allKeys" @click="searchKey(item)" :key="item.name">{{item.name}}</b-dropdown-item>
                    </b-dropdown>
                  </div>
                </div>
              </div>
            <hr class="mb-4">
            <h4 class="mb-3">Upload your CV file 上传简历文件</h4>
            <b-form-file v-model="CVFile" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
            <hr class="mb-4">
          </form>
            <button class="btn btn-secondary btn-lg btn-block" type="submit" @click="save">Save information 保存信息</button>
            <button class="btn btn-primary btn-lg btn-block" type="submit" style="margin-top:0.5rem;" @click="launch">Submit information 提交信息</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import rightpane from "../components/right.vue";
import assignmentInfo from "../components/assignmentInfo.vue";
export default {
  name: "studentInfo",

  data() {
    return {
      grade: "Please Select 请选择",
      lastName: "",
      firstName: "",
      username: "",
      wechatPhone: "",
      email: "",
      perWebAddr: "",
      breIntr: "",
      showSaveAlert: false,
      showFailAlert: false,
      allKeys:[],
      selectedKey:[],
      selectedLab:[
        {name: "Software Laboratory 软件所", state:false},
        {name: "High Performance Laboratory 高性能", state:false},
        {name: "Multimedia Laboratory 媒体所", state:false},
        {name: "Artificial Intelligence Laboratory 智能所", state:false},
        {name: "Network Laboratory 网络所", state:false}
      ],
      CVFile: null
    }
   },

  components: {
    rightpane,
    assignmentInfo
  },
  created: function() {
    this.getInfo();
  },
  methods: {
    searchKey(item) {
      this.selectedKey.push(item);
    },
    toggleKey(item) {
      console.log("toggle" + item);
      if (item.toggleKey == "primary") {
        item.toggleKey = "light";
      } else {
        item.toggleKey = "primary";
      }
      console.log(item);
    },

    save() {
      var that = this;

      if (that.lastName == null) that.lastName = "";
      if (that.firstName == null) that.firstName = "";
      if (that.username == null) that.username = "";
      if (that.wechatPhone == null) that.wechatPhone = "";
      if (that.email == null) that.email = "";
      if (that.perWebAddr == null) that.perWebAddr = "";
      if (that.breIntr == null) that.breIntr = "";
      if (that.grade == null) that.grade = "Please Select 请选择";

      if (
        that.lastName.length > 20 ||
        that.firstName.length > 20 ||
        that.username.length > 200 ||
        that.wechatPhone.length > 200 ||
        that.email.length > 200 ||
        that.perWebAddr.length > 200 ||
        that.breIntr.length > 2000 ||
        that.grade.length > 50
      ) {
        alert("Your input is beyond limitation.\n 您的输入超出字符长度限制.");
        return;
      }

      var hasQuotationMarks1 =
        new RegExp('"').test(that.lastName) ||
        new RegExp("'").test(that.lastName);
      var hasQuotationMarks2 =
        new RegExp('"').test(that.firstName) ||
        new RegExp("'").test(that.firstName);
      var hasQuotationMarks3 =
        new RegExp('"').test(that.username) ||
        new RegExp("'").test(that.username);
      var hasQuotationMarks4 =
        new RegExp('"').test(that.wechatPhone) ||
        new RegExp("'").test(that.wechatPhone);
      var hasQuotationMarks5 =
        new RegExp('"').test(that.email) || new RegExp("'").test(that.email);
      var hasQuotationMarks6 =
        new RegExp('"').test(that.perWebAddr) ||
        new RegExp("'").test(that.perWebAddr);
      var hasQuotationMarks7 =
        new RegExp('"').test(that.breIntr) ||
        new RegExp("'").test(that.breIntr);
      var hasQuotationMarks8 =
        new RegExp('"').test(that.grade) || new RegExp("'").test(that.grade);
      if (
        hasQuotationMarks1 ||
        hasQuotationMarks2 ||
        hasQuotationMarks3 ||
        hasQuotationMarks4 ||
        hasQuotationMarks5 ||
        hasQuotationMarks6 ||
        hasQuotationMarks7 ||
        hasQuotationMarks8
      ) {
        alert(
          "Please don't put quotation marks in your inputs.\n 请不要输入引号."
        );
        return;
      }

      var isEmail = new RegExp("@").test(that.email);
      var isInUniv = new RegExp("edu.cn$").test(that.email);
      if (!isEmail || !isInUniv) {
        alert("Please input your univetsity email.\n 请输入您的大学邮箱.");
        return;
      }

      if (that.CVFile != null && that.CVFile.size > 5*1024*1024) {
        alert("The file should be less than 5MB.\n 上传文件须小于5MB.");
        return;
      }

      console.log({
        lastName: that.lastName,
        firstName: that.firstName,
        username: that.username,
        wechatPhone: that.wechatPhone,
        email: that.email,
        perWebAddr: that.perWebAddr,
        breIntr: that.breIntr,
        grade: that.grade,
        selectedLab: that.selectedLab,
        selectedKey: that.selectedKey
      });
      $.get("/studentInfo/save", {
        lastName: that.lastName,
        firstName: that.firstName,
        username: that.username,
        wechatPhone: that.wechatPhone,
        email: that.email,
        perWebAddr: that.perWebAddr,
        breIntr: that.breIntr,
        grade: that.grade,
        selectedLab: that.selectedLab,
        selectedKey: that.selectedKey
      }).then(function(data) {
        if (!data.saveSuccess) {
          alert("保存信息出现问题");
        } else {
          if (that.CVFile != null) {
            var fileFormData = new FormData();
            fileFormData.append("CVFile", that.CVFile);

            $.ajax({
                url:"/studentInfo/CVFileSave",
                type:"post",
                data:fileFormData,
                processData:false,
                async:false,
                contentType:false,
                success:function(data2){
                    if (data2.uploadSuccess)
                      alert("保存信息成功");
                },
                error:function(e){
                    alert("文件保存失败");
                }
            });

          } else {
            alert("保存信息成功");
          }
        }
      });
    },

    getInfo() {
      var that = this;
      $.get("/studentInfo/get", {}).then(function(data) {
        console.log("allkeys" + data);
        that.lastName = data.lastName;
        that.firstName = data.firstName;
        that.username = data.username;
        that.wechatPhone = data.wechatPhone;
        that.email = data.email;
        that.perWebAddr = data.perWebAddr;
        that.breIntr = data.breIntr;
        that.grade = data.grade;
        if (
          that.grade != "Freshman 大一" &&
          that.grade != "Sophomore 大二" &&
          that.grade != "Junior 大三" &&
          that.grade != "Senior 大四"
        )
          that.grade = "Please Select 请选择";
        that.selectedLab = data.selectedLab;
        that.selectedKey = data.selectedKey;
        that.allKeys = data.allKeys;
      });
    },

    clickFresh() {
      this.grade = "Freshman 大一";
    },
    clickSoph() {
      this.grade = "Sophomore 大二";
    },
    clickJuni() {
      this.grade = "Junior 大三";
    },
    clickSeni() {
      this.grade = "Senior 大四";
    },

    launch() {
      var that = this;

      if (that.lastName == null) that.lastName = "";
      if (that.firstName == null) that.firstName = "";
      if (that.username == null) that.username = "";
      if (that.wechatPhone == null) that.wechatPhone = "";
      if (that.email == null) that.email = "";
      if (that.perWebAddr == null) that.perWebAddr = "";
      if (that.breIntr == null) that.breIntr = "";
      if (that.grade == null) that.grade = "Please Select 请选择";

      if (
        that.lastName == "" ||
        that.firstName == "" ||
        that.username == "" ||
        that.wechatPhone == "" ||
        that.email == "" ||
        that.breIntr == "" ||
        that.grade == "Please Select 请选择"
      ) {
        alert("Please complete all the forms.\n 请将所有表单填写完毕.");
        return;
      }

      if (
        that.lastName.length > 20 ||
        that.firstName.length > 20 ||
        that.username.length > 200 ||
        that.wechatPhone.length > 200 ||
        that.email.length > 200 ||
        that.perWebAddr.length > 200 ||
        that.breIntr.length > 2000 ||
        that.grade.length > 50
      ) {
        alert("Your input is beyond limitation.\n 您的输入超出字符长度限制.");
        return;
      }

      var hasQuotationMarks1 =
        new RegExp('"').test(that.lastName) ||
        new RegExp("'").test(that.lastName);
      var hasQuotationMarks2 =
        new RegExp('"').test(that.firstName) ||
        new RegExp("'").test(that.firstName);
      var hasQuotationMarks3 =
        new RegExp('"').test(that.username) ||
        new RegExp("'").test(that.username);
      var hasQuotationMarks4 =
        new RegExp('"').test(that.wechatPhone) ||
        new RegExp("'").test(that.wechatPhone);
      var hasQuotationMarks5 =
        new RegExp('"').test(that.email) || new RegExp("'").test(that.email);
      var hasQuotationMarks6 =
        new RegExp('"').test(that.perWebAddr) ||
        new RegExp("'").test(that.perWebAddr);
      var hasQuotationMarks7 =
        new RegExp('"').test(that.breIntr) ||
        new RegExp("'").test(that.breIntr);
      var hasQuotationMarks8 =
        new RegExp('"').test(that.grade) || new RegExp("'").test(that.grade);
      if (
        hasQuotationMarks1 ||
        hasQuotationMarks2 ||
        hasQuotationMarks3 ||
        hasQuotationMarks4 ||
        hasQuotationMarks5 ||
        hasQuotationMarks6 ||
        hasQuotationMarks7 ||
        hasQuotationMarks8
      ) {
        alert(
          "Please don't put quotation marks in your inputs.\n 请不要输入引号."
        );
        return;
      }

      var isEmail = new RegExp("@").test(that.email);
      var isInUniv = new RegExp("edu.cn$").test(that.email);
      if (!isEmail || !isInUniv) {
        alert("Please input your univetsity email.\n 请输入您的大学邮箱.");
        return;
      }

      $.get("/studentInfo/launch", {
        lastName: that.lastName,
        firstName: that.firstName,
        username: that.username,
        wechatPhone: that.wechatPhone,
        email: that.email,
        perWebAddr: that.perWebAddr,
        breIntr: that.breIntr,
        grade: that.grade,
        selectedLab: that.selectedLab,
        selectedKey: that.selectedKey
      }).then(function(data) {
        if (data.launchSuccess) {
          window.location.href = "/main";
        } else {
          alert("保存信息出现问题");
        }
      });
    }
  }
};
</script>
