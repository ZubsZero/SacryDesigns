<template>
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.ibb.co/PgD79NC/06.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://i.ibb.co/KqhXtGn/Whats-App-Image-01.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://i.ibb.co/YTmbrkj/Whats-App-Image-02.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://i.ibb.co/VjcJWfL/Screenshot-20240303-160521-Yahoo-Mail.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Fourth slide label</h5>
            <p>Some representative placeholder content for the fourth slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://i.ibb.co/Y7LRDyQ/Screenshot-20240303-160359-Yahoo-Mail.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Fifth slide label</h5>
            <p>Some representative placeholder content for the fifth slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="section1">
      <div class="line2">.</div>
      <div class="line3">.</div>
      <div class="line4">.</div>
      <div class="line5">.</div>
      <h3 class="h1">Sacry Design “African Handmade Collection” </h3>
      <div class="line7">.</div>
      <div class="line8">.</div>
      <div class="line9">.</div>
      <div class="line10">.</div>
    </div>
  </template>
  
  <style scoped>
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .image {
    width: 100%;
    height: 22rem;
    object-fit: cover;
  }
  
  .carousel-item img {
    height: 29rem;
    object-fit: cover;
  }
  
  .section1 {
    background-color: black;
    height: 5rem;
    display: flex;
    gap: 7.5rem;
  }
  
  .h1 {
    margin: 0;
    padding: 0;
    color: goldenrod;
    font-size: 1.5rem;
    padding-top: 1.5rem;
    padding-left:1rem ;
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
  
  p,h5 {
    color: black;
    font-weight: 700;
  }

  </style>
  