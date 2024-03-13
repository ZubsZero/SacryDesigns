<template>
<NavBarComp/>
<heroComp/>
<ProductsComp/>

</template>

<script>
import NavBarComp from "@/components/NavBarComp.vue";
import heroComp from "@/components/HeroComp.vue";
import ProductsComp from "@/components/ProductsComp.vue";

export default {
  name: "HomeView",
  components: {
    NavBarComp,
    heroComp,
   ProductsComp,
  
  },
 
};
</script>

