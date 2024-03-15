<template>
  <div>
    <NavBarComp />
    <div class="section1">
      
      <h3 class="h1">Africa Fashion</h3>
      
    </div>
    <div class="card-container">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <img :src="card.imageSrc" alt="Card Image" @click="openModal(card.imageSrc)" />
        <div class="card-overlay">
          <button class="card-button" @click="openModal(card.imageSrc)">View Details</button>
        </div>
      </div>
    </div>
    <ModalImage v-if="isModalOpen" :image-source="selectedImage" @close="closeModal" />
  </div>
</template>

<script>
import NavBarComp from "@/components/NavBarComp.vue";
import ModalImage from "@/components/ModalImage.vue";

export default {
  name: "HomeView",
  components: {
    NavBarComp,
    ModalImage,
  },
  data() {
    return {
      isModalOpen: false,
      selectedImage: "",
      cards: [
        { imageSrc: "https://i.ibb.co/8dSwH8j/Screenshot-20240304-095142-Yahoo-Mail.jpg" },
        { imageSrc: "https://i.ibb.co/mFcvsJV/Screenshot-20240304-095123-Yahoo-Mail.jpg" },
        { imageSrc: "https://i.ibb.co/Bfb8TTM/Screenshot-20240303-160521-Yahoo-Mail.jpg" },
        { imageSrc: "https://i.ibb.co/jGSTLtR/Screenshot-20240303-160643-Yahoo-Mail.jpg" },
        { imageSrc: "https://i.ibb.co/2KVkbk0/Screenshot-20240304-095215-Yahoo-Mail.jpg" },
        { imageSrc: "https://i.ibb.co/wg7mqSq/Screenshot-20240304-095237-Yahoo-Mail.jpg" },
        { imageSrc: "https://i.ibb.co/z8Zj03c/Screenshot-20240303-160418-Yahoo-Mail.jpg" },
      ],
    };
  },
  methods: {
    openModal(imageSrc) {
      this.selectedImage = imageSrc;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedImage = "";
    },
  },
};
</script>

<style scoped>
.section1 {
  background-color: black;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.h1 {
  margin: 0;
  padding: 0;
  color: goldenrod;
  font-size: 1.5rem;
  padding-top: 1.5rem;
  text-align: center;
}



.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  height: 100vh;
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
