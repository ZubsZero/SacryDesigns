<template>
  <div class="columns">
    <div class="column1">
      <h3 class="text">African Fashion</h3>
      <ul class="text-list-1">
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Fabrics</li>
        <li>Bags, Hats, Scarves and Wraps(pagnes)</li>
        <li>Other</li>
        <router-link to="/fashion"><button class="card-button">Show Products</button></router-link>
      </ul>
    </div>
    <div class="column2">
      <h3 class="text">African Jewelry</h3>
      <ul class="text-list-2">
        <li>Necklaces</li>
        <li>Earrings</li>
        <li>Bracelets and bangles</li>
        <li>Rings</li>
        <li>Scarf</li>
        <li>Wood Jewelry</li>
        <li>Collection Jewelry</li>
        <li>Other</li>
        <router-link to="/jewelry"><button class="card-button">Show Products</button></router-link>

      </ul>
    </div>
    <div class="column3">
      <h3 class="text">African Art</h3>
      <ul class="text-list-3">
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Fabrics</li>
        <li>Bags, Hats, Scarves and Wraps(pagnes)</li>
        <li>Other</li>
        <router-link to="/art"><button class="card-button">Show Products</button></router-link>
      </ul>
    </div>
    <div class="column4">
      <h3 class="text">Home Décor</h3>
      <ul class="text-list-4">
        <li>Pillows and Throws</li>
        <li>Wall Art and ornament</li>
        <li>Dinning</li>
        <li>Bedding</li>
        <li>Baskets</li>
        <li>Decorative Accessories</li>
        <li>Mirrors</li>
        <li>Other</li>
        <router-link to="/decor"><button class="card-button">Show Products</button></router-link>

      </ul>
    </div>
    <div class="column5">
      <h3 class="text">HandCraft</h3>
      <ul class="text-list-5">
        <li>Basket</li>
        <li>Market Baskets</li>
        <li>Trinkets</li>
        <li>Other</li>
        <router-link to="/handcraft"><button class="card-button">Show Products</button></router-link>

      </ul>
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
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255, 255, 255);
  text-align: center;
  opacity: 0;
  transition: opacity 0.6s;
  z-index: 2;
}

.text-list-1,
.text-list-2,
.text-list-3,
.text-list-4,
.text-list-5 {
  display: none;
  position: absolute;
  top: 60%; /* Adjusted positioning */
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255, 255, 255);
  text-align: center;
  opacity: 0;
  transition: opacity 0.6s;
  z-index: 2;
  list-style-type: none;
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
}

.text-list-1 li,
.text-list-2 li,
.text-list-3 li,
.text-list-4 li,
.text-list-5 li {
  padding: 5px 0; /* Add padding to the list items */
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

.column1:hover .text-list-1,
.column2:hover .text-list-2,
.column3:hover .text-list-3,
.column4:hover .text-list-4,
.column5:hover .text-list-5 {
  display: block;
  opacity: 1;
}

.column1::before,
.column2::before,
.column3::before,
.column4::before,
.column5::before {
  content: "";
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
  background-color: rgba(0, 0, 0, 0.626);
}

.column1 {
  background-image: url("https://i.ibb.co/sQD9R0K/Screenshot-20240303-160521-Yahoo-Mail.jpg");
  background-position: center;
  background-size: cover;
}

.column2 {
  background-image: url("https://i.ibb.co/MDC28GS/Screenshot-20240303-160359-Yahoo-Mail.jpg");
  background-position: center;
  background-size: contain;
}

.column3 {
  background-image: url("https://i.ibb.co/9rFmWD4/Whats-App-Image-2024-02-23-at-08-12-51.jpg");
  background-position: center;
  background-size: cover;
}

.column4 {
  background-image: url("https://i.ibb.co/PgD79NC/06.jpg");
  background-position: center;
  background-size: cover;
}

.column5 {
  background-image: url("https://i.ibb.co/QnmQn6j/Whats-App-Image-2024-02-23-at-08-12-59-1.jpg");
  background-position: center;
  background-size: cover;
}

.card-button {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 2rem;
}

.card-button:hover {
  background-color: white;
  color: black;
}
</style>
