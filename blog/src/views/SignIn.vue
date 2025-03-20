<template>
    <div>
        <h1>Sign in to an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email"/></p>
        <p><input type="password" placeholder="Password" v-model="password"/></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p><button @click="signIn">Submit</button></p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const router = useRouter()
const errMsg = ref('')
const signIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User: ", user, "is signed in")
        router.push('/')
        // ...
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        switch (errorCode) {
            case 'auth/invalid-email':
                errMsg.value = 'Invalid email address'
                break;
            case 'auth/user-disabled':
                errMsg.value = 'User account disabled'
                break;
            case 'auth/user-not-found':
                errMsg.value = 'User not found'
                break;
            case 'auth/wrong-password':
                errMsg.value = 'Wrong password'
                break;
            case "auth/invalid-credential":
                errMsg.value = 'Invalid credential'
                break;
            default:
                errMsg.value = errorMessage
        }
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