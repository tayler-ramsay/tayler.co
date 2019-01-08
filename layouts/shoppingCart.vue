<template>
  <div class="container">
    <TheNavBar /> 
    <nuxt/>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar'
export default {
  components: {
    TheNavBar
  }
}
</script>

<style>
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8077;
  color: #7e3b80;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
button:disabled{
  color: lightgray;
}
</style>