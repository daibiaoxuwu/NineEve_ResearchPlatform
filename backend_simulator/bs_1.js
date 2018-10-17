const express = require('express')
const app = express()
const port = 80

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'b.NineEve.secoder.local',
  port     : '3306',
  user     : 'lzr',
  password : 'newpass',
  database : 'A'
});
 
connection.connect();

app.use(express.static('../frontend'))

var bodyParser     =        require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendfile("index.html"))

app.get("/login", (req,res)=>{
    res.send('Hello World!');
});

app.post('/loginRequestUrlEmail', function(sReq, sRes){
    var user = sReq.body.email;
    var pass = sReq.body.password;
    console.log("User name = "+user+", password is "+pass);
    sRes.end("This is from the backend simulator:\n"+user+'\n'+pass);
});

app.post('/loginRequestUrlTeacherId', function(sReq, sRes){
    var user = sReq.body.teacherId;
    var pass = sReq.body.password;
    console.log("User name = "+user+", password is "+pass);
    sRes.end("This is from the backend simulator:\n"+user+'\n'+pass);
});

app.post('/loginRequestUrlStudentId', function(sReq, sRes){
    var user = sReq.body.studentId;
    var pass = sReq.body.password;
    console.log("User name = "+user+", password is "+pass);
    sRes.end("This is from the backend simulator:\n"+user+'\n'+pass);
});

app.post('/registerRequestUrl', function(sReq, sRes){
    var name = sReq.body.name;
    var university = sReq.body.university;
    var email = sReq.body.email;
    var password = sReq.body.password;
	connection.query('INSERT INTO b(b) VALUES(1234)', function (error, result) {
		if (error) throw error;
		console.log(result);
	});
    console.log("name:"+name+", university:"+university+", email:"+email+", password:"+password);
    sRes.end("This is from the backend simulator:\n"+name+"\n"+university+"\n"+email+"\n"+password);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
