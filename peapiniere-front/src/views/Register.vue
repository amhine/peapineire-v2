<template>
    <div class="register">
      <h2>Register</h2>
      <form @submit.prevent="registerUser">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div>
          <label for="id_role">Role ID:</label>
          <input type="number" id="id_role" v-model="id_role" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        id_role: 3, // Role by default
        message: ''
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await axios.post('https://your-api-endpoint/register', {
            name: this.name,
            email: this.email,
            password: this.password,
            id_role: this.id_role
          });
          this.message = 'Registration successful!';
        } catch (error) {
          this.message = 'Error during registration!';
          console.error(error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .register {
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
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  