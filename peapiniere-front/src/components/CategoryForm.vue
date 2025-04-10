<template>
    <form @submit.prevent="submitForm" class="my-4">
      <input v-model="name" placeholder="Nom de la catégorie" class="border p-2 mr-2" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2">Ajouter</button>
  
      <p v-if="successMessage" class="text-green-600 mt-2">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</p>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const emit = defineEmits(['refresh'])
  
  const name = ref('')
  const successMessage = ref('')
  const errorMessage = ref('')
  
  const submitForm = async () => {
    successMessage.value = ''
    errorMessage.value = ''
  
    const token = localStorage.getItem('token')
  
    if (!name.value) {
      errorMessage.value = 'Le nom est requis.'
      return
    }
  
    try {
      await axios.post(
        'http://localhost:8000/api/categories/ajouter',
        { name: name.value },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      )
      successMessage.value = 'Catégorie ajoutée avec succès.'
      name.value = ''
      emit('refresh')
    } catch (error) {
      errorMessage.value = error.response?.data?.message || 'Une erreur est survenue.'
    }
  }
  </script>
  