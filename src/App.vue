<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <div id="app">
        <Navbar />
        <RouterView />
        <Footer />
    </div>
</template>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
