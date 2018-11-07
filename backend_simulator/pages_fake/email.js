var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: '163',
  auth: {
    user: '18801290116',
    pass: 'nineeve'
  }
});

const testModule = '【科研信息平台】[请勿将验证码告知任何人，否则账号被盗平台不予处理]验证码：';
const subjectModule = '【科研信息平台】';
const notificationModule = ['同学你好，你已经被', '项目录取。请登录科研信息平台联系项目导师。'];
const notificationModuleStudentCase1 =
  ['同学你好，你已成功提交', '项目的报名申请。请等待审核。'];


var mailOptions = {
  from: '科研信息平台<18801290116@163.com>',
  to: '',
  subject: '',
  text: ''
};

module.exports = {

  /**
   * 在使用邮箱服务之前需要先验证是否可用。
   *
   * @property {string} response
   * 发送成功返回'success'
   * 失败返回错误信息
   *
   */
  serverVerify: function(res){
    transporter.verify(function(error, success) {
     if (error) {
        console.log(error);
      } else {
        res({
          response: 'success'
        });
      }
    });
  },

  /**
   * 发送验证码邮件
   *
   * @param {string} clientEmail
   * 登陆者的电子邮箱
   *
   * @property {string} response
   * 发送成功返回'success'，
   * 失败返回error信息
   * @property {int} captcha
   * int形式的6位验证码，用于验证输入是否正确
   *
   */
  sendEmail: function(req, res){
    mailOptions.to = req.clientEmail;
    var captcha = Math.floor(Math.random() * 800000 + 100000);
    mailOptions.text = testModule + captcha.toString();
    mailOptions.subject = subjectModule + '验证码';
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res({
          response: error,
          captcha: captcha
        });
      } else {
        res({
          response: 'success',
          captcha: captcha
        });
      }
    });
  },

  /**
  * 前端人员改写的sendEmail
  */
  sendCaptchaEmail: function(clientEmail, res){
    mailOptions.to = clientEmail;
    var captcha = Math.floor(Math.random() * 800000 + 100000);
    mailOptions.text = testModule + captcha.toString();
    mailOptions.subject = subjectModule + '验证码';
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res({
          response: error,
          captcha: captcha
        });
      } else {
        res({
          response: 'success',
          captcha: captcha
        });
      }
    });
  },


  /**
  * 发送报名通过邮件
  *
  * @param {string} clientEmail
  * 报名同学的电子邮箱
  * @param {string} assignmentTitle
  * 学生报名项目的题目
  * @param {string} lastName
  * 学生的姓
  * @param {string} firstName
  * 学生的名
  *
  * @property {string} response
  * 发送成功返回'success，
  * 失败返回error信息
  *
  */
  sendNotification: function(req, res){
    mailOptions.to = req.clientEmail;
    mailOptions.text = req.lastName + req.firstName + notificationModule[0] + req.assignmentTitle + notificationModule[1];
    mailOptions.subject = subjectModule + req.assignmentTitle + '项目报名通过';
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res({
          response: error
        });
      } else {
        res({
          response: 'success'
        });
      }
    });
  },

  /**
  * 所有给学生发送报名相关事宜的邮件
  */
  sendEnrollNotificationToStudent: function(req, reqNo, res){
    mailOptions.to = req.clientEmail;

    switch (reqNo) {
      case 1: //学生报名提交后收到的通知
        console.log(req.lastName);
        console.log(req.firstName);
        console.log(req.clientEmail);
        console.log(req.assignmentTitle);
        mailOptions.text = req.lastName + req.firstName + notificationModuleStudentCase1[0]
          + req.assignmentTitle + notificationModuleStudentCase1[1];
        mailOptions.subject = subjectModule + req.assignmentTitle + ' 项目报名申请已提交';
        break;

      default:
        return;
    }

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res({
          response: error
        });
      } else {
        res({
          response: 'success'
        });
      }
    });
  }
}
