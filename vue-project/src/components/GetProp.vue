<!--
 * @Author: liuk kekeliu_job@163.com
 * @Date: 2022-05-13 16:08:15
 * @LastEditors: liuk kekeliu_job@163.com
 * @LastEditTime: 2022-05-19 11:15:28
 * @FilePath: /Vue/vue-project/src/components/GetName.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h1>我的title:{{ title | capitalize }}</h1>3
    <h1>我的名字:{{ name }}</h1>
    <h1 v-if="bool">我的年龄:{{ age }}</h1>
    <el-row>
      <el-button type="success" @click="use">成功啦</el-button>
    </el-row>
    <input type="text" :value="val" @input="ask($event)" />
  </div>
</template>

<script>
export default {
  //  可以为 prop 指定值名称与类型, 还有默认值、必填。
  props: {
    title: [String, Number], // 名称与类型
    age: {
      type: Number, // 类型
      required: true, // 必填
    },
    bool: {
      type: Boolean,
      default: false, // 默认值
    },
    val: String,
  },
  // 过滤器可以用在两个地方：双花括号插值和 v-bind 表达式。过滤器应该被添加在 JavaScript 表达式的尾部
  filters: {
    capitalize(value) {
      return `刘可与刘彦琦${value}`
    }
  },
  data() {
    return {
      name: "刘可",
    };
  },
  methods: {
    ask(e) {
      console.log("通过.sync实现父子组件双向绑定", e.target.value);
      this.$emit("update:val", e.target.value);
      this.$parent.parent(); // $parents 让我们可以在子组件中对父组件的data和方法操作。
    },
    use() {
      this.name = this.name == "刘可" ? "刘彦琦" : "刘可";
      // 子组件传值通过 $emit 声明方法
      this.$emit("change", this.name);
    },
    refs() {
      console.log('this.$refs测试');
    },
    children() {
      console.log('this.$children测试');
    }
  },
};
</script>
