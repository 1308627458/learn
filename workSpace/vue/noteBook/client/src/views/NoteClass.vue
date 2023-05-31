<template>
  <div class="note-class-wrapper">
    <div class="note-class" :class="{'hide': state.isMenuShow}">
      <header>
        <div @click="() => state.isMenuShow = true">
          <van-icon name="wap-nav" size="20px" />
        </div>
        <div>
          <van-icon name="like-o" size="20px" />
          <van-icon name="search" size="20px" />
        </div>
      </header>
      <section>
        <div class="note-item" 
        v-for="(item,index) in noteClassList"
        :key="index"
        :style="`background-image:url(${item.img})`">
          <span class="title">{{ item.title }}</span>
        </div>
      </section>

    </div>
    <!-- Menu -->
      <Menu class="menu" @hidden="hideMenu" :class="{'active': state.isMenuShow}"></Menu>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Menu from '@/components/Menu.vue'
const noteClassList = [
  { img: require("@/assets/img/raw_1512446214.jpeg"), title: "美食" },
  { img: require("@/assets/img/raw_1512446225.jpeg"), title: "旅行" },
  { img: require("@/assets/img/raw_1512446234.jpeg"), title: "汽车" },
  { img: require("@/assets/img/raw_1512446243.jpeg"), title: "时尚" },
  { img: require("@/assets/img/raw_1512446251.jpeg"), title: "科技" }
]
const state = reactive({
  isMenuShow: false,
})

const hideMenu = (e) => {
  state.isMenuShow = e
}
</script>

<style lang="less" scoped>
.note-class-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .note-class {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    position: absolute;
    transform: translateX(0%);
    transition: transform 0.3s;
    padding: 0 0.5866rem;
    box-sizing: border-box;
    &.hide{
      transform: translateX(100%);
    }
    header {
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      line-height: 1.2rem;
      margin: 10px 0;

      .van-icon-like-o {
        margin-right: 10px;
      }
    }

    section {
      width: 100%;

      .note-item {
        height: 3.2rem;
        border-radius: 0.3rem;
        margin-bottom: 0.64rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        box-shadow: 0 0 10px 2px #ccc;
        overflow: hidden;

        .title {
          color: #fff;
          font-size: 0.5333rem;
          text-align: center;
          display: block;
          margin-top: 0.5333rem;
        }
      }
    }
  }
  .menu{
    width: 100%;
    height: 100vh;
    position: absolute;
    transform: translateX(-100%);
    transition: transform 0.3s;
    &.active{
    transform: translateX(0%);
    }
  }
}
</style>