<template>
    <section class=" container flex flex-col mt-32 gap-10">
        <div class="todays flex gap-4 ">
            <span class=" w-5 h-10 rounded bg-[#DB4444]"></span>
            <p class=" text-[#DB4444] text-base font-bold font-poppins">Today’s</p>
        </div>
        <div class="flash flex justify-between">
            <div class="flex gap-20 items-end">
                <h3 class=" text-[36px] font-bold font-inter">
                    Flash Sales
                </h3>
                <div class="flex w-[302px] justify-between items-center">
                    <div class="flex flex-col">
                        <p class=" text-xs font-medium font-poppins">Days</p>
                        <span class="text-[32px] font-semibold font-inter">03</span>
                    </div>
                    <span class="text-3xl text-[#DB4444]">:</span>
                    <div class="flex flex-col">
                        <p class=" text-xs font-medium font-poppins">Hours</p>
                        <span class="text-[32px] font-semibold font-inter">23</span>
                    </div>
                    <span class="text-3xl text-[#DB4444]">:</span>
                    <div class="flex flex-col">
                        <p class=" text-xs font-medium font-poppins">Minutes</p>
                        <span class="text-[32px] font-semibold font-inter">19</span>
                    </div>
                    <span class="text-3xl text-[#DB4444]">:</span>
                    <div class="flex flex-col">
                        <p class=" text-xs font-medium font-poppins">Seconds</p>
                        <span class="text-[32px] font-semibold font-inter">56</span>
                    </div>
                </div>
            </div>
            <div class="btns flex gap-2 items-end">
                <button class=" h-12 w-12 bg-[#f5f5f5] rounded-full flex items-center justify-center">
                    <AnOutlinedArrowLeft class="h-6 w-6" />
                </button>
                <button class=" h-12 w-12 bg-[#f5f5f5] rounded-full flex items-center justify-center">
                    <AnOutlinedArrowRight class="h-6 w-6" />
                </button>
            </div>
        </div>
        <div class="flex flex-wrap justify-between">
            <ImgCard v-for="item in datas.slice(0, 4)" :key="item.id" :data="item" />
        </div>
        <div class="flex items-center justify-center mt-5">
            <button class=" py-4 px-12 bg-[#DB4444] rounded text-base font-medium font-poppins text-[#fafafa]"> View All
                Products</button>
        </div>
        <hr class="my-10">
    </section>
</template>

<script setup>
import { AnOutlinedArrowRight, AnOutlinedArrowLeft, } from "@kalimahapps/vue-icons";
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
