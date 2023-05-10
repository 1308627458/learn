<template>
  <span class="support-icon" :class="iconCls"></span>
</template>

<script setup>
import { computed, defineProps, watchEffect } from 'vue'
const props = defineProps({
  size: {
    type: String,
    default: '1'
  },
  type: {
    type: String,
    default: '0'
  }
})
// console.log(props);
// const iconCls = computed(() => {
//   const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
//   return `icon-${props.size} ${classMap[props.type]}`
// })
const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
let iconCls = ''
watchEffect(() => {
  iconCls = `icon-${props.size} ${classMap[props.type]}`
})
</script>

<style lang="less" scoped>
@import '@/common/style/mixin.less';

.support-icon {
  display: inline-block;
  background-repeat: no-repeat;
}

.icon-1 {
  width: 12px;
  height: 12px;
  background-size: 100% 100%;

  &.decrease {
    .bg-image('decrease_1')
  }

  &.discount {
    .bg-image('discount_1')
  }

  &.special {
    .bg-image('special_1')
  }

  &.invoice {
    .bg-image('invoice_1')
  }

  &.guarantee {
    .bg-image('guarantee_1')
  }
}

.icon-2 {
  width: 16px;
  height: 16px;
  background-size: 100% 100%;

  &.decrease {
    .bg-image('decrease_2')
  }

  &.discount {
    .bg-image('discount_2')
  }

  &.special {
    .bg-image('special_2')
  }

  &.invoice {
    .bg-image('invoice_2')
  }

  &.guarantee {
    .bg-image('guarantee_2')
  }
}

.icon-3 {
  width: 12px;
  height: 12px;
  background-size: 100% 100%;

  &.decrease {
    .bg-image('decrease_3')
  }

  &.descount {
    .bg-image('discount_3')
  }

  &.special {
    .bg-image('special_3')
  }

  &.invoice {
    .bg-image('invoice_3')
  }

  &.guarantee {
    .bg-image('guarantee_3')
  }
}

.icon-4 {
  width: 16px;
  height: 16px;
  background-size: 100% 100%;

  &.decrease {
    .bg-image('decrease_4')
  }

  &.descount {
    .bg-image('discount_4')
  }

  &.special {
    .bg-image('special_4')
  }

  &.invoice {
    .bg-image('invoice_4')
  }

  &.guarantee {
    .bg-image('guarantee_4')
  }
}
</style>