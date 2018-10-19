const express = require('express')
const app = express()
const port = 8080



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
//location for requiring js files for database connection
var requireLoc = "./pages_fake";


//loginRegisterData.js
var loginRegisterData = require(requireLoc+ "/loginRegisterData");

app.post('/loginRequestUrlEmail', function(sReq, sRes){
	
	loginRegisterData.emailLogin(sReq.body.email, sReq.body.password, function(result){
		sRes.send(result);
	});
	
	
    //sRes.send(loginRegisterData.emailLogin(sReq.body.email, sReq.body.password));
});

app.post('/loginRequestUrlTeacherId', function(sReq, sRes){
	loginRegisterData.teacherLogin(sReq.body.teacherId, sReq.body.password,function(result){
		sRes.send(result);
	});
});

app.post('/loginRequestUrlStudentId', function(sReq, sRes){
    loginRegisterData.studentLogin(sReq.body.studentId, sReq.body.password,function(result){
		sRes.send(result);
	});
});

app.get('/registerRequestUrl', function(sReq, sRes){
	console.log(sReq.query);
    var name = sReq.query.name;
    var university = sReq.query.university;
    var email = sReq.query.email;
    var password = sReq.query.password;
   loginRegisterData.register(name,university,email,password,function(result){
        sReq.session.user = {name: name}    //设置"全局变量"name. 此后可以根据这个区分用户.
		sRes.send(result);
	});
});

var teacherInfo = require(requireLoc + "/teacherInfo");

app.post('/teacherInfo/save', function(sReq, sRes) {
    sRes.send(teacherInfo.teacherInfoSave(sReq.body.lastName, sReq.body.firstName, sReq.body.userName,
        sReq.body.wechatPhone, sReq.body.email, sReq.body.perWebAddr, sReq.body.researchArea, sReq.body.researchResults, sReq.body.lab));
});

app.post('/teacherInfo/launch', function(sReq, sRes) {
    sRes.send(teacherInfo.teacherInfoLaunch(sReq.body.lastName, sReq.body.firstName, sReq.body.userName,
        sReq.body.wechatPhone, sReq.body.email, sReq.body.perWebAddr, sReq.body.researchArea, sReq.body.researchResults, sReq.body.lab));
});



server.listen(port, () => console.log(`Example app listening on port ${port}!`))