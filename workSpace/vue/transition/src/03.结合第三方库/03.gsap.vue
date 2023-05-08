<template>
  <button @click="isShow = !isShow">click</button>

  <Transition @enter="enter" @leave="leave">
    <h1 v-if="isShow">hello vue</h1>
  </Transition>

  <hr/>

  <input type="number" step="100" v-model="counter">

  <h2>当前计数：{{showNumber}}</h2>

</template>

<script>
import { reactive, ref, toRefs, watch } from 'vue';
import gsap from 'gsap'

export default {
  setup () {
    const isShow = ref(true)
    const enter = (el, done) => {
      // console.log(el, done);
      gsap.from(el, {
        scale: 0,
        x: 200,
        onComplete: done
      })
    }
    const leave = (el, done) => {
      // console.log(el, done);
      gsap.to(el, {
        scale: 0,
        x: 200,
        onComplete: done
      })
    }


    const state = reactive({
      counter: 0,
      showNumber: 0
    })
    watch(
      () => state.counter, 
      (newVal) => {
        gsap.to(state, {duration: 1, showNumber: newVal})
      }
    )




    return {
      isShow,enter,leave,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>