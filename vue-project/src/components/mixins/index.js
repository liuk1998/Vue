/*
 * @Author: liuk kekeliu_job@163.com
 * @Date: 2022-05-17 08:57:48
 * @LastEditors: liuk kekeliu_job@163.com
 * @LastEditTime: 2022-05-17 09:05:37
 * @FilePath: /Vue/vue-project/src/components/mixins/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 混入 分发 Vue 组件中的可复用功能。
export default {
  data() {
    return {
      first: 1
    }
  },
  mounted() {
    this.first++;
    this.hello();
  },
  methods: {
    hello() {
      console.log('hello from mixin!', this.first);
    }
  }
};