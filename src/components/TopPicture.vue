<template>
    <div class="top-picture">
        <img src="@/assets/home-lowres.jpg">
        <div class="absolute">
            <h1>{{this.title}}</h1>
            <h3>{{this.comment}}</h3>
            <button>{{this.button}}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopPicture',
    props: {
        file: String,
        title: String,
        comment: String,
        button: String
    },
    mounted() {
        console.log(this.file);
    }
}
</script>

<style scoped>
.top-picture {
    width:  100%;
    height: 100vh;
    position: relative;
    z-index: 0;
}
.top-picture > img {
    width:  100%;
    height: 100%;
}
.top-picture > div {
    max-width: 600px;
    top: 30%;
    left: 60px;
}
</style>
