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
     * @property {boolean} saveSuccess //property: return
     * 登陆是否成功
     */
    teacherInfoSave: function(lastName, firstName, userName,
         wechatPhone, email, perWebAddr,
          researchArea, researchResults, lab) {
        console.log("teacherInfoSave: " + lastName + firstName);
        return {saveSuccess: true};
    },




    teacherInfoLaunch: function(lastName, firstName, userName,
         wechatPhone, email, perWebAddr,
          researchArea, researchResults, lab) {
        console.log("teacherInfoLaunch: " + lastName + firstName);
        return {launchSuccess: true};
    },

    teacherInfoGet: function(name) {
        console.log("teacherInfGet: " + name);
        if(name=="1") return {lastName: "一"};
        else if(name == "2") return {lastName: "二"};
        else return{lastName: ""};
    },

}
