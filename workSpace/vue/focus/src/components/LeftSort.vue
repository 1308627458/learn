<template>
 <div class="SortWrapper ">
  <div class="top">

  </div>
  <ul class="itemWrapper">
    <li class="item"><span class="iconfont icon--"></span>森林</li>
    <li class="item"><span class="iconfont icon-licheng"></span>时间历程</li>
    <li class="item"><span class="iconfont icon-biaoqian"></span>项目标签</li>
    <li class="item"><span class="iconfont icon-31haoyou"></span>好友</li>
    <li class="item"><span class="iconfont icon-chengjiu2"></span>成就</li>
    <li class="item"><span class="iconfont icon-shangdian"></span>商店</li>
    <li class="item"><span class="iconfont icon-shezhi1"></span>设置</li>
  </ul>
 </div>

</template>

<script setup>
// background: rgb(133, 234, 172);
// #059f92
</script>

<style lang="less" scoped>
.SortWrapper{
  width: 45%;
  height: 100vh;
  background:#059f92;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  .top{
    height: 10%;
    background: rgb(87, 222, 164);
  }
  .itemWrapper{
    display: flex;
    flex-direction: column;
    color: #fff;
    .item{
      height: 1.4rem;
      .iconfont{
        margin: 0.6rem ;
        line-height: 1.4rem;
        font-size: 0.5rem;
      }
    }
  }
}
</style>