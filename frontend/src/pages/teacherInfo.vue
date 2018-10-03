<template>
    <div>  
    
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
          <h2>导师信息填写</h2>
          <p class="lead">tutor's information form</p>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container">
      <div class="row">
        <div class="visible-lg col-md-4 order-md-2">
            <div>
          <h4 class="d-flex justify-content-between mb-3"> <span class="text-muted"><b>Assignments</b></span> <span class="badge badge-secondary badge-pill">3</span> </h4>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between">
              <div>
                <h6 class="my-0"><b>项目1</b></h6> <small class="text-muted">Brief description</small>
              </div> <span class="text-muted">Pending</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <div>
                <h6 class="my-0"><b>项目2</b></h6> <small class="text-muted">Brief description</small>
              </div> <span class="text-muted">Released</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <div>
                <h6 class="my-0"><b>项目3</b></h6> <small class="text-muted">Brief description</small>
              </div> <span class="text-muted">enrolling: 3</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0"><b>项目4</b></h6> <small>EXAMPLECODE</small>
              </div> <span class="text-success">launched</span>
            </li>
             <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-danger">
                <h6 class="my-0"><b>项目5</b></h6> <small>EXAMPLECODE</small>
              </div> <span class="text-danger">paused</span>
            </li>
           
          </ul>
            </div>

                 <div  class="my-4">
          <h4 class="d-flex justify-content-between mb-3"> <span class="text-muted"><b>History Assignments</b></span> <span class="badge badge-secondary badge-pill">3</span> </h4>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between">
              <div>
                <h6 class="my-0"><b>项目1</b></h6> <small class="text-muted">Brief description</small>
              </div> <span class="text-muted">2017-10-3</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <div>
                <h6 class="my-0"><b>项目2</b></h6> <small class="text-muted">Brief description</small>
              </div> <span class="text-muted">2017-10-3</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <div>
                <h6 class="my-0"><b>项目3</b></h6> <small class="text-muted">Brief description</small>
              </div> <span class="text-muted">2017-10-3</span>
            </li>
   
           
          </ul>
            </div>
          
        </div>
        
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3"><b>Basic Information 基本信息</b></h4>
          <form class="needs-validation" novalidate="">
            <div class="row">
              <div class="col-md-6 mb-3"> <label for="firstName">Last name 姓<br></label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                <div class="invalid-feedback"> Valid first name is required. </div>
              </div>
              <div class="col-md-6 mb-3"> <label for="lastName">First name 名</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                <div class="invalid-feedback"> Valid last name is required. </div>
              </div>
            </div>
            <div class="mb-3"> <label for="username">Username 用户名</label>
              <div class="input-group">
                <div class="input-group-prepend"> <span class="input-group-text">@</span> </div>
                <input type="text" class="form-control" id="username" placeholder="Username" required="">
                <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
              </div>
            </div>
            <div class="mb-3"> <label for="email">Tutor's ID 教师号<br></label>
              <input type="" class="form-control" id="email">
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="mb-3"> <label for="email">Laboratory 研究所<br></label>
              <div class="mb-3">
                <b-dropdown id="ddown-header" text="Please Select" class="ml-0 mr-0 w-100" toggle-class="w-100" menu-class="w-100">
                <b-dropdown-item-button style="text-align:center;">Software Laboratory 软件所</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;">High Performance Laboratory 高性能</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;">Multimedia Laboratory 媒体所</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;">Artificial Intelligence Laboratory 智能所</b-dropdown-item-button>
                <b-dropdown-item-button style="text-align:center;">Network Laboratory 网络所</b-dropdown-item-button>
            </b-dropdown>
              </div>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="mb-3"> <label for="email">Wechat/Phone 微信号/手机号<br></label>
              <input type="" class="form-control" id="email" placeholder="">
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="mb-3"> <label for="email">Email </label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="mb-3"> <label for="address">Personal Namepage Address <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address" placeholder="" required="">
              <div class="invalid-feedback"> Please enter your shipping address. </div>
            </div>
            <hr class="mb-4">
           
            
            <h4 class="mb-3">Assignment Information 科研任务介绍</h4>
            <div class="row">
                <div class="col-md-12 mb-3"> <label for="email">实验室方向 </label>
               <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div class="col-md-12 mb-3"> <label for="email"> 科研成果介绍</label>
             <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
              <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            
         
            </div>
            <hr class="mb-4">
            <button class="btn btn-secondary btn-lg btn-block" type="submit">Save information</button>
             <button class="btn btn-primary btn-lg btn-block" type="submit">Launch Assignment</button>
          </form>
        </div>
      </div>
    </div>
  </div>
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

<style>
@import '../assets/theme.css';
</style>
