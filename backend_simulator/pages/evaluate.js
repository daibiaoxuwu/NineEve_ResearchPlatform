module.exports = {

    studentEvaluateSave: function(id, email, title, teacherId, satis, learned, notlearned, callback){
		var student = id;
		if(!student || student == "")
			student = email;
		connection.query('insert into stueva(`student`,`teacher`,`titie`,`satis`,`learned`,`notlearned`) values(' +
						 '"' + student + '",' +
						 '"' + teacherId + '",' +
						 '"' + title + '",' +
						 '"' + satis + '",' +
						 '"' + learned + '",' +
						 '"' + notlearned + '")');
        callback({saveSuccess: true});
    },
    teacherEvaluateSave: function(teacherId, title, satis, intro, reason, callback){
				connection.query('insert into teaeva(`title`,`teacher`,`satis`,`intro`,`reason`) values(' +
						 '"' + title + '",' +
						 '"' + teacherId + '",' +
						 '"' + satis + '",' +
						 '"' + intro + '",' +
						 '"' + reason + '")');
        callback({saveSuccess: true});
    },
    
    studentEvaluateGet: function(id, email, title, teacherId,  callback){
		var student = id;
		if(!student || student == "")
			student = email;
		connection.query('select * from stueva where student="' + student + '" and teacher="' + teacherId + '" and title="' + title + '"', function (error, results, field){
			if(results.length>0)
				callback({satis: results[0].satis,
						  learned: results[0].learned,
						  notlearned: results[0].notlearned});
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