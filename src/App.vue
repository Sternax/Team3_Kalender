<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <Navbar />
    <main><RouterView /></main>
    <Footer />
</template>

<style scoped>
#routerViewContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
