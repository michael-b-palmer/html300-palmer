<template>
  <div class="image-gallery, container-max">
    <div v-for="(image, index) in images" :key="index" class="image-item">
      <img :src="image.src" :alt="image.alt">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: '/flow.png', alt: 'Image 1' },
        { src: '/wf.png', alt: 'Image 2' },
        { src: 'final-screens.png', alt: 'Image 3' },
        // Add more images as needed
      ]
    };
  }
};
</script>

<style scoped>
.container-max {
    max-width: 1200px;
    margin: 0 auto;
  }
.image-gallery {
  display: flex;
  flex-wrap: wrap;
}

.image-item {
  margin: 10px;
}

.image-item img {
  width: 1200px; /* Adjust the width as needed */
  height: auto;
}
</style>
