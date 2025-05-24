<template> 
    <div>
        <div class="grid grid-cols-4 gap-5">
            <!-- Dans ce DIV on utilise une boucle pour 
                parcourir les différents produits et les afficher dans
                un composant (ProductCard)  
            -->
            <div>
                <!-- we don t need to register a new component since it exist on components 
                     folder, NUXT does it automatically for us 
                -->
                <!-- Chaque ProductCard accept une props qui est le produit actuel-->
                
            </div>
        </div>
    </div>
  
</template>

<script setup>
    /**
     * Mettez le code adéquat pour permettre à products/index.vue 
     * d'avoir le layout Product.vue
     */

    
    /**
     * Dans cette partie utiliser le code adequat pour 
     * récupérer le données des produits depuis fakestoreapi.com
     */
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