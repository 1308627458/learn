<template>
 <div class="SortWrapper ">
  <div class="top">
    <h1>WELCOME TO THE FOREST</h1>
  </div>
  <ul class="itemWrapper">
    <li class="item" @click="goToForest"><span class="iconfont icon--"></span><span class="text">森林</span></li>
    <li class="item"><span class="iconfont icon-licheng"></span><span class="text">时间历程</span></li>
    <li class="item"><span class="iconfont icon-biaoqian"></span><span class="text">项目标签</span></li>
    <li class="item"><span class="iconfont icon-31haoyou"></span><span class="text">好友</span></li>
    <li class="item"><span class="iconfont icon-chengjiu2"></span><span class="text">成就</span></li>
    <li class="item"><span class="iconfont icon-shangdian"></span><span class="text">商店</span></li>
    <li class="item"><span class="iconfont icon-shezhi1"></span><span class="text">设置</span></li>
  </ul>
 </div>

</template>

<script setup>
import router from '../router';

const goToForest = () => {
  router.push('/Forest')
}
</script>

<style lang="less" scoped>
.SortWrapper{
  width: 45%;
  height: 100vh;
  background:#059f92;
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  z-index: 2;
  .top{
    // margin-top: 2rem;
    height: 15%;
    background: linear-gradient(#72e5db , #059f92);
    overflow: auto;
    h1{
      margin-top: 0.3rem;
      color: #e6e6e6;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial;
      font-size: 0.7rem;
      letter-spacing: 2px;
      text-align: center;
      text-shadow: 1px -1px #fff, -1px 1px #999, -4px 4px #80808080 ;
    }
  }
  .itemWrapper{
    display: flex;
    flex-direction: column;
    color: #fff;
    .item{
      height: 1.4rem;
      display: flex;
      align-items: center;
      .iconfont{
        margin: 0.6rem ;
        line-height: 1.4rem;
        font-size: 0.5rem;
      }
      .icon--{
        font-size: 0.54rem;
      }
    }
    .text{
      font-size: 0.35rem;
    }
  }
}
</style>