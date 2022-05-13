<!--
 * @Author: your name
 * @Date: 2022-03-23 10:51:53
 * @LastEditTime: 2022-05-13 16:10:54
 * @LastEditors: liuk kekeliu_job@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Vue/vue-project/src/App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <GetName></GetName>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// 子组件引入
import HelloWorld from './components/HelloWorld.vue';
import GetName from './components/GetName.vue';

export default {
  name: 'App',
  components: {
    HelloWorld, // 子组件引入
    GetName
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
