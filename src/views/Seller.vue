<template>
    <div class="page">

        <top-picture
                title="One stop shop to sell your rights.">
            <v-lazy-image class="w-full h-full absolute object-cover top-0 no-blur"
                          :src="require('@/assets/headers/seller.jpg')"
                          :src-placeholder="require('@/assets/headers/seller-lowres.jpg')"/>
            <over-block
                    title="Rights Management &amp; Marketplace"
                    comment="The first turn-key solution for sports media rights management with a directly linked market access opportunity."/>
        </top-picture>

        <div class="relative py-8 mt-40">
            <section-title title="Key features"></section-title>
        </div>

        <content-block right class="lg:pl-12 pl-0"
                       label="Rights Overview"
                       header="Stay on top of your rights"
                       text="All information available at your fingertips. Check your rights status across seasons, rights categories, territories. Have all closed deals in one place with user-friendly summaries of the key terms.">
            <v-lazy-image class="w-full h-auto" style="transform: scaleX(-1)"
                          :src="require('@/assets/asides/home-rights-manager.png')"
                          :src-placeholder="require('@/assets/asides/home-rights-manager-lowres.png')"/>
        </content-block>

        <content-block left
                       label="Marketplace"
                       header="Make your rights visible to sellers around the world"
                       text="Create worldwide 24/7 visibility of your available rights. Easily create marketplace listings for all rights categories - live, highlights, clips, non-live programming etc. Receive offers and close deals directoly on the platform.">
            <v-lazy-image class="w-full h-auto" style="transform: scaleX(-1)"
                          :src="require('@/assets/asides/home-marketplace.png')"
                          :src-placeholder="require('@/assets/asides/home-marketplace-lowres.png')"/>
        </content-block>

        <content-block right class="lg:pl-12 pl-0"
                       label="Commercial Reports"
                       header="Extract the information that you need"
                       text="Eliminate manual, time-consuming work and easily generate commercial reports. Easily satisfy the needs of internal stakeholders and derive strategies to optimise your media rights business.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/seller-commercial-reports.png')"
                          :src-placeholder="require('@/assets/asides/seller-commercial-reports-lowres.png')"/>
        </content-block>

        <div class="w-full">

            <div class="w-full absolute z-10">
                <div class="container mx-auto px-8 py-16 pt-6 text-center">
                    
                    <div class="flex flex-row justify-center">
                        <div class="lg:seller-badge-3x sm:seller-badge-2x seller-badge-1x">
                            <img class="w-full h-full" src="@/assets/seller-security-icon-1.svg">
                        </div>
                        <div class="lg:seller-badge-3x sm:seller-badge-2x seller-badge-1x">
                            <img class="w-full h-full" src="@/assets/seller-security-icon-2.svg">
                        </div>
                        <div class="lg:seller-badge-3x sm:seller-badge-2x seller-badge-1x">
                            <img class="w-full h-full" src="@/assets/seller-security-icon-3.svg">
                        </div>
                    </div>

                    <p class="text-bold text-white text-md uppercase pb-2">Data secutiry &amp; confidentiality</p>
                    <h3 class="text-bold text-white text-3xl pb-2">Your data in good hands</h3>

                    <div class="mx-auto" style="max-width: 640px;">
                        <p class="text-normal text-white text-xl">Content Arena guarantees highest data security standarts
                            to assure that your data is safe and remains confidential.
                        </p>
                    </div>

                </div>
            </div>

            <v-lazy-image class="w-full h-auto relative top-0 left-0 z-0" style="min-height: 300px"
                          :src="require('@/assets/seller-security-background.jpg')"
                          :src-placeholder="require('@/assets/seller-security-background-lowres.jpg')"/>
        </div>

        <content-block left class="mt-16"
                       label="Automated License Agreement"
                       header="Eliminate the hassle of manual contract reviews"
                       text="Simplify the most complex process and create license agreement templates across your properties. Agreements are generated automatically based on selected rights criteria in combination with your terms or simply use Content Arena's state of the art standard agreements.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/seller-licenses.png')"
                          :src-placeholder="require('@/assets/asides/seller-licenses-lowres.png')"/>
        </content-block>

    </div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle';
    import TopPicture from '../layout/TopPicture';
    import OverBlock from '../components/OverBlock';
    import ContentBlock from '../components/ContentBlock';

    export default {
        name: 'Seller',
        components: {
            SectionTitle,
            TopPicture,
            OverBlock,
            ContentBlock
        }
    }
</script>


<style scoped>

</style>
