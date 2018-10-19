module.exports = {
    /**
     * 教师请求页面的保存请求 页面url: '/teacherInfo'
     *
     * @param {string} lastName
     * 教师的姓
     *
     * @param {string} password
     * 登陆者的密码
     *
     * @property {boolean} saveSuccess //property: return
     * 登陆是否成功
     */
    teacherInfoSave: function(lastName, firstName, userName, wechatPhone, email, perWebAddr, researchArea, researchResults, lab) {
        console.log("teacherInfoSave: " + lastName + firstName); //显示在控制台，调试用
        return {saveSuccess: true};
    },




    teacherInfoLaunch: function(lastName, firstName, userName, wechatPhone, email, perWebAddr, researchArea, researchResults, lab) {
        console.log("teacherInfoLaunch: " + lastName + firstName); //显示在控制台，调试用
        return {launchSuccess: true};
    },


}
