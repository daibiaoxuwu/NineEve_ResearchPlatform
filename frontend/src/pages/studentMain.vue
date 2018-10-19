<template>
  <div >

   <div class="py-5" >
    <div class="container">
      <div class="row">
   
      </div>
    </div>
  </div>




  <div class="p-0">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>科研实习平台</h1>
             <p class="mb-3">Scientific Research &amp; Internship Platform</p>
             
<p class="mb-3">
  <div class="card">
            <div class="card-header">MESSAGES 新动态</div>
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

</p>
<p class="mb-3">

          <div class="card">
            <div class="card-header">MY PROJECTS 我的项目</div>
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
</p>
<p class="mb-3">

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
</p>
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
        $.post(loginRequestUrlTeacherId, {teacherId:inputName,password:inputPassword},
          function(data){
            if(data.loginSuccess){
              alert("login success");
            } else if(data.usernameTaken){
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
          $.post(loginRequestUrlEmail, {email:inputName,password:inputPassword},
            function(data){
              if(data.loginSuccess){
                alert("login success");
              } else if(data.usernameTaken){
              alert("用户不存在.");
            } else {
              alert("error in username or password.\n用户名或密码错误.")
            }
            }
          );
        }
        else {
          $.post(loginRequestUrlStudentId, {studentId:inputName,password:inputPassword},
            function(data){
              if(data.loginSuccess){
                alert("login success");
              } else if(data.usernameTaken){
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
