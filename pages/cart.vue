<template>
<<<<<<< HEAD
  <div>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
=======
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
>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
import ProductList from "@/components/ProductList";
import ShoppingCart from "@/components/ShoppingCart";

export default {
<<<<<<< HEAD
    components: {
        ProductList,
        ShoppingCart
    }
=======
  transition:'test',
  layout: "shoppingCart",
  components: {
    ProductList,
    ShoppingCart
  }
>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
};
</script>

<style scoped>
<<<<<<< HEAD
=======
.container {
  display: grid;
  grid-template-columns: 400px auto;
  grid-gap: 30px;
}
.item {

}
>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
</style>