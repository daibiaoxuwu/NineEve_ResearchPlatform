const express = require('express')
const app = express()
const port = 8080



app.use(express.static('../frontend'))

var bodyParser     =        require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendfile("index.html"))



//location for requiring js files for database connection
var requireLoc = "./pages_fake";


//loginRegisterData.js
var loginRegisterData = require(requireLoc+ "/loginRegisterData");

app.post('/loginRequestUrlEmail', function(sReq, sRes){
    sRes.send(loginRegisterData.emailLogin(sReq.body.email, sReq.body.password));
});

app.post('/loginRequestUrlTeacherId', function(sReq, sRes){
    sRes.send(loginRegisterData.teacherLogin(sReq.body.teacherId, sReq.body.password));
});

app.post('/loginRequestUrlStudentId', function(sReq, sRes){
    sRes.send(loginRegisterData.studentLogin(sReq.body.studentId, sReq.body.password));
});

app.post('/registerRequestUrl', function(sReq, sRes){
    var name = sReq.body.name;
    var university = sReq.body.university;
    var email = sReq.body.email;
    var password = sReq.body.password;
    sRes.send(loginRegisterData.register(name,university,email,password));

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


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
