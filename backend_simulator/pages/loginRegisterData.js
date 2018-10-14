var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'b.NineEve.secoder.local',
  port     : '3306',
  user     : 'lzr',
  password : 'newpass',
  database : 'A'
});


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
     * @typedef {Object} emailLoginRet
     * @property {boolean} loginSuccess
     * 登陆是否成功
     * 
     * @returns {emailLoginRet}
     */
    emailLogin: function(email, password) {
        return {loginSuccess: true};
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
     * @typedef {Object} teacherLoginRet
     * @property {boolean} loginSuccess
     * 登陆是否成功
     * 
     * @returns {teacherLoginRet}
     */
    teacherLogin: function(teacherID, password) {
        return {loginSuccess: true};
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
     * @typedef {Object} studentLoginRet
     * @property {boolean} loginSuccess
     * 登陆是否成功
     * 
     * @returns {studentLoginRet}
     */
    teacherLogin: function(studentID, password) {
        return {loginSuccess: true};
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
     * @typedef {Object} registerRet
     * @property {boolean} registerSuccess
     * 注册是否成功(如果有重复姓名或邮箱, 返回false, 否则返回true)
     * 
     * @returns {registerRet}
     */
    
    register: function(name, university, email, password) {
        
        connection.query('INSERT INTO b(b) VALUES(1234)', function (error, result) {
            if (error) throw error;
            console.log(result);
        });
   
        return {registerSuccess: true};
    }
}