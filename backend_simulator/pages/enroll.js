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
     */

    enrollGet: function(title, teacher, callback){
		console.log("lzr: ", title, teacher);
        connection.query('select * from project where title="' + title + '" and teacher="' + teacher + '"', function (error, results, fields){
			if(results.length>0)
			{
				connection.query('select * from `prokey` where title="' + title + '" and teacher="' + teacher + '"', function (err, resul, fiel){
					var keys=[];
					for(var i in resul)
						keys.push(resul[i].key);
					callback(
					{
						title: results[0].title,
						teacher: results[0].teachername,
						teacherId: results[0].teacher,
						introduction: results[0].introduction,
						keywords: keys,
						abilities: results[0].abilities,
						detailed: results[0].detailed,
						number: results[0].num.toString(),
						deadline: results[0].deadline,
						status: results[0].status
					});
				});
			}
			else
				callback(
				{
					title: "",
					teacher: "",
					teacherId: "",
					introduction: "",
					keywords: [],
					abilities: "",
					detailed: "",
					number: "",
					deadline: "",
					status: ""
				});
        });
    }
}
