<template>
    <div class="app o">
        <navbar/>
        <router-view/>
        <!--<div class="container mx-auto">
            <router-view/>
        </div>-->
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
