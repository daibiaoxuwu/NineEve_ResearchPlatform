const server = require('./email')

server.serverVerify(function(res){
  console.log(res.response);
})

var req = {clientEmail: 'huangbj16@mails.tsinghua.edu.cn'};

server.sendEmail(req, function(res){
  console.log(res.response);
  console.log(res.captcha);
})
