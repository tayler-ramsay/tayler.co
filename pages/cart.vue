<template>
  <div class="container">
    <div class="item">
      <ProductList/>
    </div>
    <div class="item">
      <ShoppingCart/>
    </div>
  </div>
</template>

 <script>
import ProductList from "@/components/ProductList";
import ShoppingCart from "@/components/ShoppingCart";

export default {
  transition:'test',
  layout: "shoppingCart",
  components: {
    ProductList,
    ShoppingCart
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 400px auto;
  grid-gap: 30px;
}
.item {

}
</style>