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
          <img src="https://via.placeholder.com/300x200" alt="Card Image" />
          <div class="card-overlay"></div>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/300x200" alt="Card Image" />
          <div class="card-overlay"></div>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/300x200" alt="Card Image" />
          <div class="card-overlay"></div>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/300x200" alt="Card Image" />
          <div class="card-overlay"></div>
        </div>
        <!-- Second Row -->
        <div class="card">
          <img src="https://via.placeholder.com/300x200" alt="Card Image" />
          <div class="card-overlay"></div>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/300x200" alt="Card Image" />
          <div class="card-overlay"></div>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/300x200" alt="Card Image" />
          <div class="card-overlay"></div>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/300x200" alt="Card Image" />
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
  }
  
  .card:hover .card-overlay {
    opacity: 1;
  }
  </style>
  