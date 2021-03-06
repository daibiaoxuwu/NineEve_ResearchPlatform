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
	enrollQuery: function(results, statu, i, callback){
		var that = this;
		if(i<0) {
			callback(statu);
			return;
		}
		console.log(results[i].filled);
		if(results[i].filled==1)
		{
			connection.query('select * from student where studentid="' + results[i].student + '"', function (err, resul, fie){
				console.log({id: results[i].student,
							text: resul[0].lastname + resul[0].firstname,
							department: "CST 计算机系",
							grade: resul[0].grade,
							success: results[0].success});
				statu.push({id: results[i].student,
							text: resul[0].lastname + resul[0].firstname,
							department: "CST 计算机系",
							grade: resul[0].grade,
							success: results[0].success});
				that.enrollQuery(results, statu, i-1, callback);
			});
		} else {
			this.enrollQuery(results,statu, i-1, callback);
		}
	},


    enrollStatusGet: function(teacherId, title, callback){
		var that = this;
        connection.query('select * from project where title="' + title + '" and teacher="' + teacherId + '" ', function (error1, results1, field1){
			if(results1[0].status=="Enrolling 可报名"){
			connection.query('select * from enrollform where title="' + title + '" and teacher="' + teacherId + '" and `success`!=2', function (error, results, field){
				var statu=[];
				console.log("lzr6"+teacherId+","+title);
				that.enrollQuery(results, statu, results.length-1, callback);
			});
		}else{
			connection.query('select * from enrollform where title="' + title + '" and teacher="' + teacherId + '" and `success`=0', function (error, results, field){
				var statu=[];
				console.log("lzr6"+teacherId+","+title);
				that.enrollQuery(results, statu, results.length-1, callback);
			});
		}})
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
		connection.query('select * from enrollform where student="' + studentId + '" and title="' + title + '" and teacher="' + teacherId + '" and `success`=0', function (error, results, fields){
			if(results.length>0)
			{
				connection.query('update enrollform set `success`=1,`teacherread`=1,`studentread`=0 where student="' + studentId + '" and title="' + title + '" and teacher="' + teacherId + '"');
				connection.query('select * from student where studentid="' + studentId + '"', function (err, resul, fiel){
					connection.query('select * from teacher where teacherid="' + teacherId + '"', function (er, resu, fie){
						if(resul.length>0 && resu.length>0)
							callback({acceptSuccess: true,
									clientEmail: resul[0].email,
									firstName: resul[0].firstname,
									lastName: resul[0].lastname,
									firstNameTeacher: resu[0].firstname,
									lastNameTeacher: resu[0].lastname,
									teacherEmail: resu[0].email
									});
						else
							callback({acceptSuccess: false,
									clientEmail: "",
									firstName: "",
									lastName: "",
									firstNameTeacher: "",
									lastNameTeacher: "",
									teacherEmail: ""
									});
					});
				});
			}
			else
			{
				callback({acceptSuccess: false,
						  clientEmail: "",
						  firstName: "",
						  lastName: "",
						  firstNameTeacher: "",
						  lastNameTeacher: "",
						  teacherEmail: ""
						});
			}
		});
    },
	
	enrollStatusReject: function(teacherId, title, studentId, callback){
		connection.query('select * from enrollform where student="' + studentId + '" and title="' + title + '" and teacher="' + teacherId + '" and `success`=0', function (error, results, fields){
			if(results.length>0)
			{
				connection.query('update enrollform set `success`=2,`teacherread`=1,`studentread`=0 where student="' + studentId + '" and title="' + title + '" and teacher="' + teacherId + '"');
				connection.query('select * from student where studentid="' + studentId + '"', function (err, resul, fiel){
					connection.query('select * from teacher where teacherid="' + teacherId + '"', function (er, resu, fie){
						if(resul.length>0 && resu.length>0)
							callback({acceptSuccess: true,
									clientEmail: resul[0].email,
									firstName: resul[0].firstname,
									lastName: resul[0].lastname,
									firstNameTeacher: resu[0].firstname,
									lastNameTeacher: resu[0].lastname,
									teacherEmail: resu[0].email
									});
						else
							callback({acceptSuccess: false,
									clientEmail: "",
									firstName: "",
									lastName: "",
									firstNameTeacher: "",
									lastNameTeacher: "",
									teacherEmail: ""
									});
					});
				});
			}
			else
			{
				callback({acceptSuccess: false,
						  clientEmail: "",
						  firstName: "",
						  lastName: "",
						  firstNameTeacher: "",
						  lastNameTeacher: "",
						  teacherEmail: ""
						});
			}
		});
	},
	
    enrollStatusLaunch: function(teacher, title, callback){
		connection.query('select * from project where title="' + title + '" and teacher="' + teacher + '"', function (error, results, fields){
			if(results.length>0)
			{
				connection.query('update project set `status`="Launched 已启动" ' +
										'where teacher="'+teacher+'" and title="' + title + '"');
				connection.query('update enrollform set `success`=2, `teacherread`=1, `studentread`=0 ' +
										'where teacher="'+teacher+'" and title="' + title + '" and `success`=0');
				callback({acceptSuccess: true})
			}
			else
			{
				callback({acceptSuccess: false});
			}
		});
	}
}
