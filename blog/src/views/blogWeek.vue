<template>
  <div class="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#334155] text-white flex flex-col items-center py-12 px-6">
    <h1 class="text-4xl font-extrabold bg-blue-500 text-transparent bg-clip-text mb-8 p-8">
      Blog
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
      <button
        v-for="post in posts"
        :key="post.id"
        @click="goToBlog(post.id)"
        class="bg-[#2563eb] hover:bg-[#1e40af] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105"
      >
        {{ post.week }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { ref} from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

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

const posts = ref([]);

const postsCollectionRef = collection(db, 'weeks');
const getWeek = async () => {
  try {
    const data = await getDocs(postsCollectionRef);
    posts.value = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(posts.value);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

const goToBlog = (post) => {
  router.push(`/blog/${post}`);
}

getWeek();
</script>