<script setup>
    import {ref} from 'vue';
    import Personal from '../components/projects/Personal.vue';
    import OpenSource from '../components/projects/OpenSource.vue';
    const projects = ref('opensource');
</script>

<template>
    <div class='wrapper'>
        <div class='navbar'>
            <h2 class='green nav-item' :class="{selected: projects === 'opensource'}"
                @click="() => projects = 'opensource'">
                Open Source</h2>
            <h2 class='green nav-item' :class="{selected: projects === 'personal'}"
                @click="() => projects = 'personal'">
                Personal
            </h2>
        </div>

        <OpenSource v-if="projects === 'opensource'" />
        <Personal v-else-if="projects === 'personal'" />
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    gap: 24px;
}

.nav-item {
    cursor: pointer;
}

.nav-item:hover {
    background-color: hsla(160, 100%, 37%, .2);
}

.selected {
    text-decoration: underline;
}

select {
    outline: none;
    background-color: transparent;
    border: none;
    font-size: x-large;
}

.wrapper {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    margin-top: 64px;
}


@media (min-width: 1024px) {
    .wrapper {
        margin-top: 32px;
    }
}

.types {
    margin: 32px 0;
    display: flex;
    justify-content: space-between;
}
</style>
