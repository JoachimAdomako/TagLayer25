<script>
export default {
  name: "aboutPage",
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6">
    <div class="max-w-2xl text-center">
      <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
        About Me
      </h1>
      <p class="mt-4 text-lg text-gray-300 leading-relaxed">
        I'm Joachim Adomako, a software developer based in Antwerp 🚀.
        Passionate about building interactive web experiences and exploring new technologies.
      </p>
      <p>
        More information Coming soon...
      </p>

      <router-link
        to="/"
        class="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105"
      >
        Go Back Home
      </router-link>
    </div>
  </div>
</template>
