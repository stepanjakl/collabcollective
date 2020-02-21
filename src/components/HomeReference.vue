<template>
    <div class="home-reference lg:w-1/3 w-full lg:m-8 mt-0 mb-0 bg-white flex flex-col">
        
        <div class="h-full p-8 text-center">
            <p class="font-semibold text-md">"{{this.quote}}"</p>    
        </div>
        
        <div class="w-full px-8 py-4 bg-blue-600 flex flex-row nowrap" style="align-self: flex-end;">
            <div class="reference-logo">
                <slot></slot>
            </div>
            <div class="w-full">
                <p class="font-bold text-white text-md">{{this.name}}</p>
                <p class="font-normal text-white text-sm">{{this.position}}</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'HomeReference',
        props: {
            quote: String,
            name: String,
            position: String
        }
    }
</script>

<style scoped>
.reference-logo {
    width:  50px;
    height: 50px;
}
.reference-logo > img {
    width:  100%;
    height: auto;
}
</style>
