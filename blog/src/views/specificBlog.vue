<template>
    <div>
        <h1>Blog</h1>
        <div v-for="post in blog" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
        </div>
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