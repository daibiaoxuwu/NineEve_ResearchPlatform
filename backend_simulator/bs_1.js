const express = require('express')
const app = express()
const port = 80


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

var bodyParser     =        require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendfile("index.html"))



//location for requiring js files for database connection
var requireLoc = "./pages";app.use(express.static('../frontend'))
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



app.get('/', (req, res) =>{
 var user = {};
if (req.session && req.session.user) {
	user.name = req.session.user;
}
res.render('index', {"user":JSON.stringify(user)} );
} )

app.get('/register', (req, res) => 
{
var user = {};
if (req.session && req.session.user) {
user.name = req.session.user;
}
res.render('index', {"user":JSON.stringify(user)} );
} )

app.get('/teacherInfo', (req, res) => 
{
var user = {};
if (req.session && req.session.user) {
user = req.session.user;
res.render('index', {"user":JSON.stringify(user)} );//只允许登陆过的用户进入.
} else{
res.redirect("/");//未登录的用户, 如果输入url强行访问此页面, 会被重定向回到首页.
}
} )

app.get('/studentInfo', (req, res) => {
    var user = {};
    if (req.session && req.session.user) {
        user = req.session.user;
        res.render('index', {"user":JSON.stringify(user)} );//只允许登陆过的用户进入.
    } else{ res.redirect("/");}//未登录的用户, 如果输入url强行访问此页面, 会被重定向回到首页.
})

app.get('/main', (req, res) => {
    var user = {};
    if (req.session && req.session.user) {
        user = req.session.user;
        res.render('index', {"user":JSON.stringify(user)} );//只允许登陆过的用户进入.
    } else{ res.redirect("/");}//未登录的用户, 如果输入url强行访问此页面, 会被重定向回到首页.
})
//location for requiring js files for database connection
var requireLoc = "./pages";


//loginRegisterData.js
var loginRegisterData = require(requireLoc+ "/loginRegisterData");

app.get('/login/byEmail', function(sReq, sRes){
	
	loginRegisterData.emailLogin(sReq.query.email, sReq.query.password, function(result){
		sRes.send(result);
	});
	
	
    //sRes.send(loginRegisterData.emailLogin(sReq.query.email, sReq.query.password));
});

app.get('/login/byTeacherId', function(sReq, sRes){
	console.log(sReq.query.teacherId,sReq.query.password);
	loginRegisterData.teacherLogin(sReq.query.teacherId, sReq.query.password,function(result){
		sRes.send(result);
	});
});

app.get('/login/byStudentId', function(sReq, sRes){
    loginRegisterData.studentLogin(sReq.query.studentId, sReq.query.password,function(result){
		sRes.send(result);
	});
});

app.get('/register/getUrl', function(sReq, sRes){
	console.log(sReq.query);
    var name = sReq.query.name;
    var university = sReq.query.university;
    var email = sReq.query.email;
    var password = sReq.query.password;
   loginRegisterData.register(name,university,email,password,function(result){
        sReq.session.user = {name: email}    //设置"全局变量"name. 此后可以根据这个区分用户.
		sRes.send(result);
	});
});

var teacherInfo = require(requireLoc + "/teacherInfo");

app.get('/teacherInfo/save', function(sReq, sRes) {
    console.log(sReq.query.lastName);
    teacherInfo.teacherInfoSave(sReq.session.user.name, sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.researchArea, sReq.query.researchResults, sReq.query.lab,function(result){
			 sRes.send(result);
		 });
});

app.get('/teacherInfo/launch', function(sReq, sRes) {
    teacherInfo.teacherInfoLaunch(sReq.session.user.name, sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.researchArea, sReq.query.researchResults, sReq.query.lab,function(result){
			 sRes.send(result);
		 });
});

app.get('/teacherInfo/get', function(sReq, sRes) {
    teacherInfo.teacherInfoGet(sReq.session.user.name,function(result){
			 sRes.send(result);
		 });
});

var studentInfo = require(requireLoc + "/studentInfo");
var main = require(requireLoc + "/main");

app.get('/studentInfo/save', function(sReq, sRes) {
    console.log(sReq);
    console.log(sReq.query.lastName);
    studentInfo.studentInfoSave(sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.breIntr, sReq.query.lab, sReq.query.selectedKey, function(result){
			 sRes.send(result);
		 });
});

app.get('/studentInfo/launch', function(sReq, sRes) {
    studentInfo.studentInfoLaunch(sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.breIntr, sReq.query.lab, sReq.query.selectedKey, function(result){
			 sRes.send(result);
		 });
});

app.get('/studentInfo/get', function(sReq, sRes) {
    studentInfo.studentInfoGet(sReq.session.user.name, function(result){
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
            myList: myList,
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
