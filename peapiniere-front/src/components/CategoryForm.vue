<template>
    <form @submit.prevent="submitForm" class="my-4">
      <input
        v-model="name"
        placeholder="Nom de la catégorie"
        class="border p-2 mr-2"
      />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2">
        {{ props.categorie ? 'Modifier' : 'Ajouter' }}
      </button>
  
      <p v-if="successMessage" class="text-green-600 mt-2">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</p>
    </form>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import axios from 'axios'
  
  const props = defineProps({
    categorie: Object
  })
  
  const emit = defineEmits(['refresh'])
  
  const name = ref('')
  const successMessage = ref('')
  const errorMessage = ref('')
  
  watch(() => props.categorie, (newVal) => {
    name.value = newVal ? newVal.name : ''
  }, { immediate: true })
  
  const submitForm = async () => {
    successMessage.value = ''
    errorMessage.value = ''
    const token = localStorage.getItem('token')
  
    if (!name.value) {
      errorMessage.value = 'Le nom est requis.'
      return
    }
  
    try {
      if (props.categorie) {
    
        await axios.put(
          `http://localhost:8000/api/categories/${props.categorie.id}/update`,
          { name: name.value },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        successMessage.value = 'Catégorie modifiée avec succès.'
      } else {
        await axios.post(
          'http://localhost:8000/api/categories/ajouter',
          { name: name.value },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        successMessage.value = 'Catégorie ajoutée avec succès.'
      }
  
      name.value = ''
      emit('refresh')
    } catch (error) {
      errorMessage.value = error.response?.data?.message || 'Une erreur est survenue.'
    }
  }
  </script>
  