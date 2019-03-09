<template>
  <div>
<<<<<<< HEAD
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
=======
    <h1>Tayler's Products</h1>
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


>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
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
  },
>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
};
</script>

<style scoped>
<<<<<<< HEAD
=======
.custom-select {
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #fff;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #201c29;
    -webkit-box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: -webkit-gradient(linear,left top,left bottom,from(#312d3c),to(#17141d));
    background-image: linear-gradient(to bottom,#312d3c,#17141d);
    background-position: right .7em top 50%,0 0;
    background-size: .65em auto,100%;
}
>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
</style>