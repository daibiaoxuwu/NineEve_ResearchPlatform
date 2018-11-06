module.exports = {
    /**
     * 账号密码登陆请求 页面url: '/'
     *
     * @param {string} email
     * 登陆者的电子邮箱
     *
     * @param {string} password
     * 登陆者的密码
     *
     * @property {boolean} loginSuccess
     * 登陆是否成功
     * @property {boolean} usernameNotFound
     * 用户名是否存在: 不存在返回true
     * @property {boolean} infoFinished
     * 用户是否填写完个人信息: 填写完返回true
     *
     */
    emailLogin: function(email, password, recall) {
		connection.query('select * from student where email="'+email+'"', function (error, results, fields){
			if(results.length == 0)
				recall({loginSuccess: false, usernameNotFound: true, infoFinished: false});
			else
				if(results[0].password == password)
					recall({loginSuccess: true, usernameNotFound: true, infoFinished: results[0].filled == 1});
				else
					recall({loginSuccess: false, usernameNotFound: false, infoFinished: false});
		});
        console.log("email login: "+email + password);
    },



    /**
     * 教师号登陆请求 页面url: '/'
     *
     * @param {string} teacherID
     * 登陆者的教师号
     *
     * @param {string} password
     * 登陆者的密码
     *
     * @property {boolean} loginSuccess
     * 登陆是否成功
     * @property {boolean} usernameNotFound
     * 用户名是否存在: 不存在返回true
     *      * @property {boolean} infoFinished
     * 用户是否填写完个人信息: 填写完返回true
     *
     */
    teacherLogin: function(teacherID, password, recall) {
		connection.query('select * from teacher where teacherID="'+teacherID+'"', function (error, results, fields){
			if(results.length == 0)
				recall({loginSuccess: false, usernameNotFound: true, infoFinished: false});
			else
				if(results[0].password == password)
					recall({loginSuccess: true, usernameNotFound: true, infoFinished: results[0].filled == 1});
				else
					recall({loginSuccess: false, usernameNotFound: false, infoFinished: false});
		});
        console.log("teacher login: "+teacherID + password);
		
    },


     /**
     * 学生号登陆请求 页面url: '/'
     *
     * @param {string} studentID
     * 登陆者的学生号
     *
     * @param {string} password
     * 登陆者的密码
     *
     * @property {boolean} loginSuccess
     * 登陆是否成功
     * @property {boolean} usernameNotFound
     * 用户名是否存在: 不存在返回true
     *      * @property {boolean} infoFinished
     * 用户是否填写完个人信息: 填写完返回true
     *
     */
        studentLogin: function(studentID, password, recall) {
		connection.query('select * from student where studentID="'+studentID+'"', function (error, results, fields){
			if(results.length == 0)
				recall({loginSuccess: false, usernameNotFound: true, infoFinished: false});
			else
				if(results[0].password == password)
					recall({loginSuccess: true, usernameNotFound: false, infoFinished: results[0].filled == 1});
				else
					recall({loginSuccess: false, usernameNotFound: false, infoFinished: false});
		});
        console.log("student login: "+studentID + password);
    },


    /**
     * 校外学生注册请求 页面url: '/register'
     *
     * @param {string} name
     * 登陆者的真实姓名
     *
     * @param {string} university
     * 登陆者的大学名
     *      *
     * @param {string} email
     * 登陆者的邮箱
     *      *
     * @param {string} password
     * 登陆者的密码
     *
     * @property {boolean} registerSuccess
     * 注册是否成功(如果有重复姓名或邮箱, 返回false, 否则返回true)
     *
     */

    register: function(name, university, email, password, recall) {
        console.log("register: "+name + university + email + password);
		connection.query('select * from student where email="' + email + '"', function (error, results, fields){
			if (error) throw error;
			console.log('select * from student where email="' + email + '"');
			console.log(results.length);
			if(results.length>0)
				recall({registerSuccess: false});
			else
			{
				connection.query('insert into student(username,email,password,studentid,selectedlab) values("'
								+ name + '","'
								+ email + '","'
								+ password + '","'
								+ email
								+ '","[{\\\"name\\\":\\\"Software Laboratory 软件所\\\",\\\"state\\\":false},{\\\"name\\\":\\\"High Performance Laboratory 高性能\\\",\\\"state\\\":false},{\\\"name\\\":\\\"Multimedia Laboratory 媒体所\\\",\\\"state\\\":false},{\\\"name\\\":\\\"Artificial Intelligence Laboratory 智能所\\\",\\\"state\\\":false},{\\\"name\\\":\\\"Network Laboratory 网络所\\\",\\\"state\\\":false}]")', function (error, results){
					if (error) throw error;
					console.log(results);
				});
				recall({registerSuccess: true});
			}
		});
    },
   /**
     * 主页拿取所有项目列表请求 页面url: '/'
     * @return {Array} avaList 
     * 所有科研任务列表
     */
    homeGet: function(callback){
		connection.query('select * from project ', function (error, results, fields){
			var projects=[];
			for(var result in results)
				projects.push({title: results[result].title,
					teacherId: results[result].teacher,
					status: results[result].status});
			callback(projects);
		});
	}
}
