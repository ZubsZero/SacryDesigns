<template>
  <div class="columns">
    <div class="column column1">
      <h3 class="text">African Fashion</h3>
      <ul class="text-list">
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Fabrics</li>
        <li>Bags, Hats, Scarves and Wraps(pagnes)</li>
        <li>Other</li>
        <router-link to="/fashion"><button class="card-button">Show Products</button></router-link>
      </ul>
    </div>
    <div class="column column2">
      <h3 class="text">African Jewelry</h3>
      <ul class="text-list">
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
    <div class="column column3">
      <h3 class="text">African Art</h3>
      <ul class="text-list">
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Fabrics</li>
        <li>Bags, Hats, Scarves and Wraps(pagnes)</li>
        <li>Other</li>
        <router-link to="/art"><button class="card-button">Show Products</button></router-link>
      </ul>
    </div>
    <div class="column column4">
      <h3 class="text">Home Décor</h3>
      <ul class="text-list">
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
    <div class="column column5">
      <h3 class="text">HandCraft</h3>
      <ul class="text-list">
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
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.column {
  width: 100%;
  max-width: 300px; /* Adjust as needed */
  height: auto;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 20px;
}

.text {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255, 255, 255);
  text-align: center;
  opacity: 0;
  transition: opacity 0.6s;
  z-index: 2;
}

.text-list {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255, 255, 255);
  text-align: center;
  opacity: 0;
  transition: opacity 0.6s;
  z-index: 2;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.column:hover .text,
.column:hover .text-list {
  display: block;
  opacity: 1;
}

.column::before {
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

.column:hover::before {
  background-color: rgba(0, 0, 0, 0.626);
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

@media (min-width: 768px) {
  .columns {
    justify-content: space-between;
  }

  .column {
    width: calc(20% - 20px);
  }
}
</style>
