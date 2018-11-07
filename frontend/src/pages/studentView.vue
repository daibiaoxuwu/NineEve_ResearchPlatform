
<template>

    <div>  
    <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-student"></i>
          <h2>学生信息</h2>
          <p class="lead">Student studentrmation</p>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container">
      <div class="row">
  <rightpane></rightpane>
        
        <div class="col-md-8 order-md-1">
      

         <h4 class="mb-3"><b>{{studentName}}</b>
           <small class="form-text text-muted">
             {{dropdownText}}
              </small>
         </h4>

               

   
    <p class="form-text" style="font-weight:bold;">Email 邮箱</p>
         <p class="form-text text-muted">
           {{email}}</p>
         <p class="form-text" style="font-weight:bold;">Personal Webpage Address 个人主页地址</p>
         <p class="form-text text-muted">
          {{perWebAddr}}
</p>



             <button class="btn btn-secondary btn-lg btn-block" @click="$router.go(-1)">Home 返回主页</button>
        
        </div>
      </div>
    </div>
  </div>
    <button class="btn btn-secondary btn-lg btn-block" @click="visit">Return 返回</button>

  <b-btn v-b-modal.modal1 v-bind:class="class2">Accept Enrollment 同意报名</b-btn>
  <!-- Modal Component -->
  <b-modal id="modal1" title="同意报名"  @ok="handleOk">
    <p class="my-4">是否同意 {{selectedItem.text}} ({{selectedItem.department.split(" ")[1]}}-{{selectedItem.grade.split(" ")[1]}})报名?</p>
  </b-modal>

  <b-btn v-b-modal.modal2 v-bind:class="class2" style="margin-top:0.5rem;">Reject Enrollment 拒绝报名</b-btn>

  <!-- Modal Component -->
  <b-modal id="modal2" title="拒绝报名"  @ok="handleRefuse">
    <p class="my-4">是否拒绝 {{selectedItem.text}} ({{selectedItem.department.split(" ")[1]}}-{{selectedItem.grade.split(" ")[1]}})报名?</p>
  </b-modal>
  
  
     </div>
</template>


<script>
import rightpane from '../components/right.vue';

export default {
  data() {
    return {
      grade: "Junior 大三",
      studentName:"学生名",
      email:"1@1",
      perWebAddr:"1.com",
      breIntr:"个人简介",

      visible: 'invisible',
      isTeacher: false,
      currentPage:1,
      num:1
    };
  },
  components: {
    rightpane
  },
  created: function() {
    var that = this;
     $.get(
        "/studentView/get",
        {}).then(function(data){
          console.log("lastname:" + data.lastName)
          that.grade = data.grade;
          that.studentName = data.lastName + data.firstName;
          that.email = data.email;
          that.perWebAddr = data.perWebAddr;
          that.breIntr = data.breIntr;
        });
  },
  methods: {
    handleOk (){
      var that = this;
        $.get('/studentView/accept',
    {}).then(function(result){
      if(result.acceptSuccess){
      that.$router.push({path:"/enrollAccepted", query:{detail: that.detail}});
      }
    })
    },
     handleRefuse (){
      var that = this;
        $.get('/studentView/refuse',
    {}).then(function(result){
      if(result.acceptSuccess){
      that.$router.push("/enrollRefused");
      }
    })
    },
  }
  
};
</script>
