<template>
  <div>
    <TransitionRoot as="template" :show="isVisible">
      <Dialog class="relative z-10" @close="closeCart">
        <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle class="text-lg font-medium text-gray-900">Carrito de compras</DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" @click="closeCart">
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Cerrar panel</span>
                            <XMarkIcon class="size-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div class="mt-8">
                        <div class="flow-root">
                          <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <li v-for="product in products" :key="product.id" class="flex py-6">
                              <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img :src="product.imageSrc" :alt="product.imageAlt" class="size-full object-cover" />
                              </div>

                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a :href="product.href">{{ product.name }}</a>
                                    </h3>
                                    <p class="ml-4">{{ product.price }}</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">Cantidad {{ product.quantity }}</p>

                                  <div class="flex">
                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Quitar</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$11.700.000</p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">Gastos de envío e impuestos ya calculados.</p>
                      <div class="mt-6">
                        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700">Pagar</a>
                      </div>
                      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          o{{ ' ' }}
                          <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="closeCart">
                            Continuar comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
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
  </div>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const closeCart = () => {
  emit('close')
}

const products = [
  {
    id: 1,
    name: 'Macbook Pro',
    href: '#',
    color: 'Gris espacial',
    price: '$6.000.000',
    quantity: 1,
    imageSrc: 'src/assets/Mac.webp',
    imageAlt: 'Macbook Pro with M2 chip.',
  },
  {
    id: 2,
    name: 'Iphone 16 Pro',
    href: '#',
    color: 'Oro rosa',
    price: '$5.700.000',
    quantity: 1,
    imageSrc: 'src/assets/IIphone.webp',
    imageAlt: 'Latest iPhone model with advanced camera system.',
  },
  // More products can be added here
]
</script>
