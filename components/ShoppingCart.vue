<template>
  <div>
<<<<<<< HEAD
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in products">{{product.title}} - {{product.price | currency}} - {{product.quantity}}</li>
    </ul>
    <p>Total: {{total | currency}}</p>
=======
    <notifications group="foo" />
    <button @click="notify">What's this?</button>
    <h1>Shopping Cart</h1>
    <div id="demo">{{ fullname }}</div>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >{{product.title}} - {{product.price}}- {{product.quantity}}</li>
    </ul>
    <p>Total: {{total | currency}}</p>
    <button @click="this.checkout">Checkout</button>
    <p v-if="checkoutStatus">{{checkoutStatus}}</p>
>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  computed: {
    products() {
      return this.$store.getters["cart/cartProducts"];
    },
    total() {
      return this.$store.getters["cart/cartTotal"];
    }
  }
=======
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      firstName: 'Tayler',
      lastName: 'Ramsay'
    }
  },
  computed: {
    ...mapGetters({
      products: "cart/cartProducts",
      total: "cart/cartTotal"
    }),
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    fullname: function(){
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
      ...mapActions({
          checkout:'cart/checkout'
      }),
        notify () {
      this.$notify({
        group: 'foo',
        title: '<h4>Nothing!</h4>',
        text: 'Don`t eat it!',
        type: 'warning',
        duration: -10
      })
    },
  },
>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
};
</script>

<style scoped>
</style>