<template>
	<div class="page">

        <top-picture
            title="One stop 24/7 to buy the content you need.">
            <v-lazy-image class="w-full h-full absolute object-cover top-0 no-blur"
                :src="require('@/assets/headers/home.jpg')"
                :src-placeholder="require('@/assets/headers/home-lowres.jpg')"/>
        </top-picture>

        <over-block
            title="Buyers Marketplace"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra."/>

		<div class="relative py-8">
            <section-title title="Key features"></section-title>
        </div>

        <div class="container mx-auto mb-16">
            <p class="text-4xl">Content here is identical to Seller page in the draft.</p>
        </div>

	</div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle';
    import TopPicture from '../layout/TopPicture';
    import OverBlock from '../components/OverBlock';

    export default {
        name: 'Buyer',
        components: {
            SectionTitle,
            TopPicture,
            OverBlock
        }
    }
</script>

<style scoped>

</style>
