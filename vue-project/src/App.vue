<!--
 * @Author: your name
 * @Date: 2022-03-23 10:51:53
 * @LastEditTime: 2022-05-13 17:08:17
 * @LastEditors: liuk kekeliu_job@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Vue/vue-project/src/App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 传递静态或动态 Prop(需要通过v-bind传递), 通过 Prop 向子组件传递数据 -->
    <GetName :title="logo" :age="24" :bool="true" :address="111"></GetName>
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
  },
  data() {
    return {
      logo: '只许成功, 不许失败!'
    }
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
