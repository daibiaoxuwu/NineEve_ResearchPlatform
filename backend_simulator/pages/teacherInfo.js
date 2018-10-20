require('../bs_1.js')
module.exports = {
    /**
     * 教师请求页面的保存请求 页面url: '/teacherInfo'
     *
     * @param {string} lastName
     * 教师的姓
     *
     * @param {string} firstName
     * 教师的名
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
     * @param {string} researchArea
     * 实验室方向
     * 
     * @param {string} researchResults
     * 科研成果介绍
     * 
     * @param {integer} lab
     * 研究所
     *
     * @property {boolean} saveSuccess //property: return
     * 保存是否成功
     */

    teacherInfoSave: function(lastName, firstName, userName,
         wechatPhone, email, perWebAddr,
          researchArea, researchResults, lab, recall) {
        console.log("teacherInfoSave: " + lastName + firstName);
        recall({saveSuccess: true});
    },


/**
     * 教师请求页面的保存请求 页面url: '/teacherInfo'
     *
     * @param {string} lastName
     * 教师的姓
     *
     * @param {string} firstName
     * 教师的名
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
     * @param {string} researchArea
     * 实验室方向
     * 
     * @param {string} researchResults
     * 科研成果介绍
     * 
     * @param {integer} lab
     * 研究所
     *
     * @property {boolean} launchSuccess //property: return
     * 启动是否成功
     */

    teacherInfoLaunch: function(lastName, firstName, userName,
         wechatPhone, email, perWebAddr,
          researchArea, researchResults, lab, recall) {
        console.log("teacherInfoLaunch: " + lastName + firstName);
        recall({launchSuccess: true});
    },

    teacherInfoGet: function(name, recall) {
        console.log("teacherInfGet: " + name);
        if(name=="1") recall({lastName: "一"});
        else if(name == "2") recall({lastName: "二"});
        else recall({lastName: ""});
    },

}
