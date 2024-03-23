<template>
    <div>
      <div class="container-max">
        <div class="row">
          <CardComponent
            class="col-md-6"
            title="Admin Dashboard Redesign"
            subtitle="Improving the onboarding experience, increasing adoption and clarifying the value proposition"
            imageSrc="tile1.png"
            imageAlt="Dashboard Image">
          </CardComponent>
          <CardComponent
            class="col-md-6"
            title="Enterprise Subscription Management"
            subtitle="Empowering organizations with self-service tools to view and manage complex subscriptions"
            imageSrc="tile2.png"
            imageAlt="Subscription Management Image">
          </CardComponent>
        </div>
        <div class="row">
          <CardComponent
            class="col-md-6"
            title="User Access Management"
            subtitle="Creating granular, delegated administrator permission profiles to manage access to specific assets"
            imageSrc="tile3.png"
            imageAlt="Access Management Image">
          </CardComponent>
          <CardComponent
            class="col-md-6"
            title="User Provisioning with SCIM"
            subtitle="Combatting ambiguity by digging into technical details and rapidly iterating, resulting in a viable vision"
            imageSrc="tile4.png"
            imageAlt="SCIM Image">
          </CardComponent>
        </div>
      </div>
    </div>
  </template>
  
  
  
  
  <script>
  import CardComponent from '../components/CardComponent.vue';
  
  export default {
    name: 'App',
    components: {
      CardComponent
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
  