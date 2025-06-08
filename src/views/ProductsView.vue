<template>
  <main>
    <Filters @filter-change="updateFilters" />
    <ProductList :filters="filters" />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import ProductList from '../components/ecommerce/ProductList.vue'
import Filters from '../components/ecommerce/Filters.vue'

// Estado para almacenar los filtros seleccionados
const filters = ref({
  categories: [],
  colors: [],
  sizes: [],
  priceRanges: [],
  sortOption: 'popular'
})

// Actualizar los filtros cuando cambian
const updateFilters = (newFilters) => {
  filters.value = newFilters
}
</script>

<style scoped>
main {
  background-color: white;
}
</style>
