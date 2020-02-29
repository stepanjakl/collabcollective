<template>
	<div class="footer bg-cc-blue-second pt-12">
		<div class="container mx-auto sm:p-8 p-4">

			<div class="w-full pb-8">
				<img alt="Logo" src="@/assets/logos/logo-w.svg" class="w-auto mb-2" style="height: 40px">
			</div>

			<div class="flex sm:flex-row flex-col">
				<div class="sm:w-1/2 w-full">

					<h2 class="font-semibold text-white text-4xl p-2">Join us today!</h2>

					<p class="text-white text-lg mt-4" style="max-width: 340px">
						Buyers: find interesting rights
						opportunities &amp; optimize your content
						portfolio.
					</p>

					<div class="flex flex-row pt-8 pb-8 justify-start">
						<div>
							<router-link to="/buyers" class="btn btn-shallow-white lg:px-12 md:px-12 sm:px-8 px-8">Buyers</router-link>
						</div>
						<div class="pl-6">
							<router-link to="/sellers" class="btn btn-shallow-black lg:px-12 md:px-12 sm:px-8 px-8">Sellers</router-link>
						</div>
					</div>

					<div class="w-full sm:hidden block my-8">
						<anim-button yellow to="/register" class="py-4 px-16 text-lg">Register now</anim-button>
						<!--<a href="https://contentarena.com/registration" class="btn btn-yellow py-4 px-16 text-lg">Register Now</a>-->
					</div>

				</div>

				<div class="sm:w-1/2 w-full sm:mt-0 mt-8 flex flex-row">

					<div class="w-1/2 sm:pl-4 pl-0">
						<h3 class="font-bold text-cc-blue-darkest mb-6 uppercase sm:text-sm text-xs tracking-widest">Info</h3>
						<ul>
							<li class="font-medium text-white text-lg mb-3"><a href="https://landing.contentarena.com/web/faq/">FAQ</a></li>
							<li class="font-medium text-white text-lg mb-3"><router-link to="/contact">Contact</router-link></li>
							<li class="font-medium text-white text-lg mb-3"><a href="https://landing.contentarena.com/web/cookie-policy/">Cookies Policy</a></li>
						</ul>
					</div>

					<div class="w-1/2 pl-4">
						<h3 class="font-bold text-cc-blue-darkest mb-6 uppercase sm:text-sm text-xs tracking-widest">Policy</h3>
						<ul>
							<li class="font-medium text-white text-lg mb-3"><a href="https://landing.contentarena.com/web/terms-of-use/">Terms</a></li>
							<li class="font-medium text-white text-lg mb-3"><a href="https://landing.contentarena.com/web/privacy-policy/">Privacy</a></li>
						</ul>
					</div>

				</div>
			</div>

			<div class="flex flex-wrap sm:flex-row flex-col sm:mt-12 mt-4">
				<div class="w-1/2 sm:block hidden relative" style="top: 20px">
					<anim-button yellow to="/register" class="py-4 px-16 text-lg">Register now</anim-button>
					<!--<a href="https://contentarena.com/registration" class="btn btn-yellow py-4 px-16 text-lg">Register Now</a>-->
				</div>
				<div class="sm:w-1/2 w-full sm:pl-4 sm: pl-0 sm:pt-2 pt-6 flex flex-row items-center">
					<p class="lg:w-1/2 w-full text-white text-lg font-light">
						<span class="h-px mr-6 mb-1 bg-white inline-block" style="width: 32px"></span>
						<a href="" class="mr-4">Facebook</a>
						<a href="">LinkedIn</a>
					</p>
					<div class="lg:w-1/2 sm:w-16 w-12">
						<a href="#" v-scroll-to="'#top'">
							<img alt="Back to top" src="@/assets/back-to-top.svg" class="w-16 inline-block">
						</a>
					</div>
				</div>
			</div>

			<div class="flex flex-wrap sm:justify-start justify-between sm:mt-24 mt-16 mb-6">
				<div class="sm:w-1/2 w-auto">
					<p class="text-cc-blue-darkest text-sm leading-loose">© {{ new Date().getFullYear() }} Content Arena. All rights reserved.</p>
				</div>
				<div class="sm:w-1/2 w-auto sm:pl-4 pl-0 leading-loose">
					<p class="text-cc-blue-darkest text-sm">Website created with ❤ by <a href="https://bohemicastudio.com?utm_source=contentarena" target="_blank" class="font-semibold">Bohemica Studio</a></p>
				</div>
			</div>

			<!--<div class="text-center">
				<p class="text-cc-blue-darkest text-sm">Developed by <a href="https://www.bohemicastudio.com/">Team Bohemica</a> with ❤️</p>
			</div>-->

		</div>
	</div>
</template>

<script>
	import AnimButton from '@/components/AnimButton'

	export default {
		name: 'PageFooter',
		components: {
			AnimButton
		}
	}
</script>

<style scoped>

</style>
