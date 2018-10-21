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

    studentInfoSave: function(lastName, firstName, username,
         wechatPhone, email, perWebAddr,
          breIntr, grade, selectedLab, selectedKey) {
        console.log("studentInfoSave: " + lastName + firstName);
        return {saveSuccess: true};
    },


/**
     * 学生请求页面的保存并提交请求 页面url: '/studentInfo'
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
     * @property {boolean} launchSuccess //property: return
     * 启动是否成功 如果没有查到此人, 返回false
     */

    studentInfoLaunch: function(lastName, firstName, username,
         wechatPhone, email, perWebAddr,
         breIntr, grade, selectedLab, selectedKey) {
        console.log("studentInfoLaunch: " + lastName + firstName + email);
        return {launchSuccess: true};
    },

    /**
     * 学生请求页面的取得之前所写内容请求 通过邮箱获得 页面url: '/studentInfo'
     * 如果没有查到此人, 全部返回空串即可
     *
     * @param {string} email
     * 学生的账号
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
     * @property {string} wechatPhone
     * 微信号/手机号
     * 
     * @property {string} email
     * 邮箱
     * 
     * @property {string} perWebAddr
     * 个人主页地址
     * 
     * @property {string} breIntr
     * 学生个人简介
     * 
     * @property {integer} grade
     * 年级
     * 
     * @param {Array} selectedLab
     * 关注的实验室 每一项的格式:{name:"软件所...", state:true/false}, 共五项
     * 这五项一定按之前0到4的顺序, state=true代表关注, false代表不关注
     * 
     * @param {Array} selectedKey
     * 关注的关键词 每一项的格式:{name:"关键词", state:true/false}, 共任意项
     * state=true代表关注, false代表不关注(可以不存或者不传, 也可以原样传回)
     * 
     * @param {Array} allKeys
     * 所有的关键词 每一项的格式:{name:"关键词", state:true/false}. 所有的关键词都被传出来, state任取.
     */

    studentInfoGet: function(name) {
        console.log("studentInfGet: " + name);
        if(name=="1") return {lastName: "一"};
        else if(name == "2") return {lastName: "二"};
        else return{lastName: ""};
    },

}
