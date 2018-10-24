module.exports = {
    /**
     * 项目信息页面的保存请求 页面url: '/assignmentForm'
     * 
     * @param {string} teacherId
     * 教师号
     * 
     * @param {string} title
     * 项目名称
     *
     * @param {string} background
     * 背景
     * 
     * @param {string} introduction
     * 简介
     * 
     * @param {string} keywords
     * 关键词
     * 
     * @param {string} abilities
     * 能力要求
     * 
     * @param {string} detailed
     * 详细说明
     * 
     * @param {string} number
     * 可报名人数
     * 
     * @param {string} deadline
     * 截止时间
     * 
     * @property {boolean} saveSuccess //property: return
     * 保存是否成功
     * 
     * 
     */

    assignmentFormSave: function(teacher, title, background, introduction,
         keywords, abilities, detailed,
          number, deadline, callback) {
			  			 console.log("lzr4: "+teacher+title);
			connection.query('select * from project where title="' + title + '" and teacher="' + teacher + '"', function (error, results, fields){
				if(results.length==0)
				{
					connection.query('select * from teacher where teacherid="' + teacher + '"', function (err, resul, fiel){
						var teachername="";
						if(resul.length>0)
							teachername=resul[0].lastname + resul[0].firstname;
						connection.query('insert into project(`teacher`,`teachername`,`title`,`background`,`introduction`,`keywords`,`abilities`,`detailed`,`num`,`status`,`deadline`) values(' +
										 '"' + teacher + '",' +
										 '"' + teachername + '",' +
										 '"' + title + '",' +
										 '"' + background+ '",' +
										 '"' + introduction + '",' +
										 '"' + keywords + '",' +
										 '"' + abilities + '",' +
										 '"' + detailed + '",' +
										 '' + number + ',' +
										 '"' + 'Editable 可编辑' + '",' +
										 '"' + deadline + '")');
						callback({saveSuccess: true});
					});
				}
				else
				{
					if(results[0].status.indexOf("Editable")!=-1)
					{
						connection.query('update project set `background`="' + background + '", ' +
										'`introduction`="' + introduction + '", ' +
										'`keywords`="' + keywords + '", ' +
										'`abilities`="' + abilities + '", ' +
										'`detailed`="' + detailed + '", ' +
										'`num`=' + number + ', ' +
										'`deadline`="' + deadline + '" ' +
										'where teacher="'+teacher+'" and title="' + title + '"');
						callback({saveSuccess: true});
					}
					else
					{
						callback({saveSuccess: false});
					}
				}
			});  
    },


/**
     * 项目信息页面的保存请求 页面url: '/assignmentForm'
     * 
     * @param {string} teacherId
     * 教师号
     *
     * @param {string} title
     * 项目名称
     *
     * @param {string} background
     * 背景
     * 
     * @param {string} introduction
     * 简介
     * 
     * @param {string} keywords
     * 关键词
     * 
     * @param {string} abilities
     * 能力要求
     * 
     * @param {string} detailed
     * 详细说明
     * 
     * @param {string} number
     * 可报名人数
     * 
     * @param {string} deadline
     * 截止时间
     *
     * @property {boolean} launchSuccess //property: return
     * 启动是否成功
     */

    assignmentFormLaunch: function(teacher, title, background, introduction,
        keywords, abilities, detailed,
         number, deadline, callback) {
			 console.log("lzr2: "+teacher+title);
			connection.query('select * from project where title="' + title + '" and teacher="' + teacher + '"', function (error, results, fields){
				if(results.length==0)
				{
					connection.query('select * from teacher where teacherid="' + teacher + '"', function (err, resul, fiel){
						var teachername="";
						if(resul.length>0)
							teachername=resul[0].lastname + resul[0].firstname;
						connection.query('insert into project(`teacher`,`teachername`,`title`,`background`,`introduction`,`keywords`,`abilities`,`detailed`,`num`,`status`,`deadline`) values(' +
										 '"' + teacher + '",' +
										 '"' + teachername + '",' +
										 '"' + title + '",' +
										 '"' + background+ '",' +
										 '"' + introduction + '",' +
										 '"' + keywords + '",' +
										 '"' + abilities + '",' +
										 '"' + detailed + '",' +
										 '' + number + ',' +
										 '"' + 'Enrolling 可报名' + '",' +
										 '"' + deadline + '")');
						callback({launchSuccess: true});
					});
				}
				else
				{
					if(results[0].status.indexOf("Editable")!=-1)
					{		
						connection.query('update project set `background`="' + background + '", ' +
										'`introduction`="' + introduction + '", ' +
										'`keywords`="' + keywords + '", ' +
										'`abilities`="' + abilities + '", ' +
										'`detailed`="' + detailed + '", ' +
										'`num`=' + number + ', ' +
										'`deadline`="' + deadline + '", ' +
										'`status`="' + 'Enrolling 可报名' + '" ' +
										'where teacher="'+teacher+'" and title="' + title + '"');
						callback({launchSuccess: true});
					}
					else
					{
						callback({launchSuccess: false});
					}
				}
			});
    },

/**
     * 项目信息页面的获取旧的信息请求 页面url: '/assignmentForm'
     * 
     * @param {string} teacherId
     * 教师号
     *
     * @param {string} title
     * 项目名称
     *
     * @param {string} background
     * 背景
     * 
     * @param {string} introduction
     * 简介
     * 
     * @param {string} keywords
     * 关键词
     * 
     * @param {string} abilities
     * 能力要求
     * 
     * @param {string} detailed
     * 详细说明
     * 
     * @param {string} number
     * 可报名人数
     * 
     * @param {string} deadline
     * 截止时间
     *
     */
	assignmentFormNew: function(teacher, callback) {
		callback({background: "",
				  introduction: "",
				  keywords: "",
				  abilities: "",
				  detailed: "",
				  number: "",
				  deadline: ""});	
    },
	
    assignmentFormGet: function(teacher, title, callback) {
        connection.query('select * from project where title="' + title + '" and teacher="' + teacher + '"', function (error, results, fields){
			if(results.length>0)
			{
				callback({title: title,
						  background: results[0].background,
						  introduction: results[0].introduction,
						  keywords: results[0].keywords.split(' '),
						  abilities: results[0].abilities,
						  detailed: results[0].detailed,
						  number: results[0].num.toString(),
						  deadline: results[0].deadline});
			}
			else
			{
				callback({title: "",
						  background: "",
						  introduction: "",
						  keywords: "",
						  abilities: "",
						  detailed: "",
						  number: "",
						  deadline: ""});
			}	
		});			
    }

}
