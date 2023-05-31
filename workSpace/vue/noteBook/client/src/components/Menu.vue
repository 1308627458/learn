<template>
  <div class="menu-wrap">
    <div class="back" @click="hideMenu">
      <van-icon name="arrow-left" size="26px" />
    </div>
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
        <van-icon name="revoke" size="0.4rem" />
        <span>退出登入</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['hidden'])
const hideMenu = () => {
  emit('hidden', false)
}
</script>

<style lang="less" scoped>
.menu-wrap {
  background-color: #e8e6e8;
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