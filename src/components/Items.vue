<script lang="ts" setup>
import Product from "./micro-components/Product.vue";
</script>
<template>
    <div class="item flex flex-col gap-8 pt-20 lg:px-64 px-8">
        <div class="items-upper flex justify-between items-end">
            <h3 class="text-4xl text-dark font-bold">Top-Notch <br> properties no sale</h3>
            <p class="text-mainGreen font-bold">View All</p>
        </div>
        <div class="products flex flex-col lg:flex-row gap-5">
            <Product img="/tower1.webp" title="Vista Verde Estates" desc="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet" price="$ 1,000,000" />
            <Product img="/tower2.webp" title="Haven Heights" desc="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet" price="$ 900,000" />
            <Product img="/tower3.webp" title="La Jolla Pointe" desc="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet" price="$ 5,500,000" />
        </div>
        </div>
</template>