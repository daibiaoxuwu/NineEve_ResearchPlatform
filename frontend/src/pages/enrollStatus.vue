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
        <rightpane></rightpane>
        
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
             
                  <tr v-for="(item, index) in list" @click="onClick(item)"> <!--for循环传入list；@click时传入参数，onClick可以用-->
                    <td>{{index}}</td>
                    <td>{{item.text}}</td>
                    <!-- <td @click="onClick(item)" style="color:#12bbad">{{item.status}}</td> -->
                    <!-- <td><button @click="onClick(item)">项目1</button></td> -->
                    
                    <td >{{item.department}}</td>
                    <td>{{item.year}}</td>
                    </tr>
            
                  
                 
                </tbody>
              </table>


<div>
            <h2 class="mb-3"><b>{{selectedItem.text}}</b>
           <small class="form-text text-muted">
                {{selectedItem.department.split(" ")[0]}} {{selectedItem.year.split(" ")[0]}} {{selectedItem.department.split(" ")[1]}} {{selectedItem.year.split(" ")[1]}} 
              </small>
         </h2>
       <studentInfo></studentInfo>
t  <b-btn v-b-modal.modal1 class="btn btn-primary btn-lg btn-block">Accept Enrollment 同意报名</b-btn>

  <!-- Modal Component -->
  <b-modal id="modal1" title="Bootstrap-Vue"  @ok="handleOk">
    <p class="my-4">是否同意 {{selectedItem.text}} ({{selectedItem.department.split(" ")[1]}}-{{selectedItem.year.split(" ")[1]}})报名?</p>
  </b-modal>
        
        </div>
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
      list:[
        {
          text: "肖朝军",
          department: "CST 计算机系",
          year: "Junior 大三"
        },
        {
       
          text: "肖朝军2",
          department: "CST 计算机系",
          year: "Junior 大三"
        },
        {
        
          text: "肖朝军3",
          department: "CST 计算机系",
          year: "Junior 大三"
        },
         {
        
          text: "肖朝军4",
          department: "CST 计算机系",
          year: "Junior 大三"
        },
         {
       
          text: "肖朝军5",
          department: "CST 计算机系",
          year: "Junior 大三"
        }
      ],
      selectedItem:  {
          text: "肖朝军",
          department: "CST 计算机系",
          year: "Junior 大三"
        }
    }
   },
     components:{
    rightpane, assignmentInfo, studentInfo
  },
    methods: {
      onClick(item){
        alert(item.text);
        this.selectedItem=item;
      },
   handleOk (){
      this.$router.push("/enrollAccepted")
    }
  }
}
</script>