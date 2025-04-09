import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes = [
    { path: '/register', component: Register },  
    { path: '/login', component: Login },
    { path: '/', redirect: '/register' },
    
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;