const server = require('./email')

server.serverVerify(function(result){
  console.log(result);
})

var req = {clientEmail: 'huangbj16@mails.tsinghua.edu.cn'};

server.sendEmail(req, function(result, captcha){
  console.log(result);
  console.log(captcha);
})
