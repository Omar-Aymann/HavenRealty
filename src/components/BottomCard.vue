<script lang="ts" setup>
import Btn from "./micro-components/Btn.vue";
</script>

<template>
    <div class=" flex items-center justify-center   w-full lg:px-64 px-8 my-20 text-white">
        <div class="content flex flex-col items-center justify-center gap-6 bg-dark rounded-2xl px-10 py-20 w-full">
            <div class="text flex flex-col items-center justify-center text-center lg:text-left gap-1">
                <p class="text-lg">Ready To Unite and Achive Your Dream?</p>
                <h1 class="text-4xl font-bold">Find Your Dream Home Today</h1>
            </div>
            <Btn class="bg-mainGreen text-sm font-bold hover:bg-white hover:text-mainGreen transition-colors border border-mainGreen">Get Started</Btn>
        </div>
    </div>
</template>