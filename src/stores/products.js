import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'MacBook Pro',
        href: '/product/1',
        imageSrc: 'https://co.tiendasishop.com/cdn/shop/files/IMG-15363188_6c224530-3a5d-4bbe-bad6-da8971c80e36.jpg?v=1730306656&width=823',
        imageAlt: "MacBook Pro con chip M2",
        price: '$6.000.000',
        color: 'Gris espacial',
        description: 'La MacBook Pro con chip M2 ofrece un rendimiento excepcional y una duración de batería increíble. Perfecta para profesionales y creativos que necesitan potencia en movimiento.',
        highlights: [
          'Chip M2 de Apple con CPU de 8 núcleos y GPU de 10 núcleos',
          'Memoria unificada de 16GB',
          'Almacenamiento SSD de 512GB',
          'Pantalla Retina de 13.3 pulgadas',
          'Touch Bar y Touch ID'
        ],
        details: 'La MacBook Pro está diseñada para los profesionales que quieren cambiar el mundo. Ahora más potente que nunca con el chip M2 de Apple, ofrece un rendimiento excepcional para tareas exigentes como edición de fotos y videos, compilación de código y creación de música.',
        images: [
          {
            src: 'https://co.tiendasishop.com/cdn/shop/files/IMG-15363193_438b6b1a-fb0a-4bb7-8c73-3500d9221739.jpg?v=1740438705&width=823',
            alt: 'MacBook Pro vista frontal.',
          },
          {
            src: 'https://co.tiendasishop.com/cdn/shop/files/IMG-15363189_39437760-760e-4199-af33-58cf83a250a4.jpg?v=1730306656&width=823',
            alt: 'MacBook Pro vista lateral.',
          },
          {
            src: 'https://co.tiendasishop.com/cdn/shop/files/IMG-15363188_6c224530-3a5d-4bbe-bad6-da8971c80e36.jpg?v=1730306656&width=823',
            alt: 'MacBook Pro vista desde arriba.',
          },
          {
            src: 'https://co.tiendasishop.com/cdn/shop/files/IMG-15363190_4696f59e-879c-410f-9a21-574a89758466.jpg?v=1730306659&width=823',
            alt: 'MacBook Pro en uso.',
          },
        ],
        colors: [
          { name: 'Gris espacial', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
          { name: 'Plata', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        ],
        sizes: [
          { name: '256GB', inStock: true },
          { name: '512GB', inStock: true },
          { name: '1TB', inStock: true },
          { name: '2TB', inStock: false },
        ],
        breadcrumbs: [
          { id: 1, name: 'Productos', href: '/products' },
          { id: 2, name: 'Computadoras', href: '#' },
        ],
      },
      {
        id: 2,
        name: 'iPhone 16 Pro',
        href: '/product/2',
        imageSrc: 'https://co.tiendasishop.com/cdn/shop/files/IMG-14858951.jpg?v=1726245431&width=713',
        imageAlt: "iPhone 16 Pro con cámara avanzada",
        price: '$5.700.000',
        color: 'Oro rosa',
        description: 'El iPhone 16 Pro representa lo último en tecnología móvil de Apple, con un sistema de cámara profesional, pantalla Super Retina XDR y el potente chip A17 Pro.',
        highlights: [
          'Pantalla Super Retina XDR de 6.1 pulgadas',
          'Chip A17 Pro con Neural Engine',
          'Sistema de cámara Pro de 48MP',
          'Hasta 29 horas de reproducción de video',
          'Face ID'
        ],
        details: 'El iPhone 16 Pro está diseñado con los materiales más resistentes, incluyendo el Ceramic Shield frontal, más duro que cualquier vidrio de smartphone. Es resistente al agua hasta 6 metros durante 30 minutos y está protegido contra salpicaduras, agua y polvo.',
        images: [
          {
            src: 'https://co.tiendasishop.com/cdn/shop/files/IMG-14858955.jpg?v=1726245431&width=713',
            alt: 'iPhone 16 Pro vista frontal.',
          },
          {
            src: 'https://i.ibb.co/35KGGcBR/2-ba0d1bd7.png',
            alt: 'iPhone 16 Pro vista lateral.',
          },
          {
            src: 'https://i.ibb.co/0pKbWmRb/1-ba0d1bd7.png',
            alt: 'iPhone 16 Pro vista desde arriba.',
          },
          {
            src: 'https://co.tiendasishop.com/cdn/shop/files/iPhone_16_Pro_White_Titanium_PDP_Image_Position_6__GENS.jpg?v=1744812053&width=713',
            alt: 'iPhone 16 Pro en uso.',
          },
        ],
        colors: [
          { name: 'Oro rosa', class: 'bg-rose-200', selectedClass: 'ring-rose-400' },
          { name: 'Grafito', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
          { name: 'Plata', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
          { name: 'Azul Sierra', class: 'bg-blue-900', selectedClass: 'ring-blue-900' },
        ],
        sizes: [
          { name: '128GB', inStock: true },
          { name: '256GB', inStock: true },
          { name: '512GB', inStock: true },
          { name: '1TB', inStock: true },
        ],
        breadcrumbs: [
          { id: 1, name: 'Productos', href: '/products' },
          { id: 2, name: 'Teléfonos', href: '#' },
        ],
      },
      {
        id: 3,
        name: 'AirPods Pro',
        href: '/product/3',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "AirPods Pro con cancelación de ruido",
        price: '$1.200.000',
        color: 'Blanco',
        description: 'Los AirPods Pro ofrecen una experiencia auditiva inmersiva con cancelación activa de ruido, modo de transparencia y un ajuste personalizable.',
        highlights: [
          'Cancelación activa de ruido',
          'Modo de transparencia',
          'Audio espacial con seguimiento dinámico de la cabeza',
          'Resistentes al sudor y al agua',
          'Más de 24 horas de duración de batería con el estuche de carga'
        ],
        details: 'Los AirPods Pro utilizan dos micrófonos, tecnología de software avanzada y un ajuste personalizable para crear una experiencia auditiva inmersiva. La cancelación activa de ruido se adapta continuamente a la geometría de tu oído y al ajuste de los auriculares.',
        images: [
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
            alt: 'AirPods Pro vista frontal.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'AirPods Pro vista lateral.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'AirPods Pro vista desde arriba.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'AirPods Pro en uso.',
          },
        ],
        colors: [
          { name: 'Blanco', class: 'bg-white', selectedClass: 'ring-gray-400' },
        ],
        sizes: [
          { name: 'Único', inStock: true },
        ],
        breadcrumbs: [
          { id: 1, name: 'Productos', href: '/products' },
          { id: 2, name: 'Audio', href: '#' },
        ],
      },
      {
        id: 4,
        name: 'iPad Air',
        href: '/product/4',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "iPad Air con pantalla Retina",
        price: '$3.500.000',
        color: 'Plata',
        description: 'El iPad Air combina rendimiento y versatilidad con su potente chip A14 Bionic, pantalla Liquid Retina y compatibilidad con Apple Pencil y Magic Keyboard.',
        highlights: [
          'Pantalla Liquid Retina de 10.9 pulgadas',
          'Chip A14 Bionic con Neural Engine',
          'Touch ID integrado en el botón superior',
          'Cámara trasera de 12MP y cámara FaceTime HD de 7MP',
          'Compatibilidad con Apple Pencil (2ª generación) y Magic Keyboard'
        ],
        details: 'El iPad Air ofrece un rendimiento increíble gracias al chip A14 Bionic, que incorpora tecnologías de aprendizaje automático de última generación. La pantalla Liquid Retina de borde a borde ofrece una experiencia visual inmersiva con tecnología True Tone y amplia gama de colores P3.',
        images: [
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
            alt: 'iPad Air vista frontal.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'iPad Air vista lateral.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'iPad Air vista desde arriba.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'iPad Air en uso.',
          },
        ],
        colors: [
          { name: 'Plata', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
          { name: 'Gris espacial', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
          { name: 'Oro rosa', class: 'bg-rose-200', selectedClass: 'ring-rose-400' },
          { name: 'Verde', class: 'bg-green-500', selectedClass: 'ring-green-500' },
          { name: 'Azul cielo', class: 'bg-blue-500', selectedClass: 'ring-blue-500' },
        ],
        sizes: [
          { name: '64GB', inStock: true },
          { name: '256GB', inStock: true },
        ],
        breadcrumbs: [
          { id: 1, name: 'Productos', href: '/products' },
          { id: 2, name: 'Tablets', href: '#' },
        ],
      },
      {
        id: 5,
        name: 'Apple Watch Series 9',
        href: '/product/5',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: "Apple Watch Series 9",
        price: '$2.800.000',
        color: 'Negro',
        description: 'El Apple Watch Series 9 incorpora nuevas funciones de salud, fitness y conectividad, con una pantalla Retina siempre activa y un diseño elegante.',
        highlights: [
          'Pantalla Retina siempre activa',
          'Sensor de oxígeno en sangre',
          'App ECG',
          'Resistente al agua hasta 50 metros',
          'Chip S9 SiP con procesador de doble núcleo de 64 bits'
        ],
        details: 'El Apple Watch Series 9 te ayuda a vivir una vida más saludable, activa y conectada. Con la app ECG puedes realizar un electrocardiograma directamente desde tu muñeca. El sensor de oxígeno en sangre te permite medir tus niveles de oxígeno en sangre bajo demanda.',
        images: [
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
            alt: 'Apple Watch Series 9 vista frontal.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Apple Watch Series 9 vista lateral.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Apple Watch Series 9 vista desde arriba.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Apple Watch Series 9 en uso.',
          },
        ],
        colors: [
          { name: 'Negro', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
          { name: 'Plata', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
          { name: 'Oro', class: 'bg-yellow-400', selectedClass: 'ring-yellow-400' },
          { name: 'Rojo', class: 'bg-red-600', selectedClass: 'ring-red-600' },
        ],
        sizes: [
          { name: '40mm', inStock: true },
          { name: '44mm', inStock: true },
        ],
        breadcrumbs: [
          { id: 1, name: 'Productos', href: '/products' },
          { id: 2, name: 'Wearables', href: '#' },
        ],
      },
      {
        id: 6,
        name: 'iMac 24"',
        href: '/product/6',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: "iMac de 24 pulgadas",
        price: '$7.500.000',
        color: 'Azul',
        description: 'El iMac de 24 pulgadas con chip M1 combina rendimiento y estilo en un diseño increíblemente delgado, disponible en siete colores vibrantes.',
        highlights: [
          'Pantalla Retina 4.5K de 24 pulgadas',
          'Chip M1 de Apple con CPU de 8 núcleos y GPU de hasta 8 núcleos',
          'Cámara FaceTime HD de 1080p con procesador de señal de imagen M1',
          'Sistema de tres micrófonos de calidad estudio',
          'Sistema de sonido de seis altavoces con woofers de cancelación de fuerza'
        ],
        details: 'El iMac de 24 pulgadas está completamente transformado por el chip M1 de Apple. Tiene un diseño increíblemente delgado y se integra perfectamente en tu espacio. Disponible en siete colores vibrantes, el iMac es potente, personal y perfectamente a la moda.',
        images: [
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
            alt: 'iMac de 24 pulgadas vista frontal.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'iMac de 24 pulgadas vista lateral.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'iMac de 24 pulgadas vista desde arriba.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'iMac de 24 pulgadas en uso.',
          },
        ],
        colors: [
          { name: 'Azul', class: 'bg-blue-500', selectedClass: 'ring-blue-500' },
          { name: 'Verde', class: 'bg-green-500', selectedClass: 'ring-green-500' },
          { name: 'Rosa', class: 'bg-pink-500', selectedClass: 'ring-pink-500' },
          { name: 'Plata', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
          { name: 'Naranja', class: 'bg-orange-500', selectedClass: 'ring-orange-500' },
          { name: 'Púrpura', class: 'bg-purple-500', selectedClass: 'ring-purple-500' },
          { name: 'Amarillo', class: 'bg-yellow-500', selectedClass: 'ring-yellow-500' },
        ],
        sizes: [
          { name: '8GB/256GB', inStock: true },
          { name: '8GB/512GB', inStock: true },
          { name: '16GB/512GB', inStock: true },
          { name: '16GB/1TB', inStock: false },
        ],
        breadcrumbs: [
          { id: 1, name: 'Productos', href: '/products' },
          { id: 2, name: 'Computadoras', href: '#' },
        ],
      },
      {
        id: 7,
        name: 'Mac mini',
        href: '/product/7',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: "Mac mini con chip M2",
        price: '$4.200.000',
        color: 'Gris espacial',
        description: 'El Mac mini con chip M2 ofrece un rendimiento excepcional en un diseño compacto y versátil, perfecto para cualquier escritorio o configuración.',
        highlights: [
          'Chip M2 de Apple con CPU de 8 núcleos y GPU de 10 núcleos',
          'Memoria unificada de hasta 24GB',
          'Almacenamiento SSD de hasta 2TB',
          'Puerto HDMI 2.0, dos puertos Thunderbolt 4, dos puertos USB-A',
          'Wi-Fi 6E y Bluetooth 5.3'
        ],
        details: 'El Mac mini es increíblemente potente y versátil. Con el chip M2 de Apple, ofrece un rendimiento excepcional para tareas exigentes como producción musical, edición de video y desarrollo de software, todo en un diseño compacto que cabe en cualquier escritorio.',
        images: [
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
            alt: 'Mac mini vista frontal.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Mac mini vista lateral.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Mac mini vista desde arriba.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Mac mini en uso.',
          },
        ],
        colors: [
          { name: 'Gris espacial', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],
        sizes: [
          { name: '8GB/256GB', inStock: true },
          { name: '8GB/512GB', inStock: true },
          { name: '16GB/512GB', inStock: true },
          { name: '16GB/1TB', inStock: true },
          { name: '24GB/2TB', inStock: false },
        ],
        breadcrumbs: [
          { id: 1, name: 'Productos', href: '/products' },
          { id: 2, name: 'Computadoras', href: '#' },
        ],
      },
      {
        id: 8,
        name: 'HomePod mini',
        href: '/product/8',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: "HomePod mini con Siri",
        price: '$800.000',
        color: 'Naranja',
        description: 'El HomePod mini ofrece un sonido increíble, control inteligente del hogar y privacidad y seguridad integradas, todo en un diseño compacto y elegante.',
        highlights: [
          'Sonido 360 grados con rango dinámico y graves profundos',
          'Siri integrado para control por voz',
          'Control del hogar inteligente',
          'Intercom para comunicación entre habitaciones',
          'Privacidad y seguridad integradas'
        ],
        details: 'El HomePod mini llena toda la habitación con un sonido rico y envolvente. Gracias a la tecnología de audio computacional, el HomePod mini analiza las características específicas de la música y aplica modelos de ajuste complejos para optimizar el volumen, ajustar el rango dinámico y controlar el movimiento de los controladores y los radiadores pasivos en tiempo real.',
        images: [
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
            alt: 'HomePod mini vista frontal.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'HomePod mini vista lateral.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'HomePod mini vista desde arriba.',
          },
          {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'HomePod mini en uso.',
          },
        ],
        colors: [
          { name: 'Naranja', class: 'bg-orange-500', selectedClass: 'ring-orange-500' },
          { name: 'Blanco', class: 'bg-white', selectedClass: 'ring-gray-400' },
          { name: 'Gris espacial', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
          { name: 'Amarillo', class: 'bg-yellow-500', selectedClass: 'ring-yellow-500' },
          { name: 'Azul', class: 'bg-blue-500', selectedClass: 'ring-blue-500' },
        ],
        sizes: [
          { name: 'Único', inStock: true },
        ],
        breadcrumbs: [
          { id: 1, name: 'Productos', href: '/products' },
          { id: 2, name: 'Audio', href: '#' },
        ],
      }
    ]
  }),

  getters: {
    getAllProducts: (state) => state.products,
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === parseInt(id))
    },

    // Nuevo getter para obtener productos filtrados
    getFilteredProducts: (state) => (filters) => {
      let filteredProducts = [...state.products]

      // Filtrar por término de búsqueda
      if (filters.searchTerm && filters.searchTerm.trim() !== '') {
        const searchTermLower = filters.searchTerm.trim().toLowerCase()
        filteredProducts = filteredProducts.filter(product => 
          product.name.toLowerCase().includes(searchTermLower) ||
          product.description.toLowerCase().includes(searchTermLower)
        )
      }

      // Filtrar por categorías
      if (filters.categories && filters.categories.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
          // Buscar en breadcrumbs para encontrar la categoría
          return product.breadcrumbs.some(breadcrumb => {
            const category = breadcrumb.name.toLowerCase()
            return filters.categories.some(selectedCategory => {
              // Mapear los valores de filtro a las categorías reales
              if (selectedCategory === 'computadoras' && category === 'computadoras') return true
              if (selectedCategory === 'telefonos' && category === 'teléfonos') return true
              if (selectedCategory === 'audio' && category === 'audio') return true
              if (selectedCategory === 'tablets' && category === 'tablets') return true
              if (selectedCategory === 'wearables' && category === 'wearables') return true
              return false
            })
          })
        })
      }

      // Filtrar por colores
      if (filters.colors && filters.colors.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
          const productColor = product.color.toLowerCase()
          return filters.colors.some(selectedColor => {
            // Mapear los valores de filtro a los colores reales
            if (selectedColor === 'gris-espacial' && productColor === 'gris espacial') return true
            if (selectedColor === 'plata' && productColor === 'plata') return true
            if (selectedColor === 'oro-rosa' && productColor === 'oro rosa') return true
            if (selectedColor === 'azul' && productColor.includes('azul')) return true
            if (selectedColor === 'verde' && productColor === 'verde') return true
            if (selectedColor === 'blanco' && productColor === 'blanco') return true
            if (selectedColor === 'negro' && productColor === 'negro') return true
            if (selectedColor === 'naranja' && productColor === 'naranja') return true
            return false
          })
        })
      }

      // Filtrar por tamaños (almacenamiento)
      if (filters.sizes && filters.sizes.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
          // Verificar si el producto tiene tamaños
          if (!product.sizes || product.sizes.length === 0) return false

          return product.sizes.some(size => {
            const sizeName = size.name.toLowerCase()
            return filters.sizes.some(selectedSize => {
              // Mapear los valores de filtro a los tamaños reales
              if (selectedSize === '128gb' && sizeName === '128gb') return true
              if (selectedSize === '256gb' && sizeName === '256gb') return true
              if (selectedSize === '512gb' && sizeName === '512gb') return true
              if (selectedSize === '1tb' && sizeName === '1tb') return true
              if (selectedSize === '2tb' && sizeName === '2tb') return true
              return false
            })
          })
        })
      }

      // Filtrar por rango de precio
      if (filters.priceRanges && filters.priceRanges.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
          // Convertir el precio de formato "$X.XXX.XXX" a número
          const price = parseFloat(product.price.replace('$', '').replace(/\./g, '').replace(',', '.'))

          return filters.priceRanges.some(range => {
            if (range === '0-1000000' && price < 1000000) return true
            if (range === '1000000-3000000' && price >= 1000000 && price < 3000000) return true
            if (range === '3000000-5000000' && price >= 3000000 && price < 5000000) return true
            if (range === '5000000-7000000' && price >= 5000000 && price < 7000000) return true
            if (range === '7000000-plus' && price >= 7000000) return true
            return false
          })
        })
      }

      // Ordenar productos
      if (filters.sortOption) {
        switch (filters.sortOption) {
          case 'price-asc':
            filteredProducts.sort((a, b) => {
              const priceA = parseFloat(a.price.replace('$', '').replace(/\./g, '').replace(',', '.'))
              const priceB = parseFloat(b.price.replace('$', '').replace(/\./g, '').replace(',', '.'))
              return priceA - priceB
            })
            break
          case 'price-desc':
            filteredProducts.sort((a, b) => {
              const priceA = parseFloat(a.price.replace('$', '').replace(/\./g, '').replace(',', '.'))
              const priceB = parseFloat(b.price.replace('$', '').replace(/\./g, '').replace(',', '.'))
              return priceB - priceA
            })
            break
          case 'newest':
            // Ordenar por ID (asumiendo que IDs más altos son productos más nuevos)
            filteredProducts.sort((a, b) => b.id - a.id)
            break
          // Para 'popular' y 'rating', mantenemos el orden predeterminado por ahora
          // En una aplicación real, estos tendrían su propia lógica de ordenamiento
        }
      }

      return filteredProducts
    }
  }
})
