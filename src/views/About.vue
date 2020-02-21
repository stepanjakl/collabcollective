<template>
	<div class="page">

        <top-picture
            title="We make sports media management easy."
            comment="Bringing efficiency to the bussiness">
            <img src="@/assets/about-lowres.jpg" class="w-full h-full">
        </top-picture>

		<div class="relative py-8">
            <section-title title="Key features"></section-title>
        </div>

		<div class="p-8">
            <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col">

                <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full">
                    <h3 class="pb-2">Nadpis</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue, vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu, blandit purus.</p>
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
