<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const location = useRoute();
</script>

<template>
    <RouterLink v-if="location.path === '/portfolio'" class='link' to='/'>About Me</RouterLink>
    <RouterLink v-else class='link' to='/portfolio'>Portfolio</RouterLink>
    <RouterView />
</template>

<style>
/* TODO add something else for small screens */
.link {
    position: absolute;
    z-index: 10;
    top: 16px;
    right: 24px;
}
</style>
