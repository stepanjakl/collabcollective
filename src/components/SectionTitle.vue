<template>
    <div class="flex flex-row items-center">
        <div class="container mx-auto">
            <span class="absolute w-full h-2px bg-cc-blue-light top-2 sm:title-dash-99 title-dash-94" style="top: 40px;"></span>
            <div class="sm:ml-20 ml-12">
                <h2 class="uppercase text-xs tracking-widest font-bold text-cc-blue-light">{{ this.title }}</h2>
            </div>
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
