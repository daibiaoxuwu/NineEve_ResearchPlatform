const express = require('express')
const app = express()
const port = 8080

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
