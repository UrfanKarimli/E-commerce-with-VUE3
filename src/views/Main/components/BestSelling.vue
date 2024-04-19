<template>
    <section class=" container flex flex-col mt-32 gap-10 mb-10">
        <div class="todays flex gap-4 ">
            <span class=" w-5 h-10 rounded bg-[#DB4444]"></span>
            <p class=" text-[#DB4444] text-base font-bold font-poppins">This Month</p>
        </div>
        <div class="flash flex justify-between">
            <div class="flex gap-20 items-end">
                <h3 class=" text-[36px] font-bold font-inter">
                    Best Selling Products
                </h3>
            </div>
            <button class=" py-4 px-12 bg-[#DB4444] rounded text-base font-medium font-poppins text-[#fafafa]">
                View All
            </button>
        </div>
        <div class="flex flex-wrap justify-between">
            <ImgCard v-for="item in datas.slice(4, 8)" :key="item.id" :data="item" />
        </div>
    </section>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import ImgCard from "./ImgCard.vue";

let datas = ref([])

onMounted(async () => {
    let res = await axios.get('https://fakestoreapi.com/products')
    if (res?.data) {
        datas.value = res.data
    }
})
</script>
