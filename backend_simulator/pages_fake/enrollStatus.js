module.exports = {
    /**
     * 教师查看某项目的报名情况页面 页面url: '/enrollStatus'
     * 
     * @param {string} name
     * 教师的邮箱
     *
     * @property {Array} 
     * 报名者列表
     * 包含id, email(同样地, 如果id登陆则email="", 如果email登陆则id=""), text(姓名), department(系别,现在恒定是CST 计算机系), grade
     * 
     */

    enrollStatusGet: function(teacherId, callback){
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
    }
    
}
