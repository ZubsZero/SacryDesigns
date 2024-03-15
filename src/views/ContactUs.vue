<template>
  <div>
    <NavBarComp />
    <div class="section1">
        <h3 class="h1">About Us</h3>
      </div>
    <div class="container">
      
      <div class="contact-info">
        <h1 class="title">Contact Details</h1>
        <p><strong>Name:</strong> Sarah Kahuka</p>
        <p><strong>Address:</strong> 4804 NORSTAR BLVD APT 228 LIVERPOOL NY 13088-4286</p>
        <p><strong>Phone:</strong> +1(315)9916904</p>
        <p><strong>Email:</strong> katalay_linon@yahoo.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarComp from "@/components/NavBarComp.vue";

export default {
  name: "ContactPage",
  components: {
    NavBarComp,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.section1 {
  background-color: black;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.h1 {
  margin: 0;
  padding: 0;
  color: goldenrod;
  font-size: 1.5rem;
}

.contact-info {

  text-align: center;
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}
</style>
