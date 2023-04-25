<template>
    <div>
        <h2>{{ counter }}</h2>
        <h2>{{ counter * 2 }}</h2>
        <h3>{{ square }}</h3>
        <button @click="add">+1</button>
        <button @click="sub">-1</button>
    </div>
</template>

<script>
// OptionsAPI 的缺点： 没有被使用的API依然会被打包进我们的项目 
export default {
    data() {  // vue 的实例对象
        return {
            counter: 0
        }
    },
    methods: {
        add() {
            this.counter++
        },
        sub() {
            this.counter--
        }
    },
    computed: {
        square() {
            return this.counter ** 2
        }
    },
    watch: {

    },
    created() {
        console.log('created');
    }
}
</script>

<style scoped></style>