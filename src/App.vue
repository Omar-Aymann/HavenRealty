<script setup lang="ts">
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import Item from "./components/Items.vue";
</script>

<template>
<div class="container flex flex-col gap-3">
  <Nav />
  <Hero />
  <Item />
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
