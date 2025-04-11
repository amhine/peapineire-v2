<!-- <template>
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
   -->

   <!-- <template>
    <div class="p-4">
      <CategoryForm @refresh="refreshList" />
      <CategoriesList ref="categoriesListRef" />
    </div>
  </template>
  
  <script setup>
  import CategoryForm from '../components/CategoryForm.vue'
  import CategoriesList from '../components/CategoryList.vue'
  import { ref } from 'vue'
  
  const categoriesListRef = ref(null)
  
  const refreshList = () => {
    categoriesListRef.value?.fetchCategories()
  }
  </script> -->

  <template>
    <div class="p-4">
      <CategoryForm :categorie="selectedCategorie" @refresh="refreshList" />
      <CategoriesList ref="categoriesListRef" @refresh="refreshList" @edit="editCategorie" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import CategoryForm from '../components/CategoryForm.vue'
  import CategoriesList from '../components/CategoryList.vue'
  
  const categoriesListRef = ref(null)
  const selectedCategorie = ref(null)
  
  const refreshList = () => {
    categoriesListRef.value?.fetchCategories()
    selectedCategorie.value = null 
  }
  
  const editCategorie = (categorie) => {
    selectedCategorie.value = categorie
  }
  </script>
  
  