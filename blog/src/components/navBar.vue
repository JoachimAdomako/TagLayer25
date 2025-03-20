<template>
<nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <!-- Logo -->
    <div>
      <img src="../assets/logoipsum-288.svg" class="h-7" alt="Logo Ipsum">
    </div>

    <!-- Navigation Links -->
    <ul class="hidden md:flex justify-end space-x-6 mr-10">
      <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
      <li><router-link to="/blog" class="hover:text-gray-300">Blog</router-link></li>
      <li v-if="isLoggedIn">
        <router-link to="/blogeditor" class="hover:text-gray-300">Blog Editor</router-link>
      </li>
      <li><router-link to="/about" class="hover:text-gray-300">About</router-link></li>
      <li><router-link to="/contact" class="hover:text-gray-300">Contact</router-link></li>

      <template v-if="!isLoggedIn">
        <li><router-link to="/register" class="hover:text-gray-300">Register</router-link></li>
      </template>

      <li v-if="isLoggedIn">
        <button @click="handleSignOut" class="text-red-400 hover:text-red-600">Sign out</button>
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="absolute top-14 right-4 bg-gray-900 p-4 rounded shadow-lg md:hidden">
      <ul class="flex flex-col space-y-4">
        <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
        <li><router-link to="/blog" @click="toggleMenu">Blog</router-link></li>
        <li v-if="isLoggedIn">
          <router-link to="/blogeditor" @click="toggleMenu">Blog Editor</router-link>
        </li>
        <li><router-link to="/about" @click="toggleMenu">About</router-link></li>
        <li><router-link to="/contact" @click="toggleMenu">Contact</router-link></li>

        <template v-if="!isLoggedIn">
          <li><router-link to="/register" @click="toggleMenu">Register</router-link></li>
        </template>

        <li v-if="isLoggedIn">
          <button @click="handleSignOut" class="text-red-400 hover:text-red-600">Sign out</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    });
})

const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push('/');
    })
}
</script>