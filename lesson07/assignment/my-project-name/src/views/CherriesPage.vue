<template>
  <div class="accordion-container">
    <div class="accordion-item" v-for="(fact, title, index) in cherryFacts" :key="index" @click="toggleFact(index)">
      <div class="accordion-title">{{ title }}</div>
      <div class="accordion-content" :class="{ 'is-active': activeFact === index }">
        {{ fact }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cherryFacts: {
        "Origin": "Cherries originate from the region between the Black and Caspian Seas.",
        "Health Benefits": "Cherries are packed with antioxidants and offer health benefits like reduced inflammation.",
        "Cherry Trees": "The world's oldest known cherry trees are over 1,000 years old.",
        // Add more facts as needed
      },
      activeFact: null, // Tracks the currently active (visible) fact
    };
  },
  methods: {
    toggleFact(index) {
      this.activeFact = this.activeFact === index ? null : index;
    },
  },
};
</script>

<style scoped>
.accordion-container {
  max-width: 600px;
  margin: auto;
}

.accordion-item {
  background-color: #f1f1f1;
  cursor: pointer;
  padding: 18px;
  border: 1px solid #ccc;
  margin-top: -1px; /* Removes double borders */
}

.accordion-title {
  font-weight: bold;
}

.accordion-content {
  display: none;
  padding: 15px;
  background-color: white;
  border-top: none;
}

.accordion-content.is-active {
  display: block;
}
</style>
