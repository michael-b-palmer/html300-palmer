<template>
  <div class="wrapper">
    <h1 class="heading">Countries of Europe</h1>

   
  </div>
</template>

<script>


export default {
  components: {
    
  },
  data() {
    return {
      loading: true,
      countries: null,
      errored: false
    }
  },
  mounted () {
  
  }
  
}
</script>

<style>
.container {
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
}

.heading {
  text-align: center;
  font-size: 2rem;
  color: #555;
  margin: 2rem auto;
}

img {
  max-width: 150px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

