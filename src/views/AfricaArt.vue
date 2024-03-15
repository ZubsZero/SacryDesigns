<template>
  <div>
    <NavBarComp />
    <div class="section1">
      <h3 class="h1">Africa Art</h3>
    </div>
    <div class="card-container">
      <!-- First Row -->
      <div class="card">
        <img src="https://i.ibb.co/0nd9kmF/02.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/FVR15bX/03.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/3zxKTpg/04.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/M7Kzk1C/Whats-App-Image-2024-02-23-at-08-12-51.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
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
.row {
  display: flex;
  width: 100%;
}

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
  height: calc(100vh - 5rem); /* Adjust height based on remaining space */
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

.card-button {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.card-button:hover {
  background-color: white;
  color: black;
}
</style>
