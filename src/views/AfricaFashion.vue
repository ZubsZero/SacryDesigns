<template>
  <div>
    <NavBarComp />
    <div class="section1">
      <div class="line2">.</div>
      <div class="line3">.</div>
      <div class="line4">.</div>
      <div class="line5">.</div>
      <h3 class="h1">Africa Fashion</h3>
      <div class="line7">.</div>
      <div class="line8">.</div>
      <div class="line9">.</div>
      <div class="line10">.</div>
    </div>
    <div class="card-container">
      <!-- First Row -->
      <div class="card">
        <img src="https://i.ibb.co/8dSwH8j/Screenshot-20240304-095142-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
          <button class="card-button">View Details</button>
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/mFcvsJV/Screenshot-20240304-095123-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
          <button class="card-button">View Details</button>
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/Bfb8TTM/Screenshot-20240303-160521-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
          <button class="card-button">View Details</button>
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/jGSTLtR/Screenshot-20240303-160643-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
          <button class="card-button">View Details</button>
        </div>
      </div>
      <!-- Second Row -->
      <div class="card">
        <img src="https://i.ibb.co/2KVkbk0/Screenshot-20240304-095215-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
          <button class="card-button">View Details</button>
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/wg7mqSq/Screenshot-20240304-095237-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
          <button class="card-button">View Details</button>
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/z8Zj03c/Screenshot-20240303-160418-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
          <button class="card-button">View Details</button>
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
  gap: 9.5rem;
}

.h1 {
  margin: 0;
  padding: 0;
  color: goldenrod;
  font-size: 1.5rem;
  padding-top: 1.5rem;
}

.line2 {
  border-right: 1px solid blue;
  color: black;
  rotate: -30deg;
  height: 5.5rem;
}

.line3 {
  border-right: 1px solid red;
  color: black;
  rotate: -30deg;
  height: 5.5rem;
}

.line4 {
  border-right: 1px solid white;
  color: black;
  rotate: -30deg;
  height: 5.5rem;
}

.line5 {
  border-right: 1px solid green;
  color: black;
  rotate: -30deg;
  height: 5.5rem;
}

.line7 {
  border-right: 1px solid green;
  color: black;
  rotate: 30deg;
  height: 5.4rem;
}

.line8 {
  border-right: 1px solid white;
  color: black;
  rotate: 30deg;
  height: 5.4rem;
}

.line9 {
  border-right: 1px solid red;
  color: black;
  rotate: 30deg;
  height: 5.4rem;
}

.line10 {
  border-right: 1px solid blue;
  color: black;
  rotate: 30deg;
  height: 5.4rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
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
