<template>
  <!-- header -->
  <header class="home-header wrap" :class="{ 'active': state.headerActive }">
    <van-icon name="wap-nav" class="menu" />
    <div class="header-search">
      <span class="app-name">kk商场</span>
      <router-link to="/product-list" class="search-title">多看一眼,就要爆炸</router-link>
    </div>
    <router-link to="/login" class="login" v-if="!state.isLogin">登录</router-link>
    <router-link to="/user" v-else ><van-icon name="contact" color="#1baeae"/></router-link>
  </header>
  <!-- swiper -->
  <Swiper :list="state.carousels"></Swiper>
  <!-- category -->
  <div class="category-list">
    <div v-for="item in state.categoryList" :key="categoryId" @click="tips">
      <img :src="item.imgUrl" alt="">
      <span>{{ item.name }}</span>
    </div>
  </div>
  <!-- good-list -->
  <GoodsList :newGoodses="state.newGoodses" title="新品上线"></GoodsList>
  <GoodsList :newGoodses="state.hotGoodses" title="热门商品"></GoodsList>
  <GoodsList style="padding-bottom: 100px;" :newGoodses="state.recommendGoodses" title="最新推荐"></GoodsList>

  <!-- nav-bar -->
  <NavBar></NavBar>
</template>

<script setup>

import Swiper from '@/components/Swiper.vue'
import { nextTick, reactive } from 'vue'
import { getHomeData } from '../api/service/home.js'
import { onMounted } from 'vue';
import { showDialog } from 'vant';
import GoodsList from '@/components/GoodsList.vue'
import NavBar from '@/components/NavBar.vue'
const state = reactive({
  isLogin: false,
  headerActive: false,
  carousels: [],
  categoryList: [
    {
      name: '新蜂超市',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
      categoryId: 100001
    }, {
      name: '新蜂服饰',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
      categoryId: 100003
    }, {
      name: '全球购',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
      categoryId: 100002
    }, {
      name: '新蜂生鲜',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
      categoryId: 100004
    }, {
      name: '新蜂到家',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
      categoryId: 100005
    }, {
      name: '充值缴费',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
      categoryId: 100006
    }, {
      name: '9.9元拼',
      imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
      categoryId: 100007
    }, {
      name: '领劵',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
      categoryId: 100008
    }, {
      name: '省钱',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100009
    }, {
      name: '全部',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100010
    }
  ],
  newGoodses: [],
  hotGoodses: [],
  recommendGoodses: []
})

// 在页面加载的时候发接口请求
onMounted(async () => {
  const token = localStorage.getItem('token')
  if (token) {
    state.isLogin = true
  }
  const { data } = await getHomeData()
  console.log(data);
  state.carousels = data.carousels
  state.newGoodses = data.newGoodses
  state.hotGoodses = data.hotGoodses
  state.recommendGoodses = data.recommendGoodses
})



// header的状态
nextTick(() => {
  document.body.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    scrollTop > 100 ? state.headerActive = true : state.headerActive = false

  })
})

const tips = () => {
  showDialog({ message: '不能看了，因为再多看一眼就要爆炸' });
}

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

  .menu {
    line-height: 50px;
    color: @primary;
  }

  &.active {
    background: @primary;

    .menu,
    .login {
      color: @fc;
    }
  }

  .header-search {
    display: flex;
    color: #232326;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    padding: 5px 15px;
    margin: 10px 0;
    line-height: 20px;

    .app-name {
      padding: 0 10px;
      color: @primary;
      font-size: 20px;
      font-weight: bold;
      border-right: 1px solid #000;
      margin-right: 10px;
    }

    .search-title {
      font-size: 12px;
      color: #666;
    }

  }

  .login {
    color: @primary;
  }
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;

    img {
      width: 36px;
      height: 36px;
      margin: 13px auto 8px auto;
    }
  }
}</style>