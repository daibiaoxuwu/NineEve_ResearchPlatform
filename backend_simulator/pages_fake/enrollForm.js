module.exports = {
    /**
     * 报名信息填写页面的保存请求 页面url: '/enrollForm'
     * 
     * @param {string} id
     * 学生的id 有可能为"", 这时说明学生通过邮箱登陆; 否则通过id查找它
     * 
     * @param {string} idemail
     * 学生的email 有可能为"", 这时说明学生通过id登陆; 否则通过邮箱查找它
     * 
     * @param {string} assignmentTitle
     * 学生报名项目的题目
     * 
     *      *      *      * @param {string} teacherId
     * 学生报名项目的老师id
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
     * @param {string} studentId
     * 学号
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
     * @param {string} selfIntr
     * 自我介绍
     * 
     * @param {string} reasonEnroll
     * 报名原因
     * 
     * @property {boolean} saveSuccess //property: return
     * 保存是否成功
     * 
     *
     */

    enrollFormSave: function(id, idemail, assignmentTitle, teacherId, lastName, firstName, username,
         wechatPhone, email, perWebAddr,
          selfIntr, reasonEnroll, award, callback) {
             console.log('e'+id+idemail+assignmentTitle+firstName);
        callback({saveSuccess: true});
    },


        /**
     * 报名信息填写页面的保存并提交请求 页面url: '/enrollForm'
     * 
     * @param {string} id
     * 学生的id 有可能为"", 这时说明学生通过邮箱登陆; 否则通过id查找它
     * 
     * @param {string} idemail
     * 学生的email 有可能为"", 这时说明学生通过id登陆; 否则通过邮箱查找它
     * 
     * @param {string} assignmentTitle
     * 学生报名项目的题目
     *
     *      *      *      * @param {string} teacherId
     * 学生报名项目的老师id
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
     * @param {string} studentId
     * 学号
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
     * @param {string} selfIntr
     * 自我介绍
     * 
     * @param {string} reasonEnroll
     * 报名原因
     * 
     * @property {boolean} launchSuccess //property: return
     * 保存是否成功
     * 
     *
     */

    enrollFormLaunch: function(id, idemail, assignmentTitle, teacherId, lastName, firstName, username,
        wechatPhone, email, perWebAddr,
         selfIntr, reasonEnroll, award, callback) {
             console.log('e'+id+idemail+assignmentTitle+firstName);
       callback({launchSuccess: true});
   },




/**
     * 报名信息填写页面的保存请求 页面url: '/enrollForm'
     *
     *      * @param {string} id
     * 学生的id 有可能为"", 这时说明学生通过邮箱登陆; 否则通过id查找它
     * 
     * @param {string} idemail
     * 学生的email 有可能为"", 这时说明学生通过id登陆; 否则通过邮箱查找它
     * 
     *      * @param {string} assignmentTitle
     * 学生报名项目的题目
     * 
     *      *      * @param {string} teacherId
     * 学生报名项目的老师id
     * 
     * @property {string} lastName
     * 学生的姓
     *
     * @property {string} firstName
     * 学生的名
     * 
     * @property {string} username
     * 用户名
     * 
     * @property {string} studentId
     * 学号
     * 
     * @property {string} wechatPhone
     * 微信号/手机号
     * 
     * @property {string} email
     * 邮箱
     * 
     * @property {string} perWebAddr
     * 个人主页地址
     * 
     * @property {string} selfIntr
     * 自我介绍
     * 
     * @property {string} reasonEnroll
     * 报名原因
     *
     */
    enrollFormGet: function(id, idemail, assignmentTitle, teacherId, callback) {
             console.log('e'+id+idemail+assignmentTitle);
        if(id=="1") callback({lastName: "一"});
        else callback({id: ""});
    },

}
