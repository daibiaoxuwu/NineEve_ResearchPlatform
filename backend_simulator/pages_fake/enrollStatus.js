module.exports = {
    /**
     * 学生请求页面的保存请求 页面url: '/main'
     * 学生通过邮箱登陆
     * 
     * @param {string} name
     * 学生的邮箱
     *
     * @property {Array} 
     * 学生的新消息列表
     * 包含id, email(同样地, 如果id登陆则email="", 如果email登陆则id=""), text(姓名), department(系别,现在恒定是CST 计算机系), grade
     * 
     */

    enrollStatusGet: function(id, callback){
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
