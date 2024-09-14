<script lang="ts" setup>
import Btn from "./Btn.vue";
import {onMounted} from "vue";
import gsap from "gsap";
const props = defineProps({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})
onMounted(() => {
    gsap.from('.product', {
        opacity: 0,
        scale: 1.3,
        duration: 1,
        padding: 0,
        ease: "power1.out",// Optional, for easing
        scrollTrigger: {
            trigger: ".product"
        }
    })
    .to('.product', {
        scale: 1,
        duration: 1,
        ease: "power1.out" // Optional, for easing
    }, "-=0.5")
})
</script>
<template> 
                <div class="product lg:w-1/3 w-full overflow-hidden flex items-center justify-center border-2 border-slate-200 rounded-2xl p-3 flex-col gap-3">
                <div class="aspect-square w-full overflow-hidden rounded-xl">
                    <img :src="props.img" class="w-full h-full object-top object-cover  scale-150" alt="">
                </div>
                <div class="content flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                        <h3 class="text-lg font-bold">{{ props.title }}</h3>
                        <p>{{ props.desc }}</p>

                    </div>
                    <div class="flex justify-between items-center">
                        <p class=" text-mainGreen font-bold">{{ props.price }}</p>
                        <Btn class="bg-mainGreen text-sm font-bold hover:bg-white hover:text-mainGreen transition-colors border border-mainGreen">Buy Now</Btn>
                    </div>
                </div>
            </div>

</template>