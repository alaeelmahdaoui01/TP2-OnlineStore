<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">FakeStore</NuxtLink>
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-gray-300">About</NuxtLink>
          <NuxtLink to="/products" class="hover:text-gray-300">Products</NuxtLink>
          <div class="relative">
            <button @click="toggleCart" class="relative p-2 hover:text-gray-300">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span v-if="totalItems > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {{ totalItems }}
              </span>
            </button>
            <CartDropdown />
          </div>
        </div>
      </div>
    </nav>

    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white p-4 mt-auto">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 FakeStore. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { totalItems, toggleCart } = useCart()
</script>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>