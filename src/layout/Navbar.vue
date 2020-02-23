<template>
    <div class="navbar p-8 w-full absolute z-50">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center" style="height: 50px;">

            <div class="w-full h-full">
                <router-link to="/">
                    <img src="@/assets/logos/logo-w.svg" class="w-auto h-full mx-auto md:mx-0" id="logo-light">
                    <img src="@/assets/logos/logo-b.svg" class="w-auto h-full mx-auto md:mx-0" id="logo-dark">
                </router-link>
            </div>

            <nav class="flex flex-col md:flex-row items-center">

                <div class="flex-row mt-6 md:m-0 tracking-wide" id="text-change">
                    <router-link class="mr-8" to="/seller">Seller</router-link>
                    <router-link class="mr-8" to="/buyer">Buyer</router-link>
                    <router-link class="mr-8" to="/about-us">About</router-link>
                    <router-link class="md:mr-12" to="/contact">Contact</router-link>
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
        watch: {
            $route() {
                this.$nextTick(() => {

                    const name = this.$router.currentRoute.name;

                    if (name == 'About' || name == 'Contact') {

                        document.getElementById('logo-light').classList.add('hidden');
                        document.getElementById('logo-dark').classList.remove('hidden');

                        document.getElementById('text-change').style.color = '#00537d';
                        document.getElementsByClassName('router-link-active')[1].style.textDecorationColor = '#00537d';

                    } else {

                        document.getElementById('logo-light').classList.remove('hidden');
                        document.getElementById('logo-dark').classList.add('hidden');

                        document.getElementById('text-change').style.color = 'whitesmoke';
                        document.getElementsByClassName('router-link-active')[1].style.textDecorationColor = 'whitesmoke';

                    }
                })
            }
        },
        mounted() {

            const name = this.$router.currentRoute.name;

            if (name == 'About' || name == 'Contact') {

                document.getElementById('logo-light').classList.add('hidden');
                document.getElementById('logo-dark').classList.remove('hidden');

                document.getElementById('text-change').style.color = '#00537d';
                document.getElementsByClassName('router-link-active')[1].style.textDecorationColor = '#00537d';

                document.getElementById('text-change').style.borderBottomColor = '#00537d';

            } else {

                document.getElementById('logo-light').classList.remove('hidden');
                document.getElementById('logo-dark').classList.add('hidden');

                document.getElementById('text-change').style.color = 'whitesmoke';
                document.getElementsByClassName('router-link-active')[1].style.textDecorationColor = 'whitesmoke';

                document.getElementById('text-change').style.borderBottomColor = 'whitesmoke';

            }
        }
    }
</script>

<style scoped>
    .router-link-active {
        font-weight: 600;
        padding-bottom: 4px;
        border-bottom: solid 2px;
    }

    nav > * {
        margin: 8px;
    }
</style>
