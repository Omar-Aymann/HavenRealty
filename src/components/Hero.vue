<script lang="ts" setup>
import Btn from "./micro-components/Btn.vue";
import { gsap } from "gsap";
import {onMounted} from "vue";
// Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);


onMounted(() => {

// Add animations to the timeline
// Create a GSAP timeline with ScrollTrigger
const herotl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
    }
});

// Add animations to the timeline
herotl.from(".hero", {
    opacity: 0,
    scale: 1.3,
    duration: 1,
    padding: 0,
    ease: "power1.out" // Optional, for easing
})
.to(".hero", {
    scale: 1,
    duration: 1,
    ease: "power1.out" // Optional, for easing
}, "-=0.5") // Overlap the scale down with the `.hero-title` animation
herotl.from(".building", {
    opacity: 0,
    duration: 1,
    x: 100,
    ease: "power1.out" // Optional, for easing
}, "<");
// Add `.hero-title` animation to the timeline
herotl.from(".hero-title", {
    x: -100, // Starts from the left
    opacity: 0,
    duration: 1,
    ease: "power1.out", // Optional, for easing
}, "<"); // Start `.hero-title` animation when the previous animation starts

// Add `.hero-subtitle` animation to the timeline with a delay of 0.1 seconds after `.hero-title` starts
herotl.from(".hero-subtitle", {
    x: -100, // Starts from the left
    opacity: 0,
    duration: 0.5,
    ease: "power1.out", // Optional, for easing
}, "<=0.01"); // Start `.hero-subtitle` animation 0.1 seconds after `.hero-title` starts
herotl.from('.card', {
    opacity: 0,
    duration: 1,
    y: 100,
    ease: "power1.out",

})


})
</script>

<template>
    <div class=" flex flex-col gap-5 lg:p-4 lg:px-5  w-full relative ">
        <div class="rounded-3xl overflow-x-hidden hero h-[120vh] grow flex gap-3 items-center p-4 lg:p-16 relative overflow-hidden">
            <div class="content flex flex-col gap-10 z-10">
                <div class="hero-text flex flex-col gap-4 lg:items-start lg:justify-start sm:text-center lg:text-left sm:items-center sm:justify-center">
                    <h1 class="hero-title text-white font-semibold text-2xl lg:text-[5.5rem] leading-[0.9]">Find Your <br> Dream Home</h1>
                    <p class="hero-subtitle text-white lg:w-[30rem] ">
                        Welcome to the Premier Destination for finding your dream home. Explore a vast selection of properties. 
                    </p>
                </div>
                <div class="lowerpart">
                    <Btn class=" bg-dark text-sm  font-bold hover:bg-transparent hover:text-white border border-dark transition-colors">Discover Now</Btn>
                    <Btn>Learn More</Btn>
                </div>
            </div>
            <img src="/back.png" class="building absolute bottom-0 scale-[2] right-[15rem] z-0" alt="">

        </div>
        <div class="card grow-0 lg:absolute -bottom-10 left-2/4 lg:-translate-x-2/4 w-full lg:w-[90%] bg-dark text-white p-5 py-16 rounded-3xl flex items-center justify-between flex-col">
            <div class="flex items-center justify-center flex-col gap-5">
                <h3 class="text-2xl font-bold">Trusted by 10,000+ clients</h3>
                <div class="flex flex-wrap items-center justify-center gap-14 w-full">
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