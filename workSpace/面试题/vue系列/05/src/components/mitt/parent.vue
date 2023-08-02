<template>
  <div>
    <input type="text" name="" id="" v-model="msg">
    <button @click="handle">添加</button>
  </div>

  <child />
</template>
  
<script setup>
import { ref, getCurrentInstance } from 'vue';
import child from './child.vue'



const msg = ref('')

const app = getCurrentInstance()


const handle = () => {
  app.appContext.config.globalProperties.$emitter.emit('foo', msg.value)
}






</script>
  
<style lang="css" scoped></style>