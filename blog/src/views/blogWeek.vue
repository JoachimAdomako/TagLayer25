<template>
    <div>
        <h1>Blog</h1>
        <div v-for="post in posts" :key="post.id">
            <button
            @click="goToBlog(post.id)"
            >{{ post.week }}</button>
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