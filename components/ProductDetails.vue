<template>
  <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="md:flex">
      <div class="md:w-1/2 p-6">
        <img :src="product.image" :alt="product.title" class="w-full h-96 object-contain" />
      </div>
      <div class="md:w-1/2 p-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ product.title }}</h1>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
        <div class="mb-4">
          <span class="text-2xl font-bold text-blue-600">${{ product.price }}</span>
          <span class="ml-2 text-sm text-gray-500">Category: {{ product.category }}</span>
        </div>
        <div class="flex items-center mb-4">
          <div class="flex items-center">
            <span class="text-yellow-400">★</span>
            <span class="ml-1 text-gray-600">{{ product.rating?.rate || 'N/A' }}</span>
            <span class="ml-2 text-gray-500">({{ product.rating?.count || 0 }} reviews)</span>
          </div>
        </div>
        <button @click="addToCart(product)" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { addToCart } = useCart()

defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
    img{
        max-width: 400px;
    }
</style>