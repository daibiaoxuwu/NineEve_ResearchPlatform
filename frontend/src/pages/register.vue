<template>
  <div >


<div class="py-5 text-centers">
    <div class="container">
      <div class="row">
        <div class="p-5 col-lg-6">
          <h1>校外学生注册</h1>
          <p class="mb-3">Register for external students</br>校内师生请用学号/教师号登陆网站</br>Students and Teachers in Tsinghua, Please login via Student/Teacher ID. </p>
          <form class="text-left">


            <div class="form-group"> <label for="form16">Your Name</label> <input type="text" class="form-control" id="form16" placeholder="Johann W. Goethe" v-model="registerName"> </div>
            <div class="form-group"> <label for="form17">Your University</label> <input type="text" class="form-control" id="form17" placeholder="隔壁 Univ." v-model="registerUniv"> </div>
            <div class="form-group"> <label for="form18">Your email</label> <input type="email" class="form-control" id="form18" placeholder="j.goethe@pku.edu.cn" v-model="registerEmail"> </div>
            <div class="form-row">
              <div class="form-group col-md-6"> <label for="form19">Password</label> <input type="password" class="form-control" id="form19" placeholder="••••" v-model="registerPassword"> </div>
              <div class="form-group col-md-6"> <label for="form20">Confirm Password</label> <input type="password" class="form-control" id="form20" placeholder="••••" v-model="registerPasswordRepetition"> </div>
            </div>
            <div class="form-group" style="display:none" id="divCaptcha"> <label for="form18">CAPTCHA from Your Email</label> <input type="text" class="form-control" id="form21" placeholder="CAPTCHA" v-model="registerCaptcha"> </div>
            <div class="form-group">
              <div class="form-check"> <input class="form-check-input" type="checkbox" id="form22" value="on" v-model="registerAgreement"> <label class="form-check-label" for="form22"> I Agree with <a href="#">Term and Conditions</a> of the service </label> </div>
            </div>
          </form>
          <button class="btn btn-primary col-md-5" @click="getEmailCaptcha">Submit</button>
          <button class="btn btn-primary col-md-5" @click="onRegister" style="display:none" id="buttonRegister">Register</button>
        </div>
      </div>
    </div>
  </div>













   </div>

</template>

<script>
export default {
  name: "register",
  data() {
    return {
      registerName:"",
      registerUniv:"",
      registerEmail:"",
      registerPassword:"",
      registerCaptcha:""
    }
  },
  methods: {
   onRegister(){
     var that = this;

     if (that.registerCaptcha==null) that.registerCaptcha=="";
     if (that.registerCaptcha=="") {
       alert("Please input the captcha in your email.\n 请输入您邮箱中收到的验证码.");
       return;
     }

     if (that.registerEmail==null) that.registerEmail=="";
     var isEmail = (new RegExp("@")).test(that.registerEmail);
     var isInUniv = (new RegExp("edu\.cn$")).test(that.registerEmail);
     if (!isEmail || !isInUniv) {
       alert("Please input your univetsity email.\n 请输入您的大学邮箱.");
       return;
     }

     if (that.registerAgreement==true) {
       if (that.registerPassword==that.registerPasswordRepetition) {
         $.get('/register/getUrl',
           {name:that.registerName, university:that.registerUniv, email:that.registerEmail,
             password:that.registerPassword, captcha:that.registerCaptcha}
        ).then(()=>{
          window.location.href="/studentInfo";
        });

       }
       else {
         alert("The password repetition is not correct.\n 需要输入一致的密码.");
       }
     }
     else {
       alert("You should agree with Term and Conditions of the service first!\n请点击 同意 勾选框. ");
     }

   },

   getEmailCaptcha() {
      var that = this;

      if (that.registerEmail==null) that.registerEmail=="";
      if (that.registerEmail.length>200) {

      }
      var isEmail = (new RegExp("@")).test(that.registerEmail);
      var isInUniv = (new RegExp("edu\.cn$")).test(that.registerEmail);
      if (!isEmail || !isInUniv) {
        alert("Please input your univetsity email.\n 请输入您的大学邮箱.");
        return;
      }

      $.get('/register/getCaptcha',
        {email:that.registerEmail}
     ).then(()=>{
       alert("A CAPTCHA has been sent to your email, please input it.\n 验证码已发送至您的邮箱, 请输入您收到的验证码.");
       document.getElementById("divCaptcha").style.display="inline";
       document.getElementById("buttonRegister").style.display="inline";
     });
   }
  }
};
</script>

<style lang="css">

</style>
