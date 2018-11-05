var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: '163',
  auth: {
    user: '18801290116',
    pass: 'nineeve'
  }
});

const testmodule = '【科研信息平台】[请勿将验证码告知任何人，否则账号被盗平台不予处理]验证码：';

var mailOptions = {
  from: '科研信息平台<18801290116@163.com>',
  to: '',
  subject: '【科研信息平台】验证码',
  text: ''
};

module.exports = {

  /**
   * 在使用邮箱服务之前需要先验证是否可用。
   *
   * @property {string} response
   * 发送成功返回'verify success'
   * 失败返回错误信息
   *
   */
  serverVerify: function(res){
    transporter.verify(function(error, success) {
     if (error) {
        console.log(error);
      } else {
        res({
          response: 'verify success'
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
   * 发送成功返回信息，失败返回error信息
   * @property {int} captcha
   * int形式的6位验证码，用于验证输入是否正确
   *
   */
  sendEmail: function(req, res){
    mailOptions.to = req.clientEmail;
    var captcha = Math.floor(Math.random() * 800000 + 100000);
    mailOptions.text = testmodule + captcha.toString();
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res({
          response: error,
          captcha: captcha
        });
      } else {
        res({
          response: 'sendEmail: ' + info.response,
          captcha: captcha
        });
      }
    });
  }
}
