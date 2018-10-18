require('../bs_1.js')
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
     *
     */
    emailLogin: function(email, password, recall) {
		connection.query('select * from student where email="'+email+'"', function (error, results, fields){
			if(results.length == 0)
				recall({loginSuccess: false, usernameTaken: true});
			else
				if(results[0].password == password)
					recall({loginSuccess: true, usernameTaken: true});
				else
					recall({loginSuccess: false, usernameTaken: false});
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
     *
     */
    teacherLogin: function(teacherID, password, recall) {
		connection.query('select * from teacher where teacherID="'+teacherID+'"', function (error, results, fields){
			if(results.length == 0)
				recall({loginSuccess: false, usernameTaken: true});
			else
				if(results[0].password == password)
					recall({loginSuccess: true, usernameTaken: true});
				else
					recall({loginSuccess: false, usernameTaken: false});
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
     *
     */
    studentLogin: function(studentID, password, recall) {
		connection.query('select * from student where studentID="'+studentID+'"', function (error, results, fields){
			if(results.length == 0)
				recall({loginSuccess: false, usernameTaken: true});
			else
				if(results[0].password == password)
					recall({loginSuccess: true, usernameTaken: true});
				else
					recall({loginSuccess: false, usernameTaken: false});
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
				connection.query('insert into student(name,email,password) values("' + name + '","' + email + '","' + password + '")', function (error, results){
					if (error) throw error;
					console.log(results);
				});
				recall({registerSuccess: true});
			}
		});
    }
}
