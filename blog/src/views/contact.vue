<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#334155] text-white px-6">
      <div class="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold text-center text-blue-300">Contact Me</h1>
  
        <form class="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            v-model="name"
            class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
  
          <input
            type="email"
            placeholder="Your Email"
            v-model="email"
            class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
  
          <textarea
            placeholder="Your Message"
            v-model="message"
            rows="4"
            class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
  
          <button
            @click.prevent="submitForm"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>
  
        <p class="text-center text-gray-400 mt-4">
          <router-link to="/" class="text-blue-400 hover:underline">Back to Home</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  
  const submitForm = () => {
    console.log('Name:', name.value);
    console.log('Email:', email.value);
    console.log('Message:', message.value);
    alert('Message sent successfully!');
  };
  </script>