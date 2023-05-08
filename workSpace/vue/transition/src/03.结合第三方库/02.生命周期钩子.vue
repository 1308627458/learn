<template>
  <button @click="isShow = !isShow">click</button>

  <Transition 
    @before-enter="beforeEnter" 
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <h1 v-if="isShow">hello vue</h1>
  </Transition>

</template>

<script>
import { ref } from 'vue';
export default {
  setup () {
    const isShow = ref(true)

    const beforeEnter = () => {
      console.log('beforeEnter');
    }
    const enter = () => {
      console.log('enter');
    }
    const afterEnter = () => {
      console.log('afterEnter');
    }
    const beforeLeave = () => {
      console.log('beforeLeave');
    }
    const leave = () => {
      console.log('leave');
    }
    const afterLeave = () => {
      console.log('afterLeave');
    }

    return {
      isShow,
      beforeEnter,
      enter,
      afterEnter,
      beforeLeave,
      leave,
      afterLeave
    }
  }
}
</script>

<style lang="scss" scoped>

</style>