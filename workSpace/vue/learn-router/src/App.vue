<template>
 <div>
  <router-link to="/home">首页</router-link> |
  <router-link to="/about">关于</router-link> |
  <router-link to="/category">分类</router-link>

 </div>

 <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
 
}
</script>

<style>

</style>
