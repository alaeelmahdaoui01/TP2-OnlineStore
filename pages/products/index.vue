<template>
  <div>
    <div class="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-800">Our Products</h1>
      <div class="flex flex-col md:flex-row gap-4">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products..."
            class="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          v-model="sortOrder"
          class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">No sorting</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>

    <div v-if="pending" class="text-center py-12">
      <p class="text-gray-600">Loading products...</p>
    </div>
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600">Error loading products. Please try again later.</p>
    </div>
    <div v-else>
      <div v-if="filteredProducts.length === 0" class="text-center py-12">
        <p class="text-gray-600">No products found matching your search.</p>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const searchQuery = ref('')
const sortOrder = ref('')
const { data: products, pending, error } = await useFetch('https://fakestoreapi.com/products')

const filteredProducts = computed(() => {
  let result = [...products.value]

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(product => 
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    )
  }

  // Apply sorting
  if (sortOrder.value) {
    const [field, direction] = sortOrder.value.split('-')
    result.sort((a, b) => {
      let comparison = 0
      if (field === 'price') {
        comparison = a.price - b.price
      } else if (field === 'name') {
        comparison = a.title.localeCompare(b.title)
      }
      return direction === 'asc' ? comparison : -comparison
    })
  }

  return result
})
</script>

<style scoped>
    p {
        margin: 20px 0;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 32px;
    }
</style>