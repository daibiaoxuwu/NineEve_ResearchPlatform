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











  <div class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="">
          <div class="card">
            <div class="card-header">PROJECT INFORMATION</div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>PROJECT NAME</th>
                    <th>TEACHER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>项目1</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>项目2</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>项目3</td>
                    <td>the Bird</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
           
  <b-pagination-nav base-url="#" :number-of-pages="10" v-model="currentPage" />

        </div>
      </div>
    </div>
  </div>
  <div class="p-0">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header"> MY PROJECTS</div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>PROJECT NAME</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in list ">
                    <td>{{item.text}}</td>
                    <td><button @click="onClick(item)">项目1</button></td>
                    <td><router-link to="/teacherInfo">Passed</router-link></td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
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
          text: "a"
        },
        {
           text: "a"
        },
        {
           text: "a"

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
      console.log(item.name);
    }
  }
};
</script>

<style lang="css">

</style>