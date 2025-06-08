import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // Estado
  const items = ref([])

  // Getters
  const count = computed(() => items.value.length)

  const subtotal = computed(() => {
    return items.value.reduce((total, item) => {
      // Convertir el precio de formato "$X.XXX.XXX" a número
      const price = parseFloat(item.price.replace('$', '').replace(/\./g, '').replace(',', '.'))
      return total + (price * item.quantity)
    }, 0)
  })

  const formattedSubtotal = computed(() => {
    // Formatear el subtotal como "$X.XXX.XXX"
    return `$${subtotal.value.toLocaleString('es-CO')}`
  })

  // Acciones
  function addToCart(product) {
    // Verificar si el producto ya está en el carrito
    const existingItem = items.value.find(item => item.id === product.id)
    const isFirstItem = items.value.length === 0

    if (existingItem) {
      // Si ya existe, incrementar la cantidad
      existingItem.quantity += 1
    } else {
      // Si no existe, agregar al carrito con cantidad 1
      items.value.push({
        ...product,
        quantity: 1
      })
    }

    return isFirstItem
  }

  function removeFromCart(productId) {
    const index = items.value.findIndex(item => item.id === productId)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  return {
    items,
    count,
    subtotal,
    formattedSubtotal,
    addToCart,
    removeFromCart
  }
})
