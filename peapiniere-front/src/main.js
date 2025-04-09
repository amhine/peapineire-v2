// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router/index'

// createApp(App).mount('#app')
// createApp(router).mount('#router')
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

const app = createApp(App);
app.use(router); // Assurez-vous d'ajouter le routeur à l'application
app.mount('#app'); // Monte l'application Vue sur l'élément #app
