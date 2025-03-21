<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div class="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center text-blue-400 mb-6">Sign in to an Account</h1>

      <div class="mb-4">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <p v-if="errMsg" class="text-red-400 text-sm mb-4">{{ errMsg }}</p>

      <button
        @click="signIn"
        :disabled="loading"
        class="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed"
      >
        {{ loading ? 'Signing in...' : 'Submit' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errMsg = ref('')
const loading = ref(false)
const router = useRouter()

const signIn = async () => {
  if (!email.value.trim() || !password.value.trim()) {
    errMsg.value = "Please fill in all fields";
    return;
  }

  loading.value = true;
  errMsg.value = '';

  try {
    const userCredential = await signInWithEmailAndPassword(getAuth(), email.value, password.value);
    console.log("User:", userCredential.user, "is signed in");
    router.push('/');
  } catch (error) {
    console.error(error.code, error.message);
    switch (error.code) {
      case 'auth/invalid-email':
        errMsg.value = 'Invalid email address';
        break;
      case 'auth/user-disabled':
        errMsg.value = 'User account disabled';
        break;
      case 'auth/user-not-found':
        errMsg.value = 'User not found';
        break;
      case 'auth/wrong-password':
        errMsg.value = 'Wrong password';
        break;
      case "auth/invalid-credential":
        errMsg.value = 'Invalid credential';
        break;
      default:
        errMsg.value = 'Something went wrong. Please try again.';
    }
  } finally {
    loading.value = false;
  }
}
</script>
