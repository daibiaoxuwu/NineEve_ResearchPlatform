
<template>

  <div>
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="text-center col-md-7 mx-auto"> <i class="fa d-block fa-bullseye fa-5x mb-4 text-teacher"></i>
            <h2>教师信息</h2>
            <p class="lead">Teacher teacherrmation</p>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="container">
        <div class="row">
          <rightpane></rightpane>

          <div class="col-md-8 order-md-1">

            <h4 class="mb-3"><b>{{teacherName}}</b>
              <small class="form-text text-muted">
                {{dropdownText}}
              </small>
            </h4>

            <h4 class="mb-3"><b>Other Projects 其他项目</b></h4>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ASSIGNMENT NAME 项目名</th>
                  <th>STATUS 状态</th>
                </tr>
              </thead>
              <tbody>

                <tr v-for="(item, index) in list" @click="onClick(item)" :key="item.text">
                  <!--for循环传入list；@click时传入参数，onClick可以用-->
                  <td>{{index}}</td>
                  <td>{{item.title}}</td>
                  <td>{{item.status}}</td>
                </tr>
              </tbody>
            </table>
            <b-pagination-nav base-url="#" :number-of-pages="num" v-model="currentPage" />

            <p class="form-text" style="font-weight:bold;">Email 邮箱</p>
            <p class="form-text text-muted">
              {{email}}</p>
            <p class="form-text" style="font-weight:bold;">Personal Webpage Address 个人主页地址</p>
            <p class="form-text text-muted">
              {{perWebAddr}}
            </p>
            <!-- <hr class="mb-4"> -->
            <p class="form-text" style="font-weight:bold;">Research Area 实验室方向</p>
            <p class="form-text text-muted">
              {{researchArea}}
            </p>
            <p class="form-text" style="font-weight:bold;">Research Results 科研成果介绍</p>
            <p class="form-text text-muted">
              {{researchResults}}
            </p>

            <button class="btn btn-secondary btn-lg btn-block" @click="$router.go(-1)">Home 返回主页</button>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import rightpane from "../components/right.vue";

export default {
  data() {
    return {
      lab: 0,
      dropdownText: "Software Laboratory 软件所",
      teacherName: "教师名",
      email: "1@1",
      perWebAddr: "1.com",
      researchArea: "area",
      researchResults: "results",
      visible: "invisible",
      isTeacher: false,
      currentPage: 1,
      num: 1,
      list: [
        {
          title: "项目1",
          status: "Enrolling 可报名"
        }
      ]
    };
  },
  components: {
    rightpane
  },
  created: function() {
    var that = this;
    $.get("/teacherView/get", {}).then(function(data) {
      console.log("lastname:" + data.lastName);
      that.teacherName = data.lastName + data.firstName;
      that.email = data.email;
      that.perWebAddr = data.perWebAddr;
      that.researchArea = data.researchArea;
      that.researchResults = data.researchResults;
      that.lab = data.lab;
    });
  },
  methods: {},
  watch: {
    lab: function(val) {
      if (val == -1) {
        this.dropdownText = "Not Selected 未选择";
      } else if (val == 0) {
        this.dropdownText = "Software Laboratory 软件所";
      } else if (val == 1) {
        this.dropdownText = "High Performance Laboratory 高性能";
      } else if (val == 2) {
        this.dropdownText = "Multimedia Laboratory 媒体所";
      } else if (val == 3) {
        this.dropdownText = "Artificial Intelligence Laboratory 智能所";
      } else if (val == 4) {
        this.dropdownText = "Network Laboratory 网络所";
      }
    }
  }
};
</script>
