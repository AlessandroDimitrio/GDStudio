<template>
  <div>
    <section class="text-gray-600 bg-gray-50 body-font">
      <div
        class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row"
      >
        <div
          class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
        >
          <h1
            class="mb-4 text-4xl font-extrabold text-gray-900 title-font sm:text-7xl"
          >
            Crea le grafiche della tua sezione con coerenza.
          </h1>
          <p class="mb-8 leading-relaxed">
            Accedi alla versione beta di GD-Studio
          </p>
          <div class="flex justify-center">
            <router-link to="studio">
              <button
                class="inline-flex px-6 py-2 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600"
              >
                Prova ora
              </button></router-link
            >
            <button
              class="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 border-0 rounded bg-trasparent focus:outline-none hover:bg-red-100 bg-opacity-90"
            >
              Scopri di più
            </button>
          </div>
        </div>
        <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="landing.svg"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>
