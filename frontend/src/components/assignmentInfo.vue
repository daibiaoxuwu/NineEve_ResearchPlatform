<template>
<div>
      <h4 class="mb-3"><b>{{info.title}}</b>
           <small class="form-text text-muted">
             {{info.status}}
              </small>
         </h4>
    <p class="form-text" style="font-weight:bold;">指导教师</p>
         <p class="form-text text-muted">
           {{info.teacher}}</p>
         <p class="form-text" style="font-weight:bold;">项目简介</p>
         <p class="form-text text-muted">
          {{info.introduction}}
</p>
<p class="form-text" style="font-weight:bold;">关键词</p>
<div>

    <b-badge variant="light" style="font-size:15px; font-weight:200" v-for="item in info.keywords" :key="item">{{item}}</b-badge>

</div>
                  <!-- <hr class="mb-4"> -->
 <p class="form-text" style="font-weight:bold;"></br>能力要求</p>
         <p class="form-text text-muted">
            {{info.abilities}}
          </p>
 <p class="form-text" style="font-weight:bold;">详细说明</p>
         <p class="form-text text-muted">
           {{info.detailed}}
         </p>
 <p class="form-text" style="font-weight:bold;">可报名人数</p>
         <p class="form-text text-muted">
          {{info.number}}
</p>
 <p class="form-text" style="font-weight:bold;">截止时间</p>
         <p class="form-text text-muted">
         {{info.deadline}}
</p>

<div :class="visibleT">
<h5 class="form-text" style="font-weight:bold;">教师评价</h5>
<p class="form-text" style="font-weight:bold;">满意度</p>
         <p class="form-text text-muted">
         {{info2.satis}}
</p>
<p class="form-text" style="font-weight:bold;">项目完成介绍</p>
         <p class="form-text text-muted">
         {{info2.intro}}
</p>
<p class="form-text" style="font-weight:bold;">评价原因</p>
         <p class="form-text text-muted">
         {{info2.reason}}
</p>
</div>

<div :class="visibleS" v-for="(info3,index) in info3s" :key="info3.learned">
<h5 class="form-text" style="font-weight:bold;">学生 {{index+1}} 评价</h5>
<p class="form-text" style="font-weight:bold;">满意度</p>
         <p class="form-text text-muted">
         {{info3.satis}}
</p>
<p class="form-text" style="font-weight:bold;">收获</p>
         <p class="form-text text-muted">
         {{info3.learned}}
</p>
<p class="form-text" style="font-weight:bold;">尚未习得</p>
         <p class="form-text text-muted">
         {{info3.notlearned}}
</p>


</div>
</template>


<script>


export default {
  
  name: "enroll",
   data() {
    return {
      info:{},
      info2:{},
      info3:{},
      info3s:[],
      visibleT:"invisible",
      visibleS:"invisible"
    }
   },
   created:function(){
     this.initialize();
   },
   
  methods: {
    initialize(){
  var that=this;

      $.get(
        "/enroll/get",//TODO:get
        {}).then(function(data){
          that.info=data;
         });
      $.get(
        "/studentEvaluate/get",//TODO:get
        {}).then(function(data){
          if(data && data!=""){
          that.info3s=data;
          that.visibleS="";
          }
          else{
            that.visibleS="invisible";
          }
         });
          $.get(
        "/teacherEvaluate/get",//TODO:get
        {}).then(function(data){
          if(data && data!=""){
          that.info2=data;
          that.visibleT="";
          }
          else{
            that.visibleT="invisible";
          }
         });
    }
  }
}
</script>