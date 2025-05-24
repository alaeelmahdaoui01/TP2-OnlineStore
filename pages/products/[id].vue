<template>
    <div>
        <!--
            Ajouter le composant ProductDetails qui a comme props un produit
            et qui va servir pour afficher les détails du produit
        -->
    </div>
</template>

<script setup>
    /**
     * Utiliser le code adéquat pour récupérer le id avec useRoute() 
     * ou autres moyens si vous le voulez
     */
    

     /**
     * Mettez le code adéquat pour permettre à products/[id].vue 
     * d'avoir le layout Product.vue
     */

   
     /**
      * En se basant sur l'id récuperé précédement
      * Utilisez l'url adéquat depsui fakestoreapi.com pour 
      * récupérer le produit afin de pouvoir le passer comme props
      * au composant ProductDetails
      */
    /**
     * TIPS : IN CASE THAT YOU GET THE SAME PRODUCT EACH TIME YOU CLICK ON NEW ONE
              IS BECAUSE USEFETCH TRY TO MINIMIZE THE API CALL.
              SO WE ADD NEW ATTRIBUTE TO USEFETCH IN ORDER
             EACH TIME THERE IS A NEW ID NUXT PERFORMS A NEW FETCH
     */
    
    
    //We throw an error in case there is no product so we can use the error.vue
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