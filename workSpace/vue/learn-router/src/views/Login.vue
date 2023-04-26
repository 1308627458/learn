<template>
  <div>
    <input type="text" name="" id="">
    <input type="password" name="" id="">
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
  setup() {
    const router = useRoute()
    const login = () => {
      router.push({
       name: 'about',
       params:{id:123}
      }
      )
    }
    return {
      login
    }
  }
}
</script>

<style  scoped></style>
