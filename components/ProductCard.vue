<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="product.image" :alt="product.title" class="w-full h-48 object-contain p-4" />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{{ product.title }}</h3>
      <p class="text-gray-600 mb-2 line-clamp-2">{{ product.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-xl font-bold text-blue-600">${{ product.price }}</span>
        <NuxtLink :to="'/products/' + product.id" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View Details
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
    .thumb{
        max-height: 120px;
        max-width: 70px;
        margin: 0 auto;
    }
</style>