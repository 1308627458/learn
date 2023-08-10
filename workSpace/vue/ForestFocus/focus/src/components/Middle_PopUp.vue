<template>
  <div class="PopUp-Wrapper ">
    <div class="PopUp-Header">
      <span>倒计时</span>
      <!-- <div class="switch">
        <span class="iconfont icon-jindu_shalou"></span>
        <span class="iconfont icon-naozhong_o"></span>
      </div> -->

      <!-- <van-switch v-model="checked"> -->
      <van-switch >
        <template #node>
          <div class="icon-wrapper">
            <!-- <van-icon :name="checked ? 'success' : 'cross'" /> -->
            <span class="iconfont icon-jindu_shalou"></span>
            <span class="iconfont icon-naozhong_o"></span>
          </div>
        </template>
      </van-switch>


      <span>正计时</span>
    </div>

    <div class="PopUp-body">
      <span class="iconfont icon-huohua"></span>
      <span>深度专注</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.PopUp-Wrapper {
  position: fixed;
  top: 4.5rem;
  left: 1.5rem;
  width: 7rem;
  height: 8rem;
  border-radius: 10px;
  background: #fff;
  z-index: 2;


  .PopUp-Header {
    display: flex;
    background: #2d9ece;
    height: 1.5rem;
    justify-content: space-around;
    align-items: center;
    color: #fff;

    .switch {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 0.7rem;
      background: rgba(130, 117, 117, 0.3);
      border-radius: 15px;
    }

  }
}

</style>