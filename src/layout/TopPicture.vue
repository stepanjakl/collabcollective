<template>
    <div class="top-picture relative" id="top">
        <div class="w-full h-full z-10 relative">
            <div class="container flex flex-col justify-end mx-auto h-full">
                <div class="flex flex-col md:flex-row justify-end pt-56 lg:pt-64 pb-4 md:pb-12 lg:pb-24 xl:pb-48">
                    <div class="flex flex-col w-full md:w-7/12 items-start md:text-left text-center" id="color-change">
                        <h1 class="w-full font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-4">
                            {{this.title}}</h1>
                        <p class="font-light text-md sm:text-lg md:text-xl xl:text-2xl pb-8" v-if="this.comment">
                            {{this.comment}}</p>
                        <button class="btn btn-blue rounded-sm self-center md:self-start text-sm md:text-lg py-2 md:py-4 px-10 md:px-20">
                            Register Now
                        </button>
                    </div>
                    <div class="w-full md:w-5/12 flex flex-row justify-center md:justify-end items-center md:items-end my-6 md:my-0">
                        <div class="flex items-center">
                            <span class="text-white text-sm md:text-lg">Trusted by:</span>
                            <img src="@/assets/logos/pitch.png" class="h-8 ml-4">
                        </div>
                    </div>
                </div>
                <div class="flex justify-center pb-8">
                    <img src="@/assets/arrow-down.svg" style="height: 12px">
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TopPicture',
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
