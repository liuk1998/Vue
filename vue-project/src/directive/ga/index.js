/*
 * @Author: liuk kekeliu_job@163.com
 * @Date: 2022-05-17 09:18:17
 * @LastEditors: liuk kekeliu_job@163.com
 * @LastEditTime: 2022-05-17 13:08:31
 * @FilePath: /Vue/vue-project/src/directive/ga/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import g from './g.js';

const install = function(Vue) {
  Vue.directive('g', g); // 注册一个全局自定义指令 `v-g`
};

if(window.Vue) {
  window.g = g;
  Vue.use(install);
}

g.install = install;
export default g;