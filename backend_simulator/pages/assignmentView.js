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
				projects.push({title: results[result].title,
							   teacher: results[result].teacher,
							   introduction: results[result].introduction});
			callback(projects);
		});
    }
}
