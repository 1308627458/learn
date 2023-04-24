<template>
    <p>child</p>
    <h2>{{ message }}</h2>
</template>

<script setup>
const props = defineProps({
    message: String   // 从父组件接收的类型
    
})
console.log(props);
</script>

<style lang="scss" scoped>

</style>