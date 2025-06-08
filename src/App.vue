<template>
  <Header @toggle-shopping-cart="uiStore.toggleShoppingCart" />
  <ShoppingCart :is-visible="uiStore.showShoppingCart" @close="uiStore.toggleShoppingCart" />
  <router-view />
</template>


<script setup>
import { useUiStore } from './stores/uiStore'
import Header from './components/ecommerce/Header.vue'
import ShoppingCart from './components/ecommerce/ShoppingCart.vue'

const uiStore = useUiStore()
</script>
