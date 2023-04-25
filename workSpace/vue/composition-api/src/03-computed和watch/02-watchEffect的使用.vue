<template>
  <div>
    <h2>{{ name }}---{{ age }}</h2>
    <button @click="changName">changeName</button>
    <button @click="changAge">changeAge</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup () {
    const name = ref('小帅')
    const age = ref(18)
    const changName = () => name.value = '大帅'
    const changAge = () => {
      age.value++
      if(age.value > 25) {
        stop()
      }
    }
    const stop = watchEffect((onInvalidate) => {

      const timer = setTimeout(() => {
        console.log('用户详情请求到了');
      },2000)
      console.log(`name: ${name.value}--age: ${age.value}`);

      // watchEffect 的回调参数
      onInvalidate(() => {
      clearTimeout(timer)  // 终止上一次的请求
      console.log('onInvalidate');
    })
    })
    


    
    return {
      name,
      age,
      changAge,
      changName,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>