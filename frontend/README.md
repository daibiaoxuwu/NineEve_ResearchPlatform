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