<template>
  <main>
    <ProductDetail :productId="id" />
  </main>
</template>

<script setup>
import ProductDetail from '../components/ecommerce/ProductDetail.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>
