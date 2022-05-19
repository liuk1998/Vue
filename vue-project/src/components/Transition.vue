<!--
 * @Author: liuk kekeliu_job@163.com
 * @Date: 2022-05-16 16:32:57
 * @LastEditors: liuk kekeliu_job@163.com
 * @LastEditTime: 2022-05-16 21:31:36
 * @FilePath: /Vue/vue-project/src/components/Transition.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <button @click="show = !show">动画按钮</button>
    <!-- Vue 提供了 transition 的封装组件 -->
    <transition name="name" mode="out-in">
      <p v-if="show">刘彦琦</p>
    </transition>
    <!--
      过渡模式： in-out：新元素先进行过渡，完成之后当前元素过渡离开。
               out-in：当前元素先进行过渡，完成之后新元素过渡进入。
    -->
    <transition name="anim" mode="out-in">
      <p v-if="show">刘可</p>
    </transition>
    <!-- <transition> 组件上的 duration prop 定制一个显性的过渡持续时间 (以毫秒计) -->
    <transition name="text" :duration="1000">
      <p v-if="show">只许成功, 不许失败!</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
/*
v-enter：一般用于开始 -----> 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
v-enter-active：一般用于过程 -----> 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
v-enter-to：定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
v-leave-active：一般用于过程 -----> 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
v-leave-to：一般用于结束 -----> 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
*/
.name-enter-active,
.name-leave-active {
  transition: opacity 0.5s;
}
.name-enter,
.name-leave-to {
  opacity: 0;
}
.anim-enter-active {
  animation: anim-in .5s;
}
.anim-leave-active {
  animation: anim-in .5s reverse;
}
@keyframes anim-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>