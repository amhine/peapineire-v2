<template>
    <div>
      <h1>Gestion des Catégories</h1>
      <CategoryForm @refresh="fetchCategories" />
      <CategoryList :categories="categories" @refresh="fetchCategories" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import CategoryList from '../components/CategoryList.vue'
  import CategoryForm from '../components/CategoryForm.vue'
  
  const categories = ref([])
  
  const fetchCategories = async () => {
    const res = await axios.get('http://localhost:8000/api/categories/afficher')
    categories.value = res.data.data
  }
  
  onMounted(fetchCategories)
  </script>
  