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

        <content-block right class="md:pl-12 pl-0"
                       label="Rights Overview"
                       header="Stay on top of your rights"
                       text="All information available at your fingertips. Check your rights status across seasons, rights categories, territories. Have all closed deals in one place with user-friendly summaries of the key terms.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/home-rights-manager.png')"
                          :src-placeholder="require('@/assets/asides/home-rights-manager-lowres.png')"/>
        </content-block>

        <content-block left
                       label="Marketplace"
                       header="Make your rights visible to sellers around the world"
                       text="Create worldwide 24/7 visibility of your available rights. Easily create marketplace listings for all rights categories - live, highlights, clips, non-live programming etc. Receive offers and close deals directoly on the platform.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/home-marketplace.png')"
                          :src-placeholder="require('@/assets/asides/home-marketplace-lowres.png')"/>
        </content-block>

        <content-block right class="md:pl-12 pl-0"
                       label="Commercial Reports"
                       header="Extract the information that you need"
                       text="Eliminate manual, time-consuming work and easily generate commercial reports. Easily satisfy the needs of internal stakeholders and derive strategies to optimise your media rights business.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/seller-commercial-reports.png')"
                          :src-placeholder="require('@/assets/asides/seller-commercial-reports-lowres.png')"/>
        </content-block>

        <div class="w-full bg-blue-600">
            <div class="container mx-auto px-8 py-16 text-center">

                <p class="text-bold text-white text-md uppercase pb-2">Data secutiry &amp; confidentiality</p>
                <h3 class="text-bold text-white text-3xl pb-2">Your data in good hands</h3>
                <p class="text-normal text-white text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum malesuada. Nam
                    facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue, vestibulum id posuere
                    in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu, blandit purus.</p>

            </div>
        </div>

        <content-block left class="mt-16"
                       label="Automated License Agreement"
                       header="Eliminate the hassle of manual contract reviews"
                       text="Simplify the most complex process and create license agreement templates across your properties. Agreements are generated automatically based on selected rights criteria in combination with your terms or simply use Content Arena's state of the art standard agreements.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/seller-licenses.png')"
                          :src-placeholder="require('@/assets/asides/seller-commercial-reports-lowres.png')"/>
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
