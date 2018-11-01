module.exports = {

    studentEvaluateSave: function(id, title, teacherId, satis, learned, notlearned, callback){
        callback({saveSuccess: true});
    },
    teacherEvaluateSave: function(teacherId, title, satis, intro, reason, callback){
        callback({saveSuccess: true});
    },
    
    studentEvaluateGet: function(id, title, teacherId,  callback){
        callback({satis: "1", learned: "2", notlearned:"3"});
    },
    teacherEvaluateGet: function(teacherId, title, callback){
        callback({satis: "1", intro: "2", reason:"3"});
    }
}