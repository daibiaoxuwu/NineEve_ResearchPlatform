<template>
  <div >

   <div class="py-5" >
    <div class="container">
      <div class="row">
        <div class="p-5 col-lg-6">
          <h1>科研实习平台</h1>
          <p class="mb-3">Scientific Research &amp; Internship Platform</p>
           <div class="form-group" style="text-align:center;">
             <h3>Login</h3>
              </div>
          <form>
            <div class="form-group"> <select class="form-control" v-model="inputTSForm" id="form10">
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
            </div>
            <div class="form-group"> <input type="text" class="form-control" placeholder="Email/Student ID/Teacher ID" v-model="inputNameForm" id="form11"> </div>
            <div class="form-group"> <input type="password" class="form-control" placeholder="Password" v-model="inputPasswordForm" id="form12">
              <small class="form-text text-muted text-right">
                <a href="#"> Forgot your password?</a>
              </small>
            </div>
             <div class="form-group">
            <button v-on:click="loginRequest()" class="form-control btn btn-primary">Login</button>
             </div>
              <div class="form-group" style="text-align:center;">
             <h5>or</h5>
              </div>
            <router-link to="/register"><button  class="form-control btn btn-primary">Register</button></router-link>
          </form>
        </div>
      </div>
    </div>
  </div>




  <div class="p-0">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">AVALIABLE PROJECTS 可选项目</div>
            <div class="card-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>PROJECT NAME 项目名称</th>
                    <th>STATUS 状态</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in list ">
                    <td>{{index}}</td>
                    <td>{{item.text}}</td>
                    <!-- <td @click="onClick(item)" style="color:#12bbad">{{item.status}}</td> -->
                    <!-- <td><button @click="onClick(item)">项目1</button></td> -->

                    <td @click="onClick(item)"><router-link to="/enroll">{{item.status}}</router-link></td>
                  </tr>

                </tbody>
              </table>

            </div>
            <b-pagination-nav base-url="#" :number-of-pages="10" v-model="currentPage" />
          </div>
        </div>
      </div>
    </div>
  </div>





   </div>

</template>

<script>

export default {
  name: "home",
  data() {
    return {
       currentPage: 1,
        dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      list:[
        {
          text: "项目1",
          status: "Enrolling 可报名"
        },
        {
          text: "项目2",
          status: "Enrolling 可报名"
        },
        {
          text: "项目3",
          status: "Enrolling 可报名"
        },
         {
          text: "项目4",
          status: "Enrolling 可报名"
        },
         {
          text: "项目5",
          status: "Enrolling 可报名"
        }
      ]
    };
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    linkGen (pageNum) {
      return '#page/' + pageNum + '/foobar'
    },
    onClick (item){
      alert(item.text);
      // this.$router.push("/log")
    },

    loginRequest (){
      var inputTORS = this.inputTSForm;
      var inputName = this.inputNameForm;
      var inputPassword = this.inputPasswordForm;
      var loginRequestUrlEmail = "/loginRequestUrlEmail";
      var loginRequestUrlTeacherId = "/loginRequestUrlTeacherId";
      var loginRequestUrlStudentId = "/loginRequestUrlStudentId";
      //alert(inputTORS+'\n'+inputName+"\n"+inputPassword);
      //alert($.fn.jquery); //Output your jquery version to check out whether jquery was successfully loaded.
      alert(inputTORS);
      if (inputTORS=="teacher") {
        $.get(loginRequestUrlTeacherId, {teacherId:inputName,password:inputPassword},
          function(data){
            if(data.loginSuccess){
              alert("login success");
            } else if(data.usernameNotFound){
              alert("用户不存在.");
            } else {
              alert("error in username or password.\n用户名或密码错误.")
            }
          }
        );
      }
      else if (inputTORS=="student"){
        var isEmail = (new RegExp("@")).test(inputName);
        if (isEmail) {
          $.get(loginRequestUrlEmail, {email:inputName,password:inputPassword},
            function(data){
              if(data.loginSuccess){
                alert("login success");
              } else if(data.usernameNotFound){
              alert("用户不存在.");
            } else {
              alert("error in username or password.\n用户名或密码错误.")
            }
            }
          );
        }
        else {
          $.get(loginRequestUrlStudentId, {studentId:inputName,password:inputPassword},
            function(data){
              if(data.loginSuccess){
                alert("login success");
              } else if(data.usernameNotFound){
              alert("用户不存在.");
            } else {
              alert("error in username or password.\n用户名或密码错误.")
            }
            }
          );
        }
      }
      else{
        alert("please choose a way to login.");
      }

    }


  }
};
// 逻辑部分直接修改item即可呈现.
</script>

<style lang="css">

</style>
