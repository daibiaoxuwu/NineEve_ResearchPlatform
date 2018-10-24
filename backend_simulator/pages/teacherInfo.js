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
					connection.query('update teacher set `lastname`="' + lastName + '", ' +
					'`firstname`="' + firstName + '", ' +
					'`username`="' + userName + '", ' +
					'`wechatphone`="' + wechatPhone + '", ' +
					'`email`="' + email + '", ' +
					'`perwebaddr`="' + perWebAddr + '", ' +
					'`researcharea`="' + researchArea + '", ' +
					'`researchresults`="' + researchResults + '", ' +
					'`lab`="' + lab + '"' +
					'where teacherID="'+teacherID+'"');
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
						connection.query('update teacher set `lastname`="' + lastName + '", ' +
						'`firstname`="' + firstName + '", ' +
						'`username`="' + userName + '", ' +
						'`wechatphone`="' + wechatPhone + '", ' +
						'`email`="' + email + '", ' +
						'`perwebaddr`="' + perWebAddr + '", ' +
						'`researcharea`="' + researchArea + '", ' +
						'`researchresults`="' + researchResults + '", ' +
						'`lab`="' + lab + '", ' +
						'`filled`=1 ' +
						'where teacherID="'+teacherID+'"');
						recall({launchSuccess: true});
					}
				});
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
		connection.query('select * from teacher where teacherID="'+teacherID+'"', function (error, results, fields){
			if(results.length>0)
			{
				recall({lastName: results[0].lastname,
						firstName:  results[0].firstname,
						username:  results[0].username,
						wechatPhone: results[0].wechatphone,
						email: results[0].email,
						perWebAddr: results[0].perwebaddr,
						researchArea: results[0].researcharea,
						researchResults: results[0].researchresults,
						lab: results[0].lab});
			}
			else
			{
				recall({lastName: "",
						firstName:  "",
						username:  "",
						wechatPhone: "",
						email: "",
						perWebAddr: "",
						researchArea: "",
						researchResults: "",
						lab: ""});
			}
		});				
    },

}
