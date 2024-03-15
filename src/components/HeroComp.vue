<template>
  <div>
    <div class="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in carouselItems" :key="index" :class="['carousel-item', { active: index === currentIndex }]">
          <img :src="item.image" class="carousel-image" :alt="item.caption">
          <div class="carousel-caption">
            <h5>{{ item.caption }}</h5>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" @click="changeSlide(-1)">&#10094;</button>
      <button class="carousel-control-next" @click="changeSlide(1)">&#10095;</button>
    </div>
    <div class="section1">
      <div class="line2"></div>
      <div class="line3"></div>
      <div class="line4"></div>
      <div class="line5"></div>
      <h3 class="h1">Sacry Design “African Handmade Collection” </h3>
      <div class="line7"></div>
      <div class="line8"></div>
      <div class="line9"></div>
      <div class="line10"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      carouselItems: [
        {
          image: "https://i.ibb.co/PgD79NC/06.jpg",
          caption: "Decor"
        },
        {
          image: "https://i.ibb.co/KqhXtGn/Whats-App-Image-01.jpg",
          caption: "Art"
        },
        {
          image: "https://i.ibb.co/YTmbrkj/Whats-App-Image-02.jpg",
          caption: "Jewelry"
        },
        {
          image: "https://i.ibb.co/VjcJWfL/Screenshot-20240303-160521-Yahoo-Mail.jpg",
          caption: "Hand Crafted"
        },
        {
          image: "https://i.ibb.co/Y7LRDyQ/Screenshot-20240303-160359-Yahoo-Mail.jpg",
          caption: "Fashion"
        }
      ],
      timer: null
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    this.stopCarousel();
  },
  methods: {
    changeSlide(n) {
      this.currentIndex += n;
      if (this.currentIndex >= this.carouselItems.length) {
        this.currentIndex = 0;
      }
      if (this.currentIndex < 0) {
        this.currentIndex = this.carouselItems.length - 1;
      }
    },
    startCarousel() {
      this.timer = setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex >= this.carouselItems.length) {
          this.currentIndex = 0;
        }
      }, 4000); // Change image every 4 seconds (4000 milliseconds)
    },
    stopCarousel() {
      clearInterval(this.timer);
    }
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  max-width: 100%;
  margin: auto;
}

.carousel-inner {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}

.carousel-item {
  width: 100%;
  height: 35rem;
  opacity: 0;
  transition: opacity 1.4s ease; /* Updated duration to 1.4 seconds */
}

.carousel-item.active {
  opacity: 1;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 10px;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

.section1 {
  background-color: black;
  height: 5rem;
  display: flex;
  gap: 7.5rem;
  align-items: center;
  justify-content: center;
}

.h1 {
  margin: 0;
  padding: 0;
  color: goldenrod;
  font-size: 1.5rem;
}

.line2 {
  border-right: 1px solid blue;
  height: 5.5rem;
  margin-right: 1rem;
}

.line3 {
  border-right: 1px solid red;
  height: 5.5rem;
  margin-right: 1rem;
}

.line4 {
  border-right: 1px solid white;
  height: 5.5rem;
  margin-right: 1rem;
}

.line5 {
  border-right: 1px solid green;
  height: 5.5rem;
  margin-right: 1rem;
}

.line7 {
  border-right: 1px solid green;
  height: 5.4rem;
  margin-right: 1rem;
}

.line8 {
  border-right: 1px solid white;
  height: 5.4rem;
  margin-right: 1rem;
}

.line9 {
  border-right: 1px solid red;
  height: 5.4rem;
  margin-right: 1rem;
}

.line10 {
  border-right: 1px solid blue;
  height: 5.4rem;
}

@media (max-width: 768px) {
  .carousel-caption {
    font-size: 14px;
  }

  .section1 {
    height: auto;
    gap: 1rem;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .h1 {
    font-size: 1.2rem;
    padding-top: 0.5rem;
    padding-left: 0;
  }

  .line2,
  .line3,
  .line4,
  .line5,
  .line7,
  .line8,
  .line9,
  .line10 {
    display: none;
  }
}

@media (min-width: 768px) {
  .section1 {
    gap: rem;
  }
}

@media (max-width: 768px) {
 

  .section1 {
    height: auto;
    gap: 1rem;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .h1 {
    font-size: 1.2rem;
    padding-top: 0.5rem;
    padding-left: 0;
  }

  .line2,
  .line3,
  .line4,
  .line5,
  .line7,
  .line8,
  .line9,
  .line10 {
    display: none;
  }
}
</style>
