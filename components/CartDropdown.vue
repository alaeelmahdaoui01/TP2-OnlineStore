<template>
  <div v-if="isCartOpen" class="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50">
    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">Shopping Cart</h3>
        <button @click="toggleCart" class="text-gray-500 hover:text-gray-700">
          <span class="sr-only">Close cart</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div v-if="cart.length === 0" class="text-center py-4">
        <p class="text-gray-500">Your cart is empty</p>
      </div>

      <div v-else>
        <div class="max-h-96 overflow-y-auto">
          <div v-for="item in cart" :key="item.product.id" class="flex items-center py-4 border-b">
            <img :src="item.product.image" :alt="item.product.title" class="w-16 h-16 object-contain" />
            <div class="ml-4 flex-grow">
              <h4 class="text-sm font-medium text-gray-900 line-clamp-1">{{ item.product.title }}</h4>
              <p class="text-sm text-gray-500">${{ item.product.price }}</p>
              <div class="flex items-center mt-2">
                <button @click="updateQuantity(item.product.id, item.quantity - 1)" class="text-gray-500 hover:text-gray-700">
                  -
                </button>
                <span class="mx-2">{{ item.quantity }}</span>
                <button @click="updateQuantity(item.product.id, item.quantity + 1)" class="text-gray-500 hover:text-gray-700">
                  +
                </button>
              </div>
            </div>
            <button @click="removeFromCart(item.product.id)" class="ml-4 text-red-500 hover:text-red-700">
              <span class="sr-only">Remove item</span>
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        <div class="mt-4 pt-4 border-t">
          <div class="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${{ totalPrice.toFixed(2) }}</span>
          </div>
          <button class="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { cart, isCartOpen, removeFromCart, updateQuantity, totalPrice, toggleCart } = useCart()
</script> 