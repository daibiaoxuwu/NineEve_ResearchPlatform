module.exports = {
    /**
     * 学生请求页面的保存请求 页面url: '/main'
     * 学生通过邮箱登陆
     * 
     * @param {string} name
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

    mainGet: function(name, callback){
        callback(
            //isTeacher
            true,
            //msgList
      [ { text: "项目1", status: "Enrolling 可报名" },
        { text: "项目2", status: "Enrolling 可报名" },
        { text: "项目3", status: "Enrolling 可报名" },
         { text: "项目4", status: "Enrolling 可报名" },
         { text: "项目5", status: "Enrolling 可报名" } ],

            //myList
      [ { text: "项目6", status: "Enrolling 可报名" },
        { text: "项目2", status: "Enrolling 可报名" },
        { text: "项目3", status: "Enrolling 可报名" },
         { text: "项目4", status: "Enrolling 可报名" },
         { text: "项目5", status: "Enrolling 可报名" } ],

            //avaList
      [ { text: "项目11", status: "Enrolling 可报名" },
        { text: "项目2", status: "Enrolling 可报名" },
        { text: "项目3", status: "Enrolling 可报名" },
         { text: "项目4", status: "Enrolling 可报名" },
         { text: "项目5", status: "Enrolling 可报名" } ]
        
        );
    }
}
