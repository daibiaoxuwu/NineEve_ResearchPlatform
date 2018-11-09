module.exports = {
    /**
     * 学生请求页面的保存请求 页面url: '/main'
     * 学生通过邮箱登陆
     * 
     * @param {string} id
     * 学生的学号 如果为"",用邮箱
     * @param {string} email
     * 学生的邮箱
     *
     * @property {boolean} isTeacher
     * 是否为老师(学生和老师公用个人主页)
     * 
     * @property {Array} msgList 
     * 学生的新消息列表
     * 
     * @property {Array} myList 
     * 学生的科研任务(已经报名, 或者已经录取等)列表
     * 
     * @property {Array} avaList 
     * 所有科研任务列表
     * @property {Array} intList 
     * 订阅的科研任务列表
     */
	getIntList: function(message, mylist, avalist, i, j, keys, proj, intlist, callback) {
		var that = this;
		if(i == keys.length)
			callback(message, mylist, avalist, intlist);
		else
		{
			var projects = proj;
			if(j == 0)
			{
				connection.query('select * from prokey where `key`="' + keys[i].key + '"', function (error, results, fields){
					projects = results;
					if(j == projects.length)
						that.getIntList(message, mylist, avalist, i+1, 0, keys, projects, intlist, callback);
					else
					{
						var rep = 1;
						for(var k in intlist)
						{
							if((intlist[k].title == projects[j].title) && (intlist[k].teacherId == projects[j].teacher))
								rep = 0;
						}
						if(rep == 1)
						{
							connection.query('select * from project where `title`="' + projects[j].title + '" and `teacher`="' + projects[j].teacher + '"', function (err, resul, fiel){
								console.log("zz"+resul);
									intlist.push({title: resul[0].title,
												  teacherId: resul[0].teacher,
												  status: resul[0].status});
								that.getIntList(message, mylist, avalist, i, j+1, keys, projects, intlist, callback);
							});
						}
						else
							that.getIntList(message, mylist, avalist, i, j+1, keys, projects, intlist, callback);
					}
				});
			}
			else
			{
				if(j == projects.length)
					that.getIntList(message, mylist, avalist, i+1, 0, keys, projects, intlist, callback);
				else
				{
					var rep = 1;
					for(var k in intlist)
					{
						if((intlist[k].title == projects[j].title) && (intlist[k].teacherId == projects[j].teacher))
							rep = 0;
					}
					if(rep == 1)
					{
						connection.query('select * from project where `title`="' + projects[j].title + '" and `teacher`="' + projects[j].teacher + '"', function (err, resul, fiel){
							console.log("zz"+resul);
								intlist.push({title: resul[0].title,
											  teacherId: resul[0].teacher,
											  status: resul[0].status});
							that.getIntList(message, mylist, avalist, i, j+1, keys, projects, intlist, callback);
						});
					}
					else
						that.getIntList(message, mylist, avalist, i, j+1, keys, projects, intlist, callback);
				}
			}
		}
	},		


    mainGet: function(id, email, isTeacher, callback){
		console.log("lzr5"+id);
		console.log("lzr6"+email);
		console.log("lzr7"+isTeacher);
		var that = this;
		connection.query('select * from project ', function (error, results, fields){
			var studentid=id;
			var teacherid=id;
			if(!studentid||studentid=="")
				studentid=email;
			var message=[];
			var mylist=[];
			var avalist=[];
			var intlist=[];
			if(isTeacher)
			{
				connection.query('select * from enrollform where teacherread=0 and teacher="' + teacherid + '" and `success`=0', function (err, resul, fiel){
					for(var i in results)
					{
						if(results[i].teacher==teacherid)
							mylist.push({title: results[i].title,
										 teacherId: results[i].teacher,
										 status: results[i].status});
						avalist.push({title: results[i].title,
									  teacherId: results[i].teacher,
									  status: results[i].status});
					}
					for(var j in resul)
						message.push({title: resul[j].title,
									  teacherId: resul[j].teacher,
								      status: "Enrolling 可报名"});
					callback(message,mylist,avalist,intlist);
				});
			}
			else
			{
				connection.query('select * from enrollform where student="' + studentid + '"', function (err, resul, fiel){
					for(var k in results)
					{
						if	(results[k].status.indexOf("Enroll")!=-1)
							avalist.push({title: results[k].title,
										  teacherId: results[k].teacher,
										  status: results[k].status});
					}
					for(var i in resul)
					{
						var st;
						for(var j in results){
							if(results[j].title == resul[i].title && results[j].teacher == resul[i].teacher){
								st=results[j].status;
							}
						}
						var realst=st;
						if(resul[i].success==1 && st=="Enrolling 可报名")
							st='Passed 已通过';
						if(resul[i].success==2)
							st='Rejected 已拒绝';
						if(resul[i].studentread==0){
							message.push({title: resul[i].title,
										  teacherId: resul[i].teacher,
										  status: st});
						}
						mylist.push({title: resul[i].title,
									 teacherId: resul[i].teacher,
									 status: realst});
					}
					//connection.query('select * from `stukey` where student="' + studentid + '"', function (er, resu, fie){
					//	that.getIntList(message, mylist, avalist, 0, 0, resu, intlist, intlist, callback);
					//});
					connection.query('select * from (stukey inner join prokey on stukey.key = prokey.key) join project on project.title = prokey.title and project.teacher = prokey.teacher where stukey.student = "' + studentid + '"',function (er, resu, fie){
						for(var x in resu)
							intlist.push({title: resu[x].title,
								teacherId: resu[x].teacher,
								status: resu[x].status});
						callback(message, mylist, avalist, intlist);
					});
				});	
			}				
					
		});
    },
	
    search: function(search, callback){
		console.log(search);
		connection.query('select * from `project` where `title` like "%' + search + '%"', function (error, results, fields){
			connection.query('select * from `project` where `title` not like "%' + search + '%" and `introduction` like "%' + search + '%"', function (err, resul, fiel){
				var ans=[];
				for(var i in results)
					ans.push({title: results[i].title,
							  teacherId: results[i].teacher,
							  status: results[i].status});
				for(var j in resul)
					ans.push({title: resul[j].title,
							  teacherId: resul[j].teacher,
							  status: resul[j].status});
				callback(ans);
			});
		});
    }
}
