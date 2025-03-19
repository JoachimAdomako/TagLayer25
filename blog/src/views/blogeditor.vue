<template>
    <div>
        <h1>Create a Blog Post</h1>
        <p>Week</p>
        <div><input type="text" placeholder="Geef een nummer in" v-model="weekId"/></div>
        <input type="text" placeholder="Geef de week in bv: Stage - Week 1" v-model="week"/>
        <p>Blog</p>
        <p><input type="text" placeholder="Title" v-model="title" /></p>
        <p><textarea placeholder="Content" v-model="content"></textarea></p>
        <p><button @click="createPost">Submit</button></p>
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
const weekId = ref();

const postsCollectionRefBlogs = collection(db, 'blogs');
const postsCollectionRefWeek = collection(db, 'weeks');
const createPost = async() => {
    try{
        const auth = getAuth(app);
        const user = auth.currentUser;
        if(user){
            await addDoc(postsCollectionRefWeek, {
                id: weekId.value,
                week: week.value,
            });

            await addDoc(postsCollectionRefBlogs, {
                id: weekId.value,
                title: title.value,
                content: content.value,
                author: { name: user.displayName, id: user.uid },
            })
        }
    }catch(e){
        console.error(e);
    }
}
</script>