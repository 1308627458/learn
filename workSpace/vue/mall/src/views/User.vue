<template>
  <Header title="我的" />
  <div class="menu-wrap">
    <!-- 头像 -->
    <section class="header">
      <div class="avatar">
        <img src="https://img1.baidu.com/it/u=3684595749,3996659789&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
      </div>
      <p class="user">小新</p>
    </section>

    <div class="settingg">
      <div class="set-item">
        <van-icon name="user-o" size="0.4rem" />
        <span>个人主页</span>
      </div>

      <div class="set-item">
        <van-icon name="bullhorn-o" size="0.4rem" />
        <span>通知</span>
      </div>

      <div class="set-item">
        <van-icon name="setting-o" size="0.4rem" />
        <span>设置</span>
      </div>


      <div class="set-item">
        <van-icon name="service-o" size="0.4rem" />
        <span>联系客服</span>
      </div>
  
      <div class="set-item">
        <van-icon name="star-o" size="0.4rem" />
        <span>收藏</span>
      </div>
      
      <div class="set-item" @click="back">
        <van-icon name="revoke" size="0.4rem" />
        <span>退出登入</span>
      </div>

    </div>
  </div>
  <NavBar></NavBar>
</template>

<script setup>
import Header from '../components/Header.vue';
import NavBar from '@/components/NavBar.vue'
import router from '../router';

const back = () => {
  router.push({ path: '/login'})
}
</script>

<style lang="less" scoped>
.menu-wrap {
  padding: 1.4rem;
  box-sizing: border-box;

  .back {
    position: absolute;
    top: 15px;
    left: 15px;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 10px;

      img {
        width: 100%;
      }
    }

    .user {
      color: #101010;
      font-size: 0.373333rem;
    }
  }

  .settingg {
    margin-top: 1rem;
    padding-left: 30%;
    .set-item {
      height: 1.2rem;
      line-height: 1.2rem;

      span {
        font-size: 0.4rem;
        color: #101010;
        margin-left: 10px;
      }
    }
  }
}</style>