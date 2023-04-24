<template>
    <p @click="onChange">parent change</p>
    <Child :message="msg"/>
</template>

<script  setup>
import Child from './Child.vue'
import { reactive, ref } from 'vue'
 
let msg = ref ('给子组件的数据')   // ref 常用于原始类型的响应式

const onChange = () => {
    msg.value = '给子组件的数据，哈哈哈哈哈'
    console.log(msg.value);
}

const state = reactive ({  // reactive 用于引用类型的响应式
    count:0 
})
</script>

<style scoped></style>