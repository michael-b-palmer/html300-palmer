export default {
    data() {
      return {
        isBorderActive: false, // Initial state of the border
      };
    },
    methods: {
      toggleBorder() {
        this.isBorderActive = !this.isBorderActive; // Toggle the state
      },
    },
  };
  