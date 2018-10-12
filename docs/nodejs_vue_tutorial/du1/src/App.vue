<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="onLogin">login</button>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    onLogin( ){
      alert(1);
      $.post(
        "/login",
         {user:"John", pass:"abc"},
         function( data ){
           console.log( data );
            alert("shuju="+data);
         }
      );
    }
  }
}
</script>

<style>
#app {
  font-family:  "Microsoft YaHei",  "Microsoft YaHei", 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
