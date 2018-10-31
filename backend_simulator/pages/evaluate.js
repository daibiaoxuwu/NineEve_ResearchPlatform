module.exports = {

    studentEvaluateSave: function(id, email, title, teacher, satis, learned, notlearned, callback){
		var student = id;
		if(!student || student == "")
			student = email;
		connection.query('insert into stueva(`student`,`teacher`,`title`,`satis`,`learned`,`notlearned`) values(' +
						 '"' + student + '",' +
						 '"' + teacher + '",' +
						 '"' + title + '",' +
						 '"' + satis + '",' +
						 '"' + learned + '",' +
						 '"' + notlearned + '")');
		connection.query('select * from project where title="' + title + '" and teacher="' + teacher + '"', function (error, results, fields){
			if(results.length>0)
			{
				connection.query('update project set `status`="Evaluated 学生已评价" ' +
										'where teacher="'+teacher+'" and title="' + title + '"');
				connection.query('update enrollform set `teacherread`=0,`studentread`=1 ' +
										'where teacher="'+teacher+'" and title="' + title + '" and student="' + student +'" ');
			}
        callback({saveSuccess: true});
		});
    },
    teacherEvaluateSave: function(teacher, title, satis, intro, reason, callback){
				connection.query('insert into teaeva(`title`,`teacher`,`satis`,`intro`,`reason`) values(' +
						 '"' + title + '",' +
						 '"' + teacher + '",' +
						 '"' + satis + '",' +
						 '"' + intro + '",' +
						 '"' + reason + '")');
		connection.query('select * from project where title="' + title + '" and teacher="' + teacher + '"', function (error, results, fields){
			if(results.length>0)
			{
				connection.query('update project set `status`="Ended 已结题" ' +
										'where teacher="'+teacher+'" and title="' + title + '"');
				// connection.query('update enrollform set `teacherread`=0,`studentread`=1 ' +
										// 'where teacher="'+teacher+'" and title="' + title + '" and student="' + student +'" ');
			}
				callback({saveSuccess: true});
});
    },
    
    studentEvaluateGet: function(title, teacherId,  callback){
		connection.query('select * from stueva where teacher="' + teacherId + '" and title="' + title + '"', function (error, results, field){
			if(results.length>0)
			{
				var result = [];	
				for(var i in results){
				result.push({satis: results[i].satis,
						  learned: results[i].learned,
						  notlearned: results[i].notlearned});
				}
				callback(result);
			}
			else
				callback('');	
		});
    },
    teacherEvaluateGet: function(teacherId, title, callback){
		connection.query('select * from teaeva where teacher="' + teacherId + '" and title="' + title + '"', function (error, results, field){
			if(results.length>0)
				callback({satis: results[0].satis,
						  intro: results[0].intro,
						  reason: results[0].reason});
			else
				callback('');	
		});
    }
}