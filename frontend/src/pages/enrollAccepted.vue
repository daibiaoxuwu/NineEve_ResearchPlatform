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
              <div class="col-md-4 order-md-2"> <rightpane></rightpane> </div>

          <div class="col-md-8 order-md-1">
            <h2 class="mb-3"><b>恭喜!</b>
              <small class="form-text text-muted">
                Congratulations!
              </small>
            </h2>
            <h5 class="mb-3"><b>您已经同意了学生的报名! 请等待后续通知。</b>
              <small class="form-text text-muted">
                You have successfully accepted a student for your project. Please await further notice.
              </small>
            </h5>
            <!-- <studentInfo v-bind:detail="detail" v-bind:class="detailClass"></studentInfo> -->
            <assignmentInfo></assignmentInfo>
            <!-- <router-link to="/teacherEvaluate">          -->
            <!-- <b-btn v-b-modal.modal2 class="btn btn-danger btn-lg btn-block"  style="margin-top:0.5rem;">End Assignment 结题</b-btn> -->
            <!-- </router-link> -->
            <!-- Modal Component -->

            <!-- <b-modal id="modal1" title="Bootstrap-Vue"  @ok="handleOk"> -->
            <!-- <p class="my-4">是否结题?</p> -->
            <!-- </b-modal> -->

          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import rightpane from "../components/right.vue";
import assignmentInfo from "../components/assignmentInfo.vue";
import studentInfo from "../components/studentInfo.vue";
export default {
  name: "enrollSuccess",
  data() {
    return {
      detail: {},
      selectedItem: {
        text: "肖朝军",
        department: "CST 计算机系",
        year: "Junior 大三"
      }
    };
  },
  components: {
    rightpane,
    assignmentInfo,
    studentInfo
  },
  created: function() {
    this.detail = this.$route.detail;
  },
  methods: {
    handleOk() {
      alert("Enroll Withdrawn!");
      // this.$router.push("/log")
    }
  }
};
</script>
