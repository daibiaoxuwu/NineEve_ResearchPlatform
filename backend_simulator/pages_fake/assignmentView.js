module.exports = {
    /**
     * 项目列表具体展示界面 页面url: '/assignmentView'
     *
     * @property {Array} 
     * 所有 可报名 科研任务列表
     * 含有: title, teacher, introduction三项.
     */

    assignmentViewGet: function(callback){
        callback(
            [{
                title:"基于Bootstrap的前端网页设计研究",
                teacher:"国雨晴",
                teacherId:"1",
                introduction:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。\
                  在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。\
                  在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!\
                  我们推荐链接到一个你可以手动更新的指定版本号：\
                  你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。\
        Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。\
        请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。"
            },

            {
                title:"基于Bootstrap的前端网页设计研究2",
                teacher:"国雨晴",
                teacherId:"1",
                introduction:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。\
                  在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。\
                  在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!\
                  我们推荐链接到一个你可以手动更新的指定版本号：\
                  你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。\
        Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。\
        请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。"
            },

            {
                title:"基于Bootstrap的前端网页设计研究3",
                teacher:"国雨晴",
                teacherId:"1",
                introduction:" Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。\
                  在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。\
                  在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!\
                  我们推荐链接到一个你可以手动更新的指定版本号：\
                  你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。\
        Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。\
        请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。"
            }
        ]



        );
    }
}
