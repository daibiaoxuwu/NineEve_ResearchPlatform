<template>
  <div>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="p-5 col-lg-6">
            <h1>科研实习平台</h1>
            <p class="mb-3">Scientific Research &amp; Internship Platform</p>
            <div class="form-group" style="text-align:center;">
              <h3>Login</h3>
            </div>
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
              <row>
                <img src="/api/getCaptcha" alt="captcha" @click="update">
                <input type="text" placeholder="" v-model="code" id="code1">
              </row>
            </div>
            <div class="form-group">
              <button v-on:click="loginRequest()" class="form-control btn btn-primary">Login</button>
            </div>
            <div class="form-group" style="text-align:center;">
              <h5>or</h5>
            </div>
            <router-link to="/register"><button class="form-control btn btn-primary">Register</button></router-link>
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
                    <tr v-for="(item, index) in list" :key="item.title" @click="onClick(item)">
                      <td>{{index+1}}</td>
                      <td>{{item.title}}</td>
                      <!-- <td @click="onClick(item)" style="color:#12bbad">{{item.status}}</td> -->
                      <!-- <td><button @click="onClick(item)">项目1</button></td> -->
                      <td>{{item.status}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <b-pagination-nav base-url="#" :number-of-pages="num3" v-model="currentPage3" />
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
      currentPage3: 1,
      num3: 1,
      list: []
    };
  },
  created: function() {
    this.update();
  },
  methods: {
    update() {
      var that = this;
      $.get("/home/get", { currentPage3: that.currentPage3 }, function(data) {
        that.list = data.avaList;
        that.num3 = data.num3;
      });
    },
    onClick(item) {
      var that = this;
      $.get("/home/setAssignment", {
        title: item.title,
        teacherId: item.teacherId
      }).then(function() {
        that.$router.push("/enroll");
      });
    },

    loginRequest() {
      var inputTORS = this.inputTSForm;
      var inputName = this.inputNameForm;
      var inputPassword = this.inputPasswordForm;
      var that = this;

      var passwdSHA256;
      if (inputPassword != null) {
        passwdSHA256 = require("js-sha256").sha256(inputPassword);
        //alert(passwdSHA256.length);
      }
      //alert(inputTORS+'\n'+inputName+"\n"+inputPassword);
      //alert($.fn.jquery); //Output your jquery version to check out whether jquery was successfully loaded.
      if (
        inputName &&
        inputName.length < 200 &&
        inputPassword &&
        inputPassword.length < 200
      ) {
        if (inputTORS == "teacher") {
          $.get("/login/byTeacherId", {
            teacherId: inputName,
            password: passwdSHA256,
            code: that.code.toLowerCase()
          }).then(function(data) {
            if (data.codeError) {
              alert("验证码错误");
            } else if (data.loginSuccess) {
              if (data.infoFinished) {
                that.$router.push("/main");
              } else {
                that.$router.push("/teacherInfo");
              }
            } else if (data.usernameNotFound) {
              alert("用户不存在.");
            } else {
              alert("error in username or password.\n用户名或密码错误.");
            }
          });
        } else if (inputTORS == "student") {
          var isEmail = new RegExp("@").test(inputName);
          if (isEmail) {
            $.get("/login/byEmail", {
              email: inputName,
              password: passwdSHA256,
              code: that.code.toLowerCase()
            }).then(function(data) {
              if (data.codeError) {
                alert("验证码错误");
              } else if (data.loginSuccess) {
                if (data.infoFinished) {
                  that.$router.push("/main");
                } else {
                  that.$router.push("/studentInfo");
                }
              } else if (data.usernameNotFound) {
                alert("用户不存在.");
              } else {
                alert("error in username or password.\n用户名或密码错误.");
              }
            });
          } else {
            $.get("/login/byStudentId", {
              studentId: inputName,
              password: passwdSHA256,
              code: that.code.toLowerCase()
            }).then(function(data) {
              console.log(data);
              if (data.codeError) {
                alert("验证码错误");
              } else if (data.loginSuccess) {
                if (data.infoFinished) {
                  that.$router.push("/main");
                } else {
                  that.$router.push("/studentInfo");
                }
              } else if (data.usernameNotFound) {
                alert("用户不存在.");
              } else {
                alert("error in username or password.\n用户名或密码错误.");
              }
            });
          }
        } else {
          alert("please choose a way to login.");
        }
      } else {
        alert("Your input is beyond limitation.");
      }
    }
  },
  watch: {
    currentPage3: function(val) {
      this.update();
    }
  }
};
// 逻辑部分直接修改item即可呈现.
</script>

<style lang="css">
</style>
