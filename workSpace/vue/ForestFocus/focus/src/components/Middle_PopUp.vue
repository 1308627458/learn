<template>
  <div class="PopUp-Wrapper ">

    <van-swipe>

      <van-swipe-item class="slide" v-for=" item in slideList" :key="item.id">
        <img :src="item.url" alt="">
        <h1>{{ item.title }}</h1>
        <p>{{ item.text }}</p>
      </van-swipe-item>


    </van-swipe>

    <van-button color="linear-gradient(to right, #059f92, #8cc924)" class="btn">
      立即解锁 ￥ 25.00
    </van-button>

  </div>
</template>

<script setup>

const slideList = [
  { id: 1, url: './src/assets/treesPic/shejiao.png', title: '社交功能', text: '与你的好友一起种植一棵树，彼此砥砺互相督促。还可以跟全球Forest用户一同竞赛，挑战自己能在排行榜到第几名！' },
  { id: 2, url: './src/assets/treesPic/binfen.png', title: '缤纷多样的树种', text: '你可以使用金币解锁更多可爱又各具特色的经典树种，让樱花，仙树与熊童子缤纷你的森林！' },
  { id: 3, url: './src/assets/treesPic/chengjiu.png', title: '成就系统', text: '在你专心的同时，一步步达成成就，获得更多额外奖励！' },
  { id: 4, url: './src/assets/treesPic/zuiai.png', title: '最爱组合', text: '保存多个自己常用的树种，时间与项目目标签组合，在各个专注情境下都能够一键开始种树！' },
  { id: 5, url: './src/assets/treesPic/tongji.png', title: '详细统计数据', text: '了解你的专注时间都花在什么地方，什么时候最有生产力，并帮助你记录你的手机使用情况，找出自己最佳的专注历程！' },
]



</script>

<style lang="less" scoped>
.PopUp-Wrapper {
  position: fixed;
  top: 4.5rem;
  z-index: 2;


  .slide {
    height: 8rem;
    border-radius: 10px;
    background: #fff;
    text-align: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 5rem;
    }

    h1 {
      text-align: center;
      font-size: 0.4rem;
      font-weight: bold;
      margin-top: 0.4rem;
    }

    p {
      margin: 0.3rem 0.4rem 0 0.4rem;
    }

  }

  .btn {
    margin-top: 0.6rem;
    margin-left: 3rem;
  }

}
</style>