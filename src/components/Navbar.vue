<template>
	<div class="navbar p-8 w-full absolute z-10">
		<div class="container mx-auto flex flex-col md:flex-row justify-between items-center" style="height: 50px;">

			<div class="w-full h-full">
				<router-link to="/">
					<img src="@/assets/logo-w.svg" class="w-auto h-full" id="logo-light">
					<img src="@/assets/Logo-lowres.png" class="w-auto h-full hidden" id="logo-dark">
				</router-link>
			</div>

			<nav class="flex flex-col md:flex-row items-center">
				
				<div class="flex-row" id="text-change">
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
		name: 'Navbar',
		watch:{
			$route() {
				this.$nextTick( () => {
				
					const name = this.$router.currentRoute.name;
					
					if(name == 'About' || name == 'Contact'){
						
						document.getElementById('logo-light').classList.add('hidden');
						document.getElementById('logo-dark').classList.remove('hidden');

						document.getElementById('text-change').style.color = '#00537d';
						document.getElementsByClassName('router-link-active')[1].style.textDecorationColor = '#00537d';

					}else{

						document.getElementById('logo-light').classList.remove('hidden');
						document.getElementById('logo-dark').classList.add('hidden');
						
						document.getElementById('text-change').style.color = 'whitesmoke';
						document.getElementsByClassName('router-link-active')[1].style.textDecorationColor = 'whitesmoke';

					}
				} )
			}
		},
		mounted() {

			const name = this.$router.currentRoute.name;
					
			if(name == 'About' || name == 'Contact'){
						
				document.getElementById('logo-light').classList.add('hidden');
				document.getElementById('logo-dark').classList.remove('hidden');

				document.getElementById('text-change').style.color = '#00537d';
				document.getElementsByClassName('router-link-active')[1].style.textDecorationColor = '#00537d';

			}else{

				document.getElementById('logo-light').classList.remove('hidden');
				document.getElementById('logo-dark').classList.add('hidden');
				
				document.getElementById('text-change').style.color = 'whitesmoke';
				document.getElementsByClassName('router-link-active')[1].style.textDecorationColor = 'whitesmoke';

			}
		}
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
