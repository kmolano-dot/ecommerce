<template>
  <TheHeader @toggle-shopping-cart="toggleShoppingCart" />
  <ShoppingCart :is-visible="showShoppingCart" @close="toggleShoppingCart" />
  <ProductShowcase />
</template>


<script setup>
import { ref } from 'vue'
import TheHeader from './components/ecommerce/TheHeader.vue'
import ShoppingCart from './components/ecommerce/ShoppingCart.vue'
import ProductShowcase from './components/ecommerce/ProductShowcase.vue'

const showShoppingCart = ref(false)

const toggleShoppingCart = () => {
  showShoppingCart.value = !showShoppingCart.value
}
</script>
