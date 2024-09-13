<script setup lang="ts">
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import Items from "./components/Items.vue";
import Features from "./components/Features.vue";
import Blogs from "./components/Blogs.vue";
</script>

<template>
<div class="container flex flex-col gap-3">
  <Nav />
  <Hero />
  <Items />
  <Features />
  <Blogs />
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
