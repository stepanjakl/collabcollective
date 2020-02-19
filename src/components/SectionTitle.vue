<template>
    <div class="flex flex-row items-center">
        <span class="absolute w-full h-2px bg-cc-blue-light" style="transform: translateX(-100%)"></span>
        <div class="ml-20">
            <h2 class="uppercase text-xs tracking-widest font-bold text-cc-blue-light">{{ this.title }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SectionTitle",
        props: {
            title: String
        }
    }
</script>

<style scoped>

</style>
