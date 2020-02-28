<template>
    <div class="page">

        <top-picture
                title="We make sports media management easy."
                comment="Bringing efficiency to the business">
            <v-lazy-image class="w-full h-full absolute object-cover top-0 no-blur"
                          :src="require('@/assets/headers/about.jpg')"
                          :src-placeholder="require('@/assets/headers/about-lowres.jpg')"/>
        </top-picture>

        <div class="bg-gray-200">

            <div class="pt-4"></div>
            <div class="relative py-8">
                <section-title title="About us"></section-title>
            </div>

            <div class="container mx-auto md:pl-20 pt-12 p-8 pb-24 pt-0">

                <h2 class="font-semibold text-4xl pb-6 text-gray-800">Our story</h2>

                <div class="text-justify leading-loose text-gray-600" style="columns: 2; column-gap: 4rem;">
                    Content Arena was founded by a team of sports media rights experts with the vision to provide
                    bespoke solutions that support sports media rights sellers and buyers in optimising their
                    commercial business processes. Content Arena’s software solutions aim to improve the efficiency,
                    transparency, and simplicity of complex processes in an ever-growing
                    industry which continues to become more fragmented with an increasing amount of available
                    content as well as a growing number for media companies with content needs.
                </div>

            </div>
        </div>

        <div class="pt-4"></div>
        <div class="relative py-8">
            <section-title title="The team"></section-title>
        </div>

        <div class="container mx-auto flex flex-row md:justify-between sm:justify-center justify-center flex-wrap sm:p-8 p-2">

            <ContactPerson name="Erik Lorenz" role="CEO"/>
            <ContactPerson name="Aslinda Ali" role="CTO"/>
            <ContactPerson name="Jamie Rascon" role="Content Activation Manager"/>
            <ContactPerson name="Juan Talco Cruz" role="Business Developer"/>

        </div>

        <div class="relative py-8">
            <section-title title="The advisory board"></section-title>
        </div>

        <div class="container mx-auto flex flex-row md:justify-between sm:justify-center justify-center flex-wrap sm:p-8 p-2">

            <ContactPerson name="Sascha Kojic" role="Co-Founder Content Arena & CEO SN1 Consulting"/>
            <ContactPerson name="Bernhard Reidlsperger" role="Co-Founder Content Arena & President Hogmore Media AG"/>
            <ContactPerson name="Klemens Kögle" role="Co-Founder Content Arena & CEO Hogmore Media AG"/>
            <ContactPerson name="John Gleasure" role="Chief Bussiness Developer Officer DANZ Media"/>
            <ContactPerson name="Alexander Fryba" role="Product Developmet Expert"/>

        </div>

    </div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle';
    import TopPicture from '../layout/TopPicture';
    import ContactPerson from "@/components/ContactPerson";

    export default {
        name: 'Buyer',
        components: {
            ContactPerson,
            SectionTitle,
            TopPicture
        },
    }
</script>

