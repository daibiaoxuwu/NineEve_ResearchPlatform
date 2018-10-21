module.exports = {
    /**
     * 学生请求页面的保存请求 页面url: '/studentInfo'
     * 学生通过邮箱登陆
     * 
     * @param {string} lastName
     * 学生的姓
     *
     * @param {string} firstName
     * 学生的名
     * 
     * @param {string} username
     * 用户名
     * 
     * @param {string} wechatPhone
     * 微信号/手机号
     * 
     * @param {string} email
     * 邮箱
     * 
     * @param {string} perWebAddr
     * 个人主页地址
     * 
     * @param {string} breIntr
     * 学生个人简介
     * 
     * @param {integer} grade
     * 年级
     *
     * @param {Array} selectedLab
     * 关注的实验室 每一项的格式:{name:"软件所...", state:true/false}, 共五项
     * 这五项一定按之前0到4的顺序, state=true代表关注, false代表不关注
     * 
     * @param {Array} selectedKey
     * 关注的关键词 每一项的格式:{name:"关键词", state:true/false}, 共任意项
     * state=true代表关注, false代表不关注
     * 
     * @property {boolean} saveSuccess //property: return
     * 保存是否成功 如果没有查到此人, 返回false
     */

    studentMainGet: function(name, callback){
        callback(
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
