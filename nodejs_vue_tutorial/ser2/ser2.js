const express = require('express')
const app = express()
const port = 8080

app.use(express.static('../du1'))

var bodyParser     =        require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendfile("index.html"))

app.get("/login", (req,res)=>{
    res.send('Hello World!');
});

app.post('/login', function(sReq, sRes){    
    var user = sReq.body.user;   
    var pass = sReq.body.pass;
    console.log("User name = "+user+", password is "+pass);
    sRes .end("yes");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))