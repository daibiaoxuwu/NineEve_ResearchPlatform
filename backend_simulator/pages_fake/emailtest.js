const server = require('./email')

server.serverVerify(function(res){
  console.log(res.response);
})

var req = {clientEmail: 'huangbj16@mails.tsinghua.edu.cn'};

server.sendEmail(req, function(res){
  console.log(res.response);
  console.log(res.captcha);
})

req = {
  clientEmail: 'huangbj16@mails.tsinghua.edu.cn',
  assignmentTitle: 'TCP网络优化器',
  lastName: '宋',
  firstName: '思睿'
};

server.sendNotification(req, function(res){
  console.log(res.response);
})