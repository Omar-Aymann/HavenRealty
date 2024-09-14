<script lang="ts" setup>
import gsap from "gsap";
import {ref, onMounted} from 'vue';3
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const blog = ref(null);
// Register ScrollTrigger plugin
const props = defineProps({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    }
})
onMounted(() => {
    gsap.from(blog.value, {
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
                <div ref="blog" class=" lg:w-1/3 overflow-hidden flex items-center justify-center border-2 border-slate-200 rounded-2xl p-3 flex-col gap-3">
                <div class=" aspect-video w-full overflow-hidden rounded-xl">
                    <img :src="props.img" class="w-full h-full  object-cover  scale-150" alt="">
                </div>
                <div class="content flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                        <h3 class="text-lg font-bold">{{ props.title }}</h3>
                        <p>{{ props.desc }}</p>

                    </div>

                </div>
            </div>

</template>