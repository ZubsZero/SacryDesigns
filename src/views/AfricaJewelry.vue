<template>
  <div>
    <NavBarComp />
    <div class="section1">
      <div class="line2">.</div>
      <div class="line3">.</div>
      <div class="line4">.</div>
      <div class="line5">.</div>
      <h3 class="h1">Africa Jewelry</h3>
      <div class="line7">.</div>
      <div class="line8">.</div>
      <div class="line9">.</div>
      <div class="line10">.</div>
    </div>
    <div class="card-container">
      <!-- First Row -->
      <div class="card">
        <img src="https://i.ibb.co/z2xxY0K/01.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/JsPpHyk/Screenshot-20240303-071607-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/fQRD3rg/Screenshot-20240303-071627-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/bs8FPdy/Screenshot-20240303-071750-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <!-- Second Row -->
      <div class="card">
        <img src="https://i.ibb.co/cw938tJ/Screenshot-20240303-160359-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/pz9q4xg/Screenshot-20240304-095311-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/312361B/Screenshot-20240304-095349-Yahoo-Mail.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/LxDQvmJ/Whats-App-Image-2024-02-23-at-08-12-54-1.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <!-- Third Row -->
      <div class="card">
        <img src="https://i.ibb.co/N1NSMpj/Whats-App-Image-2024-02-23-at-08-12-54-3.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/DK6m02L/Whats-App-Image-2024-02-23-at-08-12-55-1.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/pPXbhwm/Whats-App-Image-2024-02-23-at-08-12-55-3.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/BCBvmG6/Whats-App-Image-2024-02-23-at-08-12-57-2.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <!-- Fourth Row -->
      <div class="card">
        <img src="https://i.ibb.co/r7X5tn4/Whats-App-Image-2024-02-23-at-08-16-37-1.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/Prmjzfk/Whats-App-Image-2024-02-23-at-08-16-37-2.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/nRL7ygv/Whats-App-Image-2024-02-23-at-08-16-38.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/Gvttycm/Whats-App-Image-2024-02-23-at-08-16-39-1.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <!-- Fifth Row -->
      <div class="card">
        <img src="https://i.ibb.co/W26W8R5/Whats-App-Image-2024-02-23-at-08-16-39-2.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/Kcvn5Vc/Whats-App-Image-2024-02-23-at-08-16-39.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/WkHRD0g/Whats-App-Image-2024-02-23-at-08-16-40-1.jpg" alt="Card Image" />
        <div class="card-overlay">
        </div>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/PgKrQ51/Whats-App-Image-2024-02-23-at-08-16-41-1.jpg" alt="Card Image" />
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


</style>
