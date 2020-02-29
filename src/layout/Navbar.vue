<template>
    <div class="navbar p-8 w-full absolute z-30">
        <div class="container mx-auto flex flex-row justify-between items-center" style="height: 50px;">

            <div class="h-full">
                <router-link to="/">
                    <img alt="Content Arena Logo" src="@/assets/logos/logo-w.svg" class="w-auto h-full mx-auto md:mx-0" id="logo-light">
                    <img alt="Content Arena Logo" src="@/assets/logos/logo-b.svg" class="w-auto h-full mx-auto md:mx-0" id="logo-dark">
                </router-link>
            </div>

            <nav class="hidden md:flex flex-col md:flex-row items-center">

                <div class="flex-row mt-6 md:m-0 tracking-wide" id="text-change">
                    <router-link class="mr-8" to="/sellers">Sellers</router-link>
                    <router-link class="mr-8" to="/buyers">Buyers</router-link>
                    <router-link class="mr-8" to="/about-us">About</router-link>
                    <router-link class="md:mr-12" to="/contact">Contact</router-link>
                </div>

                <div class="sm:mt-0 mt-6" style="width: max-content;">
                    <div class="btn-connect">
                        <anim-button blue to="/register" class="btn-nobottom rounded-l-sm rounded-r-none">Register</anim-button>
                        <anim-button yellow to="/login" class="btn-nobottom rounded-l-none rounded-r-sm">Sign in</anim-button>
                        <!--<a href="https://contentarena.com/registration" class="btn btn-blue btn-nobottom rounded-l-sm">Register</a>
                        <a href="https://contentarena.com/login" class="btn btn-yellow btn-nobottom rounded-r-sm">Sign in</a>-->
                    </div>
                </div>

            </nav>

            <div class="flex md:hidden">
                <button v-on:click="() => { this.$root.$emit('menu-click') }" class="flex items-center rounded text-yellow-400 p-2 hover:text-white">
                    <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
    import AnimButton from '@/components/AnimButton'

    export default {
        name: 'Navbar',
        components: {
            AnimButton
        },
        watch: {
            $route() {
                this.$nextTick(() => {

                    const name = this.$router.currentRoute.name;

                    if (name == 'About' || name == 'Contact') {

                        document.getElementById('logo-light').classList.add('hidden');
                        document.getElementById('logo-dark').classList.remove('hidden');

                        document.getElementById('text-change').style.color = '#00537d';
                        
                        if(document.getElementsByClassName('router-link-active').length >= 2)
                            document.getElementsByClassName('router-link-active')[1].style.textDecorationColor = '#00537d';

                    } else {

                        document.getElementById('logo-light').classList.remove('hidden');
                        document.getElementById('logo-dark').classList.add('hidden');

                        document.getElementById('text-change').style.color = 'whitesmoke';

                        if(document.getElementsByClassName('router-link-active').length >= 2)
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

                if(document.getElementsByClassName('router-link-active').length >= 2)
                    document.getElementsByClassName('router-link-active')[1].style.textDecorationColor = '#00537d';

                document.getElementById('text-change').style.borderBottomColor = '#00537d';

            } else {

                document.getElementById('logo-light').classList.remove('hidden');
                document.getElementById('logo-dark').classList.add('hidden');

                document.getElementById('text-change').style.color = 'whitesmoke';

                if(document.getElementsByClassName('router-link-active').length >= 2)
                    document.getElementsByClassName('router-link-active')[1].style.textDecorationColor = 'whitesmoke';

                document.getElementById('text-change').style.borderBottomColor = 'whitesmoke';

            }
        }
    }
</script>

<style scoped>
    .router-link-active {
        font-weight: 700;
        padding-bottom: 4px;
        border-bottom: solid 2px;
    }

    nav > * {
        margin: 8px;
    }
</style>
