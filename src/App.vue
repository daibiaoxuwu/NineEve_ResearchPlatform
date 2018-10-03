<template>
  <div id="app">
 <nav class="navbar navbar-expand-md bg-primary navbar-dark">
    <div class="container"> <a class="navbar-brand" href="#">Navbar</a> <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item"> <a class="nav-link" href="#"><i class="fa d-inline fa-lg fa-bookmark-o"></i> Bookmarks</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#"><i class="fa d-inline fa-lg fa-envelope-o"></i> Contacts</a> </li>
        </ul> <a class="btn navbar-btn btn-primary ml-2 text-white"><i class="fa d-inline fa-lg fa-user-circle-o"></i> Sign in</a>
      </div>
    </div>
  </nav>


   <div class="py-5" style="background-image: url('https://static.pingendo.com/cover-stripes.svg'); background-position:left center; background-size: cover;">
    <div class="container">
      <div class="row">
        <div class="p-5 col-lg-6">
          <h1>I am so happy, my dear</h1>
          <p class="mb-3">So absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p>
          <form>
            <div class="form-group"> <input type="email" class="form-control" placeholder="Enter email" id="form11"> </div>
            <div class="form-group"> <input type="password" class="form-control" placeholder="Password" id="form12"> <small class="form-text text-muted text-right">
                <a href="#"> Forgot your password?</a>
              </small> </div> <button type="submit" class="btn btn-primary">Submit</button>
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
                  <tr>
                    <td>1</td>
                    <td>项目1</td>
                    <td>Passed</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>项目2</td>
                    <td>Rejected</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>项目3</td>
                    <td>Rejected</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <b-list-group>
  <b-list-group-item>Cras justo odio</b-list-group-item>
  <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item>
</b-list-group> 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </div>

</template>

<script>
export default {
  name: "app",
  data() {
    return {
       currentPage: 1,
        dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
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
    }
  }
};
</script>

<style lang="css">
@import '../src/assets/theme.css'
</style>