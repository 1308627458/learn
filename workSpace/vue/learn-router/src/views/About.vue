<template>
  <div>
   <h2>about page</h2>
   <!-- <p>登录页面传给我的参数为： {{ $route.query.name }} -- {{ $route.query.age }}</p> -->
   <p>登录页面传给我的参数为： {{ $route.params.id}} </p>

  </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
setup () {
  const route = useRoute()
  // console.log(route.query);
  console.log(route.params);
}
}
</script>

<style  scoped></style>