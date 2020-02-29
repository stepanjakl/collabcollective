<template>
    <div class="lg:hidden flex" :class="{ 'hidden' : hidden }">
        <div class="fixed w-10/12 h-full right-0 bg-gray-300 container z-50">
            <div class="w-full h-full flex flex-col items-center justify-between content-center p-8">
                <button class="text-cc-blue-light self-end" aria-label="Menu toggle" v-on:click="hidden = !hidden">
                    <svg class="stroke-current h-10 w-10" alt="Mobile menu toggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <ul class="list-reset flex flex-col items-start">
                    <li class="pb-2">
                        <router-link to="/sellers" class="text-3xl font-semibold text-cc-blue-dark">Sellers</router-link>
                    </li>
                    <li class="pb-2">
                        <router-link to="/buyers" class="text-3xl font-semibold text-cc-blue-dark">Buyers</router-link>
                    </li>
                    <li class="pb-2">
                        <router-link to="/about" class="text-3xl font-semibold text-cc-blue-dark">About</router-link>
                    </li>
                    <li class="pb-2">
                        <router-link to="/contact" class="text-3xl font-semibold text-cc-blue-dark">Contact</router-link>
                    </li>
                    <li class="pb-2">
                        <a class="text-3xl font-semibold text-cc-blue-light" href="https://contentarena.com/registration">Register</a>
                    </li>
                    <li class="pb-2">
                        <a class="text-3xl font-semibold text-cc-yellow-second" href="https://contentarena.com/login">Login</a>
                    </li>
                </ul>
                <p class="text-cc-blue-dark text-lg font-light pb-24">
                    <span class="h-px mr-6 mb-1 bg-cc-blue-dark inline-block" style="width: 32px"></span>
                    <a href="" class="mr-4">Facebook</a>
                    <a href="">LinkedIn</a>
                </p>
            </div>
        </div>
        <div class="fixed w-full h-full z-40" style="background-color: rgba(0,0,0,0.5)">
            <!--backdrop-filter: blur(4px);-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "MobileMenu",
        data() {
            return {
                hidden: true
            }
        },
        watch: {
            $route (){
                this.hidden = true
            }
        },
        mounted() {
            const _this = this;
            this.$root.$on('menu-click', () => { _this.hidden = !_this.hidden });
        }
    }
</script>

<style scoped>

</style>
