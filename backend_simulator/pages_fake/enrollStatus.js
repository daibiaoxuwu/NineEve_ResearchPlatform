module.exports = {
    /**
     * 教师查看某项目的报名情况页面 页面url: '/enrollStatus'
     * 
     * @param {string} teacherId
     * 教师号
     * 
     * @param {string} assignment
     * 教师的任务
     *
     * @property {Array} 
     * 报名者列表
     * 包含id, email(同样地, 如果id登陆则email="", 如果email登陆则id=""), text(姓名), department(系别,现在恒定是CST 计算机系), grade
     * 
     */

    enrollStatusGet: function(teacherId, title,callback){
        callback(
            //msgList
            [
                {id:"1",
                email:"",
                text: "肖朝军1",
                department: "CST 计算机系",
                grade: "Junior 大三"},
                {id:"",
                email:"2",
                text: "肖朝军5",
                department: "CST 计算机系",
                grade: "Junior 大三"}
            ]

        );
    },
            /**
     * 教师通过学生对其项目的报名 页面url: '/enrollStatus'
     * 
     * @param {string} teacherId
     * 教师号
     * 
     * @param {string} assignmentTitle
     * 教师的任务
     * 
     *      * @param {string} student
     * 学生id
     * 
     *      * @param {string} studentEmail
     * 学生email
     * 
     * @property {Boolean} 
     * 是否成功
     * 
     */
    enrollStatusAccept: function(teacherId, title, studentId, callback){
        callback({acceptSuccess: true});
    }
    
}
