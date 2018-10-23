module.exports = {
    /**
     * 学生请求页面的保存请求 页面url: '/main'
     * 学生通过邮箱登陆
     * 
     * @param {string} id
     * 学生的学号 如果为"",用邮箱
     * @param {string} email
     * 学生的邮箱
     *
     * @property {boolean} isTeacher
     * 是否为老师(学生和老师公用个人主页)
     * 
     * @property {Array} assignments 
     * 正在进行的科研任务
     * 
     * @property {Array} history
     * 已经完成的科研任务列表
     */

    rightGet: function(id, email,isTeacher, callback){
        callback({
     assignments: [ { text: "项目1", status: "Enrolling 可报名" },
        { text: "项目2", status: "Enrolling 可报名" },
        { text: "项目3", status: "Enrolling 可报名" },
         { text: "项目4", status: "Passed 已通过" },
         { text: "项目5", status: "Rejected 已拒绝" } ],
  history:    [ { text: "项目6", status: "Enrolling 可报名" },
        { text: "项目2", status: "Enrolling 可报名" },
        { text: "项目3", status: "Enrolling 可报名" },
         { text: "项目4", status: "Enrolling 可报名" },
         { text: "项目5", status: "Enrolling 可报名" } ]
        }
        );
    }
}
