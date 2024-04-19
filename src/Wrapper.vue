<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const location = useRoute();
</script>

<template>
    <RouterLink v-if="location.path === '/portfolio'" class='link' to='/'>About Me</RouterLink>
    <RouterLink v-else class='link' to='/portfolio'>Portfolio</RouterLink>
    <RouterView />
    <div class='footer'>
        <a href='mailto:flippinberger@gmail.com'>
            <img src='./assets/email.svg' />
        </a>
        <a target='_blank' href='https://github.com/flippinberger'>
            <img src='./assets/github.svg' />
        </a>
        <a target='_blank'
            href='https://www.instagram.com/critters_with_chris?igsh=MWxlaHFmZDltaHlsdA%3D%3D&utm_source=qr'>
            <img src='./assets/insta.svg' />
        </a>
    </div>
</template>

<style scoped>
/* TODO add something else for small screens */
.link {
    position: absolute;
    z-index: 10;
    top: 16px;
    right: 24px;
}

img {
    height: 32px;
    width: 32px;
}

.footer {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    z-index: 10;
    bottom: 16px;
    left: 24px;
    background-color: green;
    width: 10%;
    border-radius: 8px;
  background-color: hsla(160, 100%, 37%, .7);
}
</style>
