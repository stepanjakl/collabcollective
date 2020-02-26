<template>
    <div class="p-4">
        <div class="flex w-full h-full bg-white flex flex-col">

            <div class="h-full p-8 text-center flex items-center">
                <p class="font-semibold text-md">"{{this.quote}}"</p>
            </div>

            <div class="w-full pl-6 py-8 bg-blue-600 flex flex-row nowrap shadow-xl items-center" style="align-self: flex-end; background-image: linear-gradient(to bottom left, #03547C, #3399FF)">
                <div class="pr-4 reference-logo">
                    <slot></slot>
                </div>
                <div class="w-full pr-4">
                    <p class="font-bold text-white text-md">{{this.name}}</p>
                    <p class="font-normal text-white text-sm">{{this.position}}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'CarouselReference',
        props: {
            quote: String,
            name: String,
            position: String
        }
    }
</script>

<style scoped>

</style>
