const express = require('express')
const app = express()
const port = 8080

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'newpass',
  database : 'A'
});

connection.connect();
global.connection=connection;

app.use(express.static('../frontend'))
var server = require('http').Server(app);
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '../../views');

var session = require('express-session');
var appSession = session({
    genid: function (req) {
        var v ="aaa" + Math.random();
        //console.info("cookieId " +v);
        return v;
    },
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {

	}
});
app.use(appSession);



app.get('(/|/register|/assignmentView)', (req, res) =>{
    var user = {};
    if (req.session && req.session.user) { user.name = req.session.user; }//TODO: what's this?
    res.render('index', {"user":JSON.stringify(user)});
})

app.get('/enroll', (req, res) => {
    var user = {};
    if (req.session && req.session.assignment) {
        user = req.session.user;
        res.render('index', {"user":JSON.stringify(user)} );//只允许登陆过的用户进�
    } else{res.redirect("/");}//未登录的用户, 如果输入url强行访问此页� 会被重定向回到首�
})

//app.all('/(((teacher|student|assignment)(Info|View|Evaluate|EvaluateSuccess))|(enroll(Form|Status|Success|Accepted|AcceptedNotice))|main)', (req, res) => {
app.get(/^\/[^\/]*$/, (req, res) => {
    var user = {};
    if (req.session && req.session.user) {
        user = req.session.user;
        res.render('index', {"user":JSON.stringify(user)} );//只允许登陆过的用户进�
    } else{ res.redirect("/");}//未登录的用户, 如果输入url强行访问此页� 会被重定向回到首�
})

var requireLoc = "./pages"; //location for requiring js files for database connection


//home.js
var home = require(requireLoc+ "/home");
var teacherInfo = require(requireLoc + "/teacherInfo");
var studentInfo = require(requireLoc + "/studentInfo");
var enrollForm = require(requireLoc + "/enrollForm");
var main = require(requireLoc + "/main");
var enroll = require(requireLoc + "/enroll");
var enrollStatus = require(requireLoc + "/enrollStatus");
var assignmentView = require(requireLoc + "/assignmentView");
var assignmentForm = require(requireLoc + "/assignmentForm");
var right = require(requireLoc + "/right");
var evaluate = require(requireLoc + "/evaluate");


app.get('/login/byEmail', function(sReq, sRes){
  if (sReq.query.email.length<200 && sReq.query.password.length<200) {
	   home.emailLogin(sReq.query.email, sReq.query.password, function(result){
        sReq.session.user = {id:"", email: sReq.query.email, isTeacher:false};
		sRes.send(result);
	});
  }
});

app.get('/login/byTeacherId', function(sReq, sRes){
  if (sReq.query.teacherId.length<200 && sReq.query.password.length<200) {
	   home.teacherLogin(sReq.query.teacherId, sReq.query.password,function(result){
        sReq.session.user = {id: sReq.query.teacherId, email:"", isTeacher:true};
		      sRes.send(result);
	   });
   }
});

app.get('/login/byStudentId', function(sReq, sRes){
  if (sReq.query.studentId.length<200 && sReq.query.password.length<200) {
    home.studentLogin(sReq.query.studentId, sReq.query.password,function(result){
        sReq.session.user = {id: sReq.query.studentId, email:"", isTeacher:false}   
		sRes.send(result);
	  });
  }
});

app.get('/register/getUrl', function(sReq, sRes){
	console.log(sReq.query);
  if (sReq.query.name.length<200 && sReq.query.university.length<200
    && sReq.query.email.length<200 && sReq.query.password.length<200) {
   home.register(sReq.query.name,sReq.query.university,sReq.query.email,sReq.query.password,function(result){
        sReq.session.user = {id:"", email: sReq.query.email, isTeacher:false}    //设置"全局变量"name. 此后可以根据这个区分用户.
		sRes.send(result);
	 });
  }
});


app.get('/teacherInfo/save', function(sReq, sRes) {
    //console.log(sReq);
    console.log(sReq.query.email);
    teacherInfo.teacherInfoSave(sReq.session.user.id, sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.researchArea, sReq.query.researchResults, sReq.query.lab, function(result){
			 sRes.send(result);
		 });
});

app.get('/teacherInfo/launch', function(sReq, sRes) {
    teacherInfo.teacherInfoLaunch(sReq.session.user.id, sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.researchArea, sReq.query.researchResults, sReq.query.lab, function(result){
			 sRes.send(result);
		 });
});

app.get('/teacherInfo/get', function(sReq, sRes) {
    teacherInfo.teacherInfoGet(sReq.session.user.id, function(result){
			 sRes.send(result);
		 });
});


app.get('/studentInfo/save', function(sReq, sRes) {
    console.log(sReq);
    console.log(sReq.query.selectedKey);
    studentInfo.studentInfoSave(sReq.session.user.id, sReq.session.user.email, sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.breIntr, sReq.query.grade, sReq.query.selectedLab, sReq.query.selectedKey, function(result){
			 sRes.send(result);
		 });
});

