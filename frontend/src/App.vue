<template>
  <div id="app">
    <nav class="navbar navbar-expand-md bg-primary navbar-dark" style="padding:0.25rem 1.5rem">
    <div class="container"> <a class="navbar-brand" href="#">Navbar</a> <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item"> <a class="nav-link" href="#"><i class="fa d-inline fa-lg fa-bookmark-o"></i> Bookmarks</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#"><i class="fa d-inline fa-lg fa-envelope-o"></i> Contacts</a> </li>
        </ul> <router-link to="/" class="btn navbar-btn btn-primary ml-2 text-white"><i class="fa d-inline fa-lg fa-user-circle-o"></i>Sign in</router-link>
      </div>
    </div>
  </nav>



     <router-view></router-view>
       <div class="py-5 text-muted text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 my-4">
          <p class="mb-1">© 2017-2018 Company Name</p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {

    };
  },

  methods: {

  }
};
</script>

<style lang="css">
@import '../src/assets/theme.css'

</style>
