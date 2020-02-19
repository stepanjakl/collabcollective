<template>
	<div class="page">

        <top-picture
            title="One stop 24/7 to buy the content you need.">
            <img src="@/assets/home-lowres.jpg" class="w-full h-full">
        </top-picture>

        <over-block 
            title="Buyers Marketplace"
            comment="Asdgaexvb bdbwrtsdg vae sbb ndgnc tdnrbdzret rstngfb."/>

		<div class="relative py-8">
            <section-title title="Key features"></section-title>
        </div>

		<div class="container mx-auto">
            <div class="p-8">
                <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full relative">
                        <h3 class="pb-2">Nadpis content-fit ?? </h3>
                        <p>ASdasdssadfasgf dfgdfav gr sste n rr etngbwrst dthrgbeu n gb ryjmdn fgwys t hgnryutn dfvf erdh byetn.</p>

                        <div class="absolute pt-16" style="bottom: 10px">
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
