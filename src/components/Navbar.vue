<template>
  <div class="navbar p-8">
    <div class="flex flex-row justify-between" style="height: 50px;">
      <div class="w-full h-full">
        <router-link to="/">
          <img src="@/assets/Logo-lowres.png" class="w-auto h-full">
        </router-link>
      </div>
      <nav class="flex flex-row">
        <router-link to="/seller">Seller</router-link>
        <router-link to="/buyer">Buyer</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <div style="width: max-content;">
          <router-link to="/register">Register</router-link>
          <router-link to="/signin">Sign&nbsp;in</router-link>
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
  text-decoration: underline 2px;
}
nav > * {
  margin: 8px;
}
</style>
