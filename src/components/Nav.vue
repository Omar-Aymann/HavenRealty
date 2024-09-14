<script lang="ts" setup>
import Btn from "./micro-components/Btn.vue";
</script>

<template>
    <nav class="flex flex-col lg:flex-row items-center justify-between lg:px-20 py-5 w-full gap-10  text-dark">
        <div class="logo">
            <h3 class="text-2xl font-bold">HavenRealty</h3>
        </div>
        <ul class="flex flex-col lg:flex-row items-center justify-center gap-6 font-bold text-sm">
            <li class="hover:text-dark transition-colors">Home</li>
            <li class="hover:text-dark transition-colors">Management</li>
            <li class="hover:text-dark transition-colors">Pricing</li>
            <li class="hover:text-dark transition-colors">About Us</li>
        </ul>
        <Btn class=" bg-dark text-sm  font-bold hover:bg-transparent hover:text-dark border border-dark transition-colors">Get Started</Btn>
    </nav>
</template>
<style scoped>
li {
    cursor: pointer;
    position: relative;
}

li::after {
    width: 0;
    height: 3px;
    background-color: #0f1330;
    transition: 0.3s;
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    display: block;
}

li:hover::after {
    width: 100%;
}



</style>