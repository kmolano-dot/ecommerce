<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Nuestros Productos</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
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
const products = [
  {
    id: 1,
    name: 'MacBook Pro',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "MacBook Pro con chip M2",
    price: '$6.000.000',
    color: 'Gris espacial',
  },
  {
    id: 2,
    name: 'iPhone 16 Pro',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "iPhone 16 Pro con cámara avanzada",
    price: '$5.700.000',
    color: 'Oro rosa',
  },
  {
    id: 3,
    name: 'AirPods Pro',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "AirPods Pro con cancelación de ruido",
    price: '$1.200.000',
    color: 'Blanco',
  },
  {
    id: 4,
    name: 'iPad Air',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "iPad Air con pantalla Retina",
    price: '$3.500.000',
    color: 'Plata',
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: "Apple Watch Series 9",
    price: '$2.800.000',
    color: 'Negro',
  },
  {
    id: 6,
    name: 'iMac 24"',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: "iMac de 24 pulgadas",
    price: '$7.500.000',
    color: 'Azul',
  },
  {
    id: 7,
    name: 'Mac mini',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: "Mac mini con chip M2",
    price: '$4.200.000',
    color: 'Gris espacial',
  },
  {
    id: 8,
    name: 'HomePod mini',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: "HomePod mini con Siri",
    price: '$800.000',
    color: 'Naranja',
  }
]
</script>

<style scoped>

</style>
