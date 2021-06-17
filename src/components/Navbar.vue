<template>
  <div
    class="z-10 h-20 text-gray-800 bg-white border-b border-gray-200 dark:border-carbone-700 navbar montserrat dark:bg-carbone-800 dark:text-gray-100"
  >
    <div class="flex-1 px-2 mx-2 logo">
      <router-link class="flex flex-row items-center" to="/">
        <img src="logo.svg" class="w-6 h-6 mr-2" alt="" />
        <span class="text-lg font-bold"
          >GD<span class="font-light">Studio</span></span
        ></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
