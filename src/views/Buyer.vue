<template>
	<div class="page">

        <div class="top-picture relative z-0">
            <img src="@/assets/home-lowres.jpg" alt="Hero pisture">
            <div class="absolute">
                <h1 class="pb-2">One stop 24/7 to buy the content you need.</h1>
                <button>Register Now</button>
            </div>
        </div>

		<div class="over-picture p-16">
			<div class="relative p-8 bg-gray-300" style="top: -130px; margin-bottom: -130px;">
				<h1 class="pb-2">Rights management and marketplace.</h1>
			<p>Asdgaexvb bdbwrtsdg vae sbb ndgnc tdnrbdzret rstngfb.</p>
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

export default {
	name: 'Buyer',
	components: {
        SectionTitle
	}
}
</script>

<style scoped>
.top-picture {
    width:  100%;
    height: 100vh;
    position: relative;
    z-index: 0;
}
.top-picture > img {
    width:  100%;
    height: 100%;
}
.top-picture > div {
    max-width: 600px;
    top: 30%;
    left: 60px;
}
</style>
