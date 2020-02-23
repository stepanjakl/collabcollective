<template>
    <div class="app o">
        <navbar/>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
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
        filter: blur(4px);
        transition: filter 0.5s;
    }

    .v-lazy-image-loaded {
        filter: blur(0);
    }

    .no-blur {
        filter: blur(0) !important;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.25s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
