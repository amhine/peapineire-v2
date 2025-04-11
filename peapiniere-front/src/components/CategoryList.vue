
   <template>
    <div class="my-6">
      <h2 class="text-xl font-bold mb-4">Liste des Catégories</h2>
  
      <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
  
      <ul v-if="categories.length">
        <li
          v-for="categorie in categories"
          :key="categorie.id"
          class="mb-2 p-2 border rounded flex justify-between items-center"
        >
          <span>{{ categorie.name }}</span>
          <div class="space-x-2">
            <button
              class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              @click="$emit('edit', categorie)"
            >
              Modifier
            </button>
            <button
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              @click="supprimerCategorie(categorie.id)"
            >
              Supprimer
            </button>
          </div>
        </li>
      </ul>
      <p v-else>Aucune catégorie trouvée.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const props = defineProps({})
  const emit = defineEmits(['refresh', 'edit'])
  
  const categories = ref([])
  const errorMessage = ref('')
  
  const fetchCategories = async () => {
    const token = localStorage.getItem('token')
  
    try {
      const res = await axios.get('http://localhost:8000/api/categories/afficher', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      categories.value = res.data.data
    } catch (error) {
      errorMessage.value = error.response?.data?.message || 'Erreur lors du chargement.'
    }
  }
  
  const supprimerCategorie = async (id) => {
    const token = localStorage.getItem('token')
  
    try {
      await axios.delete(`http://localhost:8000/api/categories/${id}/supprimer`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      emit('refresh')
    } catch (error) {
      errorMessage.value = error.response?.data?.message || 'Erreur lors de la suppression.'
    }
  }
  const ModifierCategorie = async (id) => {
    const token = localStorage.getItem('token')
  
    try {
      await axios.put(`http://localhost:8000/api/categories/${id}/update`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      emit('refresh')
    } catch (error) {
      errorMessage.value = error.response?.data?.message || 'Erreur lors de la suppression.'
    }
  }
  
  onMounted(fetchCategories)
  defineExpose({ fetchCategories })
  </script>
  