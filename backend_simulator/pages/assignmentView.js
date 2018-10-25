module.exports = {
    /**
     * 项目列表具体展示界面 页面url: '/assignmentView'
     *
     * @property {Array} 
     * 所有 可报名 科研任务列表
     * 含有: title, teacher, introduction三项.
     */

    assignmentViewGet: function(callback){
		connection.query('select * from project ', function (error, results, fields){
			var projects=[];
			for(var result in results)
			{
				console.log(results[result].teachername);
				projects.push({title: results[result].title,
							   teacherId: results[result].teacher,
							   teacher: results[result].teachername,
							   introduction: results[result].introduction});
			}
			callback(projects);
		});
    }
}
