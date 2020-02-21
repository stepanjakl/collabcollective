<template>
	<div class="footer bg-cc-blue-second">
		<div class="container mx-auto p-8">

			<div class="w-full">
				<img src="@/assets/Logo-w-lowres.png" class="w-auto mb-2" style="height: 40px">
			</div>

			<div class="flex sm:flex-row flex-col">
				<div class="sm:w-1/2 w-full">

					<h2 class="text-bold text-white text-4xl p-2">Join us today!</h2>

					<p class="text-white text-md">
						Buyers: find interesting rights <br>
						opportunities &amp; optimize your content <br>
						portfolio.
					</p>

					<div class="flex flex-row pt-8 pb-8">
						<div class="w-1/2">
							<router-link to="/buyer" class="btn btn-shallow-white">Buyers</router-link>
						</div>
						<div class="w-1/2 pl-4">
							<router-link to="/seller" class="btn btn-shallow-black">Sellers</router-link>
						</div>
					</div>

				</div>

				<div class="sm:w-1/2 w-full sm:mt-0 mt-8 flex flex-row">
				
					<div class="w-1/2 pl-4">
						<h3 class="text-bolder text-cc-blue-darkest mb-4" style="font-variant: small-caps;">Info</h3>
						<ul>
							<li class="text-medium text-white text-lg mb-3">FAQ</li>
							<li class="text-medium text-white text-lg mb-3">Contact</li>
							<li class="text-medium text-white text-lg mb-3">Cookies Policy</li>
						</ul>
					</div>

					<div class="w-1/2 pl-4">
						<h3 class="text-bolder text-cc-blue-darkest mb-4" style="font-variant: small-caps;">Policy</h3>
						<ul>
							<li class="text-medium text-white text-lg mb-3">Terms</li>
							<li class="text-medium text-white text-lg mb-3">Privacy</li>
						</ul>
					</div>

				</div>
			</div>

			<div class="flex flex-wrap sm:flex-row flex-col sm:mt-4 mt-8">
				<div class="sm:w-1/2 w-full">
					<button class="btn btn-yellow">Register Now</button>
				</div>
				<div class="sm:w-1/2 w-full pl-4 pt-2">
					<p class="text-white text-lg inline">
						<span class="h-2px mr-4 mb-1 bg-white inline-block" style="width: 24px"></span>
						<a href="" class="mr-4">Facebook</a>
						<a href="">Linked In</a>
					</p>
				</div>
			</div>

			<div class="flex flex-wrap mt-16">
				<div class="w-1/2">
					<p class="text-cc-blue-darkest text-sm">&copy; Content Arena</p>
				</div>
				<div class="w-1/2 pl-4">
					<p class="text-cc-blue-darkest text-sm">All rights reserved</p>
				</div>
			</div>

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
