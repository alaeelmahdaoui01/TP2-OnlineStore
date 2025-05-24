<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">FakeStore</NuxtLink>
        <div class="space-x-4">
          <NuxtLink to="/" class="hover:text-blue-200">Home</NuxtLink>
          <NuxtLink to="/products" class="hover:text-blue-200">Back to Products</NuxtLink>
        </div>
      </div>
    </nav>

    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>

    <footer class="bg-blue-600 text-white p-4 mt-auto">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 FakeStore. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template> 