<script setup>
import { RouterLink } from "vue-router";

const year = new Date().getFullYear();
</script>

<template>
    <footer>
        <nav>
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
        </nav>
        <p id="copy">&copy; {{ year }}</p>
    </footer>
</template>

<style scoped>
footer {
    background-color: #071826;
    color: white;
    text-align: center;
    width: 100%;
    position: absolute;
    left: 0;
}

nav {
    padding: 4rem 0;
}

ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

li a {
    color: white;
}

#copy {
    font-size: 12px;
    color: gray;
}
</style>
