<script lang="ts" setup>
import Btn from "./Btn.vue";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const product = ref(null);
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  // Apply the GSAP animation with ScrollTrigger
  gsap.from(product.value, {
    opacity: 0,
    scale: 1.3,
    duration: 1,
    ease: "power1.out", // Optional easing
    scrollTrigger: {
      trigger: ".product", // Trigger animation when the product is in view
      // markers: true,     // Uncomment for debugging to see the start/end markers
      start: "top 80%",    // Start when the top of the product is 80% from the viewport top
      end: "bottom top",   // End when the bottom of the product reaches the top of the viewport
      once: true,    
    },
  });
});
</script>

<template>
  <div ref="product" class="product lg:w-1/3 w-full overflow-hidden flex items-center justify-center border-2 border-slate-200 rounded-2xl p-3 flex-col gap-3">
    <div class="aspect-square w-full overflow-hidden rounded-xl">
      <img :src="props.img" class="w-full h-full object-top object-cover scale-150" alt="" />
    </div>
    <div class="content flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <h3 class="text-lg font-bold">{{ props.title }}</h3>
        <p>{{ props.desc }}</p>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-mainGreen font-bold">{{ props.price }}</p>
        <Btn class="bg-mainGreen text-sm font-bold hover:bg-white hover:text-mainGreen transition-colors border border-mainGreen">Buy Now</Btn>
      </div>
    </div>
  </div>
</template>

