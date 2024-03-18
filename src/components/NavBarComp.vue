<template>
  <div class="Navbar">
    <nav class="nav">
      <router-link to="/" class="route">Home</router-link>
      <router-link to="/about" class="route">About Us</router-link>
      <router-link to="/fashion" class="route">Africa Fashion</router-link>
      <router-link to="/jewelry" class="route">Africa Jewelry</router-link>
      <router-link to="/art" class="route">Africa Art</router-link>
      <router-link to="/decor" class="route">Home Decor</router-link>
      <router-link to="/handcraft" class="route">Handcraft</router-link>
      <router-link to="#" class="route">Coming Soon</router-link>
      <router-link to="/contact" class="route">Contact Us</router-link>
      <router-link to="/terms" class="route">T's and C's</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* NavBar */
body {
  margin: 0px;
}
.Navbar {
  background-color: goldenrod !important;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 3.8rem;
  align-items: center;
  justify-content: center;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.route {
  color: black !important;
  text-decoration: none;
  padding: 10px;
}



@media (max-width: 768px) {
  .Navbar {
    flex-direction: column;
    align-items: center;
  }

  .route {
    margin: 0.5rem;
  }

  
}
</style>
