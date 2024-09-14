<script lang="ts" setup>
import Blog from "./micro-components/Blog.vue";
</script>

<template>
    <div class="features flex flex-col gap-8 pt-20 lg:px-64">
        <div class="features-upper flex justify-between items-end">
            <h3 class="text-4xl text-dark font-bold">All Blogs</h3>
            <p class="text-mainGreen font-bold">View All</p>
        </div>
        <div class="blogs flex gap-5">
        <Blog img="/blog1.jpg" title="The Benefits of Working" desc="A Real Estate Team Provides Expert Support Guidance, Saving You Time And Money In The Buying Process."  />
        <Blog img="/blog2.jpg" title="How a Real Estate Team" desc="With Their Market Knowledge Skills, A Real Estate Team Can Secure The Best Deal Possible." />
        <Blog img="/blog3.jpg" title="The Advantages of Having" desc="A Dedicated Real Estate Team Can Offer And Personalized Attention, Provide Valuable Insights." price="$ 1,000,000" />
</div>
</div>

</template>            