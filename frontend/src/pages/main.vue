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
                  <tr v-for="(item, index) in msgList" @click="onClick(item)" :key="item.title">

                    <td>{{index}}</td>
                    <td>{{item.title}}</td>
                    <!-- <td @click="onClick1(item)" style="color:#12bbad">{{item.status}}</td> -->
                    <!-- <td><button @click="onClick(item)">项目1</button></td> -->
                    <td>{{item.status}}</td>
                  </tr>

                </tbody>
              </table>

            </div>
            <b-pagination-nav base-url="#" :number-of-pages="num1" v-model="currentPage1" />
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
                  <tr v-for="(item, index) in myList" @click="onClick(item)" :key="item.title">
                    <td>{{index}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.status}}</td>
                    <!-- <td @click="onClick(item)" style="color:#12bbad">{{item.status}}</td> -->
                    <!-- <td><button @click="onClick(item)">项目1</button></td> -->

                  </tr>

                </tbody>
              </table>

            </div>
            <b-pagination-nav base-url="#" :number-of-pages="num2" v-model="currentPage2" />
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
                  <tr v-for="(item, index) in avaList" @click="onClick(item)" :key="item.title">
                    <td>{{index}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.status}}</td>
                    <!-- <td @click="onClick(item)" style="color:#12bbad">{{item.status}}</td> -->
                    <!-- <td><button @click="onClick(item)">项目1</button></td> -->

                  </tr>

                </tbody>
              </table>

            </div>
            
            <!-- <b-pagination-nav base-url="#" :number-of-pages="num3" v-model="currentPage3" style= "float: left;" /> -->
            <!-- <router-link to="/assignmentView"><b-button style= "float: right;" variant="primary">Details 具体信息</b-button></router-link> -->
            <!-- <span style="display: inline-block;"> -->
            <!-- <b-pagination-nav base-url="#" :number-of-pages="num3" v-model="currentPage3" style= " float: left;" /></span> -->
            <!-- <span style="display: inline-block;"> -->
            <!-- <router-link to="/assignmentView"><b-button style= "float: right;" variant="primary">Details 具体信息</b-button></router-link></span> -->
            <div class="row">
            <div class="col-md-6 order-md-1">
              <b-pagination-nav base-url="#" :number-of-pages="num3" v-model="currentPage3"  />
            </div>
            <div class="col-md-6 order-md-2">
              <p class="float-right"><router-link to="/assignmentView" ><b-button variant="primary">Details 具体信息</b-button></router-link></p>
            </div>
            </div>
          </div>
</p>
 <b-btn  v-bind:class="isTeacherButton" @click="newAssign">New Assignment 立项</b-btn>

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
       currentPage1: 1,
       currentPage2: 1,
       currentPage3: 1,
       num1: 1,
       num2: 1,
       num3: 1,
      msgList:[],
      myList:[],
      avaList:[],

      isTeacherButton:"invisible"
      
    };
  },
  created:function(){
    this.update();
  },
  methods: {
    newAssign(){
      this.$router.push({path:'/assignmentForm', query:{isNew: true}});
    },
    update(){
      console.log(this.currentPage1);
  var that=this;
      $.get(
        "/main/get",
        {
          currentPage1: that.currentPage1,
          currentPage2: that.currentPage2,
          currentPage3: that.currentPage3,
        }).then(function(data){
          console.log(data);
          if(data.isTeacher){
            that.isTeacherButton="btn btn-primary btn-lg btn-block";
          }else{
            that.isTeacherButton="invisible";
          }
          that.num1=data.num1,
          that.num2=data.num2,
          that.num3=data.num3,
          that.msgList = data.msgList;
          that.myList = data.myList;
          that.avaList = data.avaList;
        });
    },
    onClick(item){
      if(item.status == "Enrolling 可报名"){
        if(this.isTeacherButton=="invisible"){
        
      var that = this;
      $.get("/home/setAssignment",
      {title: item.title, teacherId: item.teacherId}).then(function(){
       that.$router.push("/enroll");
      })
      }
      else{
      var that = this;
      $.get("/home/setAssignment",
      {title: item.title, teacherId: item.teacherId}).then(function(){
       that.$router.push("/enrollStatus");
      })
        
      }
      }
      
      else if (item.status == "Passed 已通过"){
      var that = this;
      $.get("/home/setAssignment",
      {title: item.title, teacherId: item.teacherId}).then(function(){
       that.$router.push("/enrollAcceptNotice");
      })
      } else if (item.status == "Rejected 已拒绝"){
      var that = this;
      $.get("/home/setAssignment",
      {title: item.title, teacherId: item.teacherId}).then(function(){
       that.$router.push("/enrollRejectNotice");
      })
      }else if (item.status == "Editable 可编辑"){
      var that = this;
      $.get("/home/setNewAssignment",
      {title: item.title, teacherId: item.teacherId}).then(function(){
       that.$router.push({path:"/assignmentForm", query:{isNew: false}});
      })
      }
    },
	onClick1(item){
      if(item.status == "Enrolling 可报名"){
if(this.isTeacherButton="btn btn-primary btn-lg btn-block"){
           
      var that = this;
      $.get("/home/setAssignment",
      {title: item.title, teacherId: item.teacherId}).then(function(){
       that.$router.push("/enrollStatus");
      })
	  }
	  else{
      var that = this;
      $.get("/home/setAssignment",
      {title: item.title, teacherId: item.teacherId}).then(function(){
       that.$router.push("/enroll");
      })
      } 
	  }else if (item.status == "Passed 已通过"){
      var that = this;
	    console.log("enroll");
      $.get("/home/setAssignment",
      {title: item.title, teacherId: item.teacherId}).then(function(){
	  console.log("enroll");
       that.$router.push("/enrollAcceptNotice");
      })
      } else if (item.status == "Rejected 已拒绝"){
      var that = this;
      $.get("/home/setAssignment",
      {title: item.title, teacherId: item.teacherId}).then(function(){
       that.$router.push("/enrollRejectNotice");
      })
      }else if (item.status == "Editable 可编辑"){
      var that = this;
      $.get("/home/setNewAssignment",
      {title: item.title, teacherId: item.teacherId}).then(function(){
       that.$router.push({path:"/assignmentForm", query:{isNew: false}});
      })
      }
    }
  },
  watch: {
    currentPage1: function(val){
      this.update();
    },
    currentPage2: function(val){
      this.update();
    },
    currentPage3: function(val){
      this.update();
    }
  }
};
// 逻辑部分直接修改item即可呈现.
</script>

