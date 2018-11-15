<template>
  <div>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
            <h2>报名信息填写</h2>
            <p class="lead">Enroll information form</p>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="container">
        <div class="row">
              <div class="col-md-4 order-md-2"> <rightpane></rightpane> </div>

          <div class="col-md-8 order-md-1">
            <h4 class="mb-3"><b>Basic Information 基本信息</b></h4>
            <!-- <form class="needs-validation" novalidate=""> -->
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
            <div class="mb-3"> <label for="email">Student's ID 学号<br></label>
              <input type="" class="form-control" id="email" v-model="studentId">
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

            <h4 class="mb-3">Enroll Information 报名理由</h4>
            <div class="row">
              <div class="col-md-12 mb-3"> <label for="email">Received Awards 获得奖项</label>
                <b-form-textarea id="textarea1" v-model="award" placeholder="特奖" :rows="3" :max-rows="6">
                </b-form-textarea>
                <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
              </div>
              <div class="col-md-12 mb-3"> <label for="email">Self introduction 自我介绍</label>
                <b-form-textarea id="textarea1" v-model="selfIntr" placeholder="Enter something" :rows="3" :max-rows="6">
                </b-form-textarea>
                <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
              </div>
              <div class="col-md-12 mb-3"> <label for="email">Reasons for Enrollment 报名原因</label>
                <b-form-textarea id="textarea1" v-model="reasonEnroll" placeholder="Enter something" :rows="3" :max-rows="6">
                </b-form-textarea>
                <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
              </div>

            </div>
            <hr class="mb-4">
            <button class="btn btn-secondary btn-lg btn-block" @click="save">Save information 保存信息</button>

            <b-btn v-b-modal.modal2 class="btn btn-primary btn-lg btn-block" style="margin-top:0.5rem;">Submit Enrollment 提交报名</b-btn>
            <!-- 上面貌似不能加type="submit"属性, 否则无法弹框. -->
            <!-- Modal Component -->
            <b-modal id="modal2" title="Bootstrap-Vue" @ok="launch">
              <p class="my-4">Are you sure to submit enrollment?<br>是否提交报名?</p>
            </b-modal>

            <!-- </form> -->
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
  name: "enrollForm",

  data() {
    return {
      lastName: "",
      firstName: "",
      username: "",
      studentId: "",
      wechatPhone: "",
      email: "",
      perWebAddr: "",
      selfIntr: "",
      reasonEnroll: "",
      award: "",
      showSaveAlert: false,
      showFailAlert: false
    };
  },

  components: {
    rightpane,
    assignmentInfo
  },
  created: function() {
    this.getInfo();
  },
  methods: {
    save() {
      var that = this;

      if (that.lastName == null) that.lastName = "";
      if (that.firstName == null) that.firstName = "";
      if (that.username == null) that.username = "";
      if (that.studentId == null) that.studentId = "";
      if (that.wechatPhone == null) that.wechatPhone = "";
      if (that.email == null) that.email = "";
      if (that.perWebAddr == null) that.perWebAddr = "";
      if (that.selfIntr == null) that.selfIntr = "";
      if (that.reasonEnroll == null) that.reasonEnroll = "";
      if (that.award == null) that.award = "";

      if (
        that.lastName.length > 20 ||
        that.firstName.length > 20 ||
        that.username.length > 200 ||
        that.studentId.length > 20 ||
        that.wechatPhone.length > 200 ||
        that.email.length > 200 ||
        that.perWebAddr.length > 200 ||
        that.selfIntr.length > 2000 ||
        that.reasonEnroll.length > 2000 ||
        that.award > 2000
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
        new RegExp('"').test(that.studentId) ||
        new RegExp("'").test(that.studentId);
      var hasQuotationMarks5 =
        new RegExp('"').test(that.wechatPhone) ||
        new RegExp("'").test(that.wechatPhone);
      var hasQuotationMarks6 =
        new RegExp('"').test(that.email) || new RegExp("'").test(that.email);
      var hasQuotationMarks7 =
        new RegExp('"').test(that.perWebAddr) ||
        new RegExp("'").test(that.perWebAddr);
      var hasQuotationMarks8 =
        new RegExp('"').test(that.selfIntr) ||
        new RegExp("'").test(that.selfIntr);
      var hasQuotationMarks9 =
        new RegExp('"').test(that.reasonEnroll) ||
        new RegExp("'").test(that.reasonEnroll);
      var hasQuotationMarks10 =
        new RegExp('"').test(that.award) || new RegExp("'").test(that.award);
      if (
        hasQuotationMarks1 ||
        hasQuotationMarks2 ||
        hasQuotationMarks3 ||
        hasQuotationMarks4 ||
        hasQuotationMarks5 ||
        hasQuotationMarks6 ||
        hasQuotationMarks7 ||
        hasQuotationMarks8 ||
        hasQuotationMarks9 ||
        hasQuotationMarks10
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

      console.log({
        lastName: that.lastName,
        firstName: that.firstName,
        username: that.username,
        studentId: that.studentId,
        wechatPhone: that.wechatPhone,
        email: that.email,
        perWebAddr: that.perWebAddr,
        selfIntr: that.selfIntr,
        reasonEnroll: that.reasonEnroll,
        award: that.award
      });
      $.get(
        "/enrollForm/save",
        {
          lastName: that.lastName,
          firstName: that.firstName,
          username: that.username,
          studentId: that.studentId,
          wechatPhone: that.wechatPhone,
          email: that.email,
          perWebAddr: that.perWebAddr,
          selfIntr: that.selfIntr,
          reasonEnroll: that.reasonEnroll,
          award: that.award
        },
        function(data) {
          alert(data.saveSuccess);
        }
      );
    },

    getInfo() {
      var that = this;
      $.get("/enrollForm/get", {}).then(function(data) {
        console.log("lastname:" + data.lastName);
        that.lastName = data.lastName;
        that.firstName = data.firstName;
        that.username = data.username;
        that.studentId = data.studentId;
        that.wechatPhone = data.wechatPhone;
        that.email = data.email;
        that.perWebAddr = data.perWebAddr;
        that.selfIntr = data.selfIntr;
        that.reasonEnroll = data.reasonEnroll;
        that.award = data.award;
      });
    },

    launch() {
      var that = this;

      if (that.lastName == null) that.lastName = "";
      if (that.firstName == null) that.firstName = "";
      if (that.username == null) that.username = "";
      if (that.studentId == null) that.studentId = "";
      if (that.wechatPhone == null) that.wechatPhone = "";
      if (that.email == null) that.email = "";
      if (that.perWebAddr == null) that.perWebAddr = "";
      if (that.selfIntr == null) that.selfIntr = "";
      if (that.reasonEnroll == null) that.reasonEnroll = "";
      if (that.award == null) that.award = "";

      if (
        that.lastName == "" ||
        that.firstName == "" ||
        that.username == "" ||
        that.wechatPhone == "" ||
        that.email == "" ||
        that.selfIntr == "" ||
        that.reasonEnroll == "" ||
        that.award == "" ||
        that.studentId == ""
      ) {
        alert("Please complete all the forms.\n 请将所有表单填写完毕.");
        return;
      }

      if (
        that.lastName.length > 20 ||
        that.firstName.length > 20 ||
        that.username.length > 200 ||
        that.studentId.length > 20 ||
        that.wechatPhone.length > 200 ||
        that.email.length > 200 ||
        that.perWebAddr.length > 200 ||
        that.selfIntr.length > 2000 ||
        that.reasonEnroll.length > 2000 ||
        that.award > 2000
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
        new RegExp('"').test(that.studentId) ||
        new RegExp("'").test(that.studentId);
      var hasQuotationMarks5 =
        new RegExp('"').test(that.wechatPhone) ||
        new RegExp("'").test(that.wechatPhone);
      var hasQuotationMarks6 =
        new RegExp('"').test(that.email) || new RegExp("'").test(that.email);
      var hasQuotationMarks7 =
        new RegExp('"').test(that.perWebAddr) ||
        new RegExp("'").test(that.perWebAddr);
      var hasQuotationMarks8 =
        new RegExp('"').test(that.selfIntr) ||
        new RegExp("'").test(that.selfIntr);
      var hasQuotationMarks9 =
        new RegExp('"').test(that.reasonEnroll) ||
        new RegExp("'").test(that.reasonEnroll);
      var hasQuotationMarks10 =
        new RegExp('"').test(that.award) || new RegExp("'").test(that.award);
      if (
        hasQuotationMarks1 ||
        hasQuotationMarks2 ||
        hasQuotationMarks3 ||
        hasQuotationMarks4 ||
        hasQuotationMarks5 ||
        hasQuotationMarks6 ||
        hasQuotationMarks7 ||
        hasQuotationMarks8 ||
        hasQuotationMarks9 ||
        hasQuotationMarks10
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

      $.get(
        "/enrollForm/launch",
        {
          lastName: that.lastName,
          firstName: that.firstName,
          username: that.username,
          studentId: that.studentId,
          wechatPhone: that.wechatPhone,
          email: that.email,
          perWebAddr: that.perWebAddr,
          selfIntr: that.selfIntr,
          reasonEnroll: that.reasonEnroll,
          award: that.award
        },
        function(data) {
          if (data.launchSuccess) {
            that.$router.push("/enrollSuccess");
          }
        }
      );
    }
  }
};
</script>
