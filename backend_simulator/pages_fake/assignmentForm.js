module.exports = {
    /**
     * 项目信息页面的保存请求 页面url: '/assignmentForm'
     * 
     * @param {string} teacherId
     * 教师号
     * 
     * @param {string} title
     * 项目名称
     *
     * @param {string} background
     * 背景
     * 
     * @param {string} introduction
     * 简介
     * 
     * @param {string} keywords
     * 关键词
     * 
     * @param {string} abilities
     * 能力要求
     * 
     * @param {string} detailed
     * 详细说明
     * 
     * @param {string} number
     * 可报名人数
     * 
     * @param {string} deadline
     * 截止时间
     * 
     * @property {boolean} saveSuccess //property: return
     * 保存是否成功
     * 
     * 
     */

    assignmentFormSave: function(teacher, title, background, introduction,
         keywords, abilities, detailed,
          number, deadline, callback) {
        callback({saveSuccess: true});
    },


/**
     * 项目信息页面的保存请求 页面url: '/assignmentForm'
     * 
     * @param {string} teacherId
     * 教师号
     *
     * @param {string} title
     * 项目名称
     *
     * @param {string} background
     * 背景
     * 
     * @param {string} introduction
     * 简介
     * 
     * @param {string} keywords
     * 关键词
     * 
     * @param {string} abilities
     * 能力要求
     * 
     * @param {string} detailed
     * 详细说明
     * 
     * @param {string} number
     * 可报名人数
     * 
     * @param {string} deadline
     * 截止时间
     *
     * @property {boolean} launchSuccess //property: return
     * 启动是否成功
     */

    assignmentFormLaunch: function(teacher, title, background, introduction,
        keywords, abilities, detailed,
         number, deadline, callback) {
        callback({launchSuccess: true});
    },

/**
     * 项目信息页面的获取旧的信息请求 页面url: '/assignmentForm'
     * 
     * @param {string} teacherId
     * 教师号
     *
     * @param {string} title
     * 项目名称
     *
     * @param {string} background
     * 背景
     * 
     * @param {string} introduction
     * 简介
     * 
     * @param {string} keywords
     * 关键词
     * 
     * @param {string} abilities
     * 能力要求
     * 
     * @param {string} detailed
     * 详细说明
     * 
     * @param {string} number
     * 可报名人数
     * 
     * @param {string} deadline
     * 截止时间
     *
     */
	assignmentFormNew: function(teacher, callback) {
		callback({background: "",
				  introduction: "",
				  keywords: "",
				  abilities: "",
				  detailed: "",
				  number: "",
				  deadline: ""});	
    },
	
    assignmentFormGet: function(teacher, title, callback) {
        
				callback({background: "1",
						  introduction: "2",
						  keywords: "3",
						  abilities: "4",
						  detailed: "5",
						  number: "6",
						  deadline: "7"});
    }

}
