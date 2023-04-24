<template>
    <div class="main">
        <MainBanner/>
    </div>
</template>

<script>
import MainBanner from './MainBanner.vue';
export default {
    components: {
        MainBanner
    }
}
</script>

<style >
.main {
    height: calc(100vh - 120px);
    background-color: lightblue;
}

.header {
    height: 100px;
}
</style>