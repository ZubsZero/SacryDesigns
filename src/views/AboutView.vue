<template>
  <NavBarComp />
  <div class="section1">
    <div class="line2">.</div>
    <div class="line3">.</div>
    <div class="line4">.</div>
    <div class="line5">.</div>
    <h3 class="h1">Learn more About Us</h3>
    <div class="line7">.</div>
    <div class="line8">.</div>
    <div class="line9">.</div>
    <div class="line10">.</div>
  </div>
  <div class="row">
    <div class="AboutCompany">
      <h1 class="Company">Learn about the Company</h1>

      <p>
        <br /><br /><br />
        <b>Sacry Design “African Handmade Collection”</b> is a combination of
        Art, art crafts design; African handmade home accessories décor; African
        fashion creation founded by Sarah Kahuka in 2023 inspired by African
        Styles, cultures and traditional Arts. Sarah K. is a “people person"
        with passion for Art and fashion. Originally from D.R.Congo residing in
        New York USA, Sarah K is very optimist and ahead of the curve who
        believes in staying ahead of the latest trends in fashion in combined
        with an authentic African piece of art that revitalized the beauty of
        “African-American “ . Sacry Design utilize authentic modern African art,
        fashion, home decor, jewelry and textiles products made by ourselves and
        outsource from African artisans who are proud to share African culture
        and heritage with the world. We proudly feature the beautiful Congolese
        traditional cultural styles using materials directly from African
        Artisans. The sale of every product directly benefits the artisans who
        created it, which in return helps many artisans especially women in
        Africa in providing the essentials for their families and communities.
      </p>
      <h4 class="h3">Sacry Design social mission is:</h4>
      <ul>
        <li>Women economic empowerment for artisans and makers</li>
        <li>
          Promote and preserve African culture and good traditional Art and
          fashion
        </li>
      </ul>
    </div>
    <div class="Offers">
      <h1 class="Offer">What do we Offer</h1>
      <h5>
        <br /><br /><br />
        <b>Art / Fashion / Handcraft / Home Décor /Jewelry/ New Arrival</b>
      </h5>
      <br />
      <p class="p">
        <b>Art: Painting;</b> Textiles; Animal Sculptures; Sculpture; Masks;
        other <br />
        <br />
        <b>African Fashion:</b> Women; Men; Kids; Fabrics; Bags, Hats, Scarves
        and Wraps(pagnes); Other <br /><br />
        <b>Home Décor:</b> Pillows and Throws; Wall Art and ornament, Dinning;
        Bedding; Baskets; Decorative Accessories; Mirrors; other <br /><br />
        <b>HandCraft:</b> Basket; Market Baskets, Trinkets <br /><br />
        <b>Jewelry:</b> Necklaces; Earrings; Bracelets and bangle bracelets;
        Rings; Scarf; Wood Jewelry; Collection Jewelry; other <br /><br />
        <b>New Arrival:</b> Filter the list of most items
      </p>
    </div>
  </div>
  <div class="row2">
   <div class="owner">
    <h1>Learn about the Owner</h1>
    <p>
      Sarah K. is an enthusiastic female driven by her passion for Art and
      Fashion with a desire to see as many as possible adding a piece of African
      art to their homes and African Fashion outfit in their wardrobes.
    </p>
   
  </div> 
  <div class="image">
    
  </div>
  </div>
  
</template>

<script>
import NavBarComp from "@/components/NavBarComp.vue";

export default {
  name: "AboutPage",
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

p,
h5 {
  color: black;
}

p {
  text-align: left;
}

.AboutCompany {
  width: 40rem;
  margin: 1rem;
}

.Offers {
  width: 50%;
  margin: 1rem;
}

.Offer {
  font-weight: 700;
  color: black;
  float: left;
}

.Company {
  float: left;
  color: black;
  font-weight: 700;
}

ul {
  padding-left: 0;
}

li {
  list-style-position: inside;
  float: left;
  color: black;
}

.h3 {
  color: black;
  float: left;
  margin-left: 1rem;
}

h5 {
  margin-right: 10.9rem;
}

.owner {
  color: black;
  width: 50%;
  margin: 1rem
}

.owner h1 {
  margin: 0;
  float: left;
}

.owner p {
  float: left;
  margin-top: 1rem;
}
</style>
