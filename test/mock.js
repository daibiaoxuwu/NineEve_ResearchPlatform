const Mock = require('mockjs');
const $ = require('jquery');
const Random = Mock.Random;

const generateHomeList = [{
        text: "项目1",
        status: "Enrolling 可报名"
      },
      {
        text: "项目2",
        status: "Enrolling 可报名"
      },
      {
        text: "项目3",
        status: "Enrolling 可报名"
      },
       {
        text: "项目4",
        status: "Enrolling 可报名"
      },
       {
        text: "项目5",
        status: "Enrolling 可报名"
      }];

Mock.mock('/home/get', 'get', generateHomeList);

$.ajax({
    url: '/home/get',
    type: 'get',
    success: function(data){
      that.list=data;
    }
  })
