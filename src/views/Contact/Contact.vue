<template>
    <div class=" container flex justify-between py-28">
        <div class="p-10 flex flex-col gap-8 w-[340px] shadow-md">
            <div class="flex flex-col gap-6">
                <div class=" flex items-center gap-4 text-base font-medium font-poppins">
                    <div class=" bg-gradient-to-r from-sky-400 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
                        <IoOutlineCall class=" h-5 w-5  text-white " />
                    </div>
                    Call To Us
                </div>
                <div class="flex flex-col gap-4">
                    <p class="font-poppins text-sm font-normal">We are available 24/7, 7 days a week.</p>
                    <p class="font-poppins text-sm font-normal">Phone:+9940507564177</p>
                </div>
            </div>
            <hr class="w-full bg-black/50">
            <div class="flex flex-col gap-6">
                <div class=" flex items-center gap-4 text-base font-medium font-poppins">
                    <div class=" bg-gradient-to-r from-sky-400 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
                        <ByMail class=" h-5 w-5  text-white " />
                    </div>
                    Write To US
                </div>
                <div class="flex flex-col gap-4">
                    <p class="font-poppins text-sm font-normal">Fill out our form and we will contact you within 24 hours.</p>
                    <p class="font-poppins text-sm font-normal">E-mail: urfankarim@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="w-[68%] p-10 shadow-md  flex flex-col ">

        </div>
    </div>
</template>

<script setup>
import { IoOutlineCall, ByMail } from "@kalimahapps/vue-icons";


</script>
