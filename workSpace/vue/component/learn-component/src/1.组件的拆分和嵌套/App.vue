<template>
    <div class="app">
        <!-- <header>header</header> -->
        <Header></Header>

        <div class="main">
           <Main></Main>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Main from './Main.vue';
    import Footer from './Footer.vue';
    export default {
        components:{
            Header,
            Main,
            Footer
        }
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.app{
    text-align: center;
}


</style>