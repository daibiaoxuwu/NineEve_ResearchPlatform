### Frontend

> Created by bootstrap-vue.

#### About

Finished Landing Page and Tutor's Information. Without Logic.

#### Build Setup

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

#### Tips

* Router

  添加一个网页时在router的这里

  ```js
  import homepage from "./pages/home.vue";
  import teacherInfo from "./pages/teacherInfo.vue";
  import register from "./pages/register.vue";
  const routes = [
      { path: '/', component: homepage },
      { path: '/teacherInfo', component: teacherInfo },
      { path: '/register', component: register}
    ]
  ```

  按格式添加两行即可.

  添加router链接可以在html段添加

  ````html
  <router-link to="/register">...</router-link>
  ````

  或者在script段添加

  ```js
   this.$router.push("/register");
  ```

  即可.

* 添加小设备兼容性:

  在index.html中meta处添加

  ```html
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
  ```

  然后将需要在"小设备下隐藏"的html标签中添加一个类属性(如visible-lg), 然后在&lt;style>段加入(或者,为了应用到全局,加到theme.css中)

  ```css
  @media (max-width: 767px){
    .visible-lg{
      display: none;
    }
  ```

  (可以在&lt;template>外加入&lt;style>标签,在里边导入css文件和定义其他css样式:

  ```html
  <style>
  @import "../assets/theme.css";
  @media (max-width: 767px){
    .visible-lg{
      display: none;
    }
  }
  </style>
  ```

* 添加弹出框:

  https://bootstrap-vue.js.org/docs/components/modal

  ```html
  <b-btn v-b-modal.modal1 class="btn btn-danger btn-lg btn-block">
        Retract Enrollment 撤销报名
  </b-btn>
  <b-modal id="modal1" title="Bootstrap-Vue"  @ok="handleOk"
               @shown="clearName">
     <p class="my-4">是否撤销报名?</p>
  </b-modal>
  ```

  @ok: 点击ok触发函数 @shown: 显示对话框时触发 @cancel: 取消触发.

  这里btn-danger是按钮显示红色的样式.

