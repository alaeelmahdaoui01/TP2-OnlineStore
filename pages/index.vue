<template>
  <div class="text-center py-12">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to FakeStore</h1>
    <p class="text-xl text-gray-600 mb-8">Your one-stop shop for all your needs</p>
    <NuxtLink to="/products" class="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
      Browse Products
    </NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
