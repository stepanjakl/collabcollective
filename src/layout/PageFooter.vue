<template>
	<div class="footer bg-cc-blue-second pt-12">
		<div class="container mx-auto p-8">

			<div class="w-full pb-8">
				<img src="@/assets/logos/logo-w.svg" class="w-auto mb-2" style="height: 40px">
			</div>

			<div class="flex sm:flex-row flex-col">
				<div class="sm:w-1/2 w-full">

					<h2 class="text-black text-white text-5xl p-2">Join us today!</h2>

					<p class="text-white text-lg mt-4">
						Buyers: find interesting rights <br>
						opportunities &amp; optimize your content <br>
						portfolio.
					</p>

					<div class="flex flex-row pt-8 pb-8 justify-start">
						<div>
							<router-link to="/buyer" class="btn btn-shallow-white lg:px-12 md:px-12 sm:px-8 px-8">Buyers</router-link>
						</div>
						<div class="pl-6">
							<router-link to="/seller" class="btn btn-shallow-black lg:px-12 md:px-12 sm:px-8 px-8">Sellers</router-link>
						</div>
					</div>

				</div>

				<div class="sm:w-1/2 w-full sm:mt-0 mt-8 flex flex-row">

					<div class="w-1/2 sm:pl-4 pl-0">
						<h3 class="font-bold text-cc-blue-darkest mb-6 uppercase text-sm tracking-widest">Info</h3>
						<ul>
							<li class="font-medium text-white text-lg mb-3">FAQ</li>
							<li class="font-medium text-white text-lg mb-3">Contact</li>
							<li class="font-medium text-white text-lg mb-3">Cookies Policy</li>
						</ul>
					</div>

					<div class="w-1/2 pl-4">
						<h3 class="font-bold text-cc-blue-darkest mb-6 uppercase text-sm tracking-widest">Policy</h3>
						<ul>
							<li class="font-medium text-white text-lg mb-3">Terms</li>
							<li class="font-medium text-white text-lg mb-3">Privacy</li>
						</ul>
					</div>

				</div>
			</div>

			<div class="flex flex-wrap sm:flex-row flex-col sm:mt-12 mt-4">
				<div class="sm:w-1/2 w-full">
					<button class="btn btn-yellow py-4 px-16 text-lg">Register Now</button>
				</div>
				<div class="sm:w-1/2 w-full sm:pl-4 sm: pl-0 sm:pt-2 pt-6 flex flex-row items-center">
					<p class="lg:w-1/2 w-full text-white text-lg font-light  sm:-ml-0 -ml-2">
						<span class="h-px mr-6 mb-1 bg-white inline-block" style="width: 32px"></span>
						<a href="" class="mr-4">Facebook</a>
						<a href="">LinkedIn</a>
					</p>
					<div class="lg:w-1/2 sm:w-16 w-12  sm:-ml-0 -ml-2">
						<a href="#" v-scroll-to="'#top'">
							<img src="@/assets/back-to-top.svg" class="w-16 inline-block">
						</a>
					</div>
				</div>
			</div>

			<div class="flex flex-wrap sm:justify-start justify-between sm:mt-24 mt-12 mb-4">
				<div class="sm:w-1/2 w-auto sm:-ml-0 -ml-2">
					<p class="text-cc-blue-darkest text-sm">©{{ new Date().getFullYear() }} Content Arena</p>
				</div>
				<div class="sm:w-1/2 w-auto sm:pl-4 pl-0 sm:-mr-0 -mr-2">
					<p class="text-cc-blue-darkest text-sm">All rights reserved</p>
				</div>
			</div>

			<!--<div class="text-center">
				<p class="text-cc-blue-darkest text-sm">Developed by <a href="https://www.bohemicastudio.com/">Team Bohemica</a> with &lt;3</p>
			</div>-->

		</div>
	</div>
</template>

<script>
	export default {
		name: 'PageFooter'
	}
</script>

<style scoped>

</style>
