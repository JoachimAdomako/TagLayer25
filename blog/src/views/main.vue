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
        <!-- Scroll Down Arrow -->
         <div class="mt-12 animate-bounce cursor-pointer">
          <svg class="w-8 h-8 text-[#38bdf8] mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

      </div>
      <!-- Floating Glow Effect -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-[#38bdf8] opacity-20 rounded-full filter blur-3xl"></div>
      
    </div>
      <!-- Info Section -->
      <section id="intro" class="bg-[#124e68] text-white px-6 py-16 md:py-24 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Meer over deze stage</h2>
          <p class="text-lg leading-relaxed">
            Tijdens mijn stage bij <strong>Taglayer</strong> werk ik aan frontend componenten in Vue.js, schrijf ik testen aan de hand van vitest, en leer ik werken in een professioneel team. In deze blog deel ik mijn vooruitgang, fouten, oplossingen, en lessen.
          </p>
          <p class="text-lg mt-6 leading-relaxed text-white">
            Deze website is mijn portfolio voor het vak Werkplekleren (Graduaat Programmeren aan de AP Hogeschool). Hier vind je wekelijkse blogposts, reflecties, codevoorbeelden, en meer.
          </p>
        </div>
      </section>
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