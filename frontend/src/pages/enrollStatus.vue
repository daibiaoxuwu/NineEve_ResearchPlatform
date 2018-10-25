<template>
    <div>  
    
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-info"></i>
          <h2>报名信息</h2>
          <p class="lead">Enroll Information</p>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container">
      <div class="row">
        <rightpane @click="update"></rightpane>
        
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3"><b>Enroll List 报名队列</b></h4>

          <table class="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>STUDENT NAME 学生名</th>
                    <th>DEPARTMENT 系别</th>
                    <th>YEAR 年级</th>
                  </tr>
                </thead>
                <tbody>
             
                  <tr v-for="(item, index) in list" @click="onClick(item)" :key="item.text"> <!--for循环传入list；@click时传入参数，onClick可以用-->
                    <td>{{index+1}}</td>
                    <td>{{item.text}}</td>
                    <!-- <td @click="onClick(item)" style="color:#12bbad">{{item.status}}</td> -->
                    <!-- <td><button @click="onClick(item)">项目1</button></td> -->
                    
                    <td >{{item.department}}</td>
                    <td>{{item.grade}}</td>
                    </tr>
            
                  
                 
                </tbody>
              </table>
            <b-pagination-nav base-url="#" :number-of-pages="num3" v-model="currentPage3" />

            <h2 class="mb-3"><b>{{selectedItem.text}}</b>
           <small class="form-text text-muted">
                {{selectedItem.department.split(" ")[0]}} {{selectedItem.grade.split(" ")[0]}} {{selectedItem.department.split(" ")[1]}} {{selectedItem.grade.split(" ")[1]}} 
              </small>
         </h2>
<studentInfo v-bind:detail="detail" v-bind:class="detailClass"></studentInfo>

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
  

  <b-btn v-b-modal.modal5 style="margin-top:0.5rem;">Launch Assignment 启动项目</b-btn>

  <!-- Modal Component -->
  <b-modal id="modal5" title="启动项目"  @ok="handleLaunch">
    <p class="my-4">是否终止报名,启动项目?</p>
  </b-modal>
  


  

  

  

  

        
        </div>
        </div>
      </div>
    </div>
  </div>
  
  
</template>


<script>
import rightpane from "../components/right.vue"; import assignmentInfo from "../components/assignmentInfo.vue";
import studentInfo from "../components/studentInfo.vue";
export default {
  name: "enrollForm",
   data() {
    return {
      list:[{
        id:"",
          text:"",
          department: "暂无学生报名",
          grade:""
        }],
      num3:1,
      currentPage3:1,
       
      selectedItem:  {
        id:"",
          text:"",
          department: "",
          grade:""
        },
      detail: {},
      detailClass: "invisible",
      class2:"invisible"
    }
   },
     components:{
    rightpane, assignmentInfo, studentInfo
  },
  created:function(){
   this.update();
  },
    methods: {
      update(){
         var that = this;
    $.get('/enrollStatus/get',
    {currentPage3:that.currentPage3}).then(function(result){
     console.log(result);
      if(result.list.length>0){
        that.list=result.list;
        that.selectedItem=result.list[0];
          that.detailClass="";
          that.class2="btn btn-primary btn-lg btn-block";
      } else {
        that.detailClass="invisible";
        that.class2="invisible";
        }
      that.num3=result.num3;
    })
      },
      onClick(item){
        if(item.department=="暂无学生报名"){
          this.detailClass="invisible";
          this.class2="invisible";
        }else{
          this.detailClass="";
          this.class2="btn btn-primary btn-lg btn-block";
        var that = this;
        this.selectedItem=item;
        $.get('/enrollStatus/getDetails',
    {id: item.id, email:item.email}).then(function(result){
      that.detail=result;
    })
        }
      },
   handleOk (){
      var that = this;
        $.get('/enrollStatus/accept',
    {id: that.selectedItem.id}).then(function(result){
      if(result.acceptSuccess){
      that.$router.push({path:"/enrollAccepted", query:{detail: that.detail}});
      }
    })
    },
     handleRefuse (){
      var that = this;
        $.get('/enrollStatus/refuse',
    {id: that.selectedItem.id}).then(function(result){
      if(result.acceptSuccess){
      that.$router.push("/enrollRefused");
      }
    })
    },
    handleLaunch(){
      var that = this;
      $.get('/enrollStatus/launch',{}).then(function(result){
      if(result.acceptSuccess){
        alert("project launched!");
        that.$router.push("/main");
      }
      })
    }
  },
  watch: {
    currentPage3: function(val){
      this.update();
    }
  },
  watch: {
    currentPage3: function(val){
      this.update();
    }
  }
}
</script>