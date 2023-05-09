<template>
  <div class="header">
    <div class="content-wrapper">

      <div class="avatar">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
      </div>

      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name"> 店铺名字</span>
        </div>
        <div class="description">蜂鸟专送/38分钟送达</div>
        <div class="support">
          <SupportIcon size="1" type="2" />
          <span class="text">在线支付满10减9</span>
        </div>
      </div>


      <div class="support-count">
        <span class="count">5个</span>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>

    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span
        class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
      <i class="iconfont icon-arrow-right"></i>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script setup>
import SupportIcon from '@/components/support-icon/support-icon.vue'
import { ref } from 'vue';

const bg = ref('url(http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg)')


</script>

<style lang="less" scoped>
@import '@/common/variable.less';
@import '@/common/style/mixin.less';

.header {
  position: relative;
  overflow: hidden;
  color: @color-white;
  background: @color-background-ss;

  .content-wrapper {
    display: flex;
    padding: 24px 12px 18px 24px;
    position: relative;

    .avatar {
      flex: 0 0 64px;
      margin-right: 16px;

      img {
        width: 100%;
        border-radius: 2px;
      }
    }

    .content {
      flex: 1;

      .title {
        display: flex;
        margin-bottom: 8px;

        .brand {
          width: 30px;
          height: 18px;
          // background-image: url(./brand@2x.png);
          .bg-image('brand');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          margin-right: 6px;
        }

        .name {
          font-size: @fontsize-large;
          font-weight: bold;
          line-height: 1;
        }
      }

      .description {
        font-size: @fontsize-small;
        margin-bottom: 8px;
      }

      .support {
        display: flex;
        align-items: center;

        &-icon {
          margin-right: 4px;
        }

        .text {
          font-size: @fontsize-small-s;
        }
      }
    }

    .support-count {
      position: absolute;
      right: 21px;
      bottom: 14px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      background: @color-background-sss;
      border-radius: 14px;
      display: flex;

      .count {
        font-size: @fontsize-small-s;
        align-items: center;

        .icon-arrow-right {
          font-size: @fontsize-small-s;
          margin-left: 2px;
        }
      }
    }
  }

  .bulletin-wrapper {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 0 8px;
    background: @color-background-sss;

    .bulletin-title {
      flex: 0 0 22px;
      height: 12px;
      .bg-image('bulletin');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-right: 4px;
    }

    .bulletin-text {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: @fontsize-small-s;
    }

    .icon-arrow-right {
      flex: 0 0 10px;
      font-size: @fontsize-small-s;
    }
  }

  .bg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-image: v-bind(bg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    filter: blur(10px);
    z-index: -1;
  }
}</style>