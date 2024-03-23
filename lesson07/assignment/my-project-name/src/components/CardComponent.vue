<template>
  <div class="col-md-6 col-12">
    <a :href="link" class="card custom-card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
        <img :src="imageSrc" :alt="imageAlt" class="card-img-top">
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: String,
    subtitle: String,
    imageSrc: String,
    imageAlt: String,
  }
}
</script>

<style scoped>
.custom-card {
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.5);
  margin-top: 1.5rem;
  border-radius: 5px;
  background-color: #5E8BAF;
  text-decoration: none;
  color: inherit; /* Ensures text color is consistent */
}

.custom-card:hover {
  text-decoration: none; /* Removes underline on hover */
}

.card-title {
  color: #E3EBF0;
  font-size: 1.2rem;
}

.card-subtitle {
  color: #BCCED9; /* Adjusted color for subtitle */
}

.card-img-top {
  margin: 25px auto; /* Center image */
  display: block;
  width: calc(100% - 50px); /* Adjust width to fit inside the card */
  border-radius: 5px; /* Optional: if you want rounded corners */
}
</style>