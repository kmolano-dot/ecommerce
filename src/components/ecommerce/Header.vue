<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="../../assets/logoMonoco.png" alt="" />
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <router-link to="/" class="text-sm/6 font-semibold text-gray-900">Inicio</router-link>
        <router-link to="/products" class="text-sm/6 font-semibold text-gray-900">Productos</router-link>
        <div class="relative">
          <svg @click.prevent="toggleShoppingCart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" class="cursor-pointer">
            <path d="M7 18c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zM7.16 13l.94 2h9.18c.76 0 1.43-.43 1.75-1.1l3.6-7.59c.08-.14.12-.3.12-.46 0-.55-.45-1-1-1H5.21L4.27 2H1v2h2l3.6 7.59-.95 1.72C5.23 13.37 5 14 5 14.66V16h2v-1.34c0-.12.04-.23.1-.32l.06-.1h9.44l-1.1 2H8.03l-.87-1.8-.68-1.26-.35-.6-.97-1.74z"/>
          </svg>
          <span v-if="cartItemCount > 0" class="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-medium text-white">{{ cartItemCount }}</span>
        </div>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </router-link>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Inicio</router-link>
              <router-link to="/products" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Productos</router-link>
              <div class="-mx-3 flex items-center px-3 py-2">
                <div class="relative">
                  <svg @click.prevent="toggleShoppingCart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" class="text-gray-900 hover:text-gray-700 cursor-pointer">
                    <path d="M7 18c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-1.99.896-1.99 2s.886 2 1.99 2 2-.896 2-2-.896-2-2-2zM7.16 13l.94 2h9.18c.76 0 1.43-.43 1.75-1.1l3.6-7.59c.08-.14.12-.3.12-.46 0-.55-.45-1-1-1H5.21L4.27 2H1v2h2l3.6 7.59-.95 1.72C5.23 13.37 5 14 5 14.66V16h2v-1.34c0-.12.04-.23.1-.32l.06-.1h9.44l-1.1 2H8.03l-.87-1.8-.68-1.26-.35-.6-.97-1.74z"/>
                  </svg>
                  <span v-if="cartItemCount > 0" class="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-medium text-white">{{ cartItemCount }}</span>
                </div>
              </div>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const mobileMenuOpen = ref(false)

// Emit the event to parent component
const emit = defineEmits(['toggle-shopping-cart'])

const toggleShoppingCart = () => {
  emit('toggle-shopping-cart')
}

// Obtener el contador de productos del carrito
const cartStore = useCartStore()
const { count: cartItemCount } = storeToRefs(cartStore)
</script>
