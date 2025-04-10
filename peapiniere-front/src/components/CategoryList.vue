<template>
    <ul>
      <li v-for="cat in categories" :key="cat.id" class="flex items-center justify-between border-b py-2">
        <span>{{ cat.name }}</span>
        <div>
          <button @click="updateCategory(cat)" class="text-blue-600 mr-2">Modifier</button>
          <button @click="deleteCategory(cat.id)" class="text-red-600">Supprimer</button>
        </div>
      </li>
    </ul>
  </template>
  
  <script setup>
  import axios from 'axios'
  import { ref } from 'vue'
  
  const props = defineProps(['categories'])
  const emit = defineEmits(['refresh'])
  
  const deleteCategory = async (id) => {
    await axios.delete(`http://localhost:8000/api/categories/${id}/supprimer`)
    emit('refresh')
  }
  
  const updateCategory = async (cat) => {
    const newName = prompt("Modifier le nom :", cat.name)
    if (newName && newName !== cat.name) {
      await axios.put(`http://localhost:8000/api/categories/${cat.id}/update`, { name: newName })
      emit('refresh')
    }
  }
  </script>
  