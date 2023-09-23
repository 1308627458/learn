<template>
  <div class="app"> 
    <button @click="Add">{{ state.count }}</button>
  </div>

  <hr>

  <HelloWorld></HelloWorld>
 
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';

import { ref } from 'vue'
import { mixins } from './mixin'
mixins: [mixins]   // 将外部的代码混入到当前的组件中

const state = ref({
  count: 0,
  msg: 'APP 组件',
})

// const Add = () => {
//   state.value.count++
// }


</script>

<style lang="css" scoped>
div{
  font-size: 30px;
}
</style>