<script>
export default {
  name: "aboutPage",
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-16">
    <div class="max-w-3xl text-center space-y-6">
      <!-- Foto -->
      <img
        src="../assets/profilepicLinkedin.jpg"
        alt="Joachim Adomako"
        class="w-40 h-40 mx-auto rounded-full object-cover border-4 border-blue-400 shadow-lg"
      />

      <!-- Titel -->
      <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
        Over Mij
      </h1>

      <!-- Persoonlijke info -->
      <p class="text-lg leading-relaxed text-gray-300">
        Hallo! Mijn naam is <strong>Joachim Adomako</strong>. Ik ben een student Software Developer uit Antwerpen met een passie voor frontend development, UI/UX, en het bouwen van dynamische webtoepassingen. Momenteel volg ik het <strong>Graduaat Programmeren</strong> aan de <strong>AP Hogeschool</strong>.
      </p>

      <!-- Stage info -->
      <p class="text-lg leading-relaxed text-gray-300">
        Ik loop stage bij het bedrijf <strong>Taglayer</strong>, gevestigd in Antwerpen. Tijdens deze stage werk ik voornamelijk aan frontend componenten in <strong>Vue.js</strong>, schrijf ik unit tests met <strong>Vitest</strong>, en leer ik samenwerken in een professioneel developmentteam.
      </p>

      <!-- Rol en taken -->
      <p class="text-lg leading-relaxed text-gray-300">
        Mijn rol binnen het team is om bestaande functionaliteiten te verbeteren, nieuwe features te bouwen en bij te dragen aan de algemene gebruikerservaring van het platform. Ik krijg ook de kans om met moderne tools te werken zoals <strong>Pinia</strong>, <strong>Cypress</strong> en component testing.
      </p>

      <!-- Links -->
      <div class="flex justify-center gap-4 mt-6">
        <a
          href="https://www.linkedin.com/in/joachim-adomako-3537b8197/"
          target="_blank"
          rel="noopener"
          class="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
        >
          LinkedIn
        </a>
        <!-- Voeg meer socials toe indien gewenst -->
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener"
          class="px-5 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-medium transition"
        >
          Mijn CV
        </a>
      </div>

      <!-- Terug naar home -->
      <router-link
        to="/"
        class="inline-block mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105"
      >
        Terug naar Home
      </router-link>
    </div>
  </div>
</template>
