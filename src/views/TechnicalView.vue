<script setup lang="ts">
import { ref } from 'vue'

const view = ref("lang");

function setView(s: string) {
    view.value = s;
}
</script>

<template>
    <div class="technical">
        <div class="header">
            <nav>
                <button :class="[view === 'lang' ? 'selected' : 'green']" @click="setView('lang')">Programming Languages</button>
                <button :class="[ view === 'tool' ? 'selected' : 'green' ]" @click="setView('tool')">Tools</button>
                <button :class="[ view ==='interest' ? 'selected' : 'green' ]" @click="setView('interest')">Interests</button>
            </nav>
        </div>

        <template v-if="view === 'lang'">
            <h1>Rust</h1>
            <h3>In my mind, Rust is the future of game development and any "intense"
                computing. It is also a joy to work with once you get used to the borrow
                checker. I find that the compile errors help me write code much better than
                any other language I've spent any amount of time with.</h3>
            <h1>Go</h1>
            <h3>Go is still probably my most productive language. It is easy to read,
                easy to write, easy to get shit done. Enough said. I have about 3 years of
                production experience in Go.</h3>
            <h1>Typescript</h1>
            <h3>Typescript is mostly a language of necessity for me. But when I need to
                get something done on the front end, this is a no brainer. The type safety
                on top of the mature web frameworks like React and Vue is too nice to pass
                up when you find yourself on that side of the stack. I have about 4 years
                experience with Typescript (mostly React/Vue, but some Node as well)</h3>
        </template>

        <template v-if="view === 'tool'">
            <h1>Text Editor</h1>
            <h3>Neovim all the way. I can't live without it anymore. You can find my
                lua dotfiles for my config
                <a target="_blank" href="https://github.com/FlippinBerger/nvim/">here</a>.
            </h3>
            <h1>Terminal</h1>
            <h3>I was using iTerm2 for a long time because it had solid extra color support
                over the default Mac terminal app. I'm now giving Warp a go and absolutely
                loving it so far. I think I found a new boost to productivity :)</h3>
            <h1>Version Control</h1>
            <h3>I have git skills for anyone here wondering. I've used bitbucket a little bit
                but I'm a Github guy for sure.</h3>
        </template>

        <template v-if="view === 'interest'">
            <h1>Areas of Interest</h1>
            <h3>The three biggest areas I'm interested in are Game Dev, Developer Tooling
                and Experience, and SaaS not necessarily in that order.</h3>
            <h3>That being said, I'd love to learn more way more about Web3 and the
                different players there. I'm absolutely fascinated by
                <a href="https://en.wikipedia.org/wiki/Decentralized_autonomous_organization" target="_blank">DAOs</a>
                and the implications they could have for teams of the future.
            </h3>
        </template>
    </div>
</template>

<style scoped>
button {
    border: 0;
    font-size: 22px;
    background-color: transparent;
}

h3 {
    padding: 0 0 16px 0;
}

.header {
    padding: 16px 0;
}

.selected {
    color: white;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav button {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  cursor: pointer;
}

nav button:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
    .technical {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: center;
    }
}
</style>
