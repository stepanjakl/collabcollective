<template>
	<div class="navbar p-8 w-full absolute z-10">
		<div class="container mx-auto flex flex-col md:flex-row justify-between items-center" style="height: 50px;">

			<div class="w-full h-full">
				<router-link to="/">
					<img src="@/assets/logo-w.svg" class="mx-auto md:mx-0 h-full">
				</router-link>
			</div>

			<nav class="flex flex-col md:flex-row items-center text-white">
				<div class="flex-row">
				<router-link class="mr-6" to="/seller">Seller</router-link>
				<router-link class="mr-6" to="/buyer">Buyer</router-link>
				<router-link class="mr-6" to="/about">About</router-link>
				<router-link class="md:mr-10" to="/contact">Contact</router-link>
				</div>

				<div style="width: max-content;">
					<div class="btn-connect">
						<router-link class="btn btn-blue" to="/register">Register</router-link>
						<router-link class="btn btn-yellow" to="/signin">Sign in</router-link>
					</div>
				</div>

			</nav>

		</div>
	</div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
.router-link-active {
	font-weight: 600;
    text-decoration: underline whitesmoke 2px;
}
nav > * {
    margin: 8px;
}
</style>
