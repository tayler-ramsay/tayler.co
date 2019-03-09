<template>
  <div>
    <h1>Product List</h1>
    <img
        v-if="loading"
        src="https://i.imgur.com/JfPpwOA.gif" alt="">
    <ul v-else>
      <li 
      v-for="product in products">
      {{product.title}} - {{product.price | currency}} - {{product.inventory}}
      <button @click="addProductToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import shop from "@/api/shop.js";
export default {
   data(){
       return{
           loading: false
       }
   },
  computed: {
    products() {
      return this.$store.getters["cart/availableProducts"];
    }
  },
  methods: {
      addProductToCart(product){
        this.$store.dispatch("cart/addProductToCart", product)
      }
  },
  created() {
    this.loading = true
    return this.$store.dispatch("cart/fetchProducts")
    .then(() => this.loading = false)
  }
};
</script>

<style scoped>
</style>