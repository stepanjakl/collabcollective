<template>
    <div class="top-picture relative z-0">
        
        <slot></slot>
        
        <div class="w-full h-full absolute top-0">
            <div class="container mx-auto h-full">
                <div class="extra-container">
                    <h1 class="pb-8">{{this.title}}</h1>
                    <p class="pb-16" v-if="this.comment">{{this.comment}}</p>
                    <button>Register Now</button>
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
.extra-container {
    max-width: 600px;
    margin-right: 60px;
    position: relative;
    top:  50%;
    left: 60px;
}
</style>
