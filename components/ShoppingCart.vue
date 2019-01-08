<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >{{product.title}} - {{product.price}}- {{product.quantity}}</li>
    </ul>
    <p>Total: {{total | currency}}</p>
    <button @click="this.checkout">Checkout</button>
    <p v-if="checkoutStatus">{{checkoutStatus}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      products: "cart/cartProducts",
      total: "cart/cartTotal"
    }),
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    })
  },
  methods: {
      ...mapActions({
          checkout:'cart/checkout'
      })
  },
};
</script>

<style scoped>
</style>