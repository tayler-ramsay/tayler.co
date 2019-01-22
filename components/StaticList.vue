<template>
  <div>
    <input type="text" v-model="newItem" v-on:keyup.enter="pushItem">
    <button @click="pushItem" :disabled="newItem.length === 0">Add Item</button>
    <button @click="clearItems">Clear Items</button>
    <h3 v-if="items.length <= 0">There are no items</h3>
    <ul>
      <li @click="checkItem(item)" v-for="item in items" :key="item.id" :class="[item.purchased ? 'strikeout' : '']">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      items: [
        {
          name: 'jack',
          purchased: false
        },
        {
          name: 'lily',
          purchased: false
        },
        {
          name: 'nick',
          purchased: true
        }
      ]
    };
  },
  methods: {
    pushItem: function() {
      this.items.push(this.newItem);
      this.newItem = "";
    },
    clearItems: function() {
      this.items = [];
    },
    checkItem: function(item){
        item.purchased = !item.purchased
    }
  }
};
</script>

<style scoped>
.strikeout {
  text-decoration: line-through;
  color: lightgray;
}
</style>