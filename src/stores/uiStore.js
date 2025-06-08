import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  // Estado
  const showShoppingCart = ref(false)
  
  // Acciones
  function toggleShoppingCart() {
    showShoppingCart.value = !showShoppingCart.value
  }
  
  function openShoppingCart() {
    showShoppingCart.value = true
  }
  
  function closeShoppingCart() {
    showShoppingCart.value = false
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return {
    showShoppingCart,
    toggleShoppingCart,
    openShoppingCart,
    closeShoppingCart,
    scrollToTop
  }
})