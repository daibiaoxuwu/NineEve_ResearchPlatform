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

                           <div class="mb-3"> <label for="username">Introduction 简介</label>
              <div class="input-group">
               <b-form-textarea id="textarea1"
                     v-model="introduction"
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
            <input type="text" class="form-control" id="username" required="" v-model="deadline">
  
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
  name: "assignmentInfo",

   data() {
    return {
      title:"",
      background:"",
      introduction:"",
      keywords:"",
      abilities:"",
      detailed:"",
      number:"",
      deadline:""
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
      console.log( {title: that.title, background: that.background, introduction: that.introduction,
         keywords: that.keywords, abilities: that.abilities, detailed:that.detailed,
          number: that.number, deadline: that.deadline});
      $.get(
        "/assignmentForm/save",
        {title: that.title, background: that.background, introduction: that.introduction,
         keywords: that.keywords, abilities: that.abilities, detailed:that.detailed,
          number: that.number, deadline: that.deadline}).then(function(data){
            if(!data.saveSuccess){
              alert("保存信息出现问题");
            } else{
              alert('保存成功');
            }
        });
      
    },

    getInfo() {
      var that=this;
      console.log(this.$route);
      if(!this.$route.query.isNew){
      $.get(
        "/assignmentForm/get",
        {}).then(function(data){
          that.title = data.title;
          that.background = data.background;
          that.introduction = data.introduction;
          that.keywords = data.keywords;
          that.abilities = data.abilities;
          that.detailed = data.detailed;
          that.number = data.number;
          that.deadline = data.deadline;
          });
      }
    },

    launch() {
      var that = this;
      $.get(
        "/assignmentForm/launch",
        {title: that.title, background: that.background, introduction: that.introduction,
         keywords: that.keywords, abilities: that.abilities, detailed:that.detailed,
          number: that.number, deadline: that.deadline}).then(function(data){
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