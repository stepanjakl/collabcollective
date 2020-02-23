<template>
    <div class="over-picture sm:p-16 px-8 py-16">

        <div class="container mx-auto">
            <div class="relative p-8 bg-gray-100" style="top: -130px; margin-bottom: -130px; border-radius: 2px;">

                <h2 class="font-semibold text-cc-blue-second text-xl text-center pb-2">{{this.title}}</h2>
                <p class="font-normal text-gray-600 text-base text-center pb-2">{{this.comment}}</p>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'OverPicture',
        props: {
            title: String,
            comment: String,
            button: String
        }
    }
</script>
