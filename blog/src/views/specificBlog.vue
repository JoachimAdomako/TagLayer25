<template>
  <div class="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#334155] text-white flex flex-col items-center py-12 px-6">
    <h1 class="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 p-4 text-transparent bg-clip-text mb-8">
      Blog Posts
    </h1>

    <input
    type="text"
    v-model="searchQuery"
    placeholder="Zoek naar een tag..."
    class="w-full max-w-md px-4 py-2 mb-6 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
    />

    <div v-if="blog.length" class="w-full max-w-3xl space-y-6">
      <div v-for="post in blog" :key="post.id" class="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
        <!-- Titel -->
        <h2 class="text-2xl font-bold text-blue-400 mb-2">{{ post.title }}</h2>

        <!-- Auteur Info -->
        <div class="flex items-center space-x-3 text-gray-400 text-sm mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-6 8a6 6 0 0112 0H4z"/>
          </svg>
          <span class="font-medium text-gray-300">Gepubliceerd door: <span class="text-white">{{ post.author.name }}</span></span>
        </div>

        <!-- tag -->
        <div v-for="tag in post.tags" :key="tag" class="p-1 inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full mr-2">
          {{ tag }}
        </div>

        <!-- Content -->
        <div class="text-gray-100 leading-relaxed" v-html="post.content"></div>
      </div>
    </div>

    <p v-else class="text-gray-400 mt-6">Loading blog posts...</p>
  </div>
</template>

<script setup>
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { createPinia } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const firebaseConfig = {
  apiKey: "AIzaSyAecyiDK5W5paeS2cJvqJpRQezEFYz3fjY",
  authDomain: "portfolio-c23ff.firebaseapp.com",
  projectId: "portfolio-c23ff",
  storageBucket: "portfolio-c23ff.firebasestorage.app",
  messagingSenderId: "790100481744",
  appId: "1:790100481744:web:b7a9fdea005d46cb0cf0d5",
  measurementId: "G-PTFWZDE6MH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const blogPosts = ref([]);
const searchQuery = ref('');


const postsCollectionRefBlogs = collection(db, 'blogs');
const getWeek = async () => {
  try {
    const dataBlogs = await getDocs(postsCollectionRefBlogs);
    blogPosts.value = dataBlogs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(blogPosts.value);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

const blog = computed(() => {
  const filteredBlogsPerWeek = blogPosts.value.filter(post => post.id === route.params.id);
  if (searchQuery.value) {
    return filteredBlogsPerWeek.filter(post =>
      post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
    );
  } else {
    return filteredBlogsPerWeek;
  }
})

getWeek();

</script>