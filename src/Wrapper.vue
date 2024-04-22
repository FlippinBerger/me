<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const location = useRoute();
</script>

<template>
    <div class='header'>
        <!-- <div class='socials'> -->
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
        <!-- </div> -->

        <RouterLink v-if="location.path === '/portfolio'" class='link' to='/'>About Me</RouterLink>
        <RouterLink v-else class='link' to='/portfolio'>Portfolio</RouterLink>

    </div>
    <RouterView />


</template>

<style scoped>
/* TODO add something else for small screens */
.header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    z-index: 10;
    top: 8px;
    right: 24px;
    background-color: hsla(160, 100%, 37%, .7);
    border-radius: 8px;
    padding: 4px;
}
@media (min-width: 1024px) {
    .header {
        width: 20%;
    }
}


.socials {
    display: flex;
    justify-content: center;
}

a {
    color: white;
}

img {
    height: 32px;
    width: 32px;
    margin-top: 6px;
    color: white;
}

</style>
