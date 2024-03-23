<template>
  <div>
    <AppHeader />
    <AppBanner />
    <router-view></router-view> <!-- This is where your pages will appear -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppBanner from './components/AppBanner.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppBanner
  }
}
</script>


<style>
.container-max {
  max-width: 1200px;
  margin: 0 auto;
}

/* Heading styles */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700; /* Bold for headings */
}

/* Specific style for h5 */
h5 {
  color: #424242;
}

/* Italic font style for snark class */
.snark {
  font-style: italic;
}

/* Body, paragraph, and list item font styles */
body, p, li {
  font-family: 'Raleway', sans-serif;
  font-weight: 400; /* Regular for text */
}

</style>
