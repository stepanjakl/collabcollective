<template>
	<div class="navbar p-8 w-full absolute z-10">
		<div class="container mx-auto flex flex-row justify-between" style="height: 50px;">

			<div class="w-full h-full">
				<router-link to="/">
					<img src="@/assets/logo-w.svg" class="w-auto h-full">
				</router-link>
			</div>

			<nav class="flex flex-row text-white">
				<router-link to="/seller">Seller</router-link>
				<router-link to="/buyer">Buyer</router-link>
				<router-link to="/about">About</router-link>
				<router-link to="/contact">Contact</router-link>

				<div style="width: max-content;">
					<div class="btn-connect">
						<router-link class="btn btn-blue" to="/register">Register</router-link>
						<router-link class="btn btn-yellow" to="/signin">Sign&nbsp;in</router-link>
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
