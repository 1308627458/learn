<template>
  <div class="wrapper">
    <!-- 头部 -->
    <div class="header">
      <span class="iconfont icon-fenlei"></span>
      <div class="header_middlePart">
        <span class="iconfont icon-jindu_shalou"></span>
        <span class="iconfont icon-huohua"></span>
      </div>
      <span class="iconfont icon-yezi"></span>
    </div>

    <!-- 提示信息 -->
    <div class="hint">
      专注！ 专注！
    </div>

    <!-- 环形进度条 -->
    <div class="circle">
      <van-circle v-model:current-rate="currentRate" :rate="100" :stroke-width="60" size="240px" layer-color="#d0ce79"
        color="#8cc924" />
    </div>

    <div class="lable">

      <span>学习</span>
      <img src="" alt="">
    </div>
    <!-- 倒计时 -->
    <div class="time">
      <van-count-down :time="time" format="mm:ss" ref="countDown" :auto-start="false" />

    </div>
    <div class="button">
      <van-button type="primary" @click="start" size="small">开始</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const time = ref(60 * 60 * 1000);

const countDown = ref(null);

const start = () => {
  countDown.value.start();
};
</script>

<style lang="less" scoped>
.wrapper {
  background: #07ac9d;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    .iconfont{
      color: #fff;
    }
    .icon-fenlei{
      margin-left: 0.5rem;
    }
    .icon-yezi{
      margin-right: 0.5rem;
      text-align: center;
    }
    .header_middlePart{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 0.6rem;
      background: rgba(168, 168, 168,0.7);
      border-radius: 15px;
      box-sizing: border-box;
      .icon-jindu_shalou{
        width: 0.9rem;
        text-align: center;
        border-right: 1.5px solid #fff;
      }
      .icon-huohua{
        width: 0.9rem;
        font-size: 0.8rem;
        text-align: center;
      }

    }
  }

  .hint {
    width: 3rem;
    height: 1rem;
    margin: 1.5rem auto 0;
    text-align: center;
    color: #fff;
    font-size: 0.4rem;
  }

  .circle {
    margin: 1.2rem auto 0;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .lable {
    width: 100vw;
    height: 1rem;
    margin: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .time {
    width: 100vw;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .van-count-down {
      font-size: 2rem;
      color: #fff;
    }
  }

  .button {
    margin-top: 0.5rem;

    .van-button {
      width: 2.5rem;
      display: block;
      margin: 0 auto;
    }
  }


}</style>