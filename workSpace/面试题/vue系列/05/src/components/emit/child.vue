<template>
  <div>
    <input type="text" v-model="msg">
    <button @click="handle">添加</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const msg = ref('')
const emits = defineEmits(['add'])  // 注册事件
const handle = () => {
  emits('add', msg.value)
}
</script>

<style lang="css" scoped></style>