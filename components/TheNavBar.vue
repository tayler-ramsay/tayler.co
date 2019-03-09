<template>
  <nav class="nav">
    <div class="logo">
      <nuxt-link :to="{name: 'index'}" class="logo text-lg">Tayler Ramsay</nuxt-link>
      <span>I am a frontend developer working at
        <a href="https://Pavone.net" target="blank">Pavone Marketing</a>
      </span>
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
  justify-content: space-between;
}
</style>