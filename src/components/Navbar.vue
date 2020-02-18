<template>
    <div class="flex flex-row justify-between">
        <h1>Navbar</h1>
        <nav>
            <router-link to="/">
                <template v-if="$route.name === 'Home'">
                    <strong>Home</strong>
                </template>
                <template v-else>
                    Home
                </template>
            </router-link>
            -
            <router-link to="/seller">
                <template v-if="$route.name === 'Seller'">
                    <strong>Seller</strong>
                </template>
                <template v-else>
                    Seller
                </template>
            </router-link>
            -
            <router-link to="/buyer">
                <template v-if="$route.name === 'Buyer'">
                    <strong>Buyer</strong>
                </template>
                <template v-else>
                    Buyer
                </template>
            </router-link>
            -
            <router-link to="/about">
                <template v-if="$route.name === 'About'">
                    <strong>About</strong>
                </template>
                <template v-else>
                    About
                </template>
            </router-link>
            -
            <router-link to="/contact">
                <template v-if="$route.name === 'Contact'">
                    <strong>Contact</strong>
                </template>
                <template v-else>
                    Contact
                </template>
            </router-link>
        </nav>
        <span>Current: "{{$route.name}}"</span>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>
