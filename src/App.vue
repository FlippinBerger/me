<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
</script>

<template>
    <header>
        <div class="img-wrapper">
            <img src="./assets/coffee.jpeg"></img>
        </div>

        <div class="wrapper">
            <Home />
            <nav>
                <RouterLink to="/about">Home</RouterLink>
                <RouterLink to="/technical">Technical Skills</RouterLink>
                <RouterLink to="/hobbies">Hobbies</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
    position: relative;
    margin-top: 64px;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

.img-wrapper {
    display: flex;
    justify-content: center;
}

img {
    margin: 32px auto;
    width: 240px;
    height: 320px;
    border-radius: 25%;
}

nav {
    width: 100%;
    font-size: 24px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        flex-direction: column;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
        /* margin-top: -16px; */
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
