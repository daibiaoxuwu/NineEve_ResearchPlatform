module.exports = {
    /**
     * 学生请求页面的保存请求 页面url: '/studentInfo'
     *
     * @param {string} lastName
     * 学生的姓
     *
     * @param {string} firstName
     * 学生的名
     * 
     * @param {string} userName
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
     * @param {integer} lab
     * 年级
     *
     * @property {boolean} saveSuccess //property: return
     * 保存是否成功
     */

    studentInfoSave: function(lastName, firstName, userName,
         wechatPhone, email, perWebAddr,
          breIntr, lab) {
        console.log("studentInfoSave: " + lastName + firstName);
        return {saveSuccess: true};
    },


/**
     * 学生请求页面的保存请求 页面url: '/studentInfo'
     *
     * @param {string} lastName
     * 学生的姓
     *
     * @param {string} firstName
     * 学生的名
     * 
     * @param {string} userName
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
     * @param {integer} lab
     * 年级
     *
     * @property {boolean} launchSuccess //property: return
     * 启动是否成功
     */

    studentInfoLaunch: function(lastName, firstName, userName,
         wechatPhone, email, perWebAddr,
         breIntr, lab) {
        console.log("studentInfoLaunch: " + lastName + firstName + email);
        return {launchSuccess: true};
    },

    studentInfoGet: function(name) {
        console.log("studentInfGet: " + name);
        if(name=="1") return {lastName: "一"};
        else if(name == "2") return {lastName: "二"};
        else return{lastName: ""};
    },

}
