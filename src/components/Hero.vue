<script lang="ts" setup>
import Btn from "./micro-components/Btn.vue";
</script>

<template>
    <div class=" p-4 px-5 h-[120vh] w-full relative">
        <div class="rounded-3xl hero h-full flex gap-3 items-center p-16 relative overflow-hidden">
            <div class="content flex flex-col gap-10">
                <div class="text flex flex-col gap-4">
                    <h1 class="text-white font-semibold text-[5.5rem] leading-[0.9]">Find Your <br> Dream Home</h1>
                    <p class="text-white w-[30rem] ">
                        Welcome to the Premier Destination for finding your dream home. Explore a vast selection of properties. 
                    </p>
                </div>
                <div class="lowerpart">
                    <Btn class=" bg-dark text-sm  font-bold">Discover Now</Btn>
                    <Btn>Learn More</Btn>
                </div>
            </div>
            <img src="/back.png" class="absolute bottom-0 scale-[2] right-[15rem]" alt="">

        </div>
        <div class="card absolute -bottom-10 left-2/4 -translate-x-2/4 w-[90%] bg-dark text-white p-5 py-8 rounded-3xl flex items-center justify-between flex-col ">
            <div class="flex items-center justify-center flex-col gap-5">
                <h3 class="text-2xl font-bold">Trusted by 10,000+ clients</h3>
                <div class="flex items-center justify-center gap-14 w-full">
                    <img class="w-[60px] h-[60px]" src="/logo1.png" alt="">
                    <img class="w-[60px] h-[60px]" src="/logo2.png" alt="">
                    <img class="w-[60px] h-[60px]" src="/logo3.png" alt="">
                    <img class="w-[60px] h-[60px]" src="/logo1.png" alt="">
                    <img class="w-[60px] h-[60px]" src="/logo2.png" alt="">
                    <img class="w-[60px] h-[60px]" src="/logo3.png" alt="">
                    <img class="w-[60px] h-[60px]" src="/logo1.png" alt="">
                </div>
            </div>
            </div>
    </div>
</template>