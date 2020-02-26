<template>
    <div class="app o">
        <navbar v-if="this.showNav"/>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <page-footer v-if="this.showFooter"/>
    </div>
</template>

<script>
    import Navbar from '@/layout/Navbar'
    import PageFooter from '@/layout/PageFooter'

    export default {
        name: 'App',
        data() {
            return {
                showNav: true,
                showFooter: true
            }
        },
        components: {
            Navbar,
            PageFooter
        },
        watch: {
            $route() {
                this.$nextTick(() => {

                    const name = this.$router.currentRoute.name;

                    if (name == 'Login' || name == 'Register') {

                        this.showNav = false;
                        this.showFooter = false;

                    } else {

                        this.showNav = true;
                        this.showFooter = true;

                    }
                })
            }
        },
        mounted() {
            const name = this.$router.currentRoute.name;

            if (name == 'Login' || name == 'Register') {

                this.showNav = false;
                this.showFooter = false;

            } else {

                this.showNav = true;
                this.showFooter = true;

            }
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
