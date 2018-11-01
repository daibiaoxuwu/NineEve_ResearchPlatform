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
     * @property {Array} msgList 
     * 学生的新消息列表
     * 
     * @property {Array} myList 
     * 学生的科研任务(已经报名, 或者已经录取等)列表
     * 
     * @property {Array} avaList 
     * 所有科研任务列表
     */

    mainGet: function(id, email, isTeacher, callback){
        callback(
            //isTeacher
      [ { title: "项目1", teacherId:"1", status: "Enrolling 可报名" },
        { title: "项目2", teacherId:"1",  status: "Enrolling 可报名" },
        { title: "项目3",  teacherId:"1", status: "Enrolling 可报名" },
         { title: "项目4",  teacherId:"1", status: "Enrolling 可报名" },
         { title: "项目5",  teacherId:"1", status: "Enrolling 可报名" } ],

            //myList
      [ { title: "项目6", teacherId:"1",  status: "Enrolling 可报名" },
        { title: "项目2", teacherId:"1",  status: "Enrolling 可报名" },
        { title: "项目3",  teacherId:"1", status: "Enrolling 可报名" },
         { title: "项目4", teacherId:"1",  status: "Enrolling 可报名" },
         { title: "项目5", teacherId:"1", status: "Enrolling 可报名" } ],

            //avaList
      [ { title: "项目11", teacherId:"1",  status: "Enrolling 可报名" },
        { title: "项目2", teacherId:"1",  status: "Enrolling 可报名" },
        { title: "项目3", teacherId:"1",  status: "Enrolling 可报名" },
         { title: "项目4", teacherId:"1",  status: "Enrolling 可报名" },
         { title: "项目5",  teacherId:"1", status: "Enrolling 可报名" } ]
        
        );
    }
}
