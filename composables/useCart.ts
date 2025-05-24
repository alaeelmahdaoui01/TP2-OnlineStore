export const useCart = () => {
  const cart = useState('cart', () => [] as Array<{ product: any, quantity: number }>)
  const isCartOpen = useState('isCartOpen', () => false)

  const addToCart = (product: any) => {
    const existingItem = cart.value.find(item => item.product.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({ product, quantity: 1 })
    }
  }

  const removeFromCart = (productId: number) => {
    const index = cart.value.findIndex(item => item.product.id === productId)
    if (index > -1) {
      cart.value.splice(index, 1)
    }
  }

  const updateQuantity = (productId: number, quantity: number) => {
    const item = cart.value.find(item => item.product.id === productId)
    if (item) {
      item.quantity = Math.max(0, quantity)
      if (item.quantity === 0) {
        removeFromCart(productId)
      }
    }
  }

  const totalItems = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return cart.value.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  })

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }

  return {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    toggleCart
  }
} 