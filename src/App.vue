<template>
  <Header @toggle-shopping-cart="toggleShoppingCart" />
  <ShoppingCart :is-visible="showShoppingCart" @close="toggleShoppingCart" />
  <router-view />
</template>


<script setup>
import { ref } from 'vue'
import Header from './components/ecommerce/Header.vue'
import ShoppingCart from './components/ecommerce/ShoppingCart.vue'

const showShoppingCart = ref(false)

const toggleShoppingCart = () => {
  showShoppingCart.value = !showShoppingCart.value
}
</script>
