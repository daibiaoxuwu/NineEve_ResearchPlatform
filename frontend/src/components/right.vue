<template>
    <div v-bind:class="visible">
            <div>
          <h4 class="d-flex justify-content-between mb-3"> <span class="text-muted"><b>Assignments 项目</b></span> <span class="badge badge-secondary badge-pill">3</span> </h4>
          <ul class="list-group ">
            <li v-for="item in items" v-bind:class="item.bgclass" @click="onClick2(item)" :key="item.title">
              <div>
                <h6 class="my-0"><b>{{item.title}}</b></h6> <small class="text-muted">{{item.description}}</small>
              </div> <span v-bind:class="item.class">{{item.status}}</span>
            </li>
                       
          </ul>
            </div>

                 <div  class="my-4">
          <h4 class="d-flex justify-content-between mb-3"> <span class="text-muted"><b>History Assignments 历史</b></span> <span class="badge badge-secondary badge-pill">3</span> </h4>
          <ul class="list-group">
            <li v-for="item in items" class="list-group-item d-flex justify-content-between list-group-item-action" @click="onClick2(item)" :key="item.title">
              <div>
                <h6 class="my-0"><b>{{item.title}}</b></h6> <small class="text-muted">{{item.description}}</small>
              </div> <span v-bind:class="item.class">{{item.status}}</span>
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
      items:[],
      history:[],
      visible:"invisible"
    };
  },
  created: function(){
      var that=this;
      $.get(
        "/right/get",//TODO:get
        {}).then(function(data){
          if(data=='/'){
            that.visible="invisible";
          }else {
            that.visible="visible-lg col-md-4 order-md-2";

          for(var item in data.assignment){
            if(data.assignment[item].status == "Enrolling 可报名"){
              data.assignment[item].bgclass="list-group-item d-flex justify-content-between list-group-item-action";
            } else {
              data.assignment[item].bgclass="list-group-item d-flex justify-content-between bg-light";
            }
             if(data.assignment[item].status == "Enrolling 可报名"){
              data.assignment[item].class="text-muted";
            } else if(data.assignment[item].status == "Passed 已通过"){
              data.assignment[item].class="text-success";
            } else{
            // if(data.assignment[item].status == "Rejected 已拒绝"){
              data.assignment[item].class="text-danger";
            } 
          }
          that.items=data.assignment;
          that.history=data.history;
          }
         });
    
  },
  methods: {
          onClick2(item){
            var that = this;
         $.get(
        "/right/route",//TODO:get
        {title: item.title}).then(function(data){
          if(data=="isTeacher")
        that.$router.push('/enrollStatus');
        else if(item.status== "Enrolling 可报名"){
        that.$router.push('/enroll');
        } else if(item.status== "Passed 已通过"){
        that.$router.push('/enrollAcceptedNotice');
        } else{
        that.$router.push('/enrollRejectNotice');
        }
        
        )
      }
  }
};
// 逻辑部分直接修改item即可呈现.
</script>

<style lang="css">

</style>