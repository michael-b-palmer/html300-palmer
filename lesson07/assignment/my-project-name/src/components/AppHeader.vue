<template>
  <div class="container-max">
    <!-- Navigation -->
    <nav class="nav">
      <router-link to="/" class="nav-item nav-link" active-class="active">Work</router-link>
      <router-link to="/images" class="nav-item nav-link">Images Page</router-link>
      <!-- Keep using <a> for downloads -->
      <a class="nav-item nav-link" href="assets/palmer.mike.resume.pdf" download="palmer.mike.resume.pdf">Resume</a>
      <!-- Special handling for cherries to keep hover effect -->
      <div @mouseenter="isHovered = true" @mouseleave="isHovered = false" class="nav-item nav-item-cherry">
        <router-link to="/cherries">
          <img v-if="isHovered" src="cherries-active.png" alt="Cherries" class="nav-icon">
          <img v-else src="cherries.png" alt="Cherries" class="nav-icon">
        </router-link>
      </div>
    </nav>
    
    <!-- Header Image -->
    <div class="header-image"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
};
</script>


<style scoped>

/* Navigation styles */
.nav {
  list-style: none;
  padding: 0 0 .5rem 3rem;
  font-family: 'Montserrat', sans-serif;
}

.nav-item {
  text-decoration: none;
  color: #477D95;
  padding: 10px 15px 0px 10px;
  transition: all 0.3s;
}

.nav-item:hover {
  font-weight: bold;
  color: #477D95;
}

.nav-item.nav-link.active {
  font-weight: bold;
  color: #2C3D4F;
}

.nav-item-cherry .nav-icon {
  position: relative;
  top: .1rem;
}

.nav-item-cherry:hover .nav-icon {
  animation: swing 1s ease-in-out infinite;
}

@keyframes swing {
  0% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(-10deg); }
}

/* Header image style */
.header-image {
  background: url('desktop-hero.png') no-repeat center center;
  background-size: cover;
  width: 100%;
  min-height: 200px;
}

</style>
