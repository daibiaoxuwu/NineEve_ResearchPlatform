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
        console.log("email login: "+email + password);
        recall({loginSuccess: true, usernameNotFound: false, infoFinished: false});
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
        console.log("teacher login: "+teacherID + password);
        recall({loginSuccess: true, usernameNotFound: false, infoFinished: false});
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
        console.log("student login: "+studentID + password);
        recall({loginSuccess: true, usernameNotFound: false, infoFinished: false});
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
        recall({registerSuccess: true});
    },
   /**
     * 主页拿取所有项目列表请求 页面url: '/'
     * @return {Array} avaList
     * 所有科研任务列表
     */
    homeGet: function(callback){
        callback(
                [{
                    text: "项目1",
                    status: "Enrolling 可报名"
                  },
                  {
                    text: "项目2",
                    status: "Enrolling 可报名"
                  },
                  {
                    text: "项目3",
                    status: "Enrolling 可报名"
                  },
                   {
                    text: "项目4",
                    status: "Enrolling 可报名"
                  },
                   {
                    text: "项目5",
                    status: "Enrolling 可报名"
                  }]

              );
            }


}
