<template>
	<div class="page">

        <top-picture
            title="We make sports media management easy."
            comment="Bringing efficiency to the business">
            <v-lazy-image class="w-full h-full absolute object-cover top-0 no-blur"
                          :src="require('@/assets/headers/about.jpg')"
                          :src-placeholder="require('@/assets/headers/about-lowres.jpg')"/>
        </top-picture>

        <div class="bg-gray-300">

            <div class="pt-4"></div>
            <div class="relative py-8">
                <section-title title="About us"></section-title>
            </div>

            <div class="container mx-auto md:p-20 p-8 pb-16 pt-0">

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

        <div class="pt-4"></div>
        <div class="relative py-8">
            <section-title title="The team"></section-title>
        </div>

        <div class="container mx-auto flex flex-row md:justify-between sm:justify-center justify-center flex-wrap sm:p-8 p-2">

            <div class="md:w-auto w-1/2 xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2 mx-auto">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Erik Lorenz</h3>
                <p class="text-md text-gray-700">CEO</p>
            </div>

            <div class="md:w-auto w-1/2 xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2 mx-auto">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Chuan Talco Cruz</h3>
                <p class="text-md text-gray-700">CTO</p>
            </div>

            <div class="md:w-auto w-1/2 xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2 mx-auto">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Aslinda Ali</h3>
                <p class="text-md text-gray-700">Cotnent Activation Manager</p>
            </div>

            <div class="md:w-auto w-1/2 xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2 mx-auto">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Jamie Rascon</h3>
                <p class="text-md text-gray-700">Bussiness Developer</p>
            </div>

        </div>

        <div class="relative py-8">
            <section-title title="The advisory board"></section-title>
        </div>

        <div class="container mx-auto flex flex-row md:justify-between sm:justify-center justify-center flex-wrap sm:p-8 p-2">

            <div class="md:w-auto w-1/2 xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2 mx-auto">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Sascha Kojic</h3>
                <p class="text-md text-gray-700">Co-Founder Content Arena <br/> &amp; CEO SN1 Consulting</p>
            </div>

            <div class="md:w-auto w-1/2 xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2 mx-auto">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Bernhard Reidlsperger</h3>
                <p class="text-md text-gray-700">Co-Founder Content Arena <br/> &amp; President Hogmore Media AG</p>
            </div>

            <div class="md:w-auto w-1/2 xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2 mx-auto">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Klemens Kögle</h3>
                <p class="text-md text-gray-700">Co-Founder Content Arena <br/> &amp; CEO Hogmore Media AG</p>
            </div>

            <div class="md:w-auto w-1/2 xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2 mx-auto">
                <h3 class="text-xl text-gray-800 capitalize pb-1">John Gleasure</h3>
                <p class="text-md text-gray-700">Chief Bussiness Developer <br/> Officer DANZ Media</p>
            </div>

            <div class="md:w-auto w-1/2 xl:px-8 px-4 mb-4 text-center">
                <img src="@/assets/people-lowres.jpg" class="py-2 mx-auto">
                <h3 class="text-xl text-gray-800 capitalize pb-1">Alexander Fryba</h3>
                <p class="text-md text-gray-700">Product Developer <br/> Expert</p>
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
