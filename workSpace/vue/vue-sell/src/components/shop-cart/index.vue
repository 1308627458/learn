<template>
  <div class="shop-cart">
    <div class="content-left">
      <div class="logo-wrapper">
        <div class="logo" :class="{ 'hightlight': selectFoods.length }">
          <i class="iconfont icon-cart" :class="{ 'hightlight': selectFoods.length }"></i>
        </div>
        <div class="num" v-show="num > 0">{{ num }}</div>
      </div>
      <div class="price" :class="{'hightlight' : price > 0}">{{ price }}</div>
      <div class="desc">另需配送费4元</div>
    </div>
    <div class="content-right">
      <div class="pay">去结算</div>
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  selectFoods: Array
})
const { selectFoods } = toRefs(props)

const num = computed(() => {
  let num = 0
  props.selectFoods.forEach(item => {
    num += item.count
  })
  return num
})

const price = computed(() => {
  let price = 0
  props.selectFoods.forEach(item => {
    price += item.count * item.price
  })
  return price
})
</script>


<style lang="less" scoped>
@import '@/common/variable.less';

.shop-cart {
  width: 100%;
  height: 100%;
  display: flex;
  background: @color-background;
  color: @color-light-grey;

  .content-left {
    flex: 1;
    display: flex;

    .logo-wrapper {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #141d27;
      position: relative;
      top: -10px;
      padding: 6px;
      box-sizing: border-box;
      margin: 0 12px;

      .logo {
        width: 100%;
        height: 100%;
        background: @color-dark-grey;
        border-radius: 50%;
        text-align: center;

        &.hightlight {
          background: @color-blue;
        }

        .icon-cart {
          line-height: 44px;
          font-size: @fontsize-large-xxx;
          color: #80858a;

          &.hightlight {
              color: @color-white;
            }
        }
        
      }

      .num {
        position: absolute;
        top: 0;
        right: 0;
        width: 24px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: @fontsize-small-s;
        font-weight: bold;
        color: @color-white;
        background: @color-red;
        border-radius: 16px;
      }
    }

    .price {
      line-height: 48px;
      padding-right: 12px;
      border-right: 1px solid rgba(255, 255, 255, 0.3);
      font-size: @fontsize-large;
      font-weight: 700;

      &.hightlight {
        color: @color-white;
      }
    }

    .desc {
      line-height: 48px;
      font-size: @fontsize-small-s;
      padding-left: 12px;
    }
  }

  .content-right {
    flex: 0 0 105px;

  }
}</style>