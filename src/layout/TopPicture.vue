<template>
    <div class="top-picture relative" id="top">
        <div class="w-full h-full z-10 relative">

            <div class="container flex flex-col justify-end mx-auto h-full">
                <div class="flex flex-col lg:flex-row justify-end lg:pt-64 md:pt-40 pt-32 pb-8 lg:pb-12 lg:pb-24 xl:pb-48 lg:mx-4 mx-2">

                    <div class="flex flex-col w-full lg:w-6/12 items-start lg:text-left text-center" id="color-change">
                        <h1 class="w-full font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-4">
                            {{this.title}}</h1>
                        <p class="font-light text-md w-full sm:text-lg md:text-xl xl:text-2xl pb-8" v-if="this.comment">
                            {{this.comment}}</p>
                        <anim-button blue to="/register" class="self-center lg:self-start text-sm md:mt-6 mt-0 lg:mb-6 md:mb-10 mb-8 md:text-lg py-1 md:py-4 px-10 py-2 md:px-20">Register Now</anim-button>
                    </div>

                    <div class="w-full lg:w-6/12 flex flex-row justify-center lg:justify-end items-center lg:items-end my-6 lg:my-0">
                        <div class="flex items-start" v-if="this.$router.currentRoute.name === 'Home'">
                            <v-lazy-image class="w-8/12 mb-8 md:mb-0 md:w-full h-full mx-auto"
                                          :src="require('@/assets/headers/home-screens.png')"
                                          :src-placeholder="require('@/assets/headers/home-screens-lowres.png')"/>
                            <!--<span class="text-white text-sm md:text-lg">Trusted by:</span>
                            <img alt="Pitch logo" src="@/assets/logos/pitch.png" class="h-8 ml-4">-->
                        </div>
                    </div>

                </div>
                <div class="flex justify-center pb-8" v-if="this.$router.currentRoute.name === 'Home'">
                    <a href="#" v-scroll-to="'#next'">
                    <img alt="Arrow" src="@/assets/arrow-down.svg" style="height: 12px">
                    </a>
                </div>
            </div>
        </div>

        <slot></slot>

    </div>
</template>

<script>
    import AnimButton from '@/components/AnimButton'

    export default {
        name: 'TopPicture',
        components: {
            AnimButton
        },
        props: {
            title: String,
            comment: String,
            button: String
        },
        watch: {
            $route() {
                this.$nextTick(() => {

                    if (this.$router.currentRoute.name === 'About') {

                        document.getElementById('color-change').style.color = '#015887';
                    } else {

                        document.getElementById('color-change').style.color = 'white';
                    }
                })
            }
        },
        mounted() {

            if (this.$router.currentRoute.name === 'About') {

                document.getElementById('color-change').style.color = '#015887';
            } else {

                document.getElementById('color-change').style.color = 'white';
            }
        }
    }
</script>

<style scoped>

</style>
