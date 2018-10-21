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
                  <tr v-for="(item, index) in msgList ">
                    <td>{{index}}</td>
                    <td>{{item.text}}</td>
                    <!-- <td @click="onClick(item)" style="color:#12bbad">{{item.status}}</td> -->
                    <!-- <td><button @click="onClick(item)">项目1</button></td> -->

                    <td @click="onClick(item)"><router-link to="/enroll">{{item.status}}</router-link></td>
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
                  <tr v-for="(item, index) in myList ">
                    <td>{{index}}</td>
                    <td>{{item.text}}</td>
                    <!-- <td @click="onClick(item)" style="color:#12bbad">{{item.status}}</td> -->
                    <!-- <td><button @click="onClick(item)">项目1</button></td> -->

                    <td @click="onClick(item)"><router-link to="/enroll">{{item.status}}</router-link></td>
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
                  <tr v-for="(item, index) in avaList ">
                    <td>{{index}}</td>
                    <td>{{item.text}}</td>
                    <!-- <td @click="onClick(item)" style="color:#12bbad">{{item.status}}</td> -->
                    <!-- <td><button @click="onClick(item)">项目1</button></td> -->

                    <td @click="onClick(item)"><router-link to="/enroll">{{item.status}}</router-link></td>
                  </tr>

                </tbody>
              </table>

            </div>
            <b-pagination-nav base-url="#" :number-of-pages="num3" v-model="currentPage3" />
          </div>
</p>
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
      avaList:[]
      
    };
  },
  created:function(){
    this.update();
  },
  methods: {
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
          that.num1=data.num1,
          that.num2=data.num2,
          that.num3=data.num3,
          that.msgList = data.msgList;
          that.myList = data.myList;
          that.avaList = data.avaList;
        });
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

