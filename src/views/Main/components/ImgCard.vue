<template>
    <div class="card flex flex-col  w-[270px] h-[350px] gap-4 box-border my-6">
        <div class="img relative bg-[#f5f5f5] w-full h-[250px] flex items-center justify-center">
            <img class=" w-[190px] h-[180px] object-cover object-center" :src="data?.image" alt="">
            <span class=" absolute top-3 left-3 w-[55px] h-[26px] bg-gradient-to-r from-sky-400 to-blue-600 text-center text-[#fafafa]">-25%
            </span>
            <button class=" absolute top-3 right-3 h-9 w-9 bg-white rounded-full flex items-center justify-center ">
                <AkHeart class="text-base" />
            </button>
            <button class=" absolute top-14 right-3 h-9 w-9 bg-white rounded-full flex items-center justify-center ">
                <AkEyeOpen class="text-xl" />
            </button>
        </div>
        <h4 class="text-base font-medium font-poppins truncate pr-4"> {{ data?.title }} </h4>
        <div class="flex items-center gap-3">
            <span class="font-poppins text-base font-medium text-[#DB4444]">{{ data?.price }}</span>
            <del class="font-poppins text-base font-medium text-black/50">{{ (data?.price +
                data?.price / 4).toFixed(2) }}</del>
        </div>
        <div class="flex gap-2">
            <div class="flex items-center">
                <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
            </div>
            <span class="font-poppins font-bold text-sm text-black/50">({{ data?.rating.rate }})</span>
        </div>
    </div>
</template>

<script setup>
import {  AkHeart, AkEyeOpen, AnFilledStar } from "@kalimahapps/vue-icons";
defineProps({
    data: Object,
})

</script>
