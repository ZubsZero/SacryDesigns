<template>
    <div>
      <NavBarComp />
      <div class="container">
        <div class="section1">
          <div class="line2">.</div>
          <div class="line3">.</div>
          <div class="line4">.</div>
          <div class="line5">.</div>
          <h3 class="h1">About Us</h3>
          <div class="line7">.</div>
          <div class="line8">.</div>
          <div class="line9">.</div>
          <div class="line10">.</div>
        </div>
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
  
    height: 100vh;
  }
  
  .section1 {
    background-color: black;
    height: 5rem;
    display: flex;
    gap: 10rem;
    width: 100%;
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
  
  .contact-info {
    margin-top: 20px;
  }
  
  .title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
  </style>
  