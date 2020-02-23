<template>
    <div class="page">

        <top-picture
            title="One stop shop to sell your rights.">
            <v-lazy-image class="w-full h-full absolute object-cover top-0 no-blur"
                :src="require('@/assets/headers/home.jpg')"
                :src-placeholder="require('@/assets/headers/home-lowres.jpg')"/>
        </top-picture>

        <over-block
            title="Rights Management &amp; Marketplace"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra."/>

		<div class="relative py-8">
            <section-title title="Key features"></section-title>
        </div>

        <content-block right
            label="Rights Overview"
            header="Stay on top of your rights"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                  malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue,
                  vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu,
                  blandit purus.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/home-marketplace.png')"
                          :src-placeholder="require('@/assets/asides/home-marketplace-lowres.png')"/>
        </content-block>

        <content-block left
            label="Market place"
            header="Your right visible to the sellers around the world"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                  malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue,
                  vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu,
                  blandit purus.">
            <v-lazy-image class="w-full h-auto" style="transform: scaleX(-1);"
                          :src="require('@/assets/asides/home-marketplace.png')"
                          :src-placeholder="require('@/assets/asides/home-marketplace-lowres.png')"/>
        </content-block>

        <content-block right
            label="Commercial Reports"
            header="Extract the infromation that you need"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                  malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue,
                  vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu,
                  blandit purus.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/home-marketplace.png')"
                          :src-placeholder="require('@/assets/asides/home-marketplace-lowres.png')"/>
        </content-block>

        <div class="w-full bg-blue-600">
            <div class="container mx-auto px-8 py-16 text-center">

                <p class="text-bold text-white text-md uppercase pb-2">Data secutiry &amp; confidentiality</p>
                <h3 class="text-bold text-white text-3xl pb-2">Your data in good hands</h3>
                <p class="text-normal text-white text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue, vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu, blandit purus.</p>

            </div>
        </div>

        <content-block left
            label="Automated License Agreement"
            header="Eliminate the hassle of manual contract reviews"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum
                  malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue,
                  vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu,
                  blandit purus.">
            <v-lazy-image class="w-full h-auto" style="transform: scaleX(-1);"
                          :src="require('@/assets/asides/home-marketplace.png')"
                          :src-placeholder="require('@/assets/asides/home-marketplace-lowres.png')"/>
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
