import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import CategoriesView from '../views/Categories.vue';

const routes = [
    { path: '/register', component: Register },  
    { path: '/login', component: Login },
    { path: '/', redirect: '/register' },
    { path: '/categories',component: CategoriesView}
    
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
