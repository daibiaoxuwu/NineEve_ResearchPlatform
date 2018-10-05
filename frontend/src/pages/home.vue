<template>
  <div >
 
   <div class="py-5" style="background-image: url('https://static.pingendo.com/cover-stripes.svg'); background-position:left center; background-size: cover;">
    <div class="container">
      <div class="row">
        <div class="p-5 col-lg-6">
          <h1>科研实习平台</h1>
          <p class="mb-3">Scientific Research &amp; Internship Platform</p>
           <div class="form-group" style="text-align:center;">
             <h3>Login</h3>
              </div>
          <form>
            <div class="form-group"> <input type="email" class="form-control" placeholder="Enter email" id="form11"> </div>
            <div class="form-group"> <input type="password" class="form-control" placeholder="Password" id="form12">
              <small class="form-text text-muted text-right">
                <a href="#"> Forgot your password?</a>
              </small>
            </div>
             <div class="form-group">
            <router-link to="/teacherInfo"><button type="submit" class="form-control btn btn-primary">Submit</button></router-link>
             </div>
              <div class="form-group" style="text-align:center;">
             <h5>or</h5>
              </div>
            <router-link to="/register"><button type="submit" class="form-control btn btn-primary">Register</button></router-link>
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
    }
  }
};
// 逻辑部分直接修改item即可呈现.
</script>

<style lang="css">

</style>