app.get('/studentInfo/launch', function(sReq, sRes) {
    studentInfo.studentInfoLaunch(sReq.session.user.id, sReq.session.user.email, sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.breIntr, sReq.query.grade, sReq.query.selectedLab, sReq.query.selectedKey, function(result){
			 sRes.send(result);
		 });
});

app.get('/studentInfo/get', function(sReq, sRes) {
    studentInfo.studentInfoGet(sReq.session.user.id, sReq.session.user.email, function(result){
			 sRes.send(result);
		 });
});



app.get('/enrollForm/save', function(sReq, sRes) {
    console.log(sReq);
    console.log(sReq.query.lastName);
    enrollForm.enrollFormSave(sReq.session.user.studentId, sReq.session.user.email, sReq.session.assignment.title, sReq.session.assignment.teacherId,  sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.selfIntr, sReq.query.reasonEnroll, sReq.query.award, function(result){
			 sRes.send(result);
		 });
});

app.get('/enrollForm/launch', function(sReq, sRes) {
    enrollForm.enrollFormLaunch(sReq.session.user.studentId, sReq.session.user.email, sReq.session.assignment.title, sReq.session.assignment.teacherId,  sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.selfIntr, sReq.query.reasonEnroll, sReq.query.award, function(result){
			 sRes.send(result);
		 });
});

app.get('/enrollForm/get', function(sReq, sRes) {
    enrollForm.enrollFormGet(sReq.session.user.studentId, sReq.session.user.email, sReq.session.assignment.title, sReq.session.assignment.teacherId, function(result){
			 sRes.send(result);
		 });
});
app.get('/enrollStatus/getDetails', function(sReq, sRes) {
    enrollForm.enrollFormGet(sReq.query.id, sReq.query.email, sReq.session.assignment.title, sReq.session.assignment.teacherId, function(result){
			 sRes.send(result);
		 });
});


app.get('/assignmentForm/save', function(sReq, sRes) {
    console.log(sReq);
    console.log(sReq.query.lastName);
    sReq.session.newAssignment={title: sReq.query.title, teacherId: sReq.session.user.id};
    assignmentForm.assignmentFormSave(sReq.session.user.id, sReq.query.title, sReq.query.background, sReq.query.introduction, sReq.query.keywords,
        sReq.query.abilities, sReq.query.detailed, sReq.query.number,
         sReq.query.deadline, function(result){
			 sRes.send(result);
		 });
});

app.get('/assignmentForm/launch', function(sReq, sRes) {
    sReq.session.newAssignment="";
    assignmentForm.assignmentFormLaunch(sReq.session.user.id, sReq.query.title, sReq.query.background, sReq.query.introduction, sReq.query.keywords,
        sReq.query.abilities, sReq.query.detailed, sReq.query.number,
         sReq.query.deadline, function(result){
			 sRes.send(result);
		 });
});

app.get('/assignmentForm/get', function(sReq, sRes) {
    if(sReq.session && sReq.session.newAssignment && sReq.session.newAssignment!=""){
    assignmentForm.assignmentFormGet(sReq.session.user.id, sReq.session.newAssignment.title, function(result){
			 sRes.send(result);
         });
        }
        else {
            assignmentForm.assignmentFormNew(sReq.session.user.id, function(result){
                sRes.send(result);
            });
        }
});


app.get('/main/get', function(sReq, sRes) {
    main.mainGet(sReq.session.user.id, sReq.session.user.email, sReq.session.user.isTeacher, function(msgList, myList, avaList){
        console.log({
            isTeacher: sReq.session.user.isTeacher,
            num1: parseInt((msgList.length-1) / 3)+1,
            msgList: msgList.slice(Math.min(sReq.query.currentPage1 * 3 - 3, msgList.length), Math.min(sReq.query.currentPage1 * 3, msgList.length)),
            num2: parseInt((myList.length-1) / 3)+1,
            myList: myList.slice(Math.min(sReq.query.currentPage2 * 3 - 3, myList.length), Math.min(sReq.query.currentPage2 * 3, myList.length)),
            num3: parseInt((avaList.length-1) / 3)+1,
            avaList: avaList.slice(Math.min(sReq.query.currentPage3 * 3 - 3, avaList.length), Math.min(sReq.query.currentPage3 * 3, avaList.length)),
            msglist2: msgList,
            myList2: myList,
            avalist2: avaList

        });
        sRes.send({
            isTeacher: sReq.session.user.isTeacher,
            num1: parseInt((msgList.length-1) / 3) + 1,
            msgList: msgList.slice(Math.min(sReq.query.currentPage1 * 3 - 3, msgList.length), Math.min(sReq.query.currentPage1 * 3, msgList.length)),
            num2: parseInt((myList.length-1) / 3) + 1,
            myList: myList.slice(Math.min(sReq.query.currentPage2 * 3 - 3, myList.length), Math.min(sReq.query.currentPage2 * 3, myList.length)),
            num3: parseInt((avaList.length-1) / 3) + 1,
            avaList: avaList.slice(Math.min(sReq.query.currentPage3 * 3 - 3, avaList.length), Math.min(sReq.query.currentPage3 * 3, avaList.length))
        })
    })
});




