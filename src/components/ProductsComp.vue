<template>
    <div class="columns">
      <div class="column1">
        <h3 class="text">African Fashion</h3>
      </div>
      <div class="column2">
        <h3 class="text">African Jewelry</h3>
      </div>
      <div class="column3">
        <h3 class="text">African Art</h3>
      </div>
      <div class="column4">
        <h3 class="text">African Decor</h3>
      </div>
      <div class="column5">
        <h3 class="text">Handcraft</h3>
      </div>
    </div>
  </template>
  
  <style scoped>
  .columns {
    display: flex;
  }
  
  .text {
    display: none;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    text-align: center;
    opacity: 0;
    transition: opacity 0.6s;
    z-index: 2;
  }
  
  .column1,
  .column2,
  .column3,
  .column4,
  .column5 {
    width: 20rem;
    height: 35rem;
    position: relative;
    overflow: hidden;
  }
  
  .column1:hover .text,
  .column2:hover .text,
  .column3:hover .text,
  .column4:hover .text,
  .column5:hover .text {
    display: block;
    opacity: 1;
  }
  
  .column1::before,
  .column2::before,
  .column3::before,
  .column4::before,
  .column5::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 1;
    transition: background-color 0.6s;
  }
  
  .column1:hover::before,
  .column2:hover::before,
  .column3:hover::before,
  .column4:hover::before,
  .column5:hover::before {
    background-color: rgba(0, 0, 0, 0.545);
  }
  
  .column1 {
    background-image: url('https://i.ibb.co/98kc9Qp/Screenshot-20240303-160521-Yahoo-Mail.jpg');
    background-position: center;
    background-size: cover;
  }
  
  .column2 {
    background-image: url('https://i.ibb.co/MDC28GS/Screenshot-20240303-160359-Yahoo-Mail.jpg');
    background-position: center;
    background-size: contain;
  }
  
  .column3 {
    background-image: url('https://i.ibb.co/F4M8Zhh/Whats-App-Image-2024-02-23-at-08-12-51.jpg');
    background-position: center;
    background-size: cover;
  }
  
  .column4 {
    background-image: url('https://i.ibb.co/PgD79NC/06.jpg');
    background-position: center;
    background-size: cover;
  }
  
  .column5 {
    background-image: url('https://i.ibb.co/QnmQn6j/Whats-App-Image-2024-02-23-at-08-12-59-1.jpg');
    background-position: center;
    background-size: cover;
  }
  </style>
  