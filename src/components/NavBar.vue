<template>
  <nav class="navbar">
    <RouterLink to="/">
      <img class="logo" src="/src/assets/logo-white.png" alt="Logotyp" />
    </RouterLink>

    <button class="hamburger" @click="menuOpen = !menuOpen">☰</button>

    <ul :class="['nav-links', { open: menuOpen }]">
      <li>
        <RouterLink to="/" @click="menuOpen = false">Kalender</RouterLink>
      </li>
      <li>
        <RouterLink to="/boka" @click="menuOpen = false">Boka</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" @click="menuOpen = false">Om oss</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const menuOpen = ref(false);
</script>

<style scoped>
/* Navbar-styling */
.navbar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 20px;
  background-color: #0b3b59;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  z-index: 1000;
}

.logo {
  display: block;
  width: 105px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.nav-links a:hover {
  background: rgba(179, 179, 179, 0.2);
}

/* Hamburger-knapp */
.hamburger {
  display: none;
  font-size: 28px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Mobil-anpassning */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: rgba(11, 59, 89, 0.95);
    flex-direction: column;
    width: 150px;
    text-align: center;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    padding: 5px 0 0 0;
  }

  .nav-links {
    gap: 0px;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-links li {
    display: block;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .nav-links li:last-child {
    border-bottom: none;
  }
  .nav-links a {
    display: block;
    padding: 20px;
  }
}
</style>
