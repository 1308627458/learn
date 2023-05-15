<template>
  <div class="child1" @click="sendMsg">
    child1
  </div>
</template>

<script setup>
import { ref } from 'vue';


const msg = ref('这是给组件二的数据')
const emits = defineEmits(['send'])
const sendMsg = () => {
  // 把 msg 给父组件
  emits('send', msg.value)
}
    

</script>

<style  scoped>
.child1{
  width: 200px;
  height: 200px;
  background: rgb(127, 235, 159);
}
</style>