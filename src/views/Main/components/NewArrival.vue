<template>
    <section class="container flex flex-col mt-32 mb-10 gap-10">
        <div class="todays flex gap-4 ">
            <span class=" w-5 h-10 rounded bg-[#DB4444]"></span>
            <p class=" text-[#DB4444] text-base font-bold font-poppins">Our Products</p>
        </div>
        <div class="flash flex justify-between">
            <div class="flex gap-20 items-end">
                <h3 class=" text-[36px] font-bold font-inter">
                    Explore Our Products
                </h3>
            </div>

        </div>
        <div class="w-full h-[600px] flex justify-between">
            <div class="left w-[48%] relative bg-black flex items-end justify-center overflow-hidden">
                <img src="@/assets/img/playstation.svg" alt="">
                <div class="flex flex-col gap-4 z-20 absolute left-8 bottom-8 ">
                    <div class=" text-[#fafafa] font-inter font-semibold text-2xl ">
                        PlayStation 5
                    </div>
                    <p class="text-[#fafafa] font-poppins font-normal text-sm w-[250px]">Black and White version of the
                        PS5 coming
                        out on sale.</p>
                    <a href="#" class="text-[#fff] underline text-base"> Shop Now</a>
                </div>
            </div>
            <div class="right w-[48%] flex flex-col justify-between">
                <div class="up w-full h-[47%] bg-[#0D0D0D] overflow-hidden relative flex items-end justify-end ">
                    <img src="@/assets/img/woman.svg" alt="">
                    <div class="flex flex-col gap-4 z-20 absolute left-6 bottom-6 ">
                        <div class=" text-[#fafafa] font-inter font-semibold text-2xl ">
                            Women’s Collections
                        </div>
                        <p class="text-[#fafafa] font-poppins font-normal text-sm w-[250px]">Featured woman collections
                            that give you another vibe.</p>
                        <a href="#" class="text-[#fff] underline text-base"> Shop Now</a>
                    </div>
                </div>
                <div class="down w-full h-[47%] flex justify-between">
                    <div
                        class="downleft w-[47%] h-full bg-black overflow-hidden relative flex items-center justify-center radial-gradient">
                        <div class="w-[210px] h-[222px] flex items-center justify-center">
                            <img class="object-cover object-center" src="@/assets/img/echo.svg" alt="">
                        </div>
                        <div class="flex flex-col gap-2 z-20 absolute left-6 bottom-6 ">
                            <div class=" text-[#fafafa] font-inter font-semibold text-2xl ">
                                Speakers
                            </div>
                            <p class="text-[#fafafa] font-poppins font-normal text-sm w-[250px]">Amazon wireless
                                speakers</p>
                            <a href="#" class="text-[#fff] underline text-base"> Shop Now</a>
                        </div>
                    </div>
                    <div
                        class="downright w-[47%] h-full bg-black overflow-hidden relative flex items-center justify-center radial-gradient">
                        <div class="w-[210px] h-[222px] flex items-center justify-center  ">
                            <img class="object-cover object-center" src="@/assets/img/parfume.svg" alt="">
                        </div>
                        <div class="flex flex-col gap-2 z-20 absolute left-6 bottom-6 ">
                            <div class=" text-[#fafafa] font-inter font-semibold text-2xl ">
                                Perfume
                            </div>
                            <p class="text-[#fafafa] font-poppins font-normal text-sm w-[250px]">GUCCI INTENSE OUD EDP
                            </p>
                            <a href="#" class="text-[#fff] underline text-base"> Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center my-20">
            <div class="flex justify-around  w-full">
                <div class="flex flex-col items-center ">
                    <div
                        class=" h-20 w-20 bg-[#2F2E30] bg-opacity-30 rounded-full flex items-center justify-center mb-6">
                        <div class=" h-[58px] w-[58px] bg-black rounded-full flex items-center justify-center">
                            <LaShippingFastSolid class="text-white h-10 w-10" />
                        </div>
                    </div>
                    <h4 class=" font-poppins font-semibold text-[20px] mb-2">
                        FREE AND FAST DELIVERY
                    </h4>
                    <p class=" font-poppins font-normal text-sm">Free delivery for all orders over $140</p>
                </div>
                <div class="flex flex-col items-center ">
                    <div
                        class=" h-20 w-20 bg-[#2F2E30] bg-opacity-30 rounded-full flex items-center justify-center mb-6">
                        <div class=" h-[58px] w-[58px] bg-black rounded-full flex items-center justify-center">
                            <ThHeadphoneAlt class="text-white h-10 w-10" />
                        </div>
                    </div>
                    <h4 class=" font-poppins font-semibold text-[20px] mb-2">
                        24/7 CUSTOMER SERVICE
                    </h4>
                    <p class=" font-poppins font-normal text-sm">
                        Friendly 24/7 customer support
                    </p>
                </div>
                <div class="flex flex-col items-center ">
                    <div
                        class=" h-20 w-20 bg-[#2F2E30] bg-opacity-30 rounded-full flex items-center justify-center mb-6">
                        <div class=" h-[58px] w-[58px] bg-black rounded-full flex items-center justify-center">
                            <BsShieldCheck class="text-white h-10 w-10" />
                        </div>
                    </div>
                    <h4 class=" font-poppins font-semibold text-[20px] mb-2">
                        MONEY BACK GUARANTEE
                    </h4>
                    <p class=" font-poppins font-normal text-sm">We reurn money within 30 days</p>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { AnOutlinedArrowRight, AnOutlinedArrowLeft, AkHeart, AkEyeOpen, AnFilledStar, LaShippingFastSolid, ThHeadphoneAlt, BsShieldCheck } from "@kalimahapps/vue-icons";

</script>
