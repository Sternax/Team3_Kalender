<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
    <Navbar />
    <div id="app"><RouterView /></div>
</template>
<style scoped></style>
