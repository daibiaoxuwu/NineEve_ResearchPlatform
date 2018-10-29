module.exports = {
    /**
     * 学生请求页面的保存请求 页面url: '/studentInfo'
     * 学生通过邮箱登陆
     * 
     * @param {string} id
     * 学生的id 有可能为"", 这时说明学生通过邮箱登陆; 否则通过id查找它
     * 
     * @param {string} email
     * 学生的email 有可能为"", 这时说明学生通过id登陆; 否则通过邮箱查找它
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

    studentInfoSave: function(id, mail, lastName, firstName, username,
         wechatPhone, email, perWebAddr,
          breIntr, grade, selectedLab, selectedKey, recall) {
        console.log("studentInfoSave: " + id + email + lastName + firstName);
		var studentID=id;
		if(studentID=="")
			studentID=email;
        connection.query('select * from student where studentID="'+studentID+'"', function (error, results, fields){
			if(results.length==0)
				recall({saveSuccess: false});
			else
			{
				connection.query('update student set `lastname`="' + lastName + '", ' +
				'`firstname`="' + firstName + '", ' +
				'`username`="' + username + '", ' +
				'`wechatphone`="' + wechatPhone + '", ' +
				'`email`="' + email + '", ' +
				'`perwebaddr`="' + perWebAddr + '", ' +
				'`breintr`="' + breIntr + '", ' +
				'`grade`=' + grade + ', ' +
				'`selectedlab`="' + JSON.stringify(selectedLab) + '", ' +
				'`selectedkey`="' + JSON.stringify(selectedKey) + '" ' +				
				'where studentID="'+studentID+'"');
				recall({saveSuccess: true});
			}
		});
    },


/**
     * 学生请求页面的保存并提交请求 页面url: '/studentInfo'
     * 学生通过邮箱登陆
     *
     * @param {string} id
     * 学生的id 有可能为"", 这时说明学生通过邮箱登陆; 否则通过id查找它
     * 
     * @param {string} email
     * 学生的email 有可能为"", 这时说明学生通过id登陆; 否则通过邮箱查找它
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

    studentInfoLaunch: function(id, mail, lastName, firstName, username,
         wechatPhone, email, perWebAddr,
         breIntr, grade, selectedLab, selectedKey, recall) {
        console.log("studentInfoLaunch: " + id + email + lastName + firstName + email);
		var studentID=id;
		if(studentID=="")
			studentID=email;
        connection.query('select * from student where studentID="'+studentID+'"', function (error, results, fields){
			if(results.length==0)
				recall({launchSuccess: false});
			else
			{
				connection.query('update student set `lastname`="' + lastName + '", ' +
				'`firstname`="' + firstName + '", ' +
				'`username`="' + username + '", ' +
				'`wechatphone`="' + wechatPhone + '", ' +
				'`email`="' + email + '", ' +
				'`perwebaddr`="' + perWebAddr + '", ' +
				'`breintr`="' + breIntr + '", ' +
				'`grade`=' + grade + ', ' +
				'`selectedlab`="' + JSON.stringify(selectedLab) + '", ' +
				'`selectedkey`="' + JSON.stringify(selectedKey) + '", ' +	
				'`filled`=1 ' +
				'where studentID="'+studentID+'"');
				recall({launchSuccess: true});
			}
		});
    },

    /**
     * 学生请求页面的取得之前所写内容请求 通过邮箱获得 页面url: '/studentInfo'
     * 如果没有查到此人, 全部返回空串即可
     *
     * @param {string} id
     * 学生的id 有可能为"", 这时说明学生通过邮箱登陆; 否则通过id查找它
     * 
     * @param {string} email
     * 学生的email 有可能为"", 这时说明学生通过id登陆; 否则通过邮箱查找它
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
	

    studentInfoGet: function(id, email, recall) {
		var studentID=id;
		if(studentID=="")
			studentID=email;
        console.log("studentInfGet: " + id + email);
		connection.query('select * from student where studentID="'+studentID+'"', function (error, results, fields){
			if(results.length>0)
			{
				function getKeys(preResults,recall){
					connection.query('select * from `key`', function (error, results, fields){
						var allKeys=[];
						for(var key in results)
							allKeys.push({name: results[key].name, state: false});
						console.log(allKeys);
						recall({lastName: preResults[0].lastname,
						firstName:  preResults[0].firstname,
						username:  preResults[0].username,
						wechatPhone: preResults[0].wechatphone,
						email: preResults[0].email,
						perWebAddr: preResults[0].perwebaddr,
						grade: preResults[0].grade,
						selectedLab: JSON.parse(preResults[0].selectedlab),
						selectedKey: JSON.parse(preResults[0].selectedkey),
						allKeys: allKeys});
					});
				};
				getKeys(results,recall);
			}
			else
			{
				recall({lastName: "",
						firstName:  "",
						username:  "",
						wechatPhone: "",
						email: "",
						perWebAddr: "",
						grade: 0,
						selectedLab: [],
						selectedKey: [],
						allKeys: []});
			}
		});
    },

}
