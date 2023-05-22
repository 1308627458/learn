<template>
  <div>
    father--{{ msg }} -- {{ count }} 
    <button @click="">father</button>
  </div>
<Son></Son>
</template>

<script setup>
import Son from '@/components/Son.vue'
const props = defineProps({
  msg: String,
  count: Number
}) 



</script>

<style lang="scss" scoped>

</style>