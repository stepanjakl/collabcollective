<template>
    <div class="page">

        <top-picture
                title="Buy, sell, and manage your sports media rights online."
                comment="Our bespoke software helps sports federations, leagues, agencies, and media companies to optimise their media rights business.">
            <v-lazy-image class="w-full h-full absolute object-cover top-0 no-blur" alt="Top picture for home page"
                          :src="require('@/assets/headers/home.jpg')"
                          :src-placeholder="require('@/assets/headers/home-lowres.jpg')"/>
        </top-picture>

        <div class="bg-gray-300 w-full bg-cover bg-center pt-10 pb-16 bg-no-repeat" id="next"
             :style="{ backgroundImage: 'url(' + require('@/assets/bg-testimonials.png') }">
            <div class="relative py-8">
                <section-title title="Testimonials"></section-title>
            </div>

            <div class="container mx-auto pt-4">
                <vue-slick-carousel v-bind="this.carouselSetting">

                    <carousel-reference
                            quote="Creating a marketplace listing was a straightforward process. The platform really covers all relevant points in our complex media rights world."
                            name="Miguel Mateo"
                            position="European Handball Federation (Austria)">
                        <img alt="EHF company logo" src="@/assets/logos/ehf.png" class="w-12">
                    </carousel-reference>

                    <carousel-reference
                            quote="We have so much content that it is impossible to promote everything manually. Having a digital channel to create visibility and automate time consuming processes is a great idea."
                            name="Annie O'Shea"
                            position="FIBA (Switzerland)">
                        <img alt="FIBA company logo" src="@/assets/logos/fiba.png" class="w-24">
                    </carousel-reference>

                    <carousel-reference
                            quote="It is great to have a platform like Content Arena which provides a new and innovative way to find sports media rights. They really make buying rights simple."
                            name="Oliver Godallier"
                            position="Game Sport Management (France)">
                        <img alt="Sportklub company logo" src="@/assets/logos/sportklub.png" class="w-16">
                    </carousel-reference>

                    <carousel-reference
                            quote="Creating a marketplace listing was a very straightforward process. The platform really covers all relevant points in our complex media rights world."
                            name="Miguel Mateo"
                            position="EHF Marketing, Austria">
                        <img alt="EHF Marketing company logo" src="@/assets/logos/ehf-marketing.jpg" class="w-20">
                    </carousel-reference>

                    <carousel-reference
                            quote="Our needs for new content are increasing non-stop, especially for our digital channels. Having an additional source like Content Arena is of great help."
                            name="ORF"
                            position="Austria">
                        <img alt="ORF company logo" src="@/assets/logos/orf.png" class="w-24">
                    </carousel-reference>

                    <carousel-reference
                            quote="It is great to have a platform like Content Arena which provides a new and innovative way to find sports media rights. They really make buying rights simple."
                            name="Tom Schuster"
                            position="SportKlub, Serbia">
                        <img alt="Sportklub company logo" src="@/assets/logos/sportklub.png" class="w-20">
                    </carousel-reference>

                </vue-slick-carousel>
            </div>

        </div>

        <div class="pt-12"></div>

        <div class="relative py-8">
            <section-title title="Our services"></section-title>
        </div>

        <content-block right btnTwo class="lg:pl-12 pl-0"
            label="Market place"
            header="The easiest way to sell and buy media rights."
            text="The worldwide only digital marketplace dedicated to sports content. Creating additional revenue opportunities for rights holders. Allowing buyers to easily find live and non-live content for their territories.">
            <v-lazy-image class="w-full h-auto" alt="Marketplace graphic"
                          :src="require('@/assets/asides/home-marketplace.png')"
                          :src-placeholder="require('@/assets/asides/home-marketplace-lowres.png')"/>
        </content-block>

        <content-block left btnOne btnLink="/sellers"
            label="Rights Manager"
            header="The most efficient way to manage your right portfolio."
            text="Stay on top of your rights and optimize your sales management. Forget about spreadsheets! Have all information in one place, generate commercial reports, and expose available rights on the marketplace with just a few clicks.">
            <v-lazy-image class="w-full h-auto" alt="Rights manager graphic"
                          :src="require('@/assets/asides/home-rights-manager.png')"
                          :src-placeholder="require('@/assets/asides/home-rights-manager-lowres.png')"/>
        </content-block>

        <content-block right btnOne btnLink="/sellers" class="lg:pl-12 pl-0"
            label="Content marketing"
            header="Bringing the right message to the right people."
            text="Create meaningful visibility for your available rights around the world through targeted communication. Email & SMS alerts, newsletters, social media marketing Content Arena covers it all for you, expose your potential to thousands of buyers.">
            <v-lazy-image class="w-full h-auto" alt="Content marketing graphic"
                          :src="require('@/assets/asides/home-content-marketing.png')"
                          :src-placeholder="require('@/assets/asides/home-content-marketing-lowres.png')"/>
        </content-block>

        <div style="background-color: #F7F7F7">
            <div class="container mx-auto pt-16 pb-32">

                <div class="relative py-8">
                    <section-title title="Buyers &amp; sellers"></section-title>
                </div>

                <div class="sm:p-8 p-2 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col" style="min-width: 300px">

                    <div class="lg:w-1/2 w-full relative"
                         style="min-height: 500px;">

                        <div class="relative z-10 sm:p-16 p-12 xl:pt-32 sm:pt-20 pt-12 text-center xl:mx-auto lg:mx-0 mx-auto" style="max-width: 500px">
                            <h3 class="font-bold text-white sm:text-2xl text-xl uppercase mb-4 tracking-widest">Rightsholders Federations &amp; Agencies</h3>
                            <p class="font-normal text-white text-lg mb-8 leading-relaxed">No more manual updates of spreadsheets - manage all your rights in one place and create additional revenue opportunities.</p>
                        </div>

                        <div class="w-full absolute z-10 xl:bottom-142px sm:bottom-102px bottom-60px flex items-center">
                            <div class="mx-auto">
                                <anim-button yellow to="/sellers" class="sm:py-6 py-4 sm:px-10 px-8 font-bold uppercase tracking-wider">Learn&nbsp;more</anim-button>
                                <!--<router-link to="/sellers" class="btn btn-yellow sm:py-6 py-4 sm:px-10 px-8 font-bold uppercase tracking-wider rounded-sm">Learn&nbsp;more</router-link>-->
                            </div>
                        </div>

                        <v-lazy-image class="w-full h-full absolute object-cover top-0 rounded-lg" alt="Background graphic"
                                      :src="require('@/assets/home-sellers.png')"/>

                    </div>

                    <!-- Line between pictures, switches from vertical to horizontal -->
                    <div class="lg:h-500px sm:h-2px h-2px lg:w-2px sm:w-10/12 w-10/12 lg:mx-16 sm:my-8 my-12 mx-auto bg-cc-blue-light"></div>

                    <div class="lg:w-1/2 w-full relative"
                         style="min-height: 500px;">

                         <div class="relative z-10 sm:p-16 p-12 xl:pt-32 sm:pt-20 pt-12 text-center xl:mx-auto lg:mx-0 mx-auto" style="max-width: 500px">
                            <h3 class="font-bold text-white sm:text-2xl text-xl uppercase mb-4 tracking-widest">Broadcasters</h3>
                            <p class="font-normal text-white text-lg mb-8 leading-relaxed">Discover a multitude of rights opportunities at your finger tips and optimize your content portfolio.</p>
                        </div>

                        <div class="w-full absolute z-10 xl:bottom-142px sm:bottom-102px bottom-60px flex items-center">
                            <div class="mx-auto">
                                <anim-button yellow to="/sellers" class="sm:py-6 py-4 sm:px-10 px-8 font-bold uppercase tracking-wider">Learn&nbsp;more</anim-button>
                                <!--<router-link to="/buyers" class="btn btn-yellow sm:py-6 py-4 sm:px-10 px-8 font-bold uppercase tracking-wider rounded-sm">Learn&nbsp;more</router-link>-->
                            </div>
                        </div>

                        <v-lazy-image class="w-full h-full absolute object-cover top-0 rounded-lg" alt="Background graphic"
                                      :src="require('@/assets/home-buyers.png')"/>

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
                    <img :alt="reference+' company logo reference'" class="w-24 mx-auto" :src="require('@/assets/logos/' + reference + '-ref.png')">
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'

    import SectionTitle from '../components/SectionTitle';
    import TopPicture from '../layout/TopPicture';
    import CarouselReference from '../components/CarouselReference';
    import ContentBlock from '../components/ContentBlock';
    import AnimButton from '../components/AnimButton';

    export default {
        name: 'Home',
        components: {
            SectionTitle,
            TopPicture,
            CarouselReference,
            ContentBlock,
            AnimButton,
            VueSlickCarousel
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
                ],
                carouselSetting: {
                    "focusOnSelect": false,
                    "speed": 500,
                    "autoplay": true,
                    "autoplaySpeed": 5000,
                    "draggable": true,
                    "infinite": true,
                    "arrows": false,
                    "dots": true,
                    "slidesToShow": 3,
                    "slidesToScroll": 2,
                    "cssEase": "ease-in-out",
                    "touchThreshold": 5,
                    "initialSlide": 0,
                    "responsive": [
                        {
                            "breakpoint": 1024, // tailwind LG
                            "settings": {
                                "slidesToShow": 2,
                                "slidesToScroll": 1
                            }
                        },
                        {
                            "breakpoint": 640, // tailwind SM
                            "settings": {
                                "slidesToShow": 1,
                                "slidesToScroll": 1,
                                "arrows": false,
                                //"dots": false
                            }
                        }
                    ]
                }
            }
        }
    }
</script>

<style>

</style>
