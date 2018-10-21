<template>
    <div>  
    
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
          <h2>科研任务信息填写</h2>
          <p class="lead">Assignment information form</p>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container">
      <div class="row">
        <rightpane></rightpane>
        
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3"><b>Basic Information 基本信息</b></h4>
          <form class="needs-validation" novalidate="">
            <div class="mb-3"> <label for="username">Title 题目</label>
              <div class="input-group">
                <input type="text" class="form-control" id="username" required="" v-model="title">
                <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
              </div>
            </div>
              <div class="mb-3"> <label for="username">Background 背景</label>
              <div class="input-group">
               <b-form-textarea id="textarea1"
                     v-model="background"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
              </b-form-textarea>
          <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
              </div>
            </div>

          <div class="mb-3"> <label for="username">Keywords(separated with spaces) 关键词(以空格分隔)</label>
              <div class="input-group">
                <input type="text" class="form-control" id="username"  required="" v-model="keywords">
                <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
              </div>
            </div>

                          <div class="mb-3"> <label for="username">Abilities Required 能力要求</label>
              <div class="input-group">
               <b-form-textarea id="textarea1"
                     v-model="abilities"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
              </b-form-textarea>
          <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
              </div>
            </div>

                          <div class="mb-3"> <label for="username">Detailed Description 详细说明</label>
              <div class="input-group">
               <b-form-textarea id="textarea1"
                     v-model="detailed"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
              </b-form-textarea>
          <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
              </div>
            </div>

                          <div class="mb-3"> <label for="username">Number of Participants 可报名人数</label>
              <div class="input-group">
    <input type="text" class="form-control" id="username" required="" v-model="number">
          <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
              </div>
            </div>

                          <div class="mb-3"> <label for="username">Deadline 截止时间</label>
              <div class="input-group">
            <input type="text" class="form-control" id="username" required="" v-model="number">
  
          <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
              </div>
            </div>

         
          </form>
            <button class="btn btn-secondary btn-lg btn-block" type="submit" @click="save">Save information 保存信息</button>
             <button class="btn btn-primary btn-lg btn-block" type="submit" style="margin-top:0.5rem;" @click="launch">Launch Assignment 启动项目</button>
        </div>
      </div>
    </div>
  </div>
 
  
     </div>
</template>

<script>
import rightpane from "../components/right.vue"; import assignmentInfo from "../components/assignmentInfo.vue"
export default {
  name: "studentInfo",

   data() {
    return {
      grade: -1, dropdownText: "Please Select 请选择",
      lastName:"",
      firstName:"",
      username:"",
      wechatPhone:"",
      email:"",
      perWebAddr:"",
      breIntr:"",
      showSaveAlert: false,
      showFailAlert: false,
      allKeys:[
        {name: "关键词 1", state:true},
        {name: "关键词 2", state:true}
      ],
      selectedKey:[],
      selectedLab:[
        {name: "Software Laboratory 软件所", state:false},
        {name: "High Performance Laboratory 高性能", state:false},
        {name: "Multimedia Laboratory 媒体所", state:false},
        {name: "Artificial Intelligence Laboratory 智能所", state:false},
        {name: "Network Laboratory 网络所", state:false}
      ]
    }
   },

     components:{
    rightpane, assignmentInfo
  },
  created:function(){
    this.getInfo();
  },
    methods: {
   searchKey (item){
     this.selectedKey.push(item);
    },
    toggleKey (item){
     if(item.toggleKey=="primary"){
      item.toggleKey="light";
     }
     else {
      item.toggleKey="primary";
     }
     console.log(item);
    },

    save() {
          var that = this;
      console.log( {lastName: that.lastName, firstName: that.firstName, username:that.username,
         wechatPhone:that.wechatPhone, email:that.email, perWebAddr:that.perWebAddr,
          breIntr:that.breIntr, grade:that.grade,
          selectedLab:that.selectedLab,
          selectedKey:that.selectedKey
          });
      $.get(
        "/studentInfo/save",
        {lastName: that.lastName, firstName: that.firstName, username:that.username,
         wechatPhone:that.wechatPhone, email:that.email, perWebAddr:that.perWebAddr,
          breIntr:that.breIntr, grade:that.grade,
          selectedLab:that.selectedLab,
          selectedKey:that.selectedKey
          }).then(function(data){
            if(!data.saveSuccess){
              alert("保存信息出现问题");
            }
        });
      
    },

    getInfo() {
      var that=this;
      $.get(
        "/studentInfo/get",
        {}).then(function(data){
          console.log("lastname:" +data.lastName)
          that.lastName = data.lastName;
          that.firstName = data.firstName;
          that.username = data.username;
          that.wechatPhone = data.wechatPhone;
          that.email = data.email;
          that.perWebAddr = data.perWebAddr;
          that.breIntr = breIntr;
          that.grade = data.grade;
          that.selectedLab = data.selectedLab;
          that.selectedKey = data.selectedKey;
        });
      
    },

    clickFresh() {
      this.grade = 0;
      this.dropdownText = "Freshman 大一";
    },
    clickSoph() {
      this.grade = 1;
      this.dropdownText = "Sophomore 大二";
    },
    clickJuni() {
      this.grade = 2;
      this.dropdownText = "Junior 大三";
    },
    clickSeni() {
      this.grade = 3;
      this.dropdownText = "Senior 大四";
    },

    launch() {
      var that = this;
      $.get(
        "/studentInfo/launch",
        {lastName: that.lastName, firstName: that.firstName, username:that.username,
         wechatPhone:that.wechatPhone, email:that.email, perWebAddr:that.perWebAddr,
          breIntr:that.breIntr, grade:that.grade,
           selectedLab:that.selectedLab,
          selectedKey:that.selectedKey
          }).then(function(data){
            if(data.launchSuccess){
          window.location.href="/main";
            } else {
              alert("保存信息出现问题");
            }
        });
       
      
    }

  },

  watch: {
    grade:function(val){
    if(val==-1){
      this.dropdownText = "请选择年级";
    }
    else if(val==0){
      this.dropdownText = "Freshman 大一"
    }
    else if(val==1){
      this.dropdownText = "Sophomore 大二";
    }
    else if(val==2){
      this.dropdownText = "Junior 大三";
    }
    else if(val==3){
      this.dropdownText = "Senior 大四";
    }
    }
  }

}
</script>