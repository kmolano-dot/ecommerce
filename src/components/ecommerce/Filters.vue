<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-8">
      <div class="flex items-baseline justify-between border-b border-gray-200 pt-4 pb-4">
        <div class="flex items-center space-x-4">
          <button 
            @click="openFiltersPanel" 
            class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <FunnelIcon class="mr-2 h-5 w-5 text-gray-400" />
            <span>Filtros</span>
          </button>

          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Ordenar
                <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </MenuButton>
            </div>

            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-hidden">
                <div class="py-1">
                  <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                    <button 
                      type="button" 
                      @click="updateSortOption(option)" 
                      :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100 outline-hidden' : '', 'block w-full text-left px-4 py-2 text-sm']"
                    >
                      {{ option.name }}
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>

          <div v-if="hasActiveFilters" class="flex items-center">
            <span class="mx-2 h-5 w-px bg-gray-300" aria-hidden="true"></span>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(count, type) in activeFilterCounts" 
                :key="type" 
                class="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800"
              >
                {{ filterLabels[type] }}: {{ count }}
              </span>
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <div class="relative rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              v-model="searchTerm"
              @input="handleSearch"
              class="block w-64 rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
              placeholder="Buscar productos"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Filters panel -->
  <TransitionRoot as="template" :show="showFiltersPanel">
    <Dialog as="div" class="relative z-10" @close="closeFiltersPanel">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900">Filtros</DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" @click="closeFiltersPanel">
                          <span class="absolute -inset-0.5" />
                          <span class="sr-only">Cerrar panel</span>
                          <XMarkIcon class="size-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8 space-y-6">
                      <!-- Categories filter -->
                      <Disclosure v-slot="{ open }" :defaultOpen="true" as="div">
                        <DisclosureButton class="flex w-full justify-between text-left">
                          <h3 class="text-sm font-medium text-gray-900">Categorías</h3>
                          <ChevronDownIcon
                            :class="[open ? 'rotate-180 transform' : '', 'h-5 w-5 text-gray-400']"
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel class="pt-4">
                          <div class="space-y-4">
                            <div v-for="category in categories" :key="category.value" class="flex items-center">
                              <div class="flex h-5 shrink-0 items-center">
                                <div class="group grid size-4 grid-cols-1">
                                  <input 
                                    :id="`category-${category.value}`" 
                                    name="category" 
                                    :value="category.value" 
                                    type="checkbox" 
                                    :checked="tempFilters.categories.includes(category.value)"
                                    @change="toggleTempCategory(category.value)"
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
                        </DisclosurePanel>
                      </Disclosure>

                      <!-- Colors filter -->
                      <Disclosure v-slot="{ open }" :defaultOpen="true" as="div">
                        <DisclosureButton class="flex w-full justify-between text-left">
                          <h3 class="text-sm font-medium text-gray-900">Colores</h3>
                          <ChevronDownIcon
                            :class="[open ? 'rotate-180 transform' : '', 'h-5 w-5 text-gray-400']"
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel class="pt-4">
                          <div class="space-y-4">
                            <div v-for="color in colors" :key="color.value" class="flex items-center">
                              <div class="flex h-5 shrink-0 items-center">
                                <div class="group grid size-4 grid-cols-1">
                                  <input 
                                    :id="`color-${color.value}`" 
                                    name="color" 
                                    :value="color.value" 
                                    type="checkbox" 
                                    :checked="tempFilters.colors.includes(color.value)"
                                    @change="toggleTempColor(color.value)"
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
                        </DisclosurePanel>
                      </Disclosure>

                      <!-- Storage filter -->
                      <Disclosure v-slot="{ open }" :defaultOpen="true" as="div">
                        <DisclosureButton class="flex w-full justify-between text-left">
                          <h3 class="text-sm font-medium text-gray-900">Almacenamiento</h3>
                          <ChevronDownIcon
                            :class="[open ? 'rotate-180 transform' : '', 'h-5 w-5 text-gray-400']"
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel class="pt-4">
                          <div class="space-y-4">
                            <div v-for="size in sizes" :key="size.value" class="flex items-center">
                              <div class="flex h-5 shrink-0 items-center">
                                <div class="group grid size-4 grid-cols-1">
                                  <input 
                                    :id="`size-${size.value}`" 
                                    name="size" 
                                    :value="size.value" 
                                    type="checkbox" 
                                    :checked="tempFilters.sizes.includes(size.value)"
                                    @change="toggleTempSize(size.value)"
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
                        </DisclosurePanel>
                      </Disclosure>

                      <!-- Price range filter -->
                      <Disclosure v-slot="{ open }" :defaultOpen="true" as="div">
                        <DisclosureButton class="flex w-full justify-between text-left">
                          <h3 class="text-sm font-medium text-gray-900">Rango de precio</h3>
                          <ChevronDownIcon
                            :class="[open ? 'rotate-180 transform' : '', 'h-5 w-5 text-gray-400']"
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel class="pt-4">
                          <div class="space-y-4">
                            <div v-for="priceRange in priceRanges" :key="priceRange.value" class="flex items-center">
                              <div class="flex h-5 shrink-0 items-center">
                                <div class="group grid size-4 grid-cols-1">
                                  <input 
                                    :id="`price-${priceRange.value}`" 
                                    name="price" 
                                    :value="priceRange.value" 
                                    type="checkbox" 
                                    :checked="tempFilters.priceRanges.includes(priceRange.value)"
                                    @change="toggleTempPriceRange(priceRange.value)"
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
                        </DisclosurePanel>
                      </Disclosure>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 px-4 py-6">
                    <div class="flex justify-between gap-3">
                      <button 
                        type="button" 
                        @click="clearTempFilters" 
                        class="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                      >
                        Limpiar
                      </button>
                      <button 
                        type="button" 
                        @click="applyFilters" 
                        class="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { FunnelIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

