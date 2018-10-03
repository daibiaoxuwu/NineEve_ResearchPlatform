<template>
  <div >
 
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

<div class="py-5 text-center">
    <div class="container">
      <div class="row">
        <div class="mx-auto col-lg-6 col-10">
          <h1>O my friend</h1>
          <p class="mb-3">When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.</p>
          <form class="text-left">
            <div class="form-group"> <label for="form16">Your Name</label> <input type="text" class="form-control" id="form16" placeholder="Johann W. Goethe"> </div>
            <div class="form-group"> <label for="form17">Your Company</label> <input type="text" class="form-control" id="form17" placeholder="Werther Inc."> </div>
            <div class="form-group"> <label for="form18">Your email</label> <input type="email" class="form-control" id="form18" placeholder="j.goethe@werther.com"> </div>
            <div class="form-row">
              <div class="form-group col-md-6"> <label for="form19">Password</label> <input type="password" class="form-control" id="form19" placeholder="••••"> </div>
              <div class="form-group col-md-6"> <label for="form20">Confirm Password</label> <input type="password" class="form-control" id="form20" placeholder="••••"> </div>
            </div>
            <div class="form-group">
              <div class="form-check"> <input class="form-check-input" type="checkbox" id="form21" value="on"> <label class="form-check-label" for="form21"> I Agree with <a href="#">Term and Conditions</a> of the service </label> </div>
            </div> <button type="submit" class="btn btn-primary">Sign in</button>
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
                    <td>项目1</td>
                    <td>Passed</td>
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
    }
  }
};
</script>

<style lang="css">

</style>