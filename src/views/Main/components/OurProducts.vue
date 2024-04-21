<template>
    <section class="container flex flex-col mt-32 gap-10">
        <div class="todays flex gap-4 items-center">
            <span class=" w-5 h-10 rounded bg-gradient-to-r from-sky-400 to-blue-600 "></span>
            <p class=" text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 text-xl font-bold font-poppins">Our Products</p>
        </div>
        <div class="flash flex justify-between">
            <div class="flex gap-20 items-end">
                <h3 class=" text-[36px] font-bold font-inter">
                    Explore Our Products
                </h3>
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
            <ImgCard v-for="item in datas" :key="item.id" :data="item" />
        </div>
        <div class="flex items-center justify-center mt-5">
            <button class="  py-4 px-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded text-base font-medium font-poppins text-[#fafafa]"> View All
                Products</button>
        </div>
    </section>
</template>

<script setup>
import { AnOutlinedArrowRight, AnOutlinedArrowLeft, AkHeart, AkEyeOpen, AnFilledStar } from "@kalimahapps/vue-icons";
import axios from "axios";
import { onMounted, ref } from "vue";
import ImgCard from "./ImgCard.vue";

let datas = ref([])

onMounted(async () => {
    let res = await axios.get('https://fakestoreapi.com/products')
    if (res?.data) {
        datas.value = res.data.slice(8, 16)
    }
})

</script>
