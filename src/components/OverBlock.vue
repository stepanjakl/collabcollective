<template>
    <div class="over-picture absolute w-full" style="transform: translateY(-50%)">

        <div class="container mx-auto">
            <div class="relative p-16 py-8 bg-gray-100 rounded-sm">

                <h2 class="font-semibold text-cc-blue-second text-2xl text-center pb-2">
                    {{this.title}}
                </h2>
                <p class="font-normal text-gray-600 text-base text-lg text-center pb-2 mx-auto" style="max-width: 600px">
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
