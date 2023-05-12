<template>
  <div class="cart-control">
    <Transition name="move">
      <div class="cart-decrease" v-show="count > 0" @click="decreaseCart">
        <i class="iconfont icon-jianshao"></i>
      </div>
    </Transition>
    <div class="cart-count" v-show="count > 0">{{ props.food.count }}</div>

    <div class="cart-add" @click="addCart">
      <i class="iconfont icon-add"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue';


const props = defineProps({
  food: Object
})

const decreaseCart = () => props.food.count--

props.food.count = 0
let { count } = toRefs(props.food)
const addCart = () => {
  // console.log(props.food) ;
  props.food.count++

}
</script>

<style lang="less" scoped>
@import '@/common/variable.less';

.cart-control {
  display: flex;
  align-items: center;

  .cart-decrease,
  .cart-add {
    opacity: 1;
    padding: 6px;
    color: @color-blue;

    .iconfont {
      font-size: @fontsize-large-xxx;
    }
  }

  .cart-decrease {
    transform: translate3d(0, 0, 0);


    &.move-enter-from,
    &.move-leave-to {
      opacity: 0;
      transform: translate3d(24px, 0, 0);

      .iconfont {
        transform: rotate(180deg);
      }
    }

    &.move-enter-active,
    &.move-leave-active {
      transition: all 0.4s linear;
    }
  }

  .cart-count {
    font-size: @fontsize-small-s;
    color: rgb(147, 153, 159);
  }
}</style>