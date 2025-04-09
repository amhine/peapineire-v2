<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        message: ''
      };
    },
    methods: {
      async loginUser() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email: this.email,
            password: this.password
          });
  
          const token = response.data.token;
  
          localStorage.setItem('token', token);
  
          this.message = 'Connexion réussie !';
          console.log('Token:', token);
        } catch (error) {
          this.message = 'Erreur de connexion';
          console.error(error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login {
    width: 300px;
    margin: 0 auto;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  div {
    margin-bottom: 10px;
  }
  input {
    padding: 8px;
    font-size: 16px;
  }
  button {
    padding: 10px;
    background-color: #2196F3;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #1976D2;
  }
  </style>
  