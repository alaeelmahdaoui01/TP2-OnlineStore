<template>
    <div>
        <div v-if="pending" class="text-center py-12">
            <p class="text-gray-600">Loading product details...</p>
        </div>
        <div v-else-if="error" class="text-center py-12">
            <p class="text-red-600">Error loading product details. Please try again later.</p>
        </div>
        <div v-else-if="product">
            <ProductDetails :product="product" />
        </div>
        <div v-else class="text-center py-12">
            <p class="text-gray-600">Product not found</p>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'product'
    })

    const route = useRoute()
    const { data: product, pending, error } = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`)

    // We throw an error in case there is no product so we can use the error.vue
    // fatal property force the app to show the error (in order is created in the browser)
    if(!product.value)
        throw createError({statusCode: 404, statusMessage: "Product does not exist", fatal: true})
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