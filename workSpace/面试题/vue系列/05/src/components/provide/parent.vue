<template>
  <div>
    <input type="text" name="" id="" v-model="msg">
    <button @click="handle">添加</button>
  </div>

  <child />
</template>
  
<script setup>
import { provide, ref } from 'vue';
import child from './child.vue'

const msg = ref('')
const list = ref(['html','css'])
provide('title',list.value)
const handle = () => {
  list.value.push(msg.value)
  msg.value = ''
}





</script>
  
<style lang="css" scoped></style>