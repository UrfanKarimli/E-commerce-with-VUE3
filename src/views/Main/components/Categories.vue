<template>
    <section class=" container flex flex-col mt-32 gap-10">
        <div class="todays flex gap-4 ">
            <span class=" w-5 h-10 rounded bg-[#DB4444]"></span>
            <p class=" text-[#DB4444] text-base font-bold font-poppins">Categories</p>
        </div>
        <div class="flash flex justify-between">
            <div class="flex gap-20 items-end">
                <h3 class=" text-[36px] font-bold font-inter">
                    Browse By Category
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
        <div class=" flex justify-between">
            <div class="box h-[145px] w-[170px] rounded border border-black/30 flex items-center justify-center">
                <div class="flex gap-3 flex-col items-center">
                    <BsPhone class="h-9 w-12 text-black" />
                    <span class="font-poppins font-normal text-base">Phones</span>
                </div>
            </div>
            <div class="box h-[145px] w-[170px] rounded border border-black/30 flex items-center justify-center">
                <div class="flex gap-3 flex-col items-center">
                    <HiComputerDesktop class="h-9 w-12 text-black" />
                    <span class="font-poppins font-normal text-base">Computers</span>
                </div>
            </div>
            <div class="box h-[145px] w-[170px] rounded border border-black/30 flex items-center justify-center">
                <div class="flex gap-3 flex-col items-center">
                    <IoOutlineWatch class="h-9 w-12 text-black" />
                    <span class="font-poppins font-normal text-base">SmartWatch</span>
                </div>
            </div>
            <div class="box h-[145px] w-[170px] rounded border border-black/30 flex items-center justify-center">
                <div class="flex gap-3 flex-col items-center">
                    <CaCamera class="h-9 w-12 text-black" />
                    <span class="font-poppins font-normal text-base">Camera</span>
                </div>
            </div>
            <div class="box h-[145px] w-[170px] rounded border border-black/30 flex items-center justify-center">
                <div class="flex gap-3 flex-col items-center">
                    <FlHeadphones class="h-9 w-12 text-black" />
                    <span class="font-poppins font-normal text-base">HeadPhones</span>
                </div>
            </div>
            <div class="box h-[145px] w-[170px] rounded border border-black/30 flex items-center justify-center">
                <div class="flex gap-3 flex-col items-center">
                    <IcGamepad class="h-9 w-12 text-black" />
                    <span class="font-poppins font-normal text-base">Gaming</span>
                </div>
            </div>
        </div>
        <hr class="my-10">
    </section>
</template>

<script setup>
import { AnOutlinedArrowRight, AnOutlinedArrowLeft, BsPhone, HiComputerDesktop, IoOutlineWatch, CaCamera, FlHeadphones, IcGamepad } from "@kalimahapps/vue-icons";

</script>
