<template>
  <div >
 

<div class="py-5 text-center">
    <div class="container">
      <div class="row">
        <div class="mx-auto col-lg-6 col-10">
          <h1>校外学生注册</h1>
          <p class="mb-3">Register for external students</br>校内师生请用学号/教师号登陆网站</br>Students and Teachers in Tsinghua, Please login via Student/Teacher ID. </p>
          <form class="text-left">
                  
           
            <div class="form-group"> <label for="form16">Your Name</label> <input type="text" class="form-control" id="form16" placeholder="Johann W. Goethe"> </div>
            <div class="form-group"> <label for="form17">Your University</label> <input type="text" class="form-control" id="form17" placeholder="隔壁 Univ."> </div>
            <div class="form-group"> <label for="form18">Your email</label> <input type="email" class="form-control" id="form18" placeholder="j.goethe@pku.edu.cn"> </div>
            <div class="form-row">
              <div class="form-group col-md-6"> <label for="form19">Password</label> <input type="password" class="form-control" id="form19" placeholder="••••"> </div>
              <div class="form-group col-md-6"> <label for="form20">Confirm Password</label> <input type="password" class="form-control" id="form20" placeholder="••••"> </div>
            </div>
            <div class="form-group">
              <div class="form-check"> <input class="form-check-input" type="checkbox" id="form21" value="on"> <label class="form-check-label" for="form21"> I Agree with <a href="#">Term and Conditions</a> of the service </label> </div>
            </div> <button type="submit" class="btn btn-primary" @click="onRegister">Register</button>
          </form>
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
     alert("Register Success!");
     this.$router.push("/");
   }
  }
};
</script>

<style lang="css">

</style>