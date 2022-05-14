<!--
 * @Author: liuk kekeliu_job@163.com
 * @Date: 2022-05-13 16:08:15
 * @LastEditors: liuk kekeliu_job@163.com
 * @LastEditTime: 2022-05-13 17:07:47
 * @FilePath: /Vue/vue-project/src/components/GetName.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h1>我的title:{{ title }}</h1>
    <h1>我的名字:{{ name }}</h1>
    <h1 v-if="bool">我的年龄:{{ age }}</h1>
    <h1>我的地址:{{ address }}</h1>
    <el-button type="success">成功啦</el-button>
  </div>
</template>

<script>
export default {
  //  可以为 prop 指定值名称与类型, 还有默认值、必填。
  props: {
    title: String,
    address: [String, Number],
    age: {
      type: Number,
      required: true
    },
    bool: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: "刘可",
    };
  },
};
</script>
