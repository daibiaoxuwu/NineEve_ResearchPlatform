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



app.get('(/|/register|/enroll)', (req, res) =>{
    var user = {};
    if (req.session && req.session.user) { user.name = req.session.user; }//TODO: what's this?
    res.render('index', {"user":JSON.stringify(user)});
})

//app.all('/(((teacher|student|assignment)(Info|View|Evaluate|EvaluateSuccess))|(enroll(Form|Status|Success|Accepted|AcceptedNotice))|main)', (req, res) => {
app.get(/^\/[^\/]*$/, (req, res) => {
    console.log('geturl');
    var user = {};
    if (req.session && req.session.user) {
        user = req.session.user;
        res.render('index', {"user":JSON.stringify(user)} );//只允许登陆过的用户进入.
    } else{ res.redirect("/");}//未登录的用户, 如果输入url强行访问此页面, 会被重定向回到首页.
})

var requireLoc = "./pages"; //location for requiring js files for database connection


//home.js
var home = require(requireLoc+ "/home");
var teacherInfo = require(requireLoc + "/teacherInfo");
var studentInfo = require(requireLoc + "/studentInfo");
var main = require(requireLoc + "/main");
var enroll = require(requireLoc + "/enroll");
var assignmentView = require(requireLoc + "/assignmentView");


app.get('/login/byEmail', function(sReq, sRes){
  if (sReq.query.email.length<200 && sReq.query.password.length<200) {
	   home.emailLogin(sReq.query.email, sReq.query.password, function(result){
          sReq.session.user = {id:"", email: sReq.query.email};
		      sRes.send(result);
	   });
  }
});

app.get('/login/byTeacherId', function(sReq, sRes){
  if (sReq.query.teacherId.length<200 && sReq.query.password.length<200) {
	   home.teacherLogin(sReq.query.teacherId, sReq.query.password,function(result){
          sReq.session.user = {id: sReq.query.teacherId, email:""};
		      sRes.send(result);
	   });
   }
});

app.get('/login/byStudentId', function(sReq, sRes){
  if (sReq.query.studentId.length<200 && sReq.query.password.length<200) {
    home.studentLogin(sReq.query.studentId, sReq.query.password,function(result){
        sReq.session.user = {id: sReq.query.studentId, email:""}
		sRes.send(result);
	  });
  }
});

app.get('/register/getUrl', function(sReq, sRes){
	console.log(sReq.query);
   home.register(sReq.query.name,sReq.query.university,sReq.query.email,sReq.query.password,function(result){
        sReq.session.user = {id:"", email: sReq.query.email}    //设置"全局变量"name. 此后可以根据这个区分用户.
		sRes.send(result);
	});
});


app.get('/teacherInfo/save', function(sReq, sRes) {
    console.log(sReq);
    console.log(sReq.query.lastName);
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
    console.log(sReq.query.lastName);
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


app.get('/main/get', function(sReq, sRes) {
    main.mainGet(sReq.session.user.name, function(isTeacher, msgList, myList, avaList){
        console.log({
            isTeacher: isTeacher,
            num1: parseInt(msgList.length / 3),
            msgList: msgList.slice(Math.min(sReq.query.currentPage1 * 3 - 3, msgList.length), Math.min(sReq.query.currentPage1 * 3, msgList.length)),
            num2: parseInt(myList.length / 3),
            myList: myList.slice(Math.min(sReq.query.currentPage2 * 3 - 3, myList.length), Math.min(sReq.query.currentPage2 * 3, myList.length)),
            num3: parseInt(avaList.length / 3),
            avaList: avaList.slice(Math.min(sReq.query.currentPage3 * 3 - 3, avaList.length), Math.min(sReq.query.currentPage3 * 3, avaList.length)),
            msglist2: msgList,
            myList2: myList,
            avalist2: avaList

        });
        sRes.send({
            isTeacher: isTeacher,
            num1: parseInt(msgList.length / 3) + 1,
            msgList: msgList.slice(Math.min(sReq.query.currentPage1 * 3 - 3, msgList.length), Math.min(sReq.query.currentPage1 * 3, msgList.length)),
            num2: parseInt(myList.length / 3) + 1,
            myList: myList.slice(Math.min(sReq.query.currentPage2 * 3 - 3, myList.length), Math.min(sReq.query.currentPage2 * 3, myList.length)),
            num3: parseInt(avaList.length / 3) + 1,
            avaList: avaList.slice(Math.min(sReq.query.currentPage3 * 3 - 3, avaList.length), Math.min(sReq.query.currentPage3 * 3, avaList.length))
        })
    })
});


app.get('/enroll/get', function(sReq, sRes) {
    enroll.enrollGet(sReq.query.title, function(item){
        sRes.send(item);
    })
})

app.get('/home/get', function(sReq, sRes) {
    home.homeGet(function(item){
        sRes.send(item);
    })
})

app.get('/assignmentView/get', function(sReq, sRes) {
    assignmentView.assignmentViewGet(function(item){
        sRes.send(item);
    })
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`))
