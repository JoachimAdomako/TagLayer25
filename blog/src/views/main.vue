<script>
export default {
  name: "MainPage",
};
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#334155] text-white flex flex-col">
      <!-- Hero Section -->
      <div class="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h1 class="text-5xl p-4 md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#6366f1] drop-shadow-lg animate-fade-in">
          Hey, I'm Joachim Adomako
        </h1>
        <p class="text-lg md:text-2xl text-gray-100 mt-4 animate-fade-in delay-200">
          A software developer based in Antwerp 🚀
        </p>
  
        <!-- Call to Action Buttons -->
        <div class="mt-8 flex space-x-4 animate-fade-in delay-400">
            <router-link 
            to="/blog" 
            class="relative z-10 px-6 py-3 bg-[#2563eb] hover:bg-[#1e40af] text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
            Go To Blog
        </router-link>
        <a 
        href="https://www.linkedin.com/in/joachim-adomako-3537b8197/" 
        class="relative z-10 px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
        Go To LinkedIn
    </a>
        </div>
      </div>
  
      <!-- Floating Glow Effect -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-[#38bdf8] opacity-20 rounded-full filter blur-3xl"></div>
    </div>
  </template>
<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}
</style>