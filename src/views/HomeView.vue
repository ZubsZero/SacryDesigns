<template>
<NavBarComp/>
<heroComp/>
<productsComp/>

</template>

<script>
import NavBarComp from "@/components/NavBarComp.vue";
import heroComp from "@/components/HeroComp.vue";
import productsComp from "@/components/ProductsComp.vue";

export default {
  name: "HomeView",
  components: {
    NavBarComp,
    heroComp,
   productsComp,
  
  },
 
};
</script>