app.get('/enrollStatus/get', function(sReq, sRes) {
    enrollStatus.enrollStatusGet(sReq.session.user.id, sReq.session.assignment.title, function(list){
        console.log({
            num3: parseInt(list.length / 3),
            list: list.slice(Math.min(sReq.query.currentPage3 * 3 - 3, list.length), Math.min(sReq.query.currentPage3 * 3, list.length)),
            avalist2: list
        });
        sRes.send({
            num3: parseInt((list.length-1) / 3) + 1,
            list: list.slice(Math.min(sReq.query.currentPage3 * 3 - 3, list.length), Math.min(sReq.query.currentPage3 * 3, list.length))
        })
    })
});

app.get('/enrollStatus/accept', function(sReq, sRes) {
    enrollStatus.enrollStatusAccept(sReq.session.user.id, sReq.session.assignment.title, sReq.query.id, function(result){
        sRes.send(result);
    })
});
app.get('/enrollStatus/refuse', function(sReq, sRes) {
    enrollStatus.enrollStatusReject(sReq.session.user.id, sReq.session.assignment.title, sReq.query.id, function(result){
        sRes.send(result);
    })
});


app.get('/home/setAssignment', function(sReq, sRes) {
    enroll.enrollGet(sReq.query.title, sReq.query.teacherId, function(item){
        sReq.session.assignment = item;
        sRes.send(item);
    })
})

app.get('/home/setNewAssignment', function(sReq, sRes) {
    enroll.enrollGet(sReq.query.title, sReq.query.teacherId, function(item){
        sReq.session.newAssignment = item;
        sRes.send(item);
    })
})

//do not need database!
app.get('/enroll/get', function(sReq, sRes) {
        sRes.send(sReq.session.assignment);
})

app.get('/enroll/isTeacher', function(sReq, sRes) {
    if(sReq.session && sReq.session.user && sReq.session.user.isTeacher == false){
        sRes.send(false);
    } else{
        sRes.send(true);
    }
})


//do not need database!
app.get('/enroll/route', function(sReq, sRes) {
    if (sReq.session && sReq.session.user) {
    sRes.send('/enrollForm');}
        else{
    sRes.send('/');}
})

app.get('/home/get', function(sReq, sRes) {
    home.homeGet(function(avaList){
        sRes.send({
            num3: parseInt((avaList.length-1) / 3) + 1,
            avaList: avaList.slice(Math.min(sReq.query.currentPage3 * 3 - 3, avaList.length), Math.min(sReq.query.currentPage3 * 3, avaList.length))
        })
    })
})

app.get('/assignmentView/get', function(sReq, sRes) {
    assignmentView.assignmentViewGet(function(avaList){
        sRes.send({
            num: parseInt((avaList.length-1) / 3) + 1,
            avaList: avaList.slice(Math.min(sReq.query.currentPage * 3 - 3, avaList.length), Math.min(sReq.query.currentPage * 3, avaList.length))
        })
    })
})

app.get('/right/get', function(sReq, sRes) {
    if (sReq.session && sReq.session.user) {
        right.rightGet(sReq.session.user.id, sReq.session.user.email,sReq.session.user.isTeacher, function(item){
            sRes.send(item);
        })
    } else{
        sRes.send('/');
    }
})

app.get('/right/route', function(sReq, sRes) {
    enroll.enrollGet(sReq.query.title, function(item){
        sReq.session.assignment = item;
        console.log(item);
        if (sReq.session && sReq.session.user.isTeacher) {
        sRes.send('isTeacher');
        } else{
            sRes.send('isStudent');
        }
    })
})

app.get('/studentEvaluate/save', function(sReq, sRes) {
    evaluate.studentEvaluateSave(sReq.session.user.id, sReq.session.assignment.title, sReq.session.assignment.teacherId,  sReq.query.satis, sReq.query.learned, sReq.query.notlearned, function(item){
        sRes.send(item);
    })
})

app.get('/teacherEvaluate/save', function(sReq, sRes) {
    evaluate.teacherEvaluateSave(sReq.session.user.id, sReq.session.assignment.title, sReq.query.satis,  sReq.query.intro, sReq.query.reason, function(item){
        sRes.send(item);
    })
})

app.get('/studentEvaluate/get', function(sReq, sRes) {
    evaluate.studentEvaluateGet(sReq.session.user.id, sReq.session.assignment.title, sReq.session.assignment.teacherId, function(item){
        sRes.send(item);
    })
})

app.get('/teacherEvaluate/get', function(sReq, sRes) {
    evaluate.teacherEvaluateGet(sReq.session.user.id, sReq.session.assignment.title, function(item){
        sRes.send(item);
    })
})

//do not need database!
app.get('/app/logout', function(sReq, sRes) {
        sReq.session.destroy();
        sRes.end();
})


server.listen(port, () => console.log(`Example app listening on port ${port}!`))
