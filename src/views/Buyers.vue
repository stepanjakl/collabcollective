<template>
	<div class="page">

        <top-picture
            title="The one stop 24/7 to buy the content you need.">
            <v-lazy-image class="w-full h-full absolute object-cover top-0 no-blur"
                :src="require('@/assets/headers/home.jpg')"
                :src-placeholder="require('@/assets/headers/home-lowres.jpg')"/>
        </top-picture>

        <over-block
            title="Buyers Marketplace"
            comment="Buyers can easily access small and large industry players, filter and sort results to find what they are looking for all with the click of a mouse."/>

		<div class="relative py-8 mt-40">
            <section-title title="Key features"></section-title>
        </div>

        <content-block right class="md:pl-12 pl-0"
                       label="Browse Listings"
                       header="Optimize your content portfolio"
                       text="Browse available live and non-live rights from sellers around the world that suit your needs by filtering sports, territories and rights categories. Recieve automated alerts when new content is available for your markets.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/buyer-listing.png')"
                          :src-placeholder="require('@/assets/asides/buyer-listing-lowres.png')"/>
        </content-block>

        <content-block left
                       label="Bid and buy"
                       header="Buying sports content has never been easier"
                       text="All information that is important for your buying decisions is provided for each content listing. Review event information, comprehensive term sheets, production standarts and other relevenat iformation. Contact the seller or directly bid for content with just a few clicks.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/buyer-bid.png')"
                          :src-placeholder="require('@/assets/asides/buyer-bid-lowres.png')"/>
        </content-block>

        <content-block right class="md:pl-12 pl-0"
                       label="Security &amp; Transparency"
                       header="Buy from vetted sellers only"
                       text="All sellers and rights listed are vetted by Content Arena. Communicate with sellers directly via the platform and review all contractual details before making a bid. You will recieve a counter-signed license agreement immidiately after your offer has been accepted.">
            <v-lazy-image class="w-full h-auto"
                          :src="require('@/assets/asides/buyer-security.png')"
                          :src-placeholder="require('@/assets/asides/buyer-security-lowres.png')"/>
        </content-block>

	</div>
</template>

<script>
    import SectionTitle from '../components/SectionTitle';
    import TopPicture from '../layout/TopPicture';
    import OverBlock from '../components/OverBlock';
    import ContentBlock from '../components/ContentBlock';

    export default {
        name: 'Buyers',
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
