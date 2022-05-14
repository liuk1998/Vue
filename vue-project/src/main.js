/*
 * @Author: liuk kekeliu_job@163.com
 * @Date: 2022-03-23 10:51:53
 * @LastEditors: liuk kekeliu_job@163.com
 * @LastEditTime: 2022-05-13 16:23:18
 * @FilePath: /Vue/vue-project/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI); // 使用 ElementUI

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
