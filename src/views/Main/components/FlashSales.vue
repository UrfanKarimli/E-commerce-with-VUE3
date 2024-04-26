<template>
    <section class=" container flex flex-col mt-32 gap-10">
        <div class="todays flex gap-4 items-center">
            <span class=" w-5 h-10 rounded bg-gradient-to-r from-sky-400 to-blue-600"></span>
            <p
                class="  text-xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Today’s</p>
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
        </div>
        <div class="w-full relative">
            <Carousel class="w-full" :value="datas" :numVisible="3" :numScroll="1"
                :responsiveOptions="responsiveOptions" circular :autoplayInterval="93000">
                <template #item="slotProps">
                    <ImgCard :data="slotProps.data" :key="slotProps.data" />
                </template>
            </Carousel>
        </div>
        <div class="flex items-center justify-center mt-5">
            <RouterLink to="/all-lists"
                class=" py-4 px-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded text-base font-medium font-poppins text-[#fafafa]">
                View All
                Products
            </RouterLink>
        </div>
        <hr class="my-10">
    </section>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import ImgCard from "./ImgCard.vue";
import Carousel from "primevue/carousel";
import { useRouter } from "vue-router";
let datas = ref([])

const router = useRouter()





const FetchData = async () => {
    let res = await axios.get('https://fakestoreapi.com/products')
    if (res?.data) {
        datas.value = res.data.slice(0, 9)
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
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);


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

<style lang="css">
li button {
    display: none;
}

div[role="group"] {
    width: 25% !important;
    margin: 5px !important;
}

button[data-pc-section="nextbutton"] {
    position: absolute;
    right: 0;
    top: -60px;
    background-color: #f5f5f5;
    height: 45px;
    width: 45px;

}

button[data-pc-section="previousbutton"] {
    position: absolute;
    right: 60px;
    top: -60px;
    background-color: #f5f5f5;
    height: 45px;
    width: 45px;

}

button[data-pc-section="nextbutton"]:hover {
    background-color: #d1cfcf;
}

button[data-pc-section="previousbutton"]:hover {
    background-color: #d1cfcf;
}
</style>