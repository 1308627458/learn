<template>
  <div>
<h2>{{ message }}</h2>
<input type="text" v-model="message">
  </div>
</template>

<script>
import { ref } from 'vue';
import debounceRef from './hook/useDebounceRef.js'
export default {
  setup () {
    const message = ref('Hello world')

    return {
      message
    }
  }
}
</script>

<style  scoped>

</style>