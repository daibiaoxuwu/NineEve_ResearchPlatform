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
     * 
     * 
     * //TODO:这里和/pages不一样,没有传递teacherId
     */

    teacherInfoSave: function(lastName, firstName, username,
         wechatPhone, email, perWebAddr,
          researchArea, researchResults, lab, callback) {
        console.log("teacherInfoSave: " + lastName + firstName);
        callback({saveSuccess: true});
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

    teacherInfoLaunch: function(lastName, firstName, username,
         wechatPhone, email, perWebAddr,
          researchArea, researchResults, lab, callback) {
        console.log("teacherInfoLaunch: " + lastName + firstName + email);
        callback({launchSuccess: true});
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
    teacherInfoGet: function(name, callback) {
        console.log("teacherInfGet: " + name);
        if(name=="1") callback({lastName: "一"});
        else callback({lastName: ""});
    },

}
