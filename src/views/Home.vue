<template>
    <div class="page">

        <top-picture
                title="Buy, sell, and manage your sports media rights online."
                comment="Our bespoke software helps sports federations, leagues, agencies, and media companies to optimise their media rights business.">
            <v-lazy-image class="w-full h-full absolute object-cover top-0 no-blur"
                          :src="require('@/assets/headers/home.jpg')"
                          :src-placeholder="require('@/assets/headers/home-lowres.jpg')"/>
        </top-picture>

        <div class="bg-gray-300 w-full bg-cover bg-center pt-6 pb-16 bg-no-repeat"
             :style="{ backgroundImage: 'url(' + require('@/assets/bg-testimonials.png') }">
            <div class="relative py-8">
                <section-title title="Testimonials"></section-title>
            </div>

            <div class="container mx-auto">
                <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                    <home-reference
                            quote="Creating a marketplace listing was a straightforward prodess. The platform really covers all relevant points in our complex media rights world."
                            name="Miguel Mateo"
                            position="European Handball Federation (Austria)">
                        <img src="@/assets/logos/ehf.png" class="w-12">
                    </home-reference>

                    <home-reference
                            quote="We have so much content that it is impossible to promote everything manually. Having a digital channel to create visibillity and automate timeconsuming processes is a great idea."
                            name="Annie O'Shea"
                            position="FIBA (Switzerland)">
                        <img src="@/assets/logos/fiba.png" class="w-24">
                    </home-reference>

                    <home-reference
                            quote="It is great to have a platform like Content Arena which procides a new and innovative way to find sports media rights. They really make buying rights simple."
                            name="Oliver Godallier"
                            position="Game Sport Management (France)">
                        <img src="@/assets/logos/sportklub.png" class="w-16">
                    </home-reference>

                </div>
            </div>
        </div>

        <div class="container mx-auto pt-6 pb-24">
            <div class="relative py-8">
                <section-title title="Our services"></section-title>
            </div>
            <div class="p-8">
                <div class="flex xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse flex-col-reverse">

                    <!-- IMAGE RIGHT -->

                    <div class="xl:w-5/12 lg:w-5/12 md:w-full sm:w-full w-full relative">
                        <h4 class="font-bold text-sm uppercase pb-4 tracking-widest">Market place</h4>
                        <h3 class="font-semibold text-2xl pb-4">The easiest way to sell and buy media rights.</h3>
                        <p class="font-normal text-gray-700 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                            malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue,
                            vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu,
                            blandit purus.</p>

                        <div class="pt-4">
                            <router-link to="/seller" class="btn btn-blue mr-2">Sellers</router-link>
                            <router-link to="/buyers" class="btn btn-yellow">Buyers</router-link>
                        </div>
                    </div>

                    <div class="md:pl-16 pl-0 xl:w-7/12 lg:w-7/12 md:w-full sm:w-full w-full">
                        <v-lazy-image class="w-full h-auto"
                                      :src="require('@/assets/asides/home-marketplace.png')"
                                      :src-placeholder="require('@/assets/asides/home-marketplace-lowres.png')"/>
                    </div>

                </div>
            </div>
        </div>

        <div class="container mx-auto pt-4 pb-24">
            <div class="p-8">
                <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                    <!-- IMAGE LEFT -->

                    <div class="md:pr-16 pr-0 xl:w-7/12 lg:w-7/12 md:w-full sm:w-full w-full">
                        <v-lazy-image class="w-full h-auto"
                                      :src="require('@/assets/asides/home-rights-manager.png')"
                                      :src-placeholder="require('@/assets/asides/home-rights-manager-lowres.png')"/>
                    </div>

                    <div class="xl:w-5/12 lg:w-5/12 md:w-full sm:w-full w-full relative">
                        <h4 class="font-bold text-sm uppercase pb-4 tracking-widest">Learn more</h4>
                        <h3 class="font-semibold text-2xl pb-4">The easiest way to sell and buy media rights.</h3>
                        <p class="font-normal text-gray-700 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                            malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue,
                            vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu,
                            blandit purus.</p>

                        <div class="pt-4">
                            <router-link to="/#" class="btn btn-blue">Learn more</router-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="container mx-auto pt-4 pb-24">
            <div class="p-8">
                <div class="flex xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse flex-col-reverse">

                    <!-- IMAGE RIGHT -->

                    <div class="xl:w-5/12 lg:w-5/12 md:w-full sm:w-full w-full relative">
                        <h4 class="font-bold text-sm uppercase pb-4 tracking-widest">Content marketing</h4>
                        <h3 class="font-semibold text-3xl pb-4">The easiest way to sell and buy media rights.</h3>
                        <p class="font-normal text-gray-700 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                            malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue,
                            vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu,
                            blandit purus.</p>

                        <div class="pt-4">
                            <router-link to="/#" class="btn btn-blue">Learn more</router-link>
                        </div>
                    </div>

                    <div class="md:pl-16 pl-0 xl:w-7/12 lg:w-7/12 md:w-full sm:w-full w-full">
                        <v-lazy-image class="w-full h-auto"
                                      :src="require('@/assets/asides/home-content-marketing.png')"
                                      :src-placeholder="require('@/assets/asides/home-content-marketing-lowres.png')"/>
                    </div>

                </div>
            </div>
        </div>

        <div class="bg-gray-300">
            <div class="container mx-auto pt-16 pb-32">

                <div class="relative py-8">
                    <section-title title="Buyers &amp; sellers"></section-title>
                </div>

                <div class="sm:p-8 p-2 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                    <div class="lg:w-1/2 w-full relative"
                         style="min-height: 500px;">

                        <div class="relative z-10 sm:p-16 p-12 xl:pt-32 sm:pt-20 pt-12 text-center">
                            <h3 class="font-bold text-white sm:text-3xl text-2xl uppercase mb-4">Rightsholders Federations &amp; Agencies</h3>
                            <p class="text-white text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                                malesuada.</p>
                        </div>
                        
                        <div class="w-full absolute z-10 xl:bottom-142px sm:bottom-102px bottom-60px">
                            <div class="w-48 mx-auto">
                                <router-link to="/#" class="btn btn-yellow">Learn&nbsp;more</router-link>
                            </div>
                        </div>

                        <img src="@/assets/home-buyers.png" class="w-full h-full absolute top-0 left-0 z-0">

                    </div>

                    <div class="lg:mx-16 sm:my-8 my-8 lg:h-500px sm:h-2px h-2px lg:w-2px sm:w-full w-full bg-cc-blue-light"></div>

                    <div class="lg:w-1/2 w-full relative"
                         style="min-height: 500px;">

                         <div class="relative z-10 sm:p-16 p-12 xl:pt-32 sm:pt-20 pt-12 text-center">
                            <h3 class="font-bold text-white sm:text-3xl text-2xl uppercase mb-4">Broadcasters</h3>
                            <p class="text-white text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                                malesuada.</p>
                        </div>

                        <div class="w-full absolute z-10 xl:bottom-142px sm:bottom-102px bottom-60px">
                            <div class="w-48 mx-auto">
                                <router-link to="/#" class="btn btn-yellow">Learn&nbsp;more</router-link>
                            </div>
                        </div>

                        <img src="@/assets/home-sellers.png" class="w-full h-full absolute top-0 left-0 z-0">

                    </div>

                </div>

            </div>
        </div>

        <div class="container mx-auto pt-12 pb-16">
            <div class="relative pt-8 pb-12">
                <section-title title="References"></section-title>
            </div>
            <div class="flex flex-row flex-wrap md:px-20 px-8">

                <div v-for="reference in references" :key="reference" class="xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/4 w-1/2 mb-12 flex items-center">
                    <img class="w-24 mx-auto" :src="require('@/assets/logos/' + reference + '-ref.png')">
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
        },
        data() {
            return {
                references: [
                    'sinasports',
                    'tvone',
                    'statsperform',
                    'sportklub',
                    'dcl',
                    'servustv',
                    'saran',
                    'orf',
                    'abcliga',
                    'dazn',
                    'sport1',
                    'fiba',
                    'ehf',
                    'dfb',
                    'sportradar',
                    'eurosport',
                    'bundesliga',
                    'astro'
                ]
            }
        }
    }
</script>

<style scoped>
    .image-background {
        background: skyblue;
        border-radius: 8px;
    }
</style>
