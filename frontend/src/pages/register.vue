<template>
  <div >


<div class="py-5 text-center" style="background-image: url('../src/assets/cover-stripes.svg'); background-position:left center; background-size: cover;">
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
            <div class="form-group">
              <div class="form-check"> <input class="form-check-input" type="checkbox" id="form21" value="on" v-model="registerAgreement"> <label class="form-check-label" for="form21"> I Agree with <a href="#">Term and Conditions</a> of the service </label> </div>
            </div>
          </form>
           <button class="btn btn-primary" @click="onRegister">Register</button>
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
    }
  },
  methods: {
   onRegister(){
     if (this.registerAgreement==true) {
       if (this.registerPassword==this.registerPasswordRepetition) {
         var registerRequestUrl = "/registerRequestUrl";
         $.post(registerRequestUrl,
           {name:this.registerName, university:this.registerUniv, email:this.registerEmail,
             password:this.registerPassword},
           function(data){
             alert("Register success!\n"+data);
             this.$router.push("/teacherInfo");
           }
         );
       }
       else {
         alert("The password repetition is not correct.");
       }
     }
     else {
       alert("You should agree with Term and Conditions of the service first!");
     }
     
   }
  }
};
</script>

<style lang="css">

</style>
