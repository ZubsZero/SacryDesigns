<template>
  <div>
    <NavBarComp />
    <div class="section1">
      <h3 class="h1">Africa Decor</h3>
    </div>
    <div class="card-container">
      <!-- First Row -->
      <div class="card">
        <img src="https://i.ibb.co/DMf975w/05.jpg" alt="Card Image" />
        <div class="card-overlay"></div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/kg0zMTD/06.jpg" alt="Card Image" />
        <div class="card-overlay"></div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/y036RPK/Screenshot-20240303-071535-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay"></div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/TTzTXgs/Screenshot-20240303-071719-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay"></div>
      </div>
      <!-- Second Row -->
      <div class="card">
        <img src="https://i.ibb.co/4pBTSxn/Whats-App-Image-2024-02-23-at-08-12-56.jpg" alt="Card Image" />
        <div class="card-overlay"></div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/LzbhZFb/Whats-App-Image-2024-02-23-at-08-16-37.jpg" alt="Card Image" />
        <div class="card-overlay"></div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/wSpcRSy/Whats-App-Image-2024-02-23-at-08-16-41-2.jpg" alt="Card Image" />
        <div class="card-overlay"></div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/W5GKRVF/Whats-App-Image-2024-02-23-at-08-16-41-3.jpg" alt="Card Image" />
        <div class="card-overlay"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarComp from "@/components/NavBarComp.vue";

export default {
  name: "HomeView",
  components: {
    NavBarComp,
  },
};
</script>

<style scoped>
.section1 {
  background-color: black;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.h1 {
  margin: 0;
  padding: 0;
  color: goldenrod;
  font-size: 1.5rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  height: 100vh;
}

.card {
  width: 200px;
  height: 250px;
  margin: 20px;
  position: relative;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.card:hover img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card:hover .card-overlay {
  opacity: 1;
}
</style>
