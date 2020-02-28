<template>
    <div class="page">

        <div class="w-full bg-gray-100">
            <div class="container mx-auto">
                <div class="relative w-full md:pt-20 pt-56 pb-24 text-center">

                    <h1 class="text-bolder text-cc-blue-darkest text-4xl pt-16">Our Locations</h1>

                    <v-lazy-image class="w-10/12 h-full mx-auto top-0 py-16"
                                  :src="require('@/assets/headers/contact.png')"
                                  :src-placeholder="require('@/assets/headers/contact-lowres.jpg')"/>
                    <p class="text-normal text-cc-blue-light text-md uppercase">Argentina (Americas) • United Kingdom,
                        France, Germany, &amp; Spain (Europe) • South Africa (Africa) • Singapore (Asia)</p>

                </div>
            </div>
        </div>

        <div class="container mx-auto p-8">

            <h2 class="text-bold text-cc-blue-darkest text-3xl py-12">Get in touch with&nbsp;us</h2>

            <div class="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col md:mb-20 mb-8">
                <div class="relative xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full w-full mx-auto md:pr-16 pr-0">

                    <form action="https://formspree.io/xyyjwada" method="POST">

                        <div class="flex sm:flex-row flex-col">

                            <div class="sm:mr-4 mr-0 sm:w-1/2 w-full flex flex-col">
                                <label class="font-semibold text-black text-sm mb-4" for="name">Full Name</label>
                                <input class="outline" type="text" name="name" placeholder="Write..." />
                            </div>

                            <div class="sm:ml-4 ml-0 sm:mt-0 mt-6 sm:w-1/2 w-full flex flex-col">
                                <label class="font-semibold text-black text-sm mb-4" for="_replyto">Email</label>
                                <input class="outline" type="text" name="_replyto" placeholder="Write..." />
                            </div>

                        </div>

                        <input hidden class="outline" type="text" name="_subject" value="Email sent from website" />

                        <div class="w-full flex flex-col mt-8">
                            <label class="font-semibold text-black text-sm mb-4" for="message">Text</label>
                            <textarea class="outline w-full" rows="6" name="message" placeholder="Write..."></textarea>
                        </div>

                        <div class="flex flex-row justify-end relative mt-6">
                            <input class="btn btn-black bg-gray-800 rounded-none cursor-pointer px-10 py-4" type="submit" value="Send Message" />
                        </div>

                    </form>

                </div>
                <div class="md:ml-4 sm:ml-0 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full w-full md:mt-0 mt-24">

                    <h6 class="font-semibold text-gray-500 text-sm mb-2">Our Email</h6>
                    <p class="font-medium text-blue-600 underline">info@contentarena.com</p>

                    <h6 class="font-semibold text-gray-500 text-sm mb-2 sm:mt-12 mt-6">Address</h6>
                    <p>
                        Content Arena PTE. Ltd.,<br />
                        Upper Cross Street #04-02<br />
                        Hong Lim Complex<br />
                        050531 Singapore
                    </p>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Contact'
    }
</script>

<style scoped>
    .outline {
        width: 100%;
        padding: 14px;
        outline: solid lightgray 1px;
    }
</style>
