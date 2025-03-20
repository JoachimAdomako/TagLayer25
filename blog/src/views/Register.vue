<template>
    <div>
        <h1>Create an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email"/></p>
        <p><input type="password" placeholder="Password" v-model="password"/></p>
        <p><button @click="register">Submit</button></p>
        <p><router-link to="/signin" @click="toggleMenu">Not signed in yet? Sign in</router-link></p>
        <p><button @click="signInWithGoogle">Sign In With Google</button></p>
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