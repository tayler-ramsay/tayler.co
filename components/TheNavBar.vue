<template>
  <nav class="nav">
    <div class="logo">
      <nuxt-link :to="{name: 'index'}" class="logo text-lg">Pavone</nuxt-link>
      <span class="subheader">A Vue App in Nuxt</span>
    </div>
    <div>
      <nuxt-link :to="{name: 'cart'}" class="text-lg">Cart</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between
}
</style>