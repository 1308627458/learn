<template>
  <div class="input-group">
    <input type="text" v-model="value" >
    <button @click="handle">添加</button>
  </div>
</template>

<script >
import { ref } from 'vue'

export default {
 
  setup(props,ctx) {
    // console.log(ctx);
    const value = ref('')
    const handle = () => {
      ctx.emit('add', value.value)
    }
    return {
      value,
      handle,
    }
  }
}
</script>

<style scoped>
.input-group{
  width: 100%;
  display: flex;
}
</style>

