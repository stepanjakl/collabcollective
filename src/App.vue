<template>
    <div class="app o">
        <Navbar/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import Footer from '@/components/Footer'

    export default {
        name: 'App',
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style>
    *, html {
        font-family: 'Open Sans' !important;
    }

    .o, .o > *, .o * {
        outline: red solid thin;
    }
</style>
