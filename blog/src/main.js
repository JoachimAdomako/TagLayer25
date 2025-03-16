import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAecyiDK5W5paeS2cJvqJpRQezEFYz3fjY",
  authDomain: "portfolio-c23ff.firebaseapp.com",
  projectId: "portfolio-c23ff",
  storageBucket: "portfolio-c23ff.firebasestorage.app",
  messagingSenderId: "790100481744",
  appId: "1:790100481744:web:b7a9fdea005d46cb0cf0d5",
  measurementId: "G-PTFWZDE6MH"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// not fire base
const app = createApp(App)

app.use(router)

app.use(createPinia())

app.mount('#app')