// Estado para controlar la visibilidad del panel de filtros
const showFiltersPanel = ref(false)

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

// Etiquetas para los tipos de filtros
const filterLabels = {
  categories: 'Categorías',
  colors: 'Colores',
  sizes: 'Almacenamiento',
  priceRanges: 'Precio',
  sort: 'Ordenar por'
}

// Estado de los filtros seleccionados (aplicados)
const selectedCategories = ref([])
const selectedColors = ref([])
const selectedSizes = ref([])
const selectedPriceRanges = ref([])
const selectedSortOption = ref(sortOptions[0])
const searchTerm = ref('')

// Estado temporal para los filtros en el panel (no aplicados hasta hacer clic en "Aplicar")
const tempFilters = reactive({
  categories: [],
  colors: [],
  sizes: [],
  priceRanges: [],
  sortOption: 'popular'
})

// Computed properties para mostrar el estado de los filtros
const hasActiveFilters = computed(() => {
  return selectedCategories.value.length > 0 || 
         selectedColors.value.length > 0 || 
         selectedSizes.value.length > 0 || 
         selectedPriceRanges.value.length > 0 ||
         selectedSortOption.value.value !== 'popular'
})

const activeFilterCounts = computed(() => {
  const counts = {}

  if (selectedCategories.value.length > 0) {
    counts.categories = selectedCategories.value.length
  }

  if (selectedColors.value.length > 0) {
    counts.colors = selectedColors.value.length
  }

  if (selectedSizes.value.length > 0) {
    counts.sizes = selectedSizes.value.length
  }

  if (selectedPriceRanges.value.length > 0) {
    counts.priceRanges = selectedPriceRanges.value.length
  }

  if (selectedSortOption.value.value !== 'popular') {
    counts.sort = selectedSortOption.value.name
  }

  return counts
})

// Métodos para abrir/cerrar el panel de filtros
const openFiltersPanel = () => {
  // Inicializar los filtros temporales con los valores actuales
  tempFilters.categories = [...selectedCategories.value]
  tempFilters.colors = [...selectedColors.value]
  tempFilters.sizes = [...selectedSizes.value]
  tempFilters.priceRanges = [...selectedPriceRanges.value]
  tempFilters.sortOption = selectedSortOption.value.value

  showFiltersPanel.value = true
}

const closeFiltersPanel = () => {
  showFiltersPanel.value = false
}

// Métodos para manejar los filtros temporales
const toggleTempCategory = (category) => {
  const index = tempFilters.categories.indexOf(category)
  if (index === -1) {
    tempFilters.categories.push(category)
  } else {
    tempFilters.categories.splice(index, 1)
  }
}

const toggleTempColor = (color) => {
  const index = tempFilters.colors.indexOf(color)
  if (index === -1) {
    tempFilters.colors.push(color)
  } else {
    tempFilters.colors.splice(index, 1)
  }
}

const toggleTempSize = (size) => {
  const index = tempFilters.sizes.indexOf(size)
  if (index === -1) {
    tempFilters.sizes.push(size)
  } else {
    tempFilters.sizes.splice(index, 1)
  }
}

const toggleTempPriceRange = (priceRange) => {
  const index = tempFilters.priceRanges.indexOf(priceRange)
  if (index === -1) {
    tempFilters.priceRanges.push(priceRange)
  } else {
    tempFilters.priceRanges.splice(index, 1)
  }
}

// Método para actualizar la opción de ordenamiento (se aplica inmediatamente)
const updateSortOption = (option) => {
  sortOptions.forEach(opt => opt.current = false)
  option.current = true
  selectedSortOption.value = option
  emitFilterChange()
}

// Método para aplicar los filtros temporales
const applyFilters = () => {
  selectedCategories.value = [...tempFilters.categories]
  selectedColors.value = [...tempFilters.colors]
  selectedSizes.value = [...tempFilters.sizes]
  selectedPriceRanges.value = [...tempFilters.priceRanges]

  emitFilterChange()
  closeFiltersPanel()
}

// Método para limpiar los filtros temporales
const clearTempFilters = () => {
  tempFilters.categories = []
  tempFilters.colors = []
  tempFilters.sizes = []
  tempFilters.priceRanges = []
}

// Función para manejar la búsqueda
const handleSearch = () => {
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
    sortOption: selectedSortOption.value.value,
    searchTerm: searchTerm.value
  })
}
</script>

<style scoped>

</style>
