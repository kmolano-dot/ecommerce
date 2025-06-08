<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-8 py-16">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Nuestros Productos</h2>

      <div class="mt-6 grid grid-cols-4 gap-x-6 gap-y-10">
        <div v-for="product in products" :key="product.id" class="group relative">
          <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-auto w-full h-80 rounded-md bg-gray-200 object-cover group-hover:opacity-75" />
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link :to="`/product/${product.id}`">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </router-link>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useProductStore } from '@/stores/products.js'
import { storeToRefs } from 'pinia'

const props = defineProps({
  filters: {
    type: Object,
    default: () => ({
      categories: [],
      colors: [],
      sizes: [],
      priceRanges: [],
      sortOption: 'popular',
      searchTerm: ''
    })
  }
})

const productStore = useProductStore()
const { getAllProducts } = storeToRefs(productStore)

// Productos filtrados basados en los filtros aplicados
const products = computed(() => {
  if (!props.filters || 
      (props.filters.categories.length === 0 && 
       props.filters.colors.length === 0 && 
       props.filters.sizes.length === 0 && 
       props.filters.priceRanges.length === 0 && 
       props.filters.sortOption === 'popular' &&
       (!props.filters.searchTerm || props.filters.searchTerm.trim() === ''))) {
    // Si no hay filtros aplicados, mostrar todos los productos
    return getAllProducts.value
  }

  // Aplicar filtros
  return productStore.getFilteredProducts(props.filters)
})
</script>

<style scoped>

</style>
