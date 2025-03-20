<template>
  <div class="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#334155] text-white flex flex-col items-center py-12 px-6">
    <h1 class="text-4xl font-extrabold bg-gradient-to-r bg-blue-400 p-4 text-transparent bg-clip-text mb-8">
      Blog Posts
    </h1>

    <div v-if="blog.length" class="w-full max-w-3xl space-y-6">
      <div v-for="post in blog" :key="post.id" class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-blue-300">{{ post.title }}</h2>
        <p class="mt-4 text-gray-200 leading-relaxed">{{ post.content }}</p>
      </div>
    </div>

    <p v-else class="text-gray-400 mt-6">Loading blog posts...</p>
  </div>
</template>

<script setup>
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
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
    return blogPosts.value.filter(post => post.id === route.params.id);
})

getWeek();

</script>