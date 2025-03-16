<template>
    <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div>
            <img src="../assets/logoipsum-288.svg" class="h-7" alt="Logo Ipsum">
        </div>
        <ul class="flex justify-end space-x-6 mr-10">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
            <li>
                <router-link to="/signin">Sign In</router-link>
            </li>
            <li>
                <router-link to="/register">Register</router-link>  
            </li>
            <li>
                <router-link to="/blogeditor">Blog Editor</router-link>
            </li>
            <li>
                <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    });
})

const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push('/');
    })
}
</script>