<template>
  <Transition name="fade">
  <div class="header-detail">
    <div class="detail-wrapp">
      <div class="detail-main">
        <h1 class="name">{{sellerData.name}}</h1>
        <div class="star-wrapper">
          ⭐️⭐️⭐️⭐️⭐️
        </div>
        <div class="title">
          <span>优惠信息</span>
        </div>
        <ul class="supports">
          <li class="supports-item" v-for="item in sellerData.supports" key="item.type">
            <supportIcon size="2" :type="item.type"></supportIcon>
            <span>{{ item.description }}</span>
          </li>
        </ul>
        <div class="title">
          <span>商家公告</span>
        </div>
        <div class="bulletin">
          <p class="content">
            {{ sellerData.bulletin }}
          </p>
        </div>
      </div>
    </div>
    <div class="detail-close" @click.stop="hide">
      <i class="iconfont icon-close-bold"></i>
    </div>
  </div>
  </Transition>
</template>

<script setup>
import { watch ,ref } from 'vue'
import supportIcon from '../support-icon/support-icon.vue'

  // 创建一个事件，名为 hidden
  const emits = defineEmits(['hidden'])
  const hide = () => {
    // 发散出去一个事件'hidden',且携带一个参数值false
    emits('hidden', false)
  }
  const props = defineProps({
    sellerData: Object
  })
  let sellerData = ref({})
  watch (
    () => props.sellerData,
    (newVal) => {
      sellerData.value = newVal
    }
  )
  // console.log(props.sellerData);
</script>

<style lang="less" scoped>
@import '@/common/variable.less';

.header-detail {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: @color-background-s;
  color: @color-white;
  backdrop-filter: blur(10px); // 页面虚化{
  &.fade-enter-from, &.fade-leave-to{
    opacity: 0;
    background: @color-background;
  }
  &.fade-enter-active, &.fade-leave-active{
    transition: all 0.5s ease;
  }
  .detail-wrapp {
    width: 100%;
    min-height: 100%;
    overflow: auto;

    .detail-main {
      margin-top: 64px;
      padding-bottom: 64px;

      .name {
        text-align: center;
        font-size: @fontsize-large;
        font-weight: bold;
        line-height: 16px
      }

      .star-wrapper {
        padding: 2px 0;
        margin-top: 8px;
        text-align: center;
      }

      .title {
        width: 80%;
        margin: 28px auto 24px auto;
        text-align: center;
        display: flex;
        align-items: center;

        &::before {
          content: '';
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          flex: 1;
        }

        &::after {
          content: '';
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          flex: 1;
        }

        span {
          font-size: @fontsize-medium;
          padding: 0 12px;
          font-weight: bold;
        }
      }

      .supports {
        width: 80%;
        margin: 0 auto;

        &-item {
          display: flex;
          margin-bottom: 12px;
          padding: 0 12px;

          span {
            line-height: 16px;
            font-size: @fontsize-small;
            margin-left: 6px;
          }
        }
      }

      .bulletin {
        width: 80%;
        margin: 0 auto;

        .content {
          line-height: 24px;
          padding: 0 12px;
          font-size: @fontsize-small;
        }
      }
    }
  }

  .detail-close {
    position: fixed;
    width: 30px;
    height: 30px;
    bottom: 30px;
    left: 50%;
    margin-left: -15px;
  }

  .icon-close-bold {
    font-size: @fontsize-large-xxxx;
  }
}</style>