<template>
    <footer class="bg-gray-900 text-white py-6">
        <div class="container mx-auto flex flex-col items-center text-center space-y-2">
            <p class="text-sm text-gray-400">
                © {{ currentYear }} Joachim Adomako. All rights reserved.
            </p>
            <p class="text-sm text-gray-400">
                Built with <strong class="text-white">Vue.js</strong> and <strong class="text-white">Tailwind CSS</strong>
            </p>
        </div>
    </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>