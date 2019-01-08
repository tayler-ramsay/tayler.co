<template>
  <div>
    <ProductList/>
    <hr/>
    <ShoppingCart/>
  </div>
</template>

 <script>
import ProductList from "@/components/ProductList";
import ShoppingCart from "@/components/ShoppingCart";

export default {
  layout: 'shoppingCart',
  components: {
    ProductList,
    ShoppingCart
  }
};
</script>

</style>
<style scoped>