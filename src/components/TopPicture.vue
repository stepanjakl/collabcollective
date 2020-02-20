<template>
    <div class="top-picture relative z-0">

        <slot></slot>

        <div class="w-full h-full absolute top-0">
            <div class="container flex flex-col justify-end mx-auto h-full">
                <div class="flex flex-row justify-end pb-48">
                    <div class="flex flex-col w-7/12 items-start">
                    <h1 class="font-semibold text-white text-5xl pb-4">{{this.title}}</h1>
                    <p class="font-light text-white text-xl pb-8" v-if="this.comment">{{this.comment}}</p>
                    <button class="btn btn-blue rounded-none py-4 px-20">Register Now</button>
                    </div>
                    <div class="w-5/12">
                        <span>Trusted by:</span>
                    </div>
                </div>
                <div class="flex justify-center pb-8">
                    <img src="@/assets/arrow-down.svg" style="height: 12px">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'TopPicture',
        props: {
            title: String,
            comment: String,
            button: String
        }
    }
</script>

<style scoped>
</style>
