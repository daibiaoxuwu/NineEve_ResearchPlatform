const Mock = require('mockjs');

const Random = Mock.Random;

const generateLoginReply = function() {
    //todo: generate reply style
    return{

    }
}

Mock.mock('/loginRequestUrlEmail', 'post', generateLoginReply);
