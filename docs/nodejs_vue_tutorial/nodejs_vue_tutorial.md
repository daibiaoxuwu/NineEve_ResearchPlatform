#### nodejs和vuejs通信教程

##### 环境配置

* 安装:

  * nodejs: https://nodejs.org/en/

  * vue: npm install -g vue-cli

  * 验证安装成功: 命令行运行npm -v, node -v

  * 要求默认python为python2, 如果用anaconda装了双python, 激活一下对应的python虚拟机即可.

    用virtualenv等创建一个, 或者改环境变量path, 应该也可以. 甚至没有python都行.

* 前台: vue.js+bootstrap

  新建工程: 命令行运行vue init webpack-simple 工程名 **如果从github上下载的项目, 跳过这步**

  然后进入工程根目录, 运行npm install

  然后, 如果需要安装jquery, 运行npm install jquery --save



  注意use scss项选Yes

  会出现一个新文件夹, 里边src目录下有两个文件:

  * main.js: 类似c的.h文件, 会将App.vue文件链接进来.

  * App.vue: 含有template, script和style三项.

    template:在&lt;div id="app">下即为html格式. 对按钮添加响应事件是通过<button @click="函数名">实现的.

    script: js代码的地方.

    * data()内定义变量. 在上面可以用

      ```vue
      {{变量名}}
      ```

      引用这些变量, 显示出来.

    * 在methods闭包内添加新函数,如

      ```js
       onClick: function() {
            alert("click");
          }
      ```

    * 传递数据可以使用post方法, 并且可以处理返回的数据:

      ```js
      onLogin( ){
            $.post(
              "/login",
               {user:"John", pass:"abc"},
               function( data ){
                 console.log( data );
                  alert("shuju="+data);
               }
            );
          }
      ```

    * 在export default闭包外可以添加一个watch闭包:

      ```js
      watch: {
          currentPage: function() {
            console.log(this.currentPage);
          }
        }
      ```

      上述代码监控currentPage的变化, 每当其变化, 即执行function函数.

  * 运行: 命令行在本工程根目录下执行npm run dev, (如果链接服务器需要改为npm run build).

    这时浏览器应该自动打开了http://localhost:8080/.

    之后, 只要该进程不死, 每次对工程文件的更改会直接反映到浏览器上.

* 后端: nodejs

  * 安装:

    在工程外另起一文件夹. 在文件夹内执行:

    npm install express --save-dev

    然后在内部的js文件内更改下述语句:

    ```js
    app.use(express.static('../vue1'))
    ```

    引号内为前端工程的根目录.

    与刚才的前端代码链接:

    ```js
    app.post('/login', function(sReq, sRes){    
        var user = sReq.body.user;   
        var pass = sReq.body.pass;
        console.log("User name = "+user+", password is "+pass);
        sRes .end("yes");
    });
    ```

  * 运行:

    node 文件名.js

* 样例工程:点击按钮login, 从后端接受数据"yes"并alert显示出来.
* 延申:
  * https://cn.vuejs.org/ 中文版vuejs教程(据说因为vuejs头儿是华人)
  * https://bootstrap-vue.js.org BV是bootstrap和vue的结合体, 能更好地借用预设css样式, 设计网页.这里也有很多模板.