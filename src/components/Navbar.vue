<template>
  <div class="flex flex-row justify-between">
    <h1>Navbar</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/seller">Seller</router-link> - 
      <router-link to="/buyer">Buyer</router-link> - 
      <router-link to="/about">About</router-link> - 
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
