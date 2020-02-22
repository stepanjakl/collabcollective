<template>
    <div class="page">

        <top-picture
            title="One stop shop to sell your rights.">
            <v-lazy-image class="w-full h-full absolute object-cover top-0"
                :src="require('@/assets/headers/home.jpg')"
                :src-placeholder="require('@/assets/headers/home-lowres.jpg')"/>
        </top-picture>

        <over-block
            title="Rights Management &amp; Marketplace"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra."/>

		<div class="relative py-8">
            <section-title title="Key features"></section-title>
        </div>

		<div class="container mx-auto">
            <div class="p-8">
                <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                    <!-- IMAGE RIGHT -->

                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full relative">
                        <h4 class="font-bold text-md uppercase pb-2">Market place</h4>
                        <h3 class="font-bold text-3xl pb-2">The easiest way to sell and buy media rights.</h3>
                        <p class="font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue, vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu, blandit purus.</p>

                        <div class="pt-4">
                            <router-link to="/seller" class="btn-blue mr-2">Sellers</router-link>
                            <router-link to="/buyers" class="btn btn-yellow">Buyers</router-link>
                        </div>
                    </div>

                    <div class="md:pl-16 pl-0 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full">
                        <img src="@/assets/asides/aside-lowres.jpg" class="w-full h-auto">
                    </div>

                </div>
            </div>
        </div>

        <div class="container mx-auto">
            <div class="p-8">
                <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                    <!-- IMAGE LEFT -->

                    <div class="md:pr-16 pr-0 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full">
                        <img src="@/assets/asides/aside-lowres.jpg" class="w-full h-auto" style="transform: scaleX(-1);">
                    </div>

                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full relative">
                        <h4 class="font-bold text-md uppercase pb-2">Learn more</h4>
                        <h3 class="font-bold text-3xl pb-2">The easiest way to sell and buy media rights.</h3>
                        <p class="font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue, vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu, blandit purus.</p>

                        <div class="pt-4">
                            <router-link to="/#" class="btn-blue mr-2">Learn more</router-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="container mx-auto">
            <div class="p-8">
                <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                    <!-- IMAGE RIGHT -->

                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full relative">
                        <h4 class="font-bold text-md uppercase pb-2">Content marketing</h4>
                        <h3 class="font-bold text-3xl pb-2">The easiest way to sell and buy media rights.</h3>
                        <p class="font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue, vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu, blandit purus.</p>

                        <div class="pt-4">
                            <router-link to="/#" class="btn-blue">Learn more</router-link>
                        </div>
                    </div>

                    <div class="md:pl-16 pl-0 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full">
                        <img src="@/assets/asides/aside-lowres.jpg" class="w-full h-auto">
                    </div>

                </div>
            </div>
        </div>

        <div class="w-full bg-blue-600">
            <div class="container mx-auto px-8 py-16 text-center">

                <p class="text-bold text-white text-md uppercase pb-2">Data secutiry &amp; confidentiality</p>
                <h3 class="text-bold text-white text-3xl pb-2">Your data in good hands</h3>
                <p class="text-normal text-white text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue, vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu, blandit purus.</p>

            </div>
        </div>

        <div class="container mx-auto">
            <div class="p-8">
                <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                    <!-- IMAGE LEFT -->

                    <div class="md:pr-16 pr-0 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full">
                        <img src="@/assets/asides/aside-lowres.jpg" class="w-full h-auto" style="transform: scaleX(-1);">
                    </div>

                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full relative">
                        <h4 class="font-bold text-md uppercase pb-2">Learn more</h4>
                        <h3 class="font-bold text-3xl pb-2">The easiest way to sell and buy media rights.</h3>
                        <p class="font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue, vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu, blandit purus.</p>

                        <div class="pt-4">
                            <router-link to="/#" class="btn-blue mr-2">Learn more</router-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle';
    import TopPicture from '../components/TopPicture';
    import OverBlock from '../components/OverBlock';

    export default {
        name: 'Seller',
        components: {
            SectionTitle,
            TopPicture,
            OverBlock
        }
    }
</script>


<style scoped>

</style>
