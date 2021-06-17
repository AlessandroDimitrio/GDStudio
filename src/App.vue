<template>
  <div
    id="container"
    class="flex flex-col h-screen subpixel-antialiased overscroll-none"
  >
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: { Navbar },
};
</script>
