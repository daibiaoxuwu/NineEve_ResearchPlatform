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
  ['同学你好，你已成功提交', '项目的报名申请，请等待审核。'];
const notificationModuleStudentCase2 =
  ['同学你好，你对', '项目的报名申请已被通过，请登录科研信息平台确认。'];

const notificationModuleTeacherCase1 =
  ['老师您好，您的', '项目已有新的学生报名，请登录科研信息平台审核。'];
const notificationModuleTeacherCase2 =
  ['老师您好，您已同意', '同学加入', '项目。请等待学生最后确认。'];


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
    switch (reqNo) {
      case 1: //学生报名提交后收到的通知
        var assignmentTitle = "九夕成员睡眠质量分析";
        if (req.assignmentTitle != null)
          assignmentTitle = req.assignmentTitle;


        mailOptions.to = studentEmail;
        mailOptions.text = req.lastName + req.firstName + notificationModuleStudentCase1[0]
          + assignmentTitle + notificationModuleStudentCase1[1];
        mailOptions.subject = subjectModule + assignmentTitle + ' 项目报名申请已提交';
        break;

      case 2: //学生申请被通过后收到邮件通知
        var teacherId = req.teacherId;
        var studentId = req.studentId;
        var assignmentTitle = "九夕成员睡眠质量分析";
        if (req.assignmentTitle != null)
          assignmentTitle = req.assignmentTitle;
        //以下是默认值，需要改
        var studentEmail = "yangzh16@mails.tsinghua.edu.cn";
        var lastNameStudent = "肖";
        var firstNameStudent = "特奖";

        //根据studentId查询学生姓,名

        mailOptions.to = studentEmail;
        mailOptions.text = lastNameStudent + firstNameStudent + notificationModuleStudentCase2[0]
          + assignmentTitle + notificationModuleStudentCase2[1];
        mailOptions.subject = subjectModule + assignmentTitle + ' 项目报名申请已通过';
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
  },

  /**
  * 所有给老师发送报名相关事宜的邮件
  */
  sendEnrollNotificationToTeacher: function(req, reqNo, res){
    switch (reqNo) {
      case 1: //学生报名提交后, 导师收到通知
        var teacherId = req.teacherId;
        var assignmentTitle = "九夕成员睡眠质量分析";
        if (req.assignmentTitle != null)
          assignmentTitle = req.assignmentTitle;
        //以下是默认值，需要改
        var teacherEmail = "dujl16@mails.tsinghua.edu.cn";
        var lastNameTeacher = "杜";
        var firstNameTeacher = "迦罗";

        //根据teacherId查询老师的姓,名,邮箱

        mailOptions.to = teacherEmail;
        mailOptions.text = lastName + firstName + notificationModuleTeacherCase1[0]
          + assignmentTitle + notificationModuleTeacherCase1[1];
        mailOptions.subject = subjectModule + assignmentTitle + ' 项目已有新报名';
        break;

      case 2: //导师已通过学生申请后给发送确认邮件
        var teacherId = req.teacherId;
        var studentId = req.studentId;
        var assignmentTitle ＝ "九夕成员睡眠质量分析";
        if (req.assignmentTitle != null)
          assignmentTitle = req.assignmentTitle;

        //以下是默认值，需要改
        var teacherEmail = "dujl16@mails.tsinghua.edu.cn";
        var lastNameTeacher = "杜";
        var firstNameTeacher = "迦罗";
        var lastNameStudent = "肖";
        var firstNameStudent = "特奖";

        //根据teacherId查询老师的姓,名,邮箱; 根据studentId查询学生姓,名

        mailOptions.to = teacherEmail;
        mailOptions.text = lastNameTeacher + firstNameTeacher + notificationModuleTeacherCase2[0]
          + lastNameStudent + firstNameStudent + notificationModuleTeacherCase2[1] +
          assignmentTitle + notificationModuleTeacherCase2[2];
        mailOptions.subject = subjectModule + assignmentTitle + ' 项目同意学生报名通知';
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
