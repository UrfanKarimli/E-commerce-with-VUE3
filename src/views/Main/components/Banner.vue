<template>
    <section class="container flex justify-between ">
        <div class="left pt-10 mr-4">
            <ul class=" w-[217px] flex flex-col gap-4">
                <li class=" font-poppins font-normal text-base flex justify-between">Woman’s Fashion
                    <BxSolidChevronRight />
                </li>
                <li class=" font-poppins font-normal text-base flex justify-between">Men’s Fashion
                    <BxSolidChevronRight />
                </li>
                <li class=" font-poppins font-normal text-base">Electronics</li>
                <li class=" font-poppins font-normal text-base">Home & Lifestyle</li>
                <li class=" font-poppins font-normal text-base">Medicine</li>
                <li class=" font-poppins font-normal text-base">Sports & Outdoor</li>
                <li class=" font-poppins font-normal text-base">Baby’s & Toys</li>
                <li class=" font-poppins font-normal text-base">Groceries & Pets</li>
                <li class=" font-poppins font-normal text-base">Health & Beauty</li>
            </ul>
        </div>
        <span class="w-[0.5px] bg-black/30 h-[384px]"></span>
        <div class="right mt-10 w-[75%] bg-black flex justify-between">
            <div class=" pt-[58px] pl-16 pb-[45px] ">
                <div class="img flex items-center gap-6">
                    <img src="@/assets/img/1200px-Apple_gray_logo 1.svg" alt="">
                    <p class="text-[#fafafa]">iPhone 14 Series</p>
                </div>
                <div class=" text-[#fafafa] font-inter font-bold text-[48px] w-[294px] my-2">
                    Up to 10% off Voucher
                </div>
                <a href="#" class="text-[#fafafa] underline text-base"> Shop Now</a>
            </div>
            <div class=" overflow-hidden mt-4">
                <img class=" object-cover object-center" src="@/assets/img/iphone.svg" alt="">
            </div>
        </div>
    </section>
</template>

<script setup>
import { BxSolidChevronRight   } from "@kalimahapps/vue-icons";
</script>
