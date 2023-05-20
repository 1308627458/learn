<template>
  <van-tabbar v-model="active" route="true">
    <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="qr" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="cart" :badge="cart.badge ? cart.badge : ''">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/store/cart.js'

const active = ref(0)
const cart = useCartStore()

onMounted(() => {
  cart.initBadge()
})



</script>

<style lang="less" scoped></style>