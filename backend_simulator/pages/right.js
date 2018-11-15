module.exports = {
    /**
     * 学生请求页面的保存请求 页面url: '/main'
     * 学生通过邮箱登陆
     * 
     * @param {string} id
     * 学生的学号 如果为"",用邮箱
     *
     * @property {boolean} isTeacher
     * 是否为老师(学生和老师公用个人主页)
     * 
     * @property {Array} assignments 
     * 正在进行的科研任务
     * 
     * @property {Array} history
     * 已经完成的科研任务列表
     */

    rightGet: function(id, callback){
        callback({
     assignment: [ {
        title:"基于Bootstrap的前端网页设计研究",
        status:"Enrolling 可报名",
        description:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器..."
    },{
    title:"基于Bootstrap的前端网页设计研究",
    status:"Passed 已通过",
    description:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器..."
 
},
{
    title:"基于Bootstrap的前端网页设计研究",
    status:"Rejected 已拒绝",
    description:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器..."
 
}
],
  history:    [

    {
        title:"基于Bootstrap的前端网页设计研究",
        status:"Enrolling 可报名",
        description:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器..."
    },{
    title:"基于Bootstrap的前端网页设计研究",
    status:"Enrolling 可报名",
    description:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器..."
 
}

  ]
        }
        );
    }
}
