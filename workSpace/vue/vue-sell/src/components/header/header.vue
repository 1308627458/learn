<template>
  <div class="header"  @click="detailShow = true">
    <div class="content-wrapper" >

      <div class="avatar">
        <img :src="sellerData.avatar" alt="">
      </div>

      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name"> {{ sellerData.name }}</span>
        </div>
        <div class="description">{{sellerData.description}}/38分钟送达</div>
        <div class="support" v-if="sellerData.supports">
          <SupportIcon size="1" :type="sellerData.supports[0].type" />
          <span class="text">{{  sellerData.supports[0].description}}</span>
        </div>
      </div>


      <div class="support-count" v-if="sellerData.supports">
        <span class="count">{{sellerData.supports.length}}个</span>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>

    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span
        class="bulletin-text">{{ sellerData.bulletin }}</span>
      <i class="iconfont icon-arrow-right"></i>
    </div>
    <div class="bg"></div>

    <headerDetail :sellerData="sellerData" v-show="detailShow" @hidden="handle"></headerDetail>
  </div>
  
</template>

<script setup>
import SupportIcon from '@/components/support-icon/support-icon.vue'
import {  ref, toRefs, watch, } from 'vue';
import headerDetail from '@/components/header-detail/header-detail.vue'

const bg = ref('')
const props = defineProps({
  seller: {
    type: Object,
    default: () => { }

  }
})

const { seller } = toRefs(props)

const sellerData = ref({})
watch(
  () => props.seller,
  (newVal) =>{
    console.log(newVal);
    sellerData.value = newVal
    bg.value = `url(${newVal.avatar})`
  }
)

let detailShow = ref(false)
const handle = (e) => {
  // detailShow.value = false
  detailShow.value = e
}

console.log(seller);



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
}
</style>