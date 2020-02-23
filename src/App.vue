<template>
    <div class="app o">
        <navbar/>
        <router-view/>
        <page-footer/>
    </div>
</template>

<script>
    import Navbar from '@/layout/Navbar'
    import PageFooter from '@/layout/PageFooter'

    export default {
        name: 'App',
        components: {
            Navbar,
            PageFooter
        }
    }
</script>

<style>
    *, html {
        font-family: 'Open Sans' !important;
    }

    /*.o, .o > *, .o * {
        outline: red solid thin;
    }*/
    button.blue, .btn-blue {
        padding: 8px 36px;
        color: white;
        background-color: #3399ff;
        border-radius: 6px;
    }

    button.blue:hover, .btn-blue:hover {
        background-color: #63b1ff;
    }

    .v-lazy-image {
        filter: blur(10px);
        transition: filter 0.7s;
    }

    .v-lazy-image-loaded {
        filter: blur(0);
    }

    .no-blur {
        filter: blur(0) !important;
    }
</style>
