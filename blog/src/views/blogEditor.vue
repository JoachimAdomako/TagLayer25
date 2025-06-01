<template>
  <div class="min-h-screen p-5 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
    <div class="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-center text-blue-400 mb-6">Create a Blog Post</h1>

      <!-- Week ID invoeren -->
      <div class="mb-4">
        <label class="block text-gray-300 mb-1">Week ID</label>
        <input
          type="text"
          placeholder="Geef een nummer in"
          v-model="weekId"
          class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Week titel invoeren -->
      <div class="mb-4">
        <label class="block text-gray-300 mb-1">Week Titel</label>
        <input
          type="text"
          placeholder="Geef de week in bv: Stage - Week 1"
          v-model="week"
          class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Knop om een week toe te voegen -->
      <button
        @click="addWeek"
        class="w-full py-2 mb-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105"
      >
        Voeg Week Toe
      </button>

      <hr class="border-gray-600 my-4" />

      <div class="mb-4">
        <label class="block text-gray-300 mb-1">Week ID</label>
        <input
          type="text"
          placeholder="Geef een nummer in"
          v-model="weekId"
          class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Blog Titel -->
      <div class="mb-4">
        <label class="block text-gray-300 mb-1">Blog Titel</label>
        <input
          type="text"
          placeholder="Titel"
          v-model="title"
          class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Blog Content -->
      <div class="mb-6">
        <label class="block text-gray-300 mb-1">Blog Content</label>
        <textarea
          placeholder="Content"
          v-model="content"
          rows="5"
          class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>

      <div>
        <label class="block text-gray-300 mb-1">Tags (optioneel)</label>
        <input
          type="text"
          placeholder="Voeg tags toe, gescheiden door komma's"
          v-model="tags"
          class="w-full px-4 py-2 mb-6 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Knop om een blogpost toe te voegen -->
      <button
        @click="addBlogPost"
        class="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105"
      >
        Voeg Blog Toe
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

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

const title = ref('');
const content = ref('');
const week = ref('');
const weekId = ref('');
const tags = ref('');

const postsCollectionRefBlogs = collection(db, 'blogs');
const postsCollectionRefWeek = collection(db, 'weeks');

const addWeek = async () => {
    if (!weekId.value || !week.value.trim()) {
        console.error("Week ID en titel zijn verplicht.");
        return;
    }
    try {
        await addDoc(postsCollectionRefWeek, {
            id: weekId.value,
            week: week.value,
        });

        console.log("Week toegevoegd!");
        // Reset velden
        week.value = '';
    } catch (e) {
        console.error("Fout bij toevoegen van week:", e);
    }
};

const addBlogPost = async () => {
    const auth = getAuth(app);
    const user = auth.currentUser;

    if (!user) {
        console.error("Gebruiker niet ingelogd.");
        return;
    }

    if (!weekId.value || !title.value.trim() || !content.value.trim()) {
        console.error("Week ID, titel en content zijn verplicht.");
        return;
    }

    try {
        await addDoc(postsCollectionRefBlogs, {
            id: weekId.value,
            title: title.value,
            content: content.value,
            author: { name: user.displayName, id: user.uid },
            tags: tags.value ? tags.value.split(',').map(tag => tag.trim()) : [],
        });

        console.log("Blogpost toegevoegd!");
        // Reset velden
        title.value = '';
        content.value = '';
    } catch (e) {
        console.error("Fout bij toevoegen van blogpost:", e);
    }
};
</script>
