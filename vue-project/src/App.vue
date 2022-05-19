<!--
 * @Author: your name
 * @Date: 2022-03-23 10:51:53
 * @LastEditTime: 2022-05-19 10:08:21
 * @LastEditors: liuk kekeliu_job@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Vue/vue-project/src/App.vue
-->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!--
      传递静态或动态 Prop(需要通过v-bind传递), 通过 Prop 向子组件传递数据。
      .native就是把组件标签变回原生DOM的一种方式，相当于给组件绑定原生事件。给普通的HTML标签监听一个事件，之后添加 .native 修饰符是不会起作用的。
      .sync实现父子组件的双向数据绑定。
      子组件通过 $emit 传递静态或动态参数给父组件，父组件通过方法来接受。
    -->
    <GetProp
      :title="logo"
      :age="24"
      :bool="true"
      @click.native.prevent="print"
      :val.sync="val"
      @change="getName"
      ref="one"
    ></GetProp>
    <div>父子组件的双向数据绑定: {{ val }}</div>
    <button @click="print();modify();" v-g:foo.a.b="myName">按钮</button>
    <div>父组件名字: {{ myName }}</div>
    <hr />
    <GetSlot>
      <template v-slot:header>我是header</template>
      <template #main>我是main</template>
      <!-- <p>我是main默认</p> -->
      <div slot="footer">我是footer</div>
      <template v-slot="data">{{ data.apple.iphone }}</template>
      <!-- 解构插槽 Prop(作用域插槽) -> 重命名 -->
      <!-- <template v-slot={apple:data}>{{ data.iphone }}</template> -->
    </GetSlot>
    <hr>
    <transition></transition>
  </div>
</template>

<script>
// 子组件引入
import GetProp from "./components/GetProp.vue";
import GetSlot from "./components/GetSlot";
import Transition from "./components/Transition";
import mixins from "./components/mixins/index";

export default {
  name: "App",
  mixins: [mixins], // 引用混入后，混入里的生命周期也会同步执行。当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
  components: {
    GetProp, // 子组件引入
    GetSlot,
    Transition
  },
  data() {
    return {
      logo: "只许成功, 不许失败!",
      val: "必须成功!",
      myName: "刘可",
    };
  },
  methods: {
    print() {
      console.log("%c logo>>>", "color: green", this.logo, this.$children);
      this.$children[0].children(); // $children获取的是所有子组件的实例，返回的是数组类型，再通过下标获取指定的子组件
      this.$refs.one.refs(); // $refs获取的是所有子组件的实例，在子组件的行类添加ref属性(名称)，用$refs. 来获取子组件对应的值或方法
    },
    modify() {
      this.val = this.val == "必须成功!" ? "没有失败!" : "必须成功!";
    },
    getName(name) {
      this.myName = name;
    },
    parent() {
      console.log('this.$parent测试');
    }
  },
};
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
