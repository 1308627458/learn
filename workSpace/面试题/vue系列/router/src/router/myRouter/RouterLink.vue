<template>
  <a :href="'#' + to">
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

