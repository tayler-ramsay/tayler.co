<template>
  <div>
    <h1>Pavone Products</h1>
    <img
      v-if="loading"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
      alt
    >
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{product.title}} - {{product.price | currency}} - {{product.inventory}}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    ...mapActions({
      fetchProducts: 'cart/fetchProducts',
      addProductToCart:'cart/addProductToCart'
    }),
  },
  computed: {
    ...mapState({
      products: state => state.cart.products
    }),
    ...mapGetters({
      productIsInStock: 'cart/productIsInStock'
    })

  },
  created() {
    this.loading = true;
      this.fetchProducts()
      .then(() => (this.loading = false));
  }
};
</script>

<style scoped>
</style>