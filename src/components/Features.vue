<script lang="ts" setup>
import Btn from "./micro-components/Btn.vue";
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    // Create a GSAP timeline for the first feature section
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".first-feature",
            start: "top 80%",    // Start when the top of the product is 80% from the viewport top
      end: "bottom top",   // End when the bottom of the product reaches the top of the viewport
      once: true,    
            // markers: true    // Optional: Uncomment to see markers for debugging
        }
    });

    // Add animations to the timeline for the first feature
    tl.from(".imgCon img", {
        opacity: 0,
        x: -100,  // Move the image from the left
        duration: 1,
        ease: "power2.out" // Smooth easing effect
    })
    .from(".text h1", {
        opacity: 0,
        y: 50,   // Move the heading from the bottom
        duration: 1,
        ease: "power2.out"
    }, "-=0.5") // Overlap the image and heading animations
    .from(".text p", {
        opacity: 0,
        y: 30,   // Move paragraphs from the bottom
        duration: 0.8,
        stagger: 0.3, // Animate paragraphs one after another with a small delay
        ease: "power2.out"
    }, "-=0.3") // Start while the heading is still animating
  

    // Second feature section animation with ScrollTrigger
    gsap.from(".second-feature .text h1", {
        scrollTrigger: {
            trigger: ".second-feature",
            // markers: true  // Uncomment for debugging
            start: "top 80%",    // Start when the top of the product is 80% from the viewport top
      end: "bottom top",   // End when the bottom of the product reaches the top of the viewport
      once: true,    
        },
        opacity: 0,
        y: 50,  // Move heading from bottom
        duration: 1,
        ease: "power2.out",
    });

    gsap.from(".second-feature .feature", {
        scrollTrigger: {
            trigger: ".second-feature",
            // markers: true  // Uncomment for debugging
            start: "top 80%",    // Start when the top of the product is 80% from the viewport top
      end: "bottom top",   // End when the bottom of the product reaches the top of the viewport
      once: true,    
        },
        opacity: 0,
        y: 30,  // Move features from bottom
        duration: 1,
        stagger: 0.3,  // Delay between feature cards
        ease: "power2.out"
    });
});
</script>

<template>
    <div class="features flex flex-col">
      <div class="first-feature flex flex-col lg:flex-row gap-8 pt-20 lg:px-64 px-8 justify-center items-center ">
        <div class="imgCon lg:w-1/2">
          <img src="/screen.png" class="w-full h-full object-cover" alt="">
        </div>
        <div class="content flex flex-col items-center lg:items-start lg:w-1/2 gap-3">
            <div class="text flex flex-col gap-7 font-medium text-center lg:text-left lg:pr-20">
  <h1 class="text-4xl text-dark font-bold leading-[1.4]">
    Decades of Expertise in Finding Your Home
  </h1>
  <p>
    A Real Estate Team can help you find, negotiate, sell/purchase a property.
  </p>
  <p>
    A Real Estate Team Can Also Assist With Property Inspections, Provide Recommendations For Home Improvement, And Recommend Trusted Professionals For Services Such As Financing And Appraisal.
  </p>
</div>

          <Btn class="bg-mainGreen text-sm font-bold hover:bg-white hover:text-mainGreen transition-colors border border-mainGreen w-fit">Learn More</Btn>
        </div>
      </div>
  
      <!-- Second Feature Section -->
      <div class="second-feature flex flex-col lg:flex-row gap-8 pt-20 lg:px-64 px-8 justify-center items-start">
        <div class=" flex flex-col lg:w-1/2 gap-7 font-medium pr-20">
          <h1 class="text-5xl text-dark font-bold leading-[1.4]">Securing Your <br>Property, Our, <br> Priority</h1>
        <img src="/arrow.svg" class=" fill-mainGreen text-mainGreen w-8" alt="">
        </div>
        <div class="lg:w-1/2 grid lg:grid-cols-2 grid-cols-1 gap-4">
          <!-- First Feature (No changes) -->
          <div class="feature p-3 gap-2 flex flex-col lg:w-1/2 justify-start border-[0.5px] border-mainGreen rounded-xl">
            <div class="bg-mainGreen w-10 h-10 rounded-full flex items-center justify-center">
              <img src="/trust.svg" class="w-5 h-5" alt="">
            </div>
            <div class="content">
              <h1 class="text-xl text-mainGreen font-semibold">Trusted Platform</h1>
              <p class="font-medium">Your safe Haven for Real Estate Transactions.</p>
            </div>
          </div>
  
          <!-- Updated Second Feature -->
          <div class="feature p-3 gap-2 flex flex-col w-1/2 justify-start border-[0.5px] border-mainGreen rounded-xl">
            <div class="bg-mainGreen w-10 h-10 rounded-full flex items-center justify-center">
              <img src="/layers.svg" style="filter: brightness(0) invert(1);" class="w-5 h-5" alt="">
            </div>
            <div class="content">
              <h1 class="text-xl text-mainGreen font-semibold">Support</h1>
              <p class="font-medium">Our team is available 24/7 to assist with any queries.</p>
            </div>
          </div>
  
          <!-- Updated Third Feature -->
          <div class="feature p-3 gap-2 flex flex-col w-1/2 justify-start border-[0.5px] border-mainGreen rounded-xl">
            <div class="bg-mainGreen w-10 h-10 rounded-full flex items-center justify-center">
              <img src="/link.svg" class="w-5 h-5" alt="">
            </div>
            <div class="content">
              <h1 class="text-xl text-mainGreen font-semibold">Affordable Options</h1>
              <p class="font-medium">We provide cost-effective real estate solutions.</p>
            </div>
          </div>
  
          <!-- Updated Fourth Feature -->
          <div class="feature p-3 gap-2 flex flex-col w-1/2 justify-start border-[0.5px] border-mainGreen rounded-xl">
            <div class="bg-mainGreen w-10 h-10 rounded-full flex items-center justify-center">
              <img src="/question.svg" class="w-5 h-5" alt="">
            </div>
            <div class="content">
              <h1 class="text-xl text-mainGreen font-semibold">Varied Choices</h1>
              <p class="font-medium">Explore a wide range of properties to meet your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .feature {
    width: 100%;
  }
  </style>
  