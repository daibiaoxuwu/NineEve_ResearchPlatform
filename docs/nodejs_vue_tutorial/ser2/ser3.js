const express = require('express')
const app = express()
const port = 8080

app.use(express.static('../du1'))
var server = require('http').Server(app);
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/../views');


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
    cookie: {}
});
app.use(appSession);



app.get('/', (req, res) => 
{
    var user = {};
    if (req.session && req.session.user) {
        user.name = req.session.user;
    }
    res.render('index', {"user":JSON.stringify(user)} );
} )

// app.get("/login", (req,res)=>{
//     res.send('Hello World!');
// });

app.get('/login', function(sReq, sRes){    
    var user = sReq.query.user;   
    var pass = sReq.query.pass;
    sReq.session.user = user;
    console.log("User name = "+user+", password is "+pass);
    sRes.redirect("/")
});

server.listen(port, () => console.log(`Example app listening on port ${port}!`))