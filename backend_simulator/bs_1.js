const express = require('express')
var mysql      = require('mysql');
const app = express()
const port = 8080


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'b.NineEve.secoder.local',
  port     : '3306',
  user     : 'lzr',
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
var requireLoc = "./pages";


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

app.post('/registerRequestUrl', function(sReq, sRes){
    var name = sReq.body.name;
    var university = sReq.body.university;
    var email = sReq.body.email;
    var password = sReq.body.password;
    loginRegisterData.register(name,university,email,password,function(result){
		sRes.send(result);
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
