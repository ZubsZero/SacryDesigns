<template>
  <div>
    <NavBarComp />
    <div class="container1">
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
      <div class="content">
        <div class="company-info">
          <h1 class="company-title">Sacry Design African Handmade Collection</h1>
          <h2 class="subtitle">Art / Fashion / Handcraft / Home Décor / Jewelry / New Arrival</h2>
          <ul>
            <li><b>Art:</b> Painting; Textiles; Animal Sculptures; Sculpture; Masks; other</li>
            <li><b>African Fashion:</b> Women; Men; Kids; Fabrics; Bags, Hats, Scarves and Wraps(pagnes); Other</li>
            <li><b>Home Décor:</b> Pillows and Throws; Wall Art and ornament, Dining; Bedding; Baskets; Decorative Accessories; Mirrors; other</li>
            <li><b>HandCraft:</b> Basket; Market Baskets, Trinkets</li>
            <li><b>Jewelry:</b> Necklaces; Earrings; Bracelets and bangle bracelets; Rings; Scarf; Wood Jewelry; Collection Jewelry; other</li>
            <li><b>New Arrival:</b> Filter the list of most items</li>
          </ul>
        </div>
        <div class="about-owner">
          <p>
            <b>Sacry Design “African Handmade Collection”</b> is a combination of Art, art crafts design; African handmade home accessories décor; African fashion creation founded by Sarah Kahuka in 2023 inspired by African Styles, cultures and traditional Arts. Sarah K. is a “people person" with passion for Art and fashion. Originally from D.R.Congo residing in New York USA, Sarah K is very optimist and ahead of the curve who believes in staying ahead of the latest trends in fashion in combined with an authentic African piece of art that revitalized the beauty of “African-American “. Sacry Design utilizes authentic modern African art, fashion, home decor, jewelry and textiles products made by ourselves and outsource from African artisans who are proud to share African culture and heritage with the world.
          </p>
          <p>
            We proudly feature the beautiful Congolese traditional cultural styles using materials directly from African Artisans. The sale of every product directly benefits the artisans who created it, which in return helps many artisans especially women in Africa in providing the essentials for their families and communities.
          </p>
          <h4 class="h3">Sacry Design social mission is:</h4>
          <ul>
            <li>Women economic empowerment for artisans and makers</li>
            <li>Promote and preserve African culture and good traditional Art and fashion</li>
          </ul>
        </div>
        <div class="owner-info">
          <div class="owner-image">
            <img src="https://i.ibb.co/Rgkj8tP/Untitled.jpg" alt="Sarah K Image" />
          </div>
          <div class="owner-text">
            <h3>Sarah K. - Owner</h3>
            <p>
              Sarah K. is an enthusiastic female driven by her passion for Art and Fashion with a desire to see as many as possible adding a piece of African art to their homes and African Fashion outfit in their wardrobes. We hope you will find these products a wonderful addition to your home and collection.
            </p>
            <p>
              Sacry Design also proudly advocates women entrepreneurship by the use of eco-friendly African materials, and how it involves fellow entrepreneurs. It is the founder’s wishes to leave the legacy and engrave own signature for a prosperous future. A huge thank you to all who support, encourage and promote this woman-owned business. The growth and success of Sacry Design is attributed to our supporters, consumers, creators, producers, sales agents.
            </p>
          </div>
        </div>
      </div>
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

.section1 {
  background-color: black;
  height: 5rem;
  display: flex;
  gap: 10rem;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.h1 {
  margin: 0;
  padding: 0;
  color: goldenrod;
  font-size: 1.5rem;
  padding-top: 1.5rem;
  text-align: center;
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


.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}

.company-info {
  text-align: center;
  margin-bottom: 20px;
}

.company-title {
  font-size: 1.8rem;
  margin: 10px 0;
}

.subtitle {
  font-size: 1.2rem;
  margin-top: 10px;
  color: #333;
}

ul {
  padding-left: 20px;
  list-style-type: square;
  text-align: left;
}

.about-owner {
  text-align: center;
  margin-bottom: 40px;
}

.owner-image {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 20px;
}

.owner-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.owner-text {
  text-align: center;
}

.owner-text h3 {
  font-size: 1.5rem;
  margin: 10px 0;
}

.owner-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .section1 {
    height: auto;
  }

  .company-info {
    width: 50%;
    margin-bottom: 0;
  }

  .about-owner {
    width: 50%;
    margin-bottom: 0;
  }

  .owner-image {
    width: 250px;
    height: 250px;
    margin: 0 auto 20px;
  }
}
</style>
