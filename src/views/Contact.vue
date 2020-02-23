<template>
    <div class="page">

        <div class="w-full bg-gray-100">
            <div class="container mx-auto">
                <div class="relative w-full md:pt-20 pt-56 pb-24 text-center">

                    <h1 class="text-bolder text-cc-blue-darkest text-4xl pt-16">Our Locations</h1>

                    <v-lazy-image class="w-10/12 h-full mx-auto top-0 py-16"
                                  :src="require('@/assets/headers/contact.png')"
                                  :src-placeholder="require('@/assets/headers/contact-lowres.jpg')"/>
                    <p class="text-normal text-cc-blue-light text-md uppercase">Argentina (Americas) * United Kingdom,
                        France, Germany, &amp; Spain (Europe) * South Africa (Africa) * Singapore (Asia)</p>

                </div>
            </div>
        </div>

        <div class="container mx-auto p-8">

            <h2 class="text-bold text-cc-blue-darkest text-3xl pb-8">Get in touch with&nbsp;us</h2>

            <div class="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col md:mb-20 mb-8">
                <div class="relative xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full w-full mx-auto md:pr-16 pr-0">

                    <form action="sendMail">
                        <div class="flex sm:flex-row flex-col">

                            <div class="sm:mr-4 mr-0 sm:w-1/2 w-full flex flex-col">
                                <label class="text-extrabold text-black text-sm mb-4">Full Name</label>
                                <input class="outline" type="text" placeholder="Write...">
                            </div>

                            <div class="sm:ml-4 ml-0 sm:mt-4 mt-2 sm:w-1/2 w-full flex flex-col">
                                <label class="text-extrabold text-black text-sm mb-4">Title</label>
                                <input class="outline" type="text" placeholder="Write...">
                            </div>

                        </div>

                        <div class="w-full flex flex-col mt-8">
                            <label class="text-extrabold text-black text-sm mb-4">Text</label>
                            <textarea class="outline" rows="6" placeholder="Write..."
                                      style="width: calc(100% + 6px)"></textarea>
                        </div>

                        <div class="flex flex-row justify-end relative" style="top: 32px; right: -6px;">
                            <button class="btn btn-black rounded-none">Send Message</button>
                        </div>

                    </form>

                </div>
                <div class="md:ml-4 sm:ml-0 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full w-full md:mt-0 mt-20">

                    <h6 class="text-extrabold text-gray-800 text-sm mb-2">Our Email:</h6>
                    <p>info@contentarena.com</p>

                    <h6 class="text-extrabold text-gray-800 text-sm mb-2 mt-8">Address:</h6>
                    <p>
                        afdasfafbr<br>
                        afdasfa asdfbr<br>
                        afdasasfafbr<br>
                        afda fafbr<br>
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
        padding: 8px;
        outline: solid lightgray 1px;
    }
</style>
