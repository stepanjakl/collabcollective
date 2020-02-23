<template>
	<div class="page">

        <top-picture
            title="We make sports media management easy."
            comment="Bringing efficiency to the bussiness">
            <img src="@/assets/headers/about-lowres.jpg" class="w-full h-full absolute object-cover top-0">
        </top-picture>

        <div class="bg-gray-300">

            <div class="relative py-8">
                <section-title title="About us"></section-title>
            </div>

            <div class="container mx-auto p-20 pt-8">

                <h2 class="text-bolder text-4xl pb-4">Our story</h2>

                <div class="flex md:flex-row flex-col justify-around">
                    <div class="md:pr-4 pr-0 md:w-1/2 w-full">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue, vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu.</p>
                    </div>
                    <div class="md:pl-4 pl-0 md:w-1/2 w-full">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat id dolor sed pharetra. Donec consectetur dolor a lectus condimentum malesuada. Nam facilisis nisi eget justo mollis, vitae viverra ex rutrum. Morbi dolor augue, vestibulum id posuere in, lacinia ut nibh. Quisque in neque pretium, egestas tellus eu.</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="relative py-8">
            <section-title title="The team"></section-title>
        </div>

        <div class="container mx-auto flex flex-row md:justify-between sm:justify-center justify-center flex-wrap p-8">

            <div class="xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Erik Lorenz</h3>
                <p class="text-md text-gray-700">CEO</p>
            </div>

            <div class="xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Erik Lorenz</h3>
                <p class="text-md text-gray-700">CEO</p>
            </div>

            <div class="xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Erik Lorenz</h3>
                <p class="text-md text-gray-700">CEO</p>
            </div>

            <div class="xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Erik Lorenz</h3>
                <p class="text-md text-gray-700">CEO</p>
            </div>

        </div>

        <div class="relative py-8">
            <section-title title="The advisory board"></section-title>
        </div>

        <div class="container mx-auto flex flex-row md:justify-between sm:justify-center justify-center flex-wrap p-8">

            <div class="xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Erik Lorenz</h3>
                <p class="text-md text-gray-700">CEO</p>
            </div>

            <div class="xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Erik Lorenz</h3>
                <p class="text-md text-gray-700">CEO</p>
            </div>

            <div class="xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Erik Lorenz</h3>
                <p class="text-md text-gray-700">CEO</p>
            </div>

            <div class="xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Erik Lorenz</h3>
                <p class="text-md text-gray-700">CEO</p>
            </div>

            <div class="xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Erik Lorenz</h3>
                <p class="text-md text-gray-700">CEO</p>
            </div>

        </div>

	</div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle';
    import TopPicture from '../layout/TopPicture';

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
