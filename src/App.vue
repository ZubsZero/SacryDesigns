<template>
  
  <router-view/>
  <footercomp/>
</template>
<script>
import footercomp from './components/footerComp.vue'

export default {
  name: "App",
  components: {
    footercomp
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
    min-height: 100vh !important;
    width: 100% ;
    margin: 0;

}




.nav {
  padding: 30px;

}


nav a.router-link-exact-active {
  color: #42b983;
}
</style>
