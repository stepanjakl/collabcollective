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
                            quote="Creating a marketplace listing was a straightforward process. The platform really covers all relevant points in our complex media rights world."
                            name="Miguel Mateo"
                            position="European Handball Federation (Austria)">
                        <img src="@/assets/logos/ehf.png" class="w-12">
                    </home-reference>

                    <home-reference
                            quote="We have so much content that it is impossible to promote everything manually. Having a digital channel to create visibility and automate time consuming processes is a great idea."
                            name="Annie O'Shea"
                            position="FIBA (Switzerland)">
                        <img src="@/assets/logos/fiba.png" class="w-24">
                    </home-reference>

                    <home-reference
                            quote="It is great to have a platform like Content Arena which provides a new and innovative way to find sports media rights. They really make buying rights simple."
                            name="Oliver Godallier"
                            position="Game Sport Management (France)">
                        <img src="@/assets/logos/sportklub.png" class="w-16">
                    </home-reference>

                </div>
            </div>
        </div>

        <div class="pt-12"></div>

        <div class="relative py-8">
            <section-title title="Our services"></section-title>
        </div>

        <content-block right btnTwo
            label="Our services"
            header="The easiest way to sell and buy media rights."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                  malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue,
                  vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu,
                  blandit purus.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/home-marketplace.png')"
                          :src-placeholder="require('@/assets/asides/home-marketplace-lowres.png')"/>
        </content-block>

        <content-block left btnOne btnLink="/#"
            label="Rights Manager"
            header="The most efficient way to manage your right portfolio."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                  malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue,
                  vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu,
                  blandit purus.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/home-rights-manager.png')"
                          :src-placeholder="require('@/assets/asides/home-rights-manager-lowres.png')"/>
        </content-block>

        <content-block right btnOne btnLink="/#"
            label="Content marketing"
            header="Bringing the right message to the right people."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                  malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue,
                  vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu,
                  blandit purus.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/home-content-marketing.png')"
                          :src-placeholder="require('@/assets/asides/home-content-marketing-lowres.png')"/>
        </content-block>

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

                    <!-- Line between pictures, switches from verticat to horizontal -->
                    <div class="lg:h-500px sm:h-2px h-2px lg:w-2px sm:w-10/12 w-10/12 lg:mx-16 sm:my-8 my-8 mx-auto bg-cc-blue-light"></div>

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
    import TopPicture from '../layout/TopPicture';
    import HomeReference from '../components/HomeReference';
    import ContentBlock from '../components/ContentBlock';

    export default {
        name: 'Home',
        components: {
            SectionTitle,
            TopPicture,
            HomeReference,
            ContentBlock
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

</style>
