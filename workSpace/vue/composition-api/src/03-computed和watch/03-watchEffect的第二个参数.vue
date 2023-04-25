<template>
  <div>
    <h2 ref="title">Hello wrold</h2>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {

    const title = ref(null)

    watchEffect(() => {
      console.log(title.value);
    }, { flush: 'post' })
    // setInterval(() => {
    //   console.log(title.value);
    // },1000)
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped></style>