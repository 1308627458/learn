<template>
  <div>
    about
    <button @click="goHome">to home</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()


const goHome = () => {
  router.push('/home')
}
</script>

<style lang="css" scoped>

</style>