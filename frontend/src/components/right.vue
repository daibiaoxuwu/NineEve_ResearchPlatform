<template>
    <div class="visible-lg col-md-4 order-md-2">
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
            <li class="list-group-item d-flex justify-content-between list-group-item-action">
              <div>
                <h6 class="my-0"><b>项目1</b></h6> <small class="text-muted">Brief description</small>
              </div> <span class="text-muted">2017-10-3</span>
            </li>
            <li class="list-group-item d-flex justify-content-between list-group-item-action">
              <div>
                <h6 class="my-0"><b>项目2</b></h6> <small class="text-muted">Brief description</small>
              </div> <span class="text-muted">2017-10-3</span>
            </li>
            <li class="list-group-item d-flex justify-content-between list-group-item-action">
              <div>
                <h6 class="my-0"><b>项目3</b></h6> <small class="text-muted">Brief description</small>
              </div> <span class="text-muted">2017-10-3</span>
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
     
      items:[
        {
          title: "项目1",
          description: "基于Nodejs的后台开发实践",
          status: "Enrolling 可报名",
          class: "text-muted",
          bgclass: "list-group-item d-flex justify-content-between list-group-item-action"
        },
        {
         title: "项目2",
          description: "基于Nodejs的后台开发实践",
          status: "Enrolling 可报名",
          class: "text-muted",
          bgclass: "list-group-item d-flex justify-content-between list-group-item-action"
        },
        {
          title: "项目3",
          description: "基于Nodejs的后台开发实践",
          status: "Enrolling 可报名",
          class: "text-muted",
          bgclass: "list-group-item d-flex justify-content-between list-group-item-action"
        },
         {
          title: "项目4",
          description: "基于Nodejs的后台开发实践",
          status: "Passed 已通过",
          class: "text-success",
          bgclass: "list-group-item d-flex justify-content-between bg-light"
        },
         {
         title: "项目5",
          description: "基于Nodejs的后台开发实践",
          status: "Rejected 已拒绝",
          class: "text-danger",
          bgclass: "list-group-item d-flex justify-content-between bg-light"
        }
      ]
    };
  },
  methods: {
          onClick2(item){
        alert(item.title);
        this.$router.push("/enrollStatus")
      }
  }
};
// 逻辑部分直接修改item即可呈现.
</script>

<style lang="css">

</style>