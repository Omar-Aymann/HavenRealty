<script lang="ts" setup>
import Btn from "./micro-components/Btn.vue";
</script>

<template>
    <nav class="flex flex-col lg:flex-row items-center justify-between lg:px-20 py-5 w-full gap-10  text-dark">
        <div class="logo">
            <h3 class="text-2xl font-bold">HavenRealty</h3>
        </div>
        <ul class="flex flex-col lg:flex-row items-center justify-center gap-6 font-bold text-sm">
            <li>Home</li>
            <li>Management</li>
            <li>Pricing</li>
            <li>About Us</li>
        </ul>
        <Btn class=" bg-dark text-sm  font-bold hover:bg-transparent hover:text-dark border border-dark transition-colors">Get Started</Btn>
    </nav>
</template>