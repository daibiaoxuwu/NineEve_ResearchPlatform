module.exports = {
    /**
     * 获得某项目具体信息的请求 页面url: assignmentInfo组件
     * 学生通过邮箱登陆
     * 
     * @param {string} title
     * 任务的题目
     *
     * @property {Array} 
     * 科研任务具体信息
     * teacher
     * introduction
     * keywords
     * abilities
     * detailed
     * number
     * deadline
     * status
	 * award
     */

    enrollGet: function(title, callback){
        connection.query('select * from project where title="'+title+'"', function (error, results, fields){
			if(results.length>0)
				callback(
				{
					title: results[0].title,
					teacher: results[0].teacher,
					introduction: results[0].introduction,
					keywords: results[0].keywords.split(' '),
					abilities: results[0].abilities,
					detailed: results[0].detailed,
					number: results[0].number,
					deadline: results[0].deadline,
					status: results[0].status
				});
			else
				callback(
				{
					title: "",
					teacher: "",
					introduction: "",
					keywords: [],
					abilities: "",
					detailed: "",
					number: 0,
					deadline: "",
					status: ""
				});
        });
    }
}
