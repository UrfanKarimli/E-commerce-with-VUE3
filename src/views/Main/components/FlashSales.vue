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
        <div class="cards flex gap-[30px]">
            <div class="card flex flex-col  w-[270px] h-[350px] gap-4">
                <div class="img relative bg-[#f5f5f5] w-full h-[250px] flex items-center justify-center">
                    <img class=" w-[190px] h-[180px]" src="@/assets/img/Frame611.svg" alt="">
                    <span class=" absolute top-3 left-3 w-[55px] h-[26px] bg-[#DB4444] text-center text-[#fafafa]">-40%
                    </span>
                    <button
                        class=" absolute top-3 right-3 h-9 w-9 bg-white rounded-full flex items-center justify-center ">
                        <AkHeart class="text-base" />
                    </button>
                    <button
                        class=" absolute top-14 right-3 h-9 w-9 bg-white rounded-full flex items-center justify-center ">
                        <AkEyeOpen class="text-xl" />
                    </button>
                </div>
                <h4 class="text-base font-medium font-poppins">HAVIT HV-G92 Gamepad</h4>
                <div class="flex items-center gap-3">
                    <span class="font-poppins text-base font-medium text-[#DB4444]">$120</span>
                    <del class="font-poppins text-base font-medium text-black/50">$160</del>
                </div>
                <div class="flex gap-2">
                    <div class="flex items-center">
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                    </div>
                    <span class="font-poppins font-bold text-sm text-black/50">(88)</span>
                </div>
            </div>
            <div class="card flex flex-col  w-[270px] h-[350px] gap-4">
                <div class="img relative bg-[#f5f5f5] w-full h-[250px] flex items-center justify-center">
                    <img class=" w-[190px] h-[180px]" src="@/assets/img/Frame611.svg" alt="">
                    <span class=" absolute top-3 left-3 w-[55px] h-[26px] bg-[#DB4444] text-center text-[#fafafa]">-40%
                    </span>
                    <button
                        class=" absolute top-3 right-3 h-9 w-9 bg-white rounded-full flex items-center justify-center ">
                        <AkHeart class="text-base" />
                    </button>
                    <button
                        class=" absolute top-14 right-3 h-9 w-9 bg-white rounded-full flex items-center justify-center ">
                        <AkEyeOpen class="text-xl" />
                    </button>
                </div>
                <h4 class="text-base font-medium font-poppins">HAVIT HV-G92 Gamepad</h4>
                <div class="flex items-center gap-3">
                    <span class="font-poppins text-base font-medium text-[#DB4444]">$120</span>
                    <del class="font-poppins text-base font-medium text-black/50">$160</del>
                </div>
                <div class="flex gap-2">
                    <div class="flex items-center">
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                    </div>
                    <span class="font-poppins font-bold text-sm text-black/50">(88)</span>
                </div>
            </div>
            <div class="card flex flex-col  w-[270px] h-[350px] gap-4">
                <div class="img relative bg-[#f5f5f5] w-full h-[250px] flex items-center justify-center">
                    <img class=" w-[190px] h-[180px]" src="@/assets/img/Frame611.svg" alt="">
                    <span class=" absolute top-3 left-3 w-[55px] h-[26px] bg-[#DB4444] text-center text-[#fafafa]">-40%
                    </span>
                    <button
                        class=" absolute top-3 right-3 h-9 w-9 bg-white rounded-full flex items-center justify-center ">
                        <AkHeart class="text-base" />
                    </button>
                    <button
                        class=" absolute top-14 right-3 h-9 w-9 bg-white rounded-full flex items-center justify-center ">
                        <AkEyeOpen class="text-xl" />
                    </button>
                </div>
                <h4 class="text-base font-medium font-poppins">HAVIT HV-G92 Gamepad</h4>
                <div class="flex items-center gap-3">
                    <span class="font-poppins text-base font-medium text-[#DB4444]">$120</span>
                    <del class="font-poppins text-base font-medium text-black/50">$160</del>
                </div>
                <div class="flex gap-2">
                    <div class="flex items-center">
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                    </div>
                    <span class="font-poppins font-bold text-sm text-black/50">(88)</span>
                </div>
            </div>
            <div class="card flex flex-col  w-[270px] h-[350px] gap-4">
                <div class="img relative bg-[#f5f5f5] w-full h-[250px] flex items-center justify-center">
                    <img class=" w-[190px] h-[180px]" src="@/assets/img/Frame611.svg" alt="">
                    <span class=" absolute top-3 left-3 w-[55px] h-[26px] bg-[#DB4444] text-center text-[#fafafa]">-40%
                    </span>
                    <button
                        class=" absolute top-3 right-3 h-9 w-9 bg-white rounded-full flex items-center justify-center ">
                        <AkHeart class="text-base" />
                    </button>
                    <button
                        class=" absolute top-14 right-3 h-9 w-9 bg-white rounded-full flex items-center justify-center ">
                        <AkEyeOpen class="text-xl" />
                    </button>
                </div>
                <h4 class="text-base font-medium font-poppins">HAVIT HV-G92 Gamepad</h4>
                <div class="flex items-center gap-3">
                    <span class="font-poppins text-base font-medium text-[#DB4444]">$120</span>
                    <del class="font-poppins text-base font-medium text-black/50">$160</del>
                </div>
                <div class="flex gap-2">
                    <div class="flex items-center">
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                        <AnFilledStar class=" h-5 w-5 text-[#FFAD33]" />
                    </div>
                    <span class="font-poppins font-bold text-sm text-black/50">(88)</span>
                </div>
            </div>

        </div>
        <div class="flex items-center justify-center mt-5">
            <button class=" py-4 px-12 bg-[#DB4444] rounded text-base font-medium font-poppins text-[#fafafa]"> View All
                Products</button>
        </div>
        <hr class="my-10">
    </section>
</template>

<script setup>
import { AnOutlinedArrowRight, AnOutlinedArrowLeft, AkHeart, AkEyeOpen, AnFilledStar } from "@kalimahapps/vue-icons";

</script>
