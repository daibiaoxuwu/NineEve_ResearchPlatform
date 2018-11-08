const express = require('express')
const app = express()
const port = 80

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',//'b.NineEve.secoder.local',
  port     : '3306',
  user     : 'root',//'lzr',
  password : 'newpass',
  database : 'A'
});

connection.connect();
global.connection=connection;
var svgCaptcha = require('svg-captcha');

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
    } else{res.redirect("/");}//未登录的用户, 如果输入url强行访问此页�会被重定向回到首�
})

//app.all('/(((teacher|student|assignment)(Info|View|Evaluate|EvaluateSuccess))|(enroll(Form|Status|Success|Accepted|AcceptedNotice))|main)', (req, res) => {
app.get(/^\/[^\/]*$/, (req, res) => {
    var user = {};
    if (req.session && req.session.user) {
        user = req.session.user;
        res.render('index', {"user":JSON.stringify(user)} );//只允许登陆过的用户进�
    } else{ res.redirect("/");}//未登录的用户, 如果输入url强行访问此页�会被重定向回到首�
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
var email_js = require(requireLoc + "/email");

// app.get('/api/getCaptcha', function(req, res) {
//     var captcha = svgCaptcha.create({
//         // 翻转颜色
//         inverse: false,
//         // 字体大小
//         fontSize: 36,
//         // 噪声线条数
//         noise: 2,
//         // 宽度
//         width: 80,
//         // 高度
//         height: 30,
//     });
//     // 保存到session,忽略大小写
//     req.session = captcha.text.toLowerCase();
//     console.log(req.session); //0xtg 生成的验证码
//     //保存到cookie 方便前端调用验证
//     res.cookie('captcha', req.session);
//     res.setHeader('Content-Type', 'image/svg+xml');
//     res.write(String(captcha.data));
//     res.end();
// })

app.get('/login/byEmail', function(sReq, sRes){
  if (sReq.query.email.length<200 && sReq.query.password.length<200) {
	   home.emailLogin(sReq.query.email, sReq.query.password, function(result){
        sReq.session.user = {id:"", email: sReq.query.email, isTeacher:false};
        sRes.send({loginSuccess: result.loginSuccess, usernameNotFound: result.usernameNotFound, infoFinished: result.infoFinished, codeError: (sReq.session.captcha != sReq.query.code)});
	});
  }
});

app.get('/login/byTeacherId', function(sReq, sRes){
  if (sReq.query.teacherId.length<200 && sReq.query.password.length<200) {
	   home.teacherLogin(sReq.query.teacherId, sReq.query.password,function(result){
        sReq.session.user = {id: sReq.query.teacherId, email:"", isTeacher:true};
        sRes.send({loginSuccess: result.loginSuccess, usernameNotFound: result.usernameNotFound, infoFinished: result.infoFinished, codeError: (sReq.session.captcha != sReq.query.code)});
	   });
   }
});

app.get('/register/getCaptcha', function(sReq, sRes){
    if (sReq.query.email == null) sReq.query.email = "";

    if (sReq.query.email.length > 200) return;

    var isEmail = (new RegExp("@")).test(sReq.query.email);
    var isInUniv = (new RegExp("edu\.cn$")).test(sReq.query.email);
    if (!isEmail || !isInUniv) {
      return;
    }

    if (sReq.query.email.length<200) {
      email_js.sendEmail({clientEmail: sReq.query.email}, function(result){
		      sRes.send(result);
	   });
    }
});

app.get('/login/byStudentId', function(sReq, sRes){
  if (sReq.query.studentId.length<200 && sReq.query.password.length<200) {
    home.studentLogin(sReq.query.studentId, sReq.query.password,function(result){
        sReq.session.user = {id: sReq.query.studentId, email:"", isTeacher:false}
        sRes.send({loginSuccess: result.loginSuccess, usernameNotFound: result.usernameNotFound, infoFinished: result.infoFinished, codeError: (sReq.session.captcha != sReq.query.code)});
	  });
  }
});

app.get('/register/getUrl', function(sReq, sRes){
    console.log(sReq.query);

    if (sReq.query.name == null) sReq.query.name = "";
    if (sReq.query.university == null) sReq.query.university = "";
    if (sReq.query.email == null) sReq.query.email = "";
    if (sReq.query.password == null) sReq.query.password = "";
    if (sReq.query.captcha == null) sReq.query.captcha = "";

    var isEmail = (new RegExp("@")).test(sReq.query.email);
    var isInUniv = (new RegExp("edu\.cn$")).test(sReq.query.email);
    if (!isEmail || !isInUniv) {
      return;
    }

    if (sReq.query.name.length<200 && sReq.query.university.length<200
      && sReq.query.email.length<200 && sReq.query.password.length<200 && sReq.query.captcha.length<20) {
      home.register(sReq.query.name,sReq.query.university,sReq.query.email,sReq.query.password,function(result){
        sReq.session.user = {id:"", email: sReq.query.email, isTeacher:false}    //设置"全局变量"name. 此后可以根据这个区分用户.
        sRes.send(result);
      });
    }
});


app.get('/teacherInfo/save', function(sReq, sRes) {
    //console.log(sReq);
    if (sReq.query.lastName == null) sReq.query.lastName = "";
    if (sReq.query.firstName == null) sReq.query.firstName = "";
    if (sReq.query.username == null) sReq.query.username = "";
    if (sReq.query.wechatPhone == null) sReq.query.wechatPhone = "";
    if (sReq.query.email == null) sReq.query.email = "";
    if (sReq.query.perWebAddr == null) sReq.query.perWebAddr = "";
    if (sReq.query.researchArea == null) sReq.query.researchArea = "";
    if (sReq.query.researchResults == null) sReq.query.researchResults = "";
    if (sReq.query.lab == null || (sReq.query.lab!=0&&sReq.query.lab!=1
      &&sReq.query.lab!=2&&sReq.query.lab!=3&&sReq.query.lab!=4))
      sReq.query.lab = -1;

    if (sReq.query.lastName.length>20 || sReq.query.firstName.length>20 || sReq.query.username.length>200
      || sReq.query.wechatPhone.length>200 || sReq.query.email.length>200 || sReq.query.perWebAddr.length>200
      || sReq.query.researchArea.length>2000 || sReq.query.researchResults.length>2000) {
        return;
      }

      var hasQuotationMarks1 = (new RegExp("\"")).test(sReq.query.lastName)
      || (new RegExp("\'")).test(sReq.query.lastName);
      var hasQuotationMarks2 = (new RegExp("\"")).test(sReq.query.firstName)
      || (new RegExp("\'")).test(sReq.query.firstName);
      var hasQuotationMarks3 = (new RegExp("\"")).test(sReq.query.username)
      || (new RegExp("\'")).test(sReq.query.username);
      var hasQuotationMarks4 = (new RegExp("\"")).test(sReq.query.wechatPhone)
      || (new RegExp("\'")).test(sReq.query.wechatPhone);
      var hasQuotationMarks5 = (new RegExp("\"")).test(sReq.query.email)
      || (new RegExp("\'")).test(sReq.query.email);
      var hasQuotationMarks6 = (new RegExp("\"")).test(sReq.query.perWebAddr)
      || (new RegExp("\'")).test(sReq.query.perWebAddr);
      var hasQuotationMarks7 = (new RegExp("\"")).test(sReq.query.researchArea)
      || (new RegExp("\'")).test(sReq.query.researchArea);
      var hasQuotationMarks8 = (new RegExp("\"")).test(sReq.query.researchResults)
      || (new RegExp("\'")).test(sReq.query.researchResults);
      if (hasQuotationMarks1 || hasQuotationMarks2 || hasQuotationMarks3
        || hasQuotationMarks4 || hasQuotationMarks5 || hasQuotationMarks6
        || hasQuotationMarks7 || hasQuotationMarks8) {
          return;
        }

      var isEmail = (new RegExp("@")).test(sReq.query.email);
      var isInUniv = (new RegExp("edu\.cn$")).test(sReq.query.email);
      if (!isEmail || !isInUniv) {
        return;
      }

    teacherInfo.teacherInfoSave(sReq.session.user.id, sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.researchArea, sReq.query.researchResults, sReq.query.lab, function(result){
			 sRes.send(result);
		 });
});

app.get('/teacherInfo/launch', function(sReq, sRes) {
    if (sReq.query.lastName == null) sReq.query.lastName = "";
    if (sReq.query.firstName == null) sReq.query.firstName = "";
    if (sReq.query.username == null) sReq.query.username = "";
    if (sReq.query.wechatPhone == null) sReq.query.wechatPhone = "";
    if (sReq.query.email == null) sReq.query.email = "";
    if (sReq.query.perWebAddr == null) sReq.query.perWebAddr = "";
    if (sReq.query.researchArea == null) sReq.query.researchArea = "";
    if (sReq.query.researchResults == null) sReq.query.researchResults = "";
    if (sReq.query.lab == null || (sReq.query.lab!=0&&sReq.query.lab!=1
      &&sReq.query.lab!=2&&sReq.query.lab!=3&&sReq.query.lab!=4))
      sReq.query.lab = -1;

    if (sReq.query.lastName == "" || sReq.query.firstName == "" || sReq.query.username == ""
     || sReq.query.wechatPhone == "" || sReq.query.email == "" || sReq.query.researchArea == ""
     || sReq.query.researchResults == "" || sReq.query.lab == -1) {
      return;
    }

    if (sReq.query.lastName.length>20 || sReq.query.firstName.length>20 || sReq.query.username.length>200
      || sReq.query.wechatPhone.length>200 || sReq.query.email.length>200 || sReq.query.perWebAddr.length>200
      || sReq.query.researchArea.length>2000 || sReq.query.researchResults.length>2000) {
        return;
    }

    var hasQuotationMarks1 = (new RegExp("\"")).test(sReq.query.lastName)
    || (new RegExp("\'")).test(sReq.query.lastName);
    var hasQuotationMarks2 = (new RegExp("\"")).test(sReq.query.firstName)
    || (new RegExp("\'")).test(sReq.query.firstName);
    var hasQuotationMarks3 = (new RegExp("\"")).test(sReq.query.username)
    || (new RegExp("\'")).test(sReq.query.username);
    var hasQuotationMarks4 = (new RegExp("\"")).test(sReq.query.wechatPhone)
    || (new RegExp("\'")).test(sReq.query.wechatPhone);
    var hasQuotationMarks5 = (new RegExp("\"")).test(sReq.query.email)
    || (new RegExp("\'")).test(sReq.query.email);
    var hasQuotationMarks6 = (new RegExp("\"")).test(sReq.query.perWebAddr)
    || (new RegExp("\'")).test(sReq.query.perWebAddr);
    var hasQuotationMarks7 = (new RegExp("\"")).test(sReq.query.researchArea)
    || (new RegExp("\'")).test(sReq.query.researchArea);
    var hasQuotationMarks8 = (new RegExp("\"")).test(sReq.query.researchResults)
    || (new RegExp("\'")).test(sReq.query.researchResults);
    if (hasQuotationMarks1 || hasQuotationMarks2 || hasQuotationMarks3
      || hasQuotationMarks4 || hasQuotationMarks5 || hasQuotationMarks6
      || hasQuotationMarks7 || hasQuotationMarks8) {
        return;
      }

    var isEmail = (new RegExp("@")).test(sReq.query.email);
    var isInUniv = (new RegExp("edu\.cn$")).test(sReq.query.email);
    if (!isEmail || !isInUniv) {
      return;
    }

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
app.get('/teacherView/get', function(sReq, sRes) {
    teacherInfo.teacherInfoGet(sReq.session.assignment.teacherId, function(result){
			 sRes.send(result);
		 });
});

app.get('/studentInfo/save', function(sReq, sRes) {
    console.log(sReq);
    console.log(sReq.query.selectedKey);

    if (sReq.query.lastName == null) sReq.query.lastName = "";
    if (sReq.query.firstName == null) sReq.query.firstName = "";
    if (sReq.query.username == null) sReq.query.username = "";
    if (sReq.query.wechatPhone == null) sReq.query.wechatPhone = "";
    if (sReq.query.email == null) sReq.query.email = "";
    if (sReq.query.perWebAddr == null) sReq.query.perWebAddr = "";
    if (sReq.query.breIntr == null) sReq.query.breIntr = "";
    if (sReq.query.grade == null || (sReq.query.grade!="Freshman 大一"&&
      sReq.query.grade!="Sophomore 大二"&&sReq.query.grade!="Junior 大三"&&sReq.query.grade!="Senior 大四"))
      sReq.query.grade = "Please Select 请选择";

    if (sReq.query.lastName.length>20 || sReq.query.firstName.length>20 || sReq.query.username.length>200
      || sReq.query.wechatPhone.length>200 || sReq.query.email.length>200 || sReq.query.perWebAddr.length>200
      || sReq.query.breIntr.length>2000 || sReq.query.grade.length>50) {
      return;
    }

    var hasQuotationMarks1 = (new RegExp("\"")).test(sReq.query.lastName)
    || (new RegExp("\'")).test(sReq.query.lastName);
    var hasQuotationMarks2 = (new RegExp("\"")).test(sReq.query.firstName)
    || (new RegExp("\'")).test(sReq.query.firstName);
    var hasQuotationMarks3 = (new RegExp("\"")).test(sReq.query.username)
    || (new RegExp("\'")).test(sReq.query.username);
    var hasQuotationMarks4 = (new RegExp("\"")).test(sReq.query.wechatPhone)
    || (new RegExp("\'")).test(sReq.query.wechatPhone);
    var hasQuotationMarks5 = (new RegExp("\"")).test(sReq.query.email)
    || (new RegExp("\'")).test(sReq.query.email);
    var hasQuotationMarks6 = (new RegExp("\"")).test(sReq.query.perWebAddr)
    || (new RegExp("\'")).test(sReq.query.perWebAddr);
    var hasQuotationMarks7 = (new RegExp("\"")).test(sReq.query.breIntr)
    || (new RegExp("\'")).test(sReq.query.breIntr);
    var hasQuotationMarks8 = (new RegExp("\"")).test(sReq.query.grade)
    || (new RegExp("\'")).test(sReq.query.grade);
    if (hasQuotationMarks1 || hasQuotationMarks2 || hasQuotationMarks3
      || hasQuotationMarks4 || hasQuotationMarks5 || hasQuotationMarks6
      || hasQuotationMarks7 || hasQuotationMarks8) {
      return;
    }

    var isEmail = (new RegExp("@")).test(sReq.query.email);
    var isInUniv = (new RegExp("edu\.cn$")).test(sReq.query.email);
    if (!isEmail || !isInUniv) {
      return;
    }

    studentInfo.studentInfoSave(sReq.session.user.id, sReq.session.user.email, sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.breIntr, sReq.query.grade, sReq.query.selectedLab, sReq.query.selectedKey, function(result){
			 sRes.send(result);
		 });
});

app.get('/studentInfo/launch', function(sReq, sRes) {
    if (sReq.query.lastName == null) sReq.query.lastName = "";
    if (sReq.query.firstName == null) sReq.query.firstName = "";
    if (sReq.query.username == null) sReq.query.username = "";
    if (sReq.query.wechatPhone == null) sReq.query.wechatPhone = "";
    if (sReq.query.email == null) sReq.query.email = "";
    if (sReq.query.perWebAddr == null) sReq.query.perWebAddr = "";
    if (sReq.query.breIntr == null) sReq.query.breIntr = "";
    if (sReq.query.grade == null || (sReq.query.grade!="Freshman 大一"&&
      sReq.query.grade!="Sophomore 大二"&&sReq.query.grade!="Junior 大三"&&sReq.query.grade!="Senior 大四"))
      sReq.query.grade = "Please Select 请选择";

    if (sReq.query.lastName == "" || sReq.query.firstName == "" || sReq.query.username == ""
      || sReq.query.wechatPhone == "" || sReq.query.email == "" || sReq.query.breIntr == ""
      || sReq.query.grade == "Please Select 请选择") {
      return;
    }

    if (sReq.query.lastName.length>20 || sReq.query.firstName.length>20 || sReq.query.username.length>200
      || sReq.query.wechatPhone.length>200 || sReq.query.email.length>200 || sReq.query.perWebAddr.length>200
      || sReq.query.breIntr.length>2000 || sReq.query.grade.length>50) {
      return;
    }

    var hasQuotationMarks1 = (new RegExp("\"")).test(sReq.query.lastName)
    || (new RegExp("\'")).test(sReq.query.lastName);
    var hasQuotationMarks2 = (new RegExp("\"")).test(sReq.query.firstName)
    || (new RegExp("\'")).test(sReq.query.firstName);
    var hasQuotationMarks3 = (new RegExp("\"")).test(sReq.query.username)
    || (new RegExp("\'")).test(sReq.query.username);
    var hasQuotationMarks4 = (new RegExp("\"")).test(sReq.query.wechatPhone)
    || (new RegExp("\'")).test(sReq.query.wechatPhone);
    var hasQuotationMarks5 = (new RegExp("\"")).test(sReq.query.email)
    || (new RegExp("\'")).test(sReq.query.email);
    var hasQuotationMarks6 = (new RegExp("\"")).test(sReq.query.perWebAddr)
    || (new RegExp("\'")).test(sReq.query.perWebAddr);
    var hasQuotationMarks7 = (new RegExp("\"")).test(sReq.query.breIntr)
    || (new RegExp("\'")).test(sReq.query.breIntr);
    var hasQuotationMarks8 = (new RegExp("\"")).test(sReq.query.grade)
    || (new RegExp("\'")).test(sReq.query.grade);
    if (hasQuotationMarks1 || hasQuotationMarks2 || hasQuotationMarks3
      || hasQuotationMarks4 || hasQuotationMarks5 || hasQuotationMarks6
      || hasQuotationMarks7 || hasQuotationMarks8) {
      return;
    }

    var isEmail = (new RegExp("@")).test(sReq.query.email);
    var isInUniv = (new RegExp("edu\.cn$")).test(sReq.query.email);
    if (!isEmail || !isInUniv) {
      return;
    }

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
app.get('/studentView/get', function(sReq, sRes) {
    studentInfo.studentInfoGet(sReq.session.selectStudent, sReq.session.selectStudent, function(result){
			 sRes.send(result);
		 });
});



app.get('/enrollForm/save', function(sReq, sRes) {
    console.log(sReq);
    console.log(sReq.query.lastName);

    if (sReq.query.lastName == null) sReq.query.lastName = "";
    if (sReq.query.firstName == null) sReq.query.firstName = "";
    if (sReq.query.username == null) sReq.query.username = "";
    if (sReq.query.studentId == null) sReq.query.studentId = "";
    if (sReq.query.wechatPhone == null) sReq.query.wechatPhone = "";
    if (sReq.query.email == null) sReq.query.email = "";
    if (sReq.query.perWebAddr == null) sReq.query.perWebAddr = "";
    if (sReq.query.selfIntr == null) sReq.query.selfIntr = "";
    if (sReq.query.reasonEnroll == null) sReq.query.reasonEnroll = "";
    if (sReq.query.award == null) sReq.query.award = "";

    if (sReq.query.lastName.length>20 || sReq.query.firstName.length>20 || sReq.query.username.length>200
      || sReq.query.studentId.length>20 || sReq.query.wechatPhone.length>200 || sReq.query.email.length>200
      || sReq.query.perWebAddr.length>200 || sReq.query.selfIntr.length>2000 || sReq.query.reasonEnroll.length>2000
      || sReq.query.award>2000) {
        return;
    }

    var hasQuotationMarks1 = (new RegExp("\"")).test(sReq.query.lastName)
    || (new RegExp("\'")).test(sReq.query.lastName);
    var hasQuotationMarks2 = (new RegExp("\"")).test(sReq.query.firstName)
    || (new RegExp("\'")).test(sReq.query.firstName);
    var hasQuotationMarks3 = (new RegExp("\"")).test(sReq.query.username)
    || (new RegExp("\'")).test(sReq.query.username);
    var hasQuotationMarks4 = (new RegExp("\"")).test(sReq.query.studentId)
    || (new RegExp("\'")).test(sReq.query.studentId);
    var hasQuotationMarks5 = (new RegExp("\"")).test(sReq.query.wechatPhone)
    || (new RegExp("\'")).test(sReq.query.wechatPhone);
    var hasQuotationMarks6 = (new RegExp("\"")).test(sReq.query.email)
    || (new RegExp("\'")).test(sReq.query.email);
    var hasQuotationMarks7 = (new RegExp("\"")).test(sReq.query.perWebAddr)
    || (new RegExp("\'")).test(sReq.query.perWebAddr);
    var hasQuotationMarks8 = (new RegExp("\"")).test(sReq.query.selfIntr)
    || (new RegExp("\'")).test(sReq.query.selfIntr);
    var hasQuotationMarks9 = (new RegExp("\"")).test(sReq.query.reasonEnroll)
    || (new RegExp("\'")).test(sReq.query.reasonEnroll);
    var hasQuotationMarks10 = (new RegExp("\"")).test(sReq.query.award)
    || (new RegExp("\'")).test(sReq.query.award);
    if (hasQuotationMarks1 || hasQuotationMarks2 || hasQuotationMarks3
    || hasQuotationMarks4 || hasQuotationMarks5 || hasQuotationMarks6
    || hasQuotationMarks7 || hasQuotationMarks8 || hasQuotationMarks9
    || hasQuotationMarks10) {
        return;
    }

    var isEmail = (new RegExp("@")).test(sReq.query.email);
    var isInUniv = (new RegExp("edu\.cn$")).test(sReq.query.email);
    if (!isEmail || !isInUniv) {
      return;
    }

    enrollForm.enrollFormSave(sReq.session.user.id, sReq.session.user.email, sReq.session.assignment.title, sReq.session.assignment.teacherId,  sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.selfIntr, sReq.query.reasonEnroll, sReq.query.award, function(result){
			 sRes.send(result);
		 });
});

app.get('/enrollForm/launch', function(sReq, sRes) {
    if (sReq.query.lastName == null) sReq.query.lastName = "";
    if (sReq.query.firstName == null) sReq.query.firstName = "";
    if (sReq.query.username == null) sReq.query.username = "";
    if (sReq.query.studentId == null) sReq.query.studentId = "";
    if (sReq.query.wechatPhone == null) sReq.query.wechatPhone = "";
    if (sReq.query.email == null) sReq.query.email = "";
    if (sReq.query.perWebAddr == null) sReq.query.perWebAddr = "";
    if (sReq.query.selfIntr == null) sReq.query.selfIntr = "";
    if (sReq.query.reasonEnroll == null) sReq.query.reasonEnroll = "";
    if (sReq.query.award == null) sReq.query.award = "";

    if (sReq.query.lastName == "" || sReq.query.firstName == "" || sReq.query.username == ""
      || sReq.query.wechatPhone == "" || sReq.query.email == "" || sReq.query.selfIntr == ""
      || sReq.query.reasonEnroll == "" || sReq.query.studentId == "" || sReq.query.award == "") {
        return;
    }

    if (sReq.query.lastName.length>20 || sReq.query.firstName.length>20 || sReq.query.username.length>200
      || sReq.query.studentId.length>20 || sReq.query.wechatPhone.length>200 || sReq.query.email.length>200
      || sReq.query.perWebAddr.length>200 || sReq.query.selfIntr.length>2000 || sReq.query.reasonEnroll.length>2000
      || sReq.query.award>2000) {
      return;
    }

    var hasQuotationMarks1 = (new RegExp("\"")).test(sReq.query.lastName)
    || (new RegExp("\'")).test(sReq.query.lastName);
    var hasQuotationMarks2 = (new RegExp("\"")).test(sReq.query.firstName)
    || (new RegExp("\'")).test(sReq.query.firstName);
    var hasQuotationMarks3 = (new RegExp("\"")).test(sReq.query.username)
    || (new RegExp("\'")).test(sReq.query.username);
    var hasQuotationMarks4 = (new RegExp("\"")).test(sReq.query.studentId)
    || (new RegExp("\'")).test(sReq.query.studentId);
    var hasQuotationMarks5 = (new RegExp("\"")).test(sReq.query.wechatPhone)
    || (new RegExp("\'")).test(sReq.query.wechatPhone);
    var hasQuotationMarks6 = (new RegExp("\"")).test(sReq.query.email)
    || (new RegExp("\'")).test(sReq.query.email);
    var hasQuotationMarks7 = (new RegExp("\"")).test(sReq.query.perWebAddr)
    || (new RegExp("\'")).test(sReq.query.perWebAddr);
    var hasQuotationMarks8 = (new RegExp("\"")).test(sReq.query.selfIntr)
    || (new RegExp("\'")).test(sReq.query.selfIntr);
    var hasQuotationMarks9 = (new RegExp("\"")).test(sReq.query.reasonEnroll)
    || (new RegExp("\'")).test(sReq.query.reasonEnroll);
    var hasQuotationMarks10 = (new RegExp("\"")).test(sReq.query.award)
    || (new RegExp("\'")).test(sReq.query.award);
    if (hasQuotationMarks1 || hasQuotationMarks2 || hasQuotationMarks3
      || hasQuotationMarks4 || hasQuotationMarks5 || hasQuotationMarks6
      || hasQuotationMarks7 || hasQuotationMarks8 || hasQuotationMarks9
      || hasQuotationMarks10) {
      return;
    }

    var isEmail = (new RegExp("@")).test(sReq.query.email);
    var isInUniv = (new RegExp("edu\.cn$")).test(sReq.query.email);
    if (!isEmail || !isInUniv) {
      return;
    }

    enrollForm.enrollFormLaunch(sReq.session.user.id, sReq.session.user.email, sReq.session.assignment.title, sReq.session.assignment.teacherId,  sReq.query.lastName, sReq.query.firstName, sReq.query.username,
        sReq.query.wechatPhone, sReq.query.email, sReq.query.perWebAddr,
         sReq.query.selfIntr, sReq.query.reasonEnroll, sReq.query.award, function(result){
			 sRes.send(result);
        if (result.launchSuccess == true) {
            var req1 = {
            lastName: sReq.query.lastName,
            firstName: sReq.query.firstName,
            clientEmail: sReq.query.email,
            assignmentTitle: sReq.session.assignment.title
            };
            email_js.sendEnrollNotificationToStudent(req1, 1, function(res1){
                console.log(res1.response);
            });

            var req2 = {
            teacherId: sReq.session.assignment.teacherId,
            assignmentTitle: sReq.session.assignment.title
            };
            email_js.sendEnrollNotificationToTeacher(req2, 1, function(res2){
                console.log(res2.response);
            });
        }
    });
});

app.get('/enrollForm/get', function(sReq, sRes) {
    enrollForm.enrollFormGet(sReq.session.user.id, sReq.session.user.email, sReq.session.assignment.title, sReq.session.assignment.teacherId, function(result){
			 sRes.send(result);
		 });
});
app.get('/enrollForm/check', function(sReq, sRes) {
    if(sReq.session && sReq.session.user){
    enrollForm.enrollFormCheck(sReq.session.user.id, sReq.session.user.email, sReq.session.assignment.title, sReq.session.assignment.teacherId, function(result){
			 sRes.send(result);
         });
        }
    else{
        sRes.send("/");
    }
});//TODO
app.get('/enrollForm/checkT', function(sReq, sRes) {
    if(sReq.session && sReq.session.user){
    enrollForm.enrollFormCheckT(sReq.session.user.id, sReq.session.user.email, sReq.session.assignment.title, sReq.session.assignment.teacherId, function(result){
			 sRes.send(result);
		 });}
    else{
        sRes.send("/");
    }
});
app.get('/enrollStatus/getDetails', function(sReq, sRes) {
    enrollForm.enrollFormGet(sReq.query.id, sReq.query.email, sReq.session.assignment.title, sReq.session.assignment.teacherId, function(result){
			 sRes.send(result);
		 });
});
app.get('/enrollStatus/visitStudent', function(sReq, sRes) {
    sReq.session.selectStudent = sReq.query.id;
    sRes.send("");
});


app.get('/home/setAssignment', function(sReq, sRes) {
    enroll.enrollGet(sReq.query.title, sReq.query.teacherId, function(item){
        sReq.session.assignment = item;
        sRes.send(item);
    })
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
    console.log('/main/get');
    
    main.mainGet(sReq.session.user.id, sReq.session.user.email, sReq.session.user.isTeacher, function(msgList, myList, avaList, intList){
        console.log({
            isTeacher: sReq.session.user.isTeacher,
            num1: parseInt((msgList.length-1) / 3)+1,
            msgList: msgList.slice(Math.min(sReq.query.currentPage1 * 3 - 3, msgList.length), Math.min(sReq.query.currentPage1 * 3, msgList.length)),
            num2: parseInt((myList.length-1) / 3)+1,
            myList: myList.slice(Math.min(sReq.query.currentPage2 * 3 - 3, myList.length), Math.min(sReq.query.currentPage2 * 3, myList.length)),
            num3: parseInt((avaList.length-1) / 3)+1,
            avaList: avaList.slice(Math.min(sReq.query.currentPage3 * 3 - 3, avaList.length), Math.min(sReq.query.currentPage3 * 3, avaList.length)),
            numint: parseInt((intList.length-1) / 3) + 1,
            intList: intList.slice(Math.min(sReq.query.currentPageint * 3 - 3, intList.length), Math.min(sReq.query.currentPageint * 3, intList.length)),
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
            avaList: avaList.slice(Math.min(sReq.query.currentPage3 * 3 - 3, avaList.length), Math.min(sReq.query.currentPage3 * 3, avaList.length)),
            numint: parseInt((intList.length-1) / 3) + 1,
            intList: intList.slice(Math.min(sReq.query.currentPageint * 3 - 3, intList.length), Math.min(sReq.query.currentPageint * 3, intList.length))
        })
    })
});

app.get('/main/search', function(sReq, sRes) {
    console.log('/main/search');
    main.search(sReq.query.search, function(data){
        sRes.send(data);
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
        if (result.acceptSuccess == true) {
            var req1 = {
                assignmentTitle: sReq.session.assignment.title,
                firstName: result.firstName,
                lastName: result.lastName,
                clientEmail: result.clientEmail
            };
            email_js.sendEnrollNotificationToStudent(req1, 2, function(res1){
                //something about res1
            });

            var req2 = {
                firstName: result.firstName,
                lastName: result.lastName,
                firstNameTeacher: result.firstNameTeacher,
                lastNameTeacher: result.lastNameTeacher,
                teacherEmail: result.teacherEmail,
                assignmentTitle: sReq.session.assignment.title
            };
            email_js.sendEnrollNotificationToTeacher(req2, 2, function(res2){
                //something about res2
            });
        }
    });
    
    
});

app.get('/enrollStatus/refuse', function(sReq, sRes) {
    enrollStatus.enrollStatusReject(sReq.session.user.id, sReq.session.assignment.title, sReq.query.id, function(result){
        sRes.send(result);
    })
});
app.get('/enrollStatus/launch', function(sReq, sRes) {
    enrollStatus.enrollStatusLaunch(sReq.session.user.id, sReq.session.assignment.title, function(result){
        sRes.send(result);
    })
});
app.get('/studentView/accept', function(sReq, sRes) {
    enrollStatus.enrollStatusAccept(sReq.session.user.id, sReq.session.assignment.title, sReq.session.selectStudent, function(result){
        sRes.send(result);
    })
});
app.get('/studentView/refuse', function(sReq, sRes) {
    enrollStatus.enrollStatusReject(sReq.session.user.id, sReq.session.assignment.title, sReq.session.selectStudent, function(result){
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
     enroll.enrollGet(sReq.session.assignment.title, sReq.session.assignment.teacherId, function(item){
        sRes.send(item);
     })
})

app.get('/enroll/isTeacher', function(sReq, sRes) {
    enroll.enrollGet(sReq.session.assignment.title, sReq.session.assignment.teacherId, function(item){
        sReq.session.assignment = item;
        var isTeacher=true;
        if(sReq.session && sReq.session.user && sReq.session.user.isTeacher == false){
            isTeacher=false;
        }
        sRes.send({assignment:item, isTeacher:isTeacher});
    })

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


app.get('/api/getCaptcha', function(req, res) {
    var captcha = svgCaptcha.create({
        // 翻转颜色
        inverse: false,
        // 字体大小
        fontSize: 36,
        // 噪声线条数
        noise: 2,
        // 宽度
        width: 80,
        // 高度
        height: 30,
    });
    // 保存到session,忽略大小写
    req.session.captcha = captcha.text.toLowerCase();
    console.log(req.session.captcha); //0xtg 生成的验证码
    //保存到cookie 方便前端调用验证
    res.cookie('captcha', req.session.captcha);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.write(String(captcha.data));
    res.end();
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
        main.mainGet(sReq.session.user.id, sReq.session.user.email, sReq.session.user.isTeacher, function(msgList, myList, avaList){
            sRes.send({msgList: msgList.slice(0, Math.min(5, msgList.length)), myList: myList.slice(0, Math.min(5, myList.length))});
        })
    } else{
        sRes.send('/');
    }
})

app.get('/right/route', function(sReq, sRes) {
    enroll.enrollGet(sReq.query.title, sReq.query.teacherId, function(item){
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
    evaluate.studentEvaluateSave(sReq.session.user.id, sReq.session.user.email, sReq.session.assignment.title, sReq.session.assignment.teacherId,  sReq.query.satis, sReq.query.learned, sReq.query.notlearned, function(item){
        sRes.send(item);
    })
})

app.get('/teacherEvaluate/save', function(sReq, sRes) {
    evaluate.teacherEvaluateSave(sReq.session.assignment.teacherId, sReq.session.assignment.title, sReq.query.satis,  sReq.query.intro, sReq.query.reason, function(item){
        sRes.send(item);
    })
})

app.get('/studentEvaluate/get', function(sReq, sRes) {
    evaluate.studentEvaluateGet(sReq.session.assignment.title, sReq.session.assignment.teacherId, function(item){
        sRes.send(item);
    })
})

app.get('/teacherEvaluate/get', function(sReq, sRes) {
    evaluate.teacherEvaluateGet(sReq.session.assignment.teacherId, sReq.session.assignment.title, function(item){
        sRes.send(item);
    })
})

//do not need database!
app.get('/app/logout', function(sReq, sRes) {
        sReq.session.destroy();
        sRes.end();
})


server.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = server;
