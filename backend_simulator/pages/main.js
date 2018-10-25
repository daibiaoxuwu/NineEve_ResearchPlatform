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
     * 所有科研任务列表i
     */

    mainGet: function(id, email, isTeacher, callback){
		console.log("lzr5"+id);
		console.log("lzr6"+email);
		console.log("lzr7"+isTeacher);
		connection.query('select * from project ', function (error, results, fields){
			var studentid=id;
			var teacherid=id;
			if(!studentid||studentid=="")
				studentid=email;
			var message=[];
			var mylist=[];
			var avalist=[];
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
					for(var i in resul)
						message.push({title: resul[i].title,
									  teacherId: resul[i].teacher,
								      status: "Enrolling 可报名"});
					callback(message,mylist,avalist);
				});
			}
			else
			{
				connection.query('select * from enrollform where student="' + studentid + '"', function (err, resul, fiel){
					for(var i in results)
					{
						if	(results[i].status.indexOf("Enroll")!=-1)
							avalist.push({title: results[i].title,
										  teacherId: results[i].teacher,
										  status: results[i].status});
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
					callback(message,mylist,avalist);
				});	
			}				
					
		});
    }
}
