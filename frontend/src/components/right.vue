<template>
    <div v-bind:class="visible">
            <div>
          <h4 class="d-flex justify-content-between mb-3"> <span class="text-muted"><b>Messages 消息</b></span> <span class="badge badge-secondary badge-pill">{{msgList.length}}</span> </h4>
          <ul class="list-group ">
            <li v-for="item in msgList" v-bind:class="item.bgclass" @click="onClick2(item)" :key="item.title">
              <div>
                <h6 class="my-0"><b>{{item.title}}</b></h6> <small v-bind:class="item.class">{{item.status}}</small>
              </div> 
            </li>
                       
          </ul>
            </div>

                 <div  class="my-4">
          <h4 class="d-flex justify-content-between mb-3"> <span class="text-muted"><b>My Assignments 我的项目</b></span> <span class="badge badge-secondary badge-pill">{{myList.length}}</span> </h4>
          <ul class="list-group">
            <li v-for="item in myList" class="list-group-item d-flex justify-content-between list-group-item-action" @click="onClick2(item)" :key="item.title">
              <div>
                <h6 class="my-0"><b>{{item.title}}</b></h6> <small v-bind:class="item.class">{{item.status}}</small>
              </div>
            </li>
          </ul>
            </div>
          
        </div>
</template>

<script>

export default {
  name: "right",
  data() {
    return {
      msgList:[],
      myList:[],
      visible:"invisible"
    };
  },
  created: function(){
    this.update();
  },
  methods: {
    update(){
      var that=this;
      $.get(
        "/right/get",//TODO:get
        {}).then(function(data){
            console.log('right'+data);
          if(data=='/'){
            that.visible="invisible";
          }else {
            that.visible="visible-lg col-md-4 order-md-2";

          for(var item in data.msgList){
            if(data.msgList[item].status == "Enrolling 可报名"){
              data.msgList[item].bgclass="list-group-item d-flex justify-content-between list-group-item-action";
            } else {
              data.msgList[item].bgclass="list-group-item d-flex justify-content-between bg-light";
            }
             if(data.msgList[item].status == "Enrolling 可报名"){
              data.msgList[item].class="text-muted";
            } else if(data.msgList[item].status == "Passed 已通过"){
              data.msgList[item].class="text-success";
            } else if(data.msgList[item].status == "Rejected 已拒绝"){
              data.msgList[item].class="text-danger";
            } else if(data.msgList[item].status == "Editable 可编辑"){
              data.msgList[item].class="text-warning";
            } 
          }
          that.msgList=data.msgList;
          that.myList=data.myList;
          }
         });
    
  },
          onClick2(item){
            var that = this;
         $.get(
        "/right/route",//TODO:get
        {title: item.title, teacherId: item.teacherId}).then(function(data){
        that.update();
          if(data=="isTeacher"){
          if(item.status== "Enrolling 可报名")
            that.$router.push('/enrollStatus');
          } else { 
            if(item.status== "Enrolling 可报名"){
            that.$router.push('/enroll');
            } else if(item.status== "Passed 已通过"){
            that.$router.push('/enrollAcceptNotice');
            } else if(item.status== "Rejected 已拒绝"){
            that.$router.push('/enrollRejectNotice');
          }
        }
      })
  }
  }
};
// 逻辑部分直接修改item即可呈现.
</script>

<style lang="css">

</style>