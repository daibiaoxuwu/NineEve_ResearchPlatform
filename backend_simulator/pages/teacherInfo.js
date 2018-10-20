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

    teacherInfoSave: function(teacherID, lastName, firstName, userName,
         wechatPhone, email, perWebAddr,
          researchArea, researchResults, lab, recall) {
			connection.query('select * from teacher where teacherID="'+teacherID+'"', function (error, results, fields){
				if(results.length==0)
					recall({saveSuccess: false});
				else
				{
					console.log('update teacher set `lastname`="' + lastName + '", \
					`firstname`="' + firstName + '", \
					`username`="' + userName + '", \
					`wechatphone`="' + wechatPhone + '", \
					`email`="' + email + '", \
					`perwebaddr`="' + perWebAddr + '", \
					`researchArea`="' + researchArea + '", \
					`researchresults`="' + researchResults + '", \
					`lab`=' + lab + '\
					 where teacherID="'+teacherID+'"');
					connection.query('update teacher set `lastname`="' + lastName + '", \
					`firstname`="' + firstName + '", \
					`username`="' + userName + '", \
					`wechatphone`="' + wechatPhone + '", \
					`email`="' + email + '", \
					`perwebaddr`="' + perWebAddr + '", \
					`researcharea`="' + researchArea + '", \
					`researchresults`="' + researchResults + '", \
					`lab`=' + lab + '\
					 where teacherID="'+teacherID+'"');
					recall({saveSuccess: true});
				}
			});
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
				connection.query('select * from teacher where teacherID="'+teacherID+'"', function (error, results, fields){
				if(results.length==0)
					recall({launchSuccess: false});
				else
				{
					connection.query('update teacher set `lastname`="' + lastName + '", \
					`firstname`="' + firstName + '", \
					`username`="' + userName + '", \
					`wechatphone`="' + wechatPhone + '", \
					`email`="' + email + '", \
					`perwebaddr`="' + perWebAddr + '", \
					`researcharea`="' + researchArea + '", \
					`researchresults`="' + researchResults + '", \
					`lab`=' + lab + ', \
					`filled`=1 \
					 where teacherID="'+teacherID+'"');
					recall({launchSuccess: true});
				}
			});
    },

    teacherInfoGet: function(name, recall) {
        console.log("teacherInfGet: " + name);
        if(name=="1") recall({lastName: "一"});
        else if(name == "2") recall({lastName: "二"});
        else recall({lastName: ""});
    },

}
