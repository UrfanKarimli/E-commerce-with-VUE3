<template>
    <section class=" container flex flex-col mt-32 gap-10">
        <div class="todays flex gap-4 items-center">
            <span class=" w-5 h-10 rounded bg-gradient-to-r from-sky-400 to-blue-600"></span>
            <p class="  text-xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Today’s</p>
        </div>
        <div class="flash flex justify-between">
            <div class="flex gap-20 items-end">
                <h3 class=" text-[36px] font-bold font-inter">
                    Flash Sales
                </h3>

                <div class="flex w-[302px] justify-between items-center">
                    <div class="flex flex-col">
                        <p class="text-xs font-medium font-poppins">Days</p>
                        <span class="text-[32px] font-semibold font-inter">{{ time.days }}</span>
                    </div>
                    <span class="text-3xl text-[#DB4444]">:</span>
                    <div class="flex flex-col">
                        <p class="text-xs font-medium font-poppins">Hours</p>
                        <span class="text-[32px] font-semibold font-inter">{{ time.hours }}</span>
                    </div>
                    <span class="text-3xl text-[#DB4444]">:</span>
                    <div class="flex flex-col">
                        <p class="text-xs font-medium font-poppins">Minutes</p>
                        <span class="text-[32px] font-semibold font-inter">{{ time.minutes }}</span>
                    </div>
                    <span class="text-3xl text-[#DB4444]">:</span>
                    <div class="flex flex-col">
                        <p class="text-xs font-medium font-poppins">Seconds</p>
                        <span class="text-[32px] font-semibold font-inter">{{ time.seconds }}</span>
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
            <ImgCard v-for="item in datas" :key="item.id" :data="item" />
        </div>
        <div class="flex items-center justify-center mt-5">
            <button class=" py-4 px-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded text-base font-medium font-poppins text-[#fafafa]"> View All
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



const FetchData = async () => {
    let res = await axios.get('https://fakestoreapi.com/products')
    if (res?.data) {
        datas.value = res.data.slice(0, 4)
    }
}

onMounted(() => {
    FetchData()
    updateCountdown();
    setInterval(updateCountdown, 1000);
}
)

let time = ref({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
})



const updateCountdown = () => {
    const targetDate = new Date('2024-05-20T00:00:00');
    const now = new Date();
    const difference = targetDate - now;
    time.value.days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
    time.value.hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    time.value.minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    time.value.seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0');
}

</script>
