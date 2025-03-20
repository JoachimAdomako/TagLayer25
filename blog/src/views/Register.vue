<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#334155] text-white px-6">
      <div class="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold text-center text-blue-300">Create an Account</h1>
  
        <div class="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Email"
            v-model="email"
            class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
  
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
  
          <button
            @click="register"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Sign Up
          </button>
  
          <button
            @click="signInWithGoogle"
            class="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all"
          >
            <span>Sign in with Google</span>
          </button>
  
          <p class="text-gray-400 text-sm text-center">
            Already have an account?
            <router-link to="/signin" class="text-blue-400 hover:underline">Sign in</router-link>
          </p>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue'
import { getAuth, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,    
 } from 'firebase/auth'
import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const router = useRouter()
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User: ", user, "is registered and signed in")
        router.push('/')
        // ...
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
    });
}

const signInWithGoogle = () => {
    const router = useRouter();
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider).then((result) => {
        console.log("User: ", result.user, "is signed in")
        router.push('/')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
};
</script>

<script>
export default {
    name: 'registerPage'
}
</script>