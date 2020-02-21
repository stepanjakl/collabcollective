<template>
	<div class="page">

        <top-picture
            title="One stop 24/7 to buy the content you need.">
            <img src="@/assets/home-lowres.jpg" class="w-full h-full">
        </top-picture>

        <over-block 
            title="Buyers Marketplace"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra."/>

		<div class="relative py-8">
            <section-title title="Key features"></section-title>
        </div>

        <div class="container mx-auto">
            <p class="text-4xl">Obsah návrhu totožný se Seller.</p>
        </div>
		
	</div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle';
    import TopPicture from '../components/TopPicture';
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
