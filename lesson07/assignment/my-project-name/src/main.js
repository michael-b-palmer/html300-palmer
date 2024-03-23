import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'; // Ensure this path matches your project structure

const app = createApp(App);
app.use(router);
app.mount('#app');
