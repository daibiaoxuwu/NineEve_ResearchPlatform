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

    teacherInfoSave: function(teacherID, lastName, firstName, userName,
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

    teacherInfoLaunch: function(teacherID, lastName, firstName, userName,
         wechatPhone, email, perWebAddr,
          researchArea, researchResults, lab, recall) {
        console.log("teacherInfoLaunch: " + lastName + firstName + email);
        recall({launchSuccess: true});
    },

/**
     * 教师请求页面的获取旧的信息请求 页面url: '/teacherInfo'
     *
     * @param {string} name
     * 教师号 用以查询教师
     *
     * @property {string} lastName
     * 教师的姓
     *
     * @property {string} firstName
     * 教师的名
     *
     * @property {string} username
     * 用户名
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
     * @property {string} researchArea
     * 实验室方向
     *
     * @property {string} researchResults
     * 科研成果介绍
     *
     * @property {integer} lab
     * 研究所
     *
     */
    teacherInfoGet: function(teacherID, recall) {
        console.log("teacherInfGet: " + teacherID);
        if(teacherID=="1") recall({lastName: "一"});
        else recall({lastName: ""});
    },

}
