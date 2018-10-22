module.exports = {
    /**
     * 报名信息填写页面的保存请求 页面url: '/enrollForm'
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

    enrollFormSave: function(lastName, firstName, username,
         studentId, wechatPhone, email, perWebAddr,
          selfIntr, reasonEnroll, callback) {
        callback({saveSuccess: true});
    },


/**
     * 报名信息填写页面的保存请求 页面url: '/enrollForm'
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
     */
    enrollFormGet: function(name, callback) {
        console.log("enrollFormGet: " + name);
        if(name=="1") callback({lastName: "一"});
        else callback({lastName: ""});
    },

}
