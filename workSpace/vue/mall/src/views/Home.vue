<template>
  <!-- header -->
  <header class="home-header wrap" :class="{'active': state.headerActive}">
    <van-icon name="wap-nav" class="menu"/>
    <div class="header-search">
      <span class="app-name">kk商场</span>
      <router-link to="/product-list" class="search-title">多看一眼,就要爆炸</router-link>
    </div>
    <router-link to="/login" class="login">登录</router-link>
  </header>
  <!-- swiper -->
  <div class="text" style="height: 200vh;"></div>
  <!-- category -->
  <!-- good-list -->
  <!-- nav-bar -->
</template>

<script setup>

import { nextTick, reactive } from 'vue'
const state = reactive({
    headerActive: false,
})
// header的状态
nextTick(() => {
  
  document.body.addEventListener('scroll', () => {
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    scrollTop > 100 ? state.headerActive = true : state.headerActive = false
    
  })
})
</script>

<style lang="less" scoped>
@import '../assets/var.less';
.home-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  padding: 0 15px;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  justify-content: space-between;
  line-height: 50px;
  .menu{
    line-height: 50px;
    color: @primary;
  }
  &.active{
    background: @primary;
    .menu, .login{
      color: @fc;
    }
  }
  .header-search{
    display: flex;
    color: #232326;
    background: rgba(255,255,255,0.7);
    border-radius: 20px;
    padding: 5px 15px;
    margin: 10px 0;
    line-height: 20px;
    .app-name{
      padding: 0 10px;
      color: @primary;
      font-size: 20px;
      font-weight: bold;
      border-right: 1px solid #000;
      margin-right: 10px;
    }
    .search-title{
      font-size: 12px;
      color: #666;
    }
    
  }
  .login{
    color: @primary;
  }
}
</style>