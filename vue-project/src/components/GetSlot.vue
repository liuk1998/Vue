// eslint-disable-next-line vue/multi-word-component-names
<!--
 * @Author: liuk kekeliu_job@163.com
 * @Date: 2022-05-16 10:50:59
 * @LastEditors: liuk kekeliu_job@163.com
 * @LastEditTime: 2022-05-16 15:51:00
 * @FilePath: /Vue/vue-project/src/components/slot.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!--
  插槽就是子组件中的提供给父组件使用的一个占位符，用<slot></slot> 表示，父组件可以在这个占位符中填充任何模板代码，如 HTML、组件等，填充的内容会替换子组件的<slot></slot>标签。
  注意：如果子组件的 template 中没有包含一个 <slot> 元素，即不使用插槽，则该组件起始标签和结束标签之间的任何内容都会被抛弃。
  后备内容：只会在没有提供内容的时候被渲染。
  具名插槽：当需要多个插槽，<slot> 元素有一个特殊的属性name。这个属性可以用来定义额外的插槽。缩写为 #header
  作用域插槽：插槽内容能够访问子组件中的数据。默认插槽与作用域插槽有冲突。
 -->
  <div>
    <h1>插槽的使用</h1>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main">具名插槽</slot>
    </main>
    <!-- <slot><p>默认插槽：我是后备内容</p></slot> -->
    <footer>
      <slot name="footer"></slot>
    </footer>
    <slot :apple="apple">作用域插槽</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apple: {
        iphone: "iPhoneXr",
        MacBook: "MacBook Air",
      },
    };
  },
};
</script>