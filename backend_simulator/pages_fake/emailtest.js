const server = require('../pages/email')

// server.serverVerify(function(res){
//   console.log(res.response);
// })

// server.sendEmail(req, function(res){
//   console.log(res.response);
//   console.log(res.captcha);
// })

// req = {
//   clientEmail: 'huangbj16@mails.tsinghua.edu.cn',
//   assignmentTitle: 'TCP网络优化器',
//   lastName: '宋',
//   firstName: '思睿'
// };

// server.sendNotification(req, function(res){
//   console.log(res.response);
// })

var req = {
  clientEmailList: ['huangbj16@mails.tsinghua.edu.cn', 'huangbj16@qq.com'],
  assignmentTitle: 'TCP网络优化器',
  interest: '特奖',
  firstNameTeacher: '院士',
  lastNameTeacher: '吴'
}

server.sendEnrollNotificationToStudent(req, 3, function(res){
  console.log(res.response);
})