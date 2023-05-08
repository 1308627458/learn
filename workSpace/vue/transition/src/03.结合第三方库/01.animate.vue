<template>
  <button @click="isShow = !isShow">click</button>
  <Transition
  enter-active-class="animate__animated animate__hinge"
  leave-active-class="animate__animated animate__fadeInUpBig"
  >
  <h1 v-if="isShow" >Hello Vue</h1>
  </Transition>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const isShow = ref(true)

    return {
      isShow
    }
  }
}
</script>

<style lang="scss" scoped>

</style>