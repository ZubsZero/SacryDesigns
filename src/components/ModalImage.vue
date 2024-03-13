<template>
  <div class="modal" @click.self="handleClose">
    <div class="modal-content">
      <span class="close" @click="handleClose">&times;</span>
      <img :src="imageSource" alt="Modal Image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSource: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClose() {
      this.$emit('close');
    }
  },
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  max-height: 80%;
  position: relative;
}

.modal img {
  width: 100%;
  height: auto;
}

.close {
  position: absolute;
  top: 15px;
  right: 15px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: goldenrod;
}
</style>
