<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-baseline justify-between border-b border-gray-200 pt-6 pb-6">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900">Filtros</h1>

        <div class="flex items-center">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Ordenar
                <ChevronDownIcon class="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </MenuButton>
            </div>

            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-hidden">
                <div class="py-1">
                  <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                    <button 
                      type="button" 
                      @click="selectSortOption(option)" 
                      :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100 outline-hidden' : '', 'block w-full text-left px-4 py-2 text-sm']"
                    >
                      {{ option.name }}
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>

      <!-- Horizontal filters -->
      <div class="py-4">
        <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-4 lg:gap-x-8">
          <!-- Categories filter -->
          <div>
            <h3 class="text-sm font-medium text-gray-900 mb-3">Categorías</h3>
            <div class="space-y-2">
              <div v-for="category in categories" :key="category.value" class="flex items-center">
                <div class="flex h-5 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input 
                      :id="`category-${category.value}`" 
                      name="category" 
                      :value="category.value" 
                      type="checkbox" 
                      :checked="selectedCategories.includes(category.value)"
                      @change="toggleCategory(category.value)"
                      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    />
                    <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
                      <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <label :for="`category-${category.value}`" class="ml-3 text-sm text-gray-600">{{ category.label }}</label>
              </div>
            </div>
          </div>

          <!-- Colors filter -->
          <div>
            <h3 class="text-sm font-medium text-gray-900 mb-3">Colores</h3>
            <div class="space-y-2">
              <div v-for="color in colors" :key="color.value" class="flex items-center">
                <div class="flex h-5 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input 
                      :id="`color-${color.value}`" 
                      name="color" 
                      :value="color.value" 
                      type="checkbox" 
                      :checked="selectedColors.includes(color.value)"
                      @change="toggleColor(color.value)"
                      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    />
                    <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
                      <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <label :for="`color-${color.value}`" class="ml-3 text-sm text-gray-600">{{ color.label }}</label>
              </div>
            </div>
          </div>

          <!-- Storage filter -->
          <div>
            <h3 class="text-sm font-medium text-gray-900 mb-3">Almacenamiento</h3>
            <div class="space-y-2">
              <div v-for="size in sizes" :key="size.value" class="flex items-center">
                <div class="flex h-5 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input 
                      :id="`size-${size.value}`" 
                      name="size" 
                      :value="size.value" 
                      type="checkbox" 
                      :checked="selectedSizes.includes(size.value)"
                      @change="toggleSize(size.value)"
                      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    />
                    <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
                      <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <label :for="`size-${size.value}`" class="ml-3 text-sm text-gray-600">{{ size.label }}</label>
              </div>
            </div>
          </div>

          <!-- Price range filter -->
          <div>
            <h3 class="text-sm font-medium text-gray-900 mb-3">Rango de precio</h3>
            <div class="space-y-2">
              <div v-for="priceRange in priceRanges" :key="priceRange.value" class="flex items-center">
                <div class="flex h-5 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input 
                      :id="`price-${priceRange.value}`" 
                      name="price" 
                      :value="priceRange.value" 
                      type="checkbox" 
                      :checked="selectedPriceRanges.includes(priceRange.value)"
                      @change="togglePriceRange(priceRange.value)"
                      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    />
                    <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
                      <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <label :for="`price-${priceRange.value}`" class="ml-3 text-sm text-gray-600">{{ priceRange.label }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Clear filters button -->
      <div class="flex justify-end py-4">
        <button 
          type="button" 
          @click="clearFilters" 
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

// Opciones de ordenamiento
const sortOptions = [
  { name: 'Más populares', value: 'popular', current: true },
  { name: 'Mejor valorados', value: 'rating', current: false },
  { name: 'Más recientes', value: 'newest', current: false },
  { name: 'Precio: Menor a Mayor', value: 'price-asc', current: false },
  { name: 'Precio: Mayor a Menor', value: 'price-desc', current: false },
]

// Categorías de productos
const categories = [
  { value: 'computadoras', label: 'Computadoras' },
  { value: 'telefonos', label: 'Teléfonos' },
  { value: 'audio', label: 'Audio' },
  { value: 'tablets', label: 'Tablets' },
  { value: 'wearables', label: 'Wearables' },
]

// Colores disponibles
const colors = [
  { value: 'gris-espacial', label: 'Gris espacial' },
  { value: 'plata', label: 'Plata' },
  { value: 'oro-rosa', label: 'Oro rosa' },
  { value: 'azul', label: 'Azul' },
  { value: 'verde', label: 'Verde' },
  { value: 'blanco', label: 'Blanco' },
  { value: 'negro', label: 'Negro' },
  { value: 'naranja', label: 'Naranja' },
]

// Tamaños de almacenamiento
const sizes = [
  { value: '128gb', label: '128GB' },
  { value: '256gb', label: '256GB' },
  { value: '512gb', label: '512GB' },
  { value: '1tb', label: '1TB' },
  { value: '2tb', label: '2TB' },
]

// Rangos de precio
const priceRanges = [
  { value: '0-1000000', label: 'Menos de $1.000.000' },
  { value: '1000000-3000000', label: '$1.000.000 - $3.000.000' },
  { value: '3000000-5000000', label: '$3.000.000 - $5.000.000' },
  { value: '5000000-7000000', label: '$5.000.000 - $7.000.000' },
  { value: '7000000-plus', label: 'Más de $7.000.000' },
]

// Estado de los filtros seleccionados
const selectedCategories = ref([])
const selectedColors = ref([])
const selectedSizes = ref([])
const selectedPriceRanges = ref([])
const selectedSortOption = ref(sortOptions[0])

// Métodos para manejar los filtros
const toggleCategory = (category) => {
  const index = selectedCategories.value.indexOf(category)
  if (index === -1) {
    selectedCategories.value.push(category)
  } else {
    selectedCategories.value.splice(index, 1)
  }
  emitFilterChange()
}

const toggleColor = (color) => {
  const index = selectedColors.value.indexOf(color)
  if (index === -1) {
    selectedColors.value.push(color)
  } else {
    selectedColors.value.splice(index, 1)
  }
  emitFilterChange()
}

const toggleSize = (size) => {
  const index = selectedSizes.value.indexOf(size)
  if (index === -1) {
    selectedSizes.value.push(size)
  } else {
    selectedSizes.value.splice(index, 1)
  }
  emitFilterChange()
}

const togglePriceRange = (priceRange) => {
  const index = selectedPriceRanges.value.indexOf(priceRange)
  if (index === -1) {
    selectedPriceRanges.value.push(priceRange)
  } else {
    selectedPriceRanges.value.splice(index, 1)
  }
  emitFilterChange()
}

const selectSortOption = (option) => {
  sortOptions.forEach(opt => opt.current = false)
  option.current = true
  selectedSortOption.value = option
  emitFilterChange()
}

const clearFilters = () => {
  selectedCategories.value = []
  selectedColors.value = []
  selectedSizes.value = []
  selectedPriceRanges.value = []
  selectSortOption(sortOptions[0])
  emitFilterChange()
}

// Emitir evento cuando cambian los filtros
const emit = defineEmits(['filter-change'])

const emitFilterChange = () => {
  emit('filter-change', {
    categories: selectedCategories.value,
    colors: selectedColors.value,
    sizes: selectedSizes.value,
    priceRanges: selectedPriceRanges.value,
    sortOption: selectedSortOption.value.value
  })
}
</script>

<style scoped>

</style>
