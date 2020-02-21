<template>
    <div class="page">

        <top-picture
            title="Buy, sell, and manage your sports media rights online."
            comment="Our bespoke software helps sports federations, leagues, agencies, and media companies to optimise their media rights business.">
            <!--<v-lazy-image
                    :src="require('@/assets/home.jpg')"
                    :src-placeholder="require('@/assets/home-lowres.jpg')"
            class="object-none md:object-cover w-full"/>-->
        </top-picture>

        <div class="bg-gray-300 w-full bg-contain bg-center pt-4 pb-16" :style="{ backgroundImage: 'url(' + require('@/assets/bg-testimonials.png') }">
            <div class="relative py-8">
                <section-title title="Testimonials"></section-title>
            </div>

            <div class="container mx-auto">
                <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                    <home-reference
                        quote="Creating a marketplace listing was a straightforward prodess. The platform really covers all relevant points in our complex media rights world."
                        name="Miguel Mateo"
                        position="European Handball Federation (Austria)">
                        <img src="@/assets/ehf.png" class="w-12">
                    </home-reference>

                    <home-reference
                        quote="We have so much content that it is impossible to promote everything manually. Having a digital channel to create visibillity and automate timeconsuming processes is a great idea."
                        name="Annie O'Shea"
                        position="FIBA (Switzerland)">
                        <img src="@/assets/fiba.png" class="w-24">
                    </home-reference>

                    <home-reference
                        quote="It is great to have a platform like Content Arena which procides a new and innovative way to find sports media rights. They really make buying rights simple."
                        name="Oliver Godallier"
                        position="Game Sport Management (France)">
                        <img src="@/assets/sportklub.png" class="w-16">
                    </home-reference>

                </div>
            </div>
        </div>

        <div class="relative py-8">
            <section-title title="Our services"></section-title>
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
                        <img src="@/assets/aside-lowres.jpg" class="w-full h-full">
                    </div>

                </div>
            </div>
        </div>

        <div class="container mx-auto">
            <div class="p-8">
                <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                    <!-- IMAGE LEFT -->

                    <div class="md:pr-16 pr-0 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full">
                        <img src="@/assets/aside-lowres.jpg" class="w-full h-full" style="transform: scaleX(-1);">
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
                        <img src="@/assets/aside-lowres.jpg" class="w-full h-full">
                    </div>

                </div>
            </div>
        </div>

        <div class="bg-gray-300">
            <div class="container mx-auto">

                <div class="relative py-8">
                    <section-title title="Buyers &amp; sellers"></section-title>
                </div>

                <div class="p-8 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full relative image-background" style="min-height: 500px;">
                        <p>content</p>
                    </div>

                    <div class="md:mx-16 sm:my-8 md:h-500px sm:h-2px md:w-2px sm:w-full bg-cc-blue-light"></div>

                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full relative" style="min-height: 500px;">
                        <img src="@/assets/halfling-lowres.jpg" class="absolute top-0 left-0 w-full h-full">
                    </div>

                </div>

            </div>
        </div>

        <div class="relative py-8">
            <section-title title="References"></section-title>
        </div>

        <div class="container mx-auto">
            <div class="flex flex-row flex-wrap">

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>

                <div class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/2 w-full p-4">
                    <img src="@/assets/ref-lowres.jpg" class="w-full h-full" style="margin: 0 auto;">
                </div>


            </div>
        </div>

    </div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle';
    import TopPicture from '../components/TopPicture';
    import HomeReference from '../components/HomeReference';

    export default {
        name: 'Home',
        components: {
            SectionTitle,
            TopPicture,
            HomeReference
        }
    }
</script>

<style scoped>
.image-background {
    background: skyblue;
    border-radius: 8px;
}
</style>
