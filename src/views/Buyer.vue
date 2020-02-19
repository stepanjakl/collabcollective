<template>
	<div class="page">

        <top-picture
            title="One stop 24/7 to buy the content you need.">
            <img src="@/assets/home-lowres.jpg" class="w-full h-full">
        </top-picture>

		<div class="over-picture p-16">
            <div class="container mx-auto">
                <div class="relative p-8 bg-gray-300" style="top: -130px; margin-bottom: -130px;">
                    <h1 class="pb-2">Rights management and marketplace.</h1>
                    <p>Asdgaexvb bdbwrtsdg vae sbb ndgnc tdnrbdzret rstngfb.</p>
                </div>
            </div>
        </div>

		<div class="relative py-8">
            <section-title title="Key features"></section-title>
        </div>

		<div class="p-8">
            <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full">
                    <h3 class="pb-2">Nadpis</h3>
                    <p>ASdasdssadfasgf dfgdfav gr sste n rr etngbwrst dthrgbeu n gb ryjmdn fgwys t hgnryutn dfvf erdh byetn.</p>
                </div>

                <div class="md:pl-16 pl-0 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full">
                    <img src="@/assets/aside-lowres.jpg" class="w-full h-full">
                </div>

            </div>
        </div>
		
	</div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle';
    import TopPicture from '../components/TopPicture';

    export default {
        name: 'Buyer',
        components: {
            SectionTitle,
            TopPicture
        }
    }
</script>

<style scoped>

</style>
