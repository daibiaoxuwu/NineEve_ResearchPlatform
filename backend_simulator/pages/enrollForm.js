module.exports = {
    /**
     * 报名信息填写页面的保存请求 页面url: '/enrollForm'
     * 
     * @param {string} id
     * 学生的id 有可能为"", 这时说明学生通过邮箱登陆; 否则通过id查找它
     * 
     * @param {string} idemail
     * 学生的email 有可能为"", 这时说明学生通过id登陆; 否则通过邮箱查找它
     * 
     * @param {string} assignmentTitle
     * 学生报名项目的题目
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
     * @param {string} award
     * 奖励
     * 
     * @property {boolean} saveSuccess //property: return
     * 保存是否成功
     * 
     *
     */

    enrollFormSave: function(id, idemail, assignmentTitle, teacher, lastName, firstName, username,
         wechatPhone, email, perWebAddr,
          selfIntr, reasonEnroll, award, callback) {
			var student=id;
			if(student==""||!student)
				student=idemail;
			connection.query('select * from enrollform where student="' + student + '" and title="' + assignmentTitle + '" and teacher="' + teacher + '"', function (error, results, fields){
				if(results.length==0)
				{
					connection.query('insert into enrollform(`student`,`title`,`teacher`,`selfintr`,`reasonenroll`,`award`,`fiiled`) values(' +
									 '"' + student + '",' +
									 '"' + assignmentTitle + '",' +		
									 '"' + teacher +'",' +
									 '"' + selfIntr + '",' +
									 '"' + reasonEnroll + '",' + 
									 '"' + award + '",0)');
					callback({saveSuccess: true});
				}
				else
				{
					connection.query('update enrollform set `selfintr`="' + selfIntr + '", ' +
														   '`reasonenroll`="' + reasonEnroll + '", ' +
														   '`award`="' + award + '", ' +
														   '`filled`=0 ' +
									'where student="' + student + '" and title="' + assignmentTitle  + '" and teacher="' + teacher + '"');
					callback({saveSuccess: true});
				}
			});
    },


        /**
     * 报名信息填写页面的保存并提交请求 页面url: '/enrollForm'
     * 
     * @param {string} id
     * 学生的id 有可能为"", 这时说明学生通过邮箱登陆; 否则通过id查找它
     * 
     * @param {string} idemail
     * 学生的email 有可能为"", 这时说明学生通过id登陆; 否则通过邮箱查找它
     * 
     * @param {string} assignmentTitle
     * 学生报名项目的题目
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
	 * @param {string} award
     * 奖励
     * 
     * @property {boolean} launchSuccess //property: return
     * 保存是否成功
     * 
	 
     *
     */

    enrollFormLaunch: function(id, idemail, assignmentTitle, teacher, lastName, firstName, username,
        wechatPhone, email, perWebAddr,
         selfIntr, reasonEnroll, award, callback) {
			var student=id;
			if(student==""||!student)
				student=idemail;
			connection.query('select * from enrollform where student="' + student + '" and title="' + assignmentTitle + '" and teacher="' + teacher + '"', function (error, results, fields){
				if(results.length==0)
				{
					connection.query('insert into enrollform(`student`,`title`,`teacher`,`selfintr`,`reasonenroll`,`award`,`fiiled`) values(' +
									 '"' + student + '",' +
									 '"' + assignmentTitle + '",' +		
									 '"' + teacher +'",' +
									 '"' + selfIntr + '",' +
									 '"' + reasonEnroll + '",' + 
									 '"' + award + '",1)');
					callback({launchSuccess: true});
				}
				else
				{
					connection.query('update enrollform set `selfintr`="' + selfIntr + '", ' +
														   '`reasonenroll`="' + reasonEnroll + '", ' +
														   '`award`="' + award + '", ' +
														   '`filled`=1 ' +
									'where student="' + student + '" and title="' + assignmentTitle  + '" and teacher="' + teacher + '"');
					callback({launchSuccess: true});
				}
			});
   },




/**
     * 报名信息填写页面的保存请求 页面url: '/enrollForm'
     *
     *      * @param {string} id
     * 学生的id 有可能为"", 这时说明学生通过邮箱登陆; 否则通过id查找它
     * 
     * @param {string} idemail
     * 学生的email 有可能为"", 这时说明学生通过id登陆; 否则通过邮箱查找它
     * 
     *      * @param {string} assignmentTitle
     * 学生报名项目的题目
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
     * @property {string} studentId
     * 学号
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
     * @property {string} selfIntr
     * 自我介绍
     * 
     * @property {string} reasonEnroll
     * 报名原因
     *
     */
    enrollFormGet: function(id, idemail, assignmentTitle, teacher, callback) {
             console.log('e'+id+idemail+assignmentTitle);
		var student=id;
		if(student==""||!student)
			student=idemail;	
		connection.query('select * from student where studentid="' + student + '"', function (error, results, fields){
			var tStudentID = results[0].studentid;
			if(tStudentID.indexOf('@') != -1)
				tStudentID = '空';
			connection.query('select * from enrollform where student="' + student + '" and title="' + assignmentTitle + '" and teacher="' + teacher + '"', function (err, resul, fiel){
				if(resul.length>0)
				{
					callback({lastName: results[0].lastname,
							  firstName: results[0].firstname,
							  username: results[0].username,
							  studentId: tStudentID,
							  wechatPhone: results[0].wechatphone,
							  email: results[0].email,
							  perWebAddr: results[0].perwebaddr,
							  selfIntr: resul[0].selfintr,
							  reasonEnroll: resul[0].reasonenroll,
							  award: resul[0].award});
				}
				else
				{
					connection.query('insert into enrollform(`student`,`title`,`teacher`,`selfintr`,`reasonenroll`,`award`) values(' +
									 '"' + student + '",' +
									 '"' + assignmentTitle + '",' +		
									 '"' + teacher + '",' +											 
									 '"",' +
									 '"",' +
									 '"")');
							callback({lastName: results[0].lastname,
							  firstName: results[0].firstname,
							  username: results[0].username,
							  studentId: tStudentID,
							  wechatPhone: results[0].wechatphone,
							  email: results[0].email,
							  perWebAddr: results[0].perwebaddr,
							  selfIntr: "",
							  reasonEnroll: "",
							  award: ""});
				}
			});
		});
    },
     enrollFormCheck: function(id, idemail, assignmentTitle, teacher, callback) {
             console.log('e'+id+idemail+assignmentTitle);
		var student=id;
		if(student==""||!student)
			student=idemail;	
		connection.query('select * from student where studentid="' + student + '"', function (error, results, fields){
			var tStudentID = results[0].studentid;
			if(tStudentID.indexOf('@') != -1)
				tStudentID = '空';
			connection.query('select * from enrollform where student="' + student + '" and title="' + assignmentTitle + '" and teacher="' + teacher + '"  and `filled`=1 ', function (err, resul, fiel){
				if(resul.length>0)
				{
                    callback(true);
                } else {
                    callback(false);
                }
            })
        })
    },

     enrollFormCheckT: function(id, idemail, assignmentTitle, teacher, callback) {
             console.log('e'+id+idemail+assignmentTitle);
		var student=id;
		if(student==""||!student)
			student=idemail;	
		connection.query('select * from teacher where teacherid="' + student + '" and `filled`=1', function (error, results, fields){
			connection.query('select * from enrollform where teacher="' + student + '" and title="' + assignmentTitle + '" and teacher="' + teacher + '"  and `filled`=1 ', function (err, resul, fiel){
				if(resul.length>0)
				{
                    callback(true);
                } else {
                    callback(false);
                }
            })
        })
    }

}

