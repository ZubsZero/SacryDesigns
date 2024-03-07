<template>
<NavBarComp/>
<heroComp/>
<ProductsComp/>
<FooterComp/>

</template>

<script>
import NavBarComp from "@/components/NavBarComp.vue";
import heroComp from "@/components/HeroComp.vue";
import ProductsComp from "@/components/ProductsComp.vue";
import FooterComp from '@/components/footerComp.vue'

export default {
  name: "HomeView",
  components: {
    NavBarComp,
    heroComp,
   ProductsComp,
   FooterComp,
  },
 
};
</script>

