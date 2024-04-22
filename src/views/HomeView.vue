<script setup lang="ts">
</script>

<template>
    <main class='body'>
        <h1>Hello!</h1>
        <h3 class="intro">My name is Chris and I am a backend-leaning full stack engineer from Michigan with ~6 years of experience in industries
            ranging from office furniture to CRMs to Authenticity on the Internet.
        </h3>

        <h1>Some quirks:</h1>
        <ul>
            <li>
                <h3>I'm an eclectic trifecta of super nerd, outdoorsy adventurer, and obsessive competitor.</h3>
            </li>
            <li>
                <h3>I collect hobbies like crows collect shiny objects. You never know what I'm going to be interested
                    in next.</h3>
            </li>
            <li>
                <h3>My family consists of my beautiful and incredible wife, Audrey, who is a pediactric dentist, a very
                    needy kitty named Maya, and an incredibly energetic doggo named Annie.</h3>
            </li>
            <li>
                <h3>I studied Computer Science at the University of Michigan, which is also where Audrey and I met. Go Blue!</h3>
            </li>
        </ul>
    </main>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.body {
    margin: 32px 32px 0 32px;
}

@media (min-width: 1024px) {
    .body {
        margin-top: 64px;
    }
}

.intro {
    padding: 0 0 32px 0;
}

h3 {
  font-size: 1.2rem;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 0 0 16px 0;
    text-indent: 0;
}
</style>
