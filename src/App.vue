<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>

<template>
    <Header />
    <router-view></router-view>
    <Footer />
</template>

<style>
    :root {
        --color-1: #181a20;
        --color-2: #BF935E;
        --color-3: #D9AF62;
        --color-4: #BF9A2C;
        --color-5: #593B02;
        --color-6: #593C18;
    }

    * {
        padding: 0;
        margin: 0;
    }

    html, body {
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
    }

    a {
        text-decoration: none !important;
    }
</style>
