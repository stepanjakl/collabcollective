<template>
    <div class="over-picture absolute w-full" style="transform: translateY(-50%)">

        <div class="container mx-auto lg:mt-0 md:mt-32 mt-0">
            <div class="relative p-16 py-8 bg-gray-100 rounded-sm">

                <h2 class="font-semibold text-cc-blue-second md:text-2xl text-xl text-center pb-2">
                    {{this.title}}
                </h2>
                <p class="font-normal text-gray-600 text-base md:text-lg text-base text-center pb-2 mx-auto" style="max-width: 600px">
                    {{this.comment}}
                </p>

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
