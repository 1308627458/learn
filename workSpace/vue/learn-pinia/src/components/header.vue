<template>
  <div class="header">
   <div class="logo-wrapper">
    <img src="@/assets/logo.png" alt="">
   </div>
   <div class="user-info">
    你好<span>{{ userInfo.name }}</span>
    <a href="#" @click="changeUser">切换用户</a>
   </div>
  </div>
</template>

<script setup>


import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const {userInfo} = storeToRefs(userStore); // 仅仅是代理出来的一个副本
const changeUser = (name) => {
  // 修改'@/store/user' 这个仓库的数据
  //  console.log(123);
  // userStore.userInfo.name = '大傻'
  userStore.changeUserInfo('sb')
}



</script>

<style  scoped>
.header{
  display: flex;
  height: 80px;
  background: #da2828;
  padding:  0 10%;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  justify-content: space-between;
}

.logo-wrapper{
  width: 70px;
  height: 70px;
  
}
.logo-wrapper img{
  width: 100%;
}
a{
  text-decoration: none;
  margin-left: 30px;
}
</style>