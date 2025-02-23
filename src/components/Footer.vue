<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <footer>
        <ul>
            <li>
                <RouterLink to="/">Kalender</RouterLink>
            </li>
            <li>
                <RouterLink to="/">Om oss</RouterLink>
            </li>
            <li>
                <RouterLink to="/">Kontakta oss</RouterLink>
            </li>
        </ul>
    </footer>
</template>

<style scoped>
footer {
    background-color: #071826;
    color: white;
    padding: 4rem 0;
    text-align: center;
}

ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
}
</style>
