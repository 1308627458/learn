<template>
  <div>
    <p>category page</p>
    <button @click="goAbout">goAbout</button>

  </div>
</template>

<script>
import { useRouter } from 'vue-router';
  export default {
    setup() {
      // 编程式路由跳转 
      const router = useRouter()
      // console.log(router);
      const goAbout = () => {
        router.push('/about');
      }

      return {
        goAbout
      }
    }
  }
</script>

<style  scoped>

</style